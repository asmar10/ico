import { useState, useEffect, createContext } from "react";
import { icoAddress, icoAbi, usdAbi, rpc, whitelistAddress, whitelistAbi, referralAbi, referralAddress } from "../utils/constants";
import { useWeb3Modal } from "@web3modal/react";
import { ToastContainer, toast } from "react-toastify";
import { useSDK } from "@metamask/sdk-react";


const ethers = require("ethers");
export const IcoContext = createContext();

const getIcoContract = (signer = false) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.JsonRpcProvider(rpc)
    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(icoAddress, icoAbi, signer);
        return contract;
    }
    contract = new ethers.Contract(icoAddress, icoAbi, provider);
    return contract;
};

const getWhitelistContract = (signer = false) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.JsonRpcProvider(rpc)

    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(whitelistAddress, whitelistAbi, signer);
        return contract;
    }

    contract = new ethers.Contract(whitelistAddress, whitelistAbi, provider);
    // console.log("here")
    return contract;
};

const getReferralContract = (signer = false) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.JsonRpcProvider(rpc)

    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(referralAddress, referralAbi, signer);
        return contract;
    }

    contract = new ethers.Contract(referralAddress, referralAbi, provider);
    // console.log("here")
    return contract;
};

const getTokenContract = async (signer = false, buyingWith) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.JsonRpcProvider(rpc)
    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(buyingWith, usdAbi, signer);
        return contract;
    }
    contract = new ethers.Contract(buyingWith, usdAbi, provider);
    return contract;

};


const { ethereum } = window;



