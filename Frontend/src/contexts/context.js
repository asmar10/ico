import { ethers } from "ethers";
import { useState, useEffect, createContext } from "react";
import { icoAddress, icoAbi, usdAbi, usdtAddress, busdAddress, rpc } from "../utils/constants";
import { useWeb3Modal } from "@web3modal/react";

export const IcoContext = createContext();

const getIcoContract = (signer = false) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(icoAddress, icoAbi, signer);
        return contract;
    }
    contract = new ethers.Contract(icoAddress, icoAbi, provider);
    // console.log(contract, "hehehhe")
    return contract;
};

const getUsdtContract = (signer = false) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(usdtAddress, usdAbi, signer);
        return contract;
    }
    contract = new ethers.Contract(usdtAddress, usdAbi, provider);
    // console.log(contract, "hehehhe")
    return contract;
};

const getBusdContract = (signer = false) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract;
    if (signer) {
        const signer = provider.getSigner();
        contract = new ethers.Contract(busdAddress, usdAbi, signer);
        return contract;
    }
    contract = new ethers.Contract(busdAddress, usdAbi, provider);
    // console.log(contract, "hehehhe")
    return contract;
};
// getIcoContract()
// console.log(getIcoContract());

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

    const connectWallet = async () => {
        try {
            if (ethereum) {
                setLoading(true)
                const chainId = await ethereum.request({
                    method: "eth_chainId",
                });
                if (chainId !== "0xaa36a7") { //this is  sepolia. 0x38 is bnb mainnet
                    const chainParams = {
                        chainId: "0xaa36a7", // 
                    };
                    await ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [chainParams],
                    });
                }
                const temp = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                setLoading(false)

                setCurrentAccount(temp[0]);
            }
            else {
                throw new Error("Please Install Metamask")
            }
        } catch (err) {

            // console.log(err.message)
            setLoading(false)
            // alert(err)
        }
    }

    // const connectWallet = async () => {
    //     try {

    //         if (ethereum) {
    //             setLoading(true)
    //             const chainId = await ethereum.request({
    //                 method: "eth_chainId",
    //             });

    //             if (chainId !== "0xaa36a7") { // Check if chainId is not 31337 (0x7a69)
    //                 const chainParams = {
    //                     chainId: "0xaa36a7", // ChainId 31337
    //                 };

    //                 try {
    //                     await ethereum.request({
    //                         method: "wallet_switchEthereumChain",
    //                         params: [chainParams],
    //                     });
    //                 } catch (switchError) {
    //                     // Check if the error is due to the user rejecting the chain change
    //                     if (switchError.code === 4902) {
    //                         throw new Error(4902);
    //                     }
    //                 }
    //             }

    //             const temp = await ethereum.request({
    //                 method: "eth_requestAccounts",
    //             });
    //             setLoading(false)
    //             setCurrentAccount(temp[0]);

    //         }
    //     } catch (err) {
    //         setLoading(false)
    //         if (err == 4902) {
    //             alert("User Rejected Network Change")
    //         }
    //         else {
    //             console.log(err)
    //         }
    //     }
    // }

    const isWalletConnected = async () => {
        try {
            if (ethereum) {
                const chainId = await ethereum.request({
                    method: "eth_chainId",
                });

                const temp = await ethereum.request({
                    method: "eth_accounts",
                });
                if (chainId !== "0xaa36a7") {
                    alert("Please Connect to Sepolia testnet");
                }
                if (temp.length == 0) {
                    setCurrentAccount(null);
                } else {

                    setCurrentAccount(temp[0]);
                }
            }
            else {
                alert("Please Install MetaMask")
            }
        } catch (err) {
            // alert(err)
            console.log(err)
        }
    }

    useEffect(() => {
        isWalletConnected();
    }, [])


    ethereum?.on("accountsChanged", (account) => {
        setCurrentAccount(account[0]);
    });



    ethereum?.on("chainChanged", () => {
        // forceSwitchChain()
        window.location.reload();
    });

    const buyWithBusd = async (option, dollarAmount, referralCode) => {
        try {
            setLoading(true);

            let dollarAmountInWei = ethers.utils.parseEther(`${dollarAmount}`)
            // console.log(parseInt(dollarAmountInWei), option, referralCode, "details")
            const app = await getBusdContract(true).approve(icoAddress, dollarAmountInWei)
            await app.wait()

            const tx = await getIcoContract(true).buyWithBusd(option, dollarAmountInWei, referralCode);
            await tx.wait()
            setLoading(false);

        }
        catch (err) {

            setLoading(false)
            throw new Error(err)
            // return err
        }
    }

    const buyWithUsdt = async (option, dollarAmount, referralCode) => {
        try {
            setLoading(true)
            let dollarAmountInWei = ethers.utils.parseEther(`${dollarAmount}`)
            // console.log(parseInt(dollarAmountInWei), option, referralCode, "details")
            const app = await getUsdtContract(true).approve(icoAddress, dollarAmountInWei)
            await app.wait()
            const tx = await getIcoContract(true).buyWithUsdt(option, dollarAmountInWei, referralCode);
            await tx.wait()
            setLoading(false)

        }
        catch (err) {
            setLoading(false)

            throw new Error(err)
            // return err
        }
    }

    const getCurrentStage = async () => {
        try {
            const currentTime = Math.floor(Date.now() / 1000)

            const t1 = await getIcoContract().startTime();
            const t2 = await getIcoContract().presaleStartTime();
            const t3 = await getIcoContract().publicSaleStartTime();

            const temp1 = parseInt(t1)
            const temp2 = parseInt(t2)
            const temp3 = parseInt(t3)


            const sp1 = await getIcoContract().seedSalePrice();
            const sm1 = await getIcoContract().seedsaleMinted();
            const sa1 = await getIcoContract().seedSaleAllocation();

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

            setSeedSaleStartTime(parseInt(temp1))
            setPreSaleStartTime(parseInt(temp2))
            setPublicSaleStartTime(parseInt(temp3))
            // console.log(currentTime, temp1, temp2, seedMinted, seedAllocation, "Cc")
            if (temp1 == 0) {
                setCurrentStageMinted(0)
                setCurrentStageAllocation(0)
                setStagePrice(0)
            }
            else if (((currentTime >= temp1 && currentTime < temp2) && seedMinted < seedAllocation)) {
                setCurrentStage(1)
                setCurrentStageMinted(seedMinted)
                setCurrentStageAllocation(seedAllocation)
                setStagePrice(ethers.utils.formatEther(`${seedPrice}`))
            }
            else if (((currentTime >= temp2 && currentTime < temp3) && PresaleMinted < PresaleAllocation) || (seedMinted == seedAllocation && PresaleMinted < PresaleAllocation && currentTime < temp3)) {
                setCurrentStage(2)
                setCurrentStageMinted(PresaleMinted)
                setCurrentStageAllocation(PresaleAllocation)
                setStagePrice(ethers.utils.formatEther(`${PresalePrice}`))
            }
            else if (((currentTime >= temp3 && currentTime < temp3 + 1296000) && PublicsaleMinted < PublicsaleAllocation) || (PresaleMinted == PresaleAllocation && PublicsaleMinted < PublicsaleAllocation && currentTime < temp3 + 1296000)) {
                setCurrentStage(3)
                setCurrentStageMinted(PublicsaleMinted)
                setCurrentStageAllocation(PublicsaleAllocation)
                setStagePrice(ethers.utils.formatEther(`${PublicsalePrice}`))
            }
            else {
                // console.log("All Stages Finished")
            }
        } catch (err) {
            console.log(err)
            // throw new Error(err)
        }
    }


    useEffect(() => {
        getCurrentStage()
    }, [])


    return (
        <IcoContext.Provider value={{ setCurrentAccount, isLoading, difference, seedSaleStartTime, preSaleStartTime, publicSaleStartTime, currentStageAllocation, currentStageMinted, stagePrice, currentStage, connectWallet, currentAccount, isWalletConnected, buyWithBusd, buyWithUsdt }}>
            {children}
        </IcoContext.Provider>
    )
}