export const IcoProvider = ({ children }) => {

    const [isLoading, setLoading] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [currentStage, setCurrentStage] = useState()
    const [stagePrice, setStagePrice] = useState()
    const [currentStageAllocation, setCurrentStageAllocation] = useState()
    const [currentStageMinted, setCurrentStageMinted] = useState()
    const [seedSaleStartTime, setSeedSaleStartTime] = useState()
    const [preSaleStartTime, setPreSaleStartTime] = useState()
    const [publicSaleStartTime, setPublicSaleStartTime] = useState()
    const [difference, setDifference] = useState(0)
    const [isWhitelisted, setIsWhitelisted] = useState(false)
    const [referralCode, setReferralCode] = useState()
    const [isStarted, setIsStarted] = useState(false);


    const connectWallet = async () => {
        try {

            if (ethereum) {
                setLoading(true);
                const temp = await ethereum?.request({
                    method: "eth_requestAccounts",
                });

                const chainId = await ethereum?.request({
                    method: "eth_chainId",
                });

                if (chainId !== "0x38") {//Production CHANGE 0x38 BNB
                    const chainParams = {
                        chainId: "0x38",//Production CHANGE 0x38 BNB
                    };

                    await ethereum?.request({
                        method: "wallet_switchEthereumChain",
                        params: [chainParams],
                    });
                }
                setLoading(false);
                setCurrentAccount(temp[0]);
            } else {
                // Redirect user to MetaMask app on App Store or Google Play Store
                toast.error("Please Install Metamask", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })


            }

        } catch (err) {
            // Handle errors here
            setLoading(false);
            // console.error(err);
        }
    };

    const isWalletConnected = async () => {
        try {
            if (ethereum && ethereum) {

                const temp = await ethereum?.request({
                    method: "eth_accounts",
                });

                if (temp.length !== 0) {
                    const chainId = await ethereum?.request({
                        method: "eth_chainId",
                    });

                    if (chainId !== "0x38") {//Production CHANGE 0x38 BNB
                        const chainParams = {
                            chainId: "0x38",//Production CHANGE 0x38 BNB
                        };

                        await ethereum?.request({
                            method: "wallet_switchEthereumChain",
                            params: [chainParams],
                        });
                    }
                    setCurrentAccount(temp[0]);
                }
            }
            else {

                toast.error("Connect Wallet", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

                // alert("Please Install MetaMask")
            }
        } catch (err) {

            console.log("No ethereum object.");

        }
    }

    const approveToken = async (buyingWith) => {
        try {
            // setLoading(true);
            let contract = await getTokenContract(true, buyingWith)
            let value =
                '115792089237316195423570985008687907853269984665640564039457584007913129639935';
            let app = await contract.approve(
                icoAddress,
                value
            );
            // console.log("22222222")
            await app.wait()
            // setLoading(false);
            return true;
        }
        catch (err) {
            console.log(err)
            setLoading(false);
            throw new Error(err)
        }
    };

    const checkIsApproved = async (from, buyingWith) => {
        try {
            // console.log(from, buyingWith)
            const contract = await getTokenContract(false, buyingWith)
            // console.log(contract, "heh")
            const allowance = await contract.allowance(
                from,
                icoAddress
            );

            if (parseInt(allowance._hex) > 0) {
                // console.log("true")
                return true;
            } else {
                const res = await approveToken(buyingWith)

                if (res) {
                    return true
                }
            }
            return false;

        } catch (err) {
            setLoading(false)
            console.log(err)
            throw new Error(err)
        }
    };

    const buyTokens = async (buyingWith, dollarAmount, referralCode) => {
        try {
            setLoading(true);

            let dollarAmountInWei = ethers.utils.parseEther(`${dollarAmount}`)
            // console.log("1")
            let isApproved = await checkIsApproved(currentAccount, buyingWith)
            // console.log("2")

            if (isApproved) {
                // console.log("3")
                // console.log(parseInt(dollarAmountInWei))
                // console.log(referralCode)
                const tx = await getIcoContract(true).buyTokens(buyingWith, dollarAmountInWei, referralCode);
                await tx.wait()
                // console.log("4")

                await getCurrentStage()
                setLoading(false);
                // console.log("4")

            }
            setLoading(false);


        }
        catch (err) {
            setLoading(false)
            console.log(err)
            throw new Error(err)
            // return err
        }
    }

    const checkIfWhitelisted = async () => {
        try {
            const check = await getWhitelistContract().whitelistedAddresses(currentAccount)
            // console.log(check, "check")
            setIsWhitelisted(check)
        } catch (err) {
            console.log(err)
        }
    }

    const generateReferralCode = async () => {
        try {
            setLoading(true)
            const check = await getReferralContract(true).generateReferralCode()

            await check.wait()
            // setReferralCode(check)
            await checkIfReferralExists()
            setLoading(false)

        } catch (err) {
            setLoading(false)

            console.log(err)
        }
    }

    const checkIfReferralExists = async () => {
        try {
            // console.log(currentAccount && currentAccount)
            const check = await getReferralContract().referralCode(currentAccount)
            // console.log(check)
            setReferralCode(check)
        } catch (err) {
            console.log(err)
        }
    }

    const getCurrentStage = async () => {

        try {

            const currentTime = Math.floor(Date.now() / 1000);

            const t1 = await getIcoContract().startTime();
            // console.log("here")

            const t2 = await getIcoContract().presaleStartTime();
            const t3 = await getIcoContract().publicSaleStartTime();

            const temp1 = parseInt(t1)
            const temp2 = parseInt(t2)
            const temp3 = parseInt(t3)

            // console.log(currentTime, temp2)


            const sp1 = await getIcoContract().seedSalePrice();
            const sm1 = await getIcoContract().seedsaleMinted();
            const sa1 = await getIcoContract().seedSaleAllocation();

            // console.log(sp1)

            const seedPrice = parseInt(sp1)
            const seedMinted = parseInt(sm1)
            const seedAllocation = parseInt(sa1)


            const Ps1 = await getIcoContract().preSalePrice();
            const Pm1 = await getIcoContract().presaleMinted();
            const Pa1 = await getIcoContract().preSaleAllocation();

            const PresalePrice = parseInt(Ps1)
            const PresaleMinted = parseInt(Pm1)
            const PresaleAllocation = parseInt(Pa1)

            const Pup1 = await getIcoContract().publicSalePrice();
            const Pum1 = await getIcoContract().publicSaleMinted();
            const Pua1 = await getIcoContract().publicSaleAllocation();

            const PublicsalePrice = parseInt(Pup1)
            const PublicsaleMinted = parseInt(Pum1)
            const PublicsaleAllocation = parseInt(Pua1)

            // console.log(currentTime >= temp3)

            // console.log(temp3)
            setSeedSaleStartTime(parseInt(temp1))
            setPreSaleStartTime(parseInt(temp2))
            setPublicSaleStartTime(parseInt(temp3))
            // console.log(currentTime, temp1, temp2, seedMinted, seedAllocation, "Cc")
            if (temp1 == 0) {
                // setCurrentStage(0)
                setIsStarted(false)

                setCurrentStageMinted(0)
                setCurrentStageAllocation(0)
                setStagePrice(0)
            }
            else if (((currentTime >= temp1 && currentTime < temp2) && seedMinted < seedAllocation)) {
                setIsStarted(true)

                setCurrentStage(1)
                setCurrentStageMinted(seedMinted)
                setCurrentStageAllocation(seedAllocation)
                setStagePrice(seedPrice)

            }
            else if (((currentTime >= temp2 && currentTime < temp3) && PresaleMinted < PresaleAllocation) || (seedMinted == seedAllocation && PresaleMinted < PresaleAllocation && currentTime < temp3)) {
                setCurrentStage(2)
                setIsStarted(true)

                setCurrentStageMinted(PresaleMinted)
                setCurrentStageAllocation(PresaleAllocation)
                setStagePrice(PresalePrice)
            }
            else if (((currentTime >= temp3 && currentTime < temp3 + 1296000) && PublicsaleMinted < PublicsaleAllocation) || (PresaleMinted == PresaleAllocation && PublicsaleMinted < PublicsaleAllocation && currentTime < temp3 + 1296000)) {
                setCurrentStage(3)
                setIsStarted(true)

                setCurrentStageMinted(PublicsaleMinted)
                setCurrentStageAllocation(PublicsaleAllocation)
                setStagePrice(PublicsalePrice)
            }
            else if (currentTime > temp3 + 1296000) {
                // console.log("All Stages Finished")
                setCurrentStage(4)
                setIsStarted(false)
            }
        } catch (err) {
            console.log(err)
            // throw new Error(err)
        }
    }

    useEffect(() => {

        (async () => {
            await getCurrentStage();
            await isWalletConnected();

            if (currentAccount) {
                checkIfWhitelisted()
                checkIfReferralExists()
            }
        })();


    }, [currentAccount]);

    ethereum?.on("accountsChanged", (account) => {
        setCurrentAccount(account[0]);
    });

    ethereum?.on("chainChanged", () => {
        // forceSwitchChain()
        window.location.reload();
    });


    return (
        <IcoContext.Provider value={{ getCurrentStage, isStarted, setCurrentAccount, generateReferralCode, isWhitelisted, referralCode, isLoading, difference, seedSaleStartTime, preSaleStartTime, publicSaleStartTime, currentStageAllocation, currentStageMinted, stagePrice, currentStage, connectWallet, currentAccount, isWalletConnected, buyTokens }}>
            {children}
        </IcoContext.Provider>
    )
}
