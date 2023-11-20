import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Tabs from "./Tabs";
import ToggleButton from "./ToggleButton";
import { AiOutlineClose } from "react-icons/ai";
import { formatEther, parseEther } from "ethers/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import { Contract, ethers, providers } from "ethers";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";

import "react-toastify/dist/ReactToastify.css";
import { icoAbi, icoAddress } from "../../utils/constants";
import { useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";

const tabs = [
  { label: "USDT", value: "usdt", icon: "/images/icons/usdt.png" },
  { label: "BUSD", value: "busd", icon: "/images/icons/busd.png" },
];

const BuyNow = (props) => {
  const { buyWithBusd, buyWithUsdt, stagePrice, isLoading } =
    useContext(IcoContext);

  const [show, setShow] = useState(false);
  const [hasReferral, setHasReferral] = useState(false);
  // const [hasReferral2, setHasReferral2] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [referralCode, setReferralCode] = useState("");
  const [dollarAmount, setDollarAmount] = useState("");
  const [receivingTokens, setReceivingTokens] = useState(0);

  const handleClose = () => {
    setShow(false);
    setReferralCode("");
    setHasReferral(false);
    setDollarAmount("");
    setActiveTab(tabs[0]);
    setReceivingTokens(0);
  };
  const handleShow = () => setShow(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleBuy = async (activeTab, hasReferral) => {
    try {
      if (activeTab.value == "usdt") {
        // console.log(hasReferral);
        if (hasReferral) {
          if (referralCode == "" || referralCode.length != 66) {
            toast.error("Provide a Valid Referral Code", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            // console.log("buying with referraall");

            if (dollarAmount <= 0 || dollarAmount == "") {
              toast.error(`Enter Valid ${activeTab.value} Amount`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              // console.log("buying with usdt with referral code");
              await buyWithUsdt(1, dollarAmount, referralCode);

              toast.success("Success", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              handleClose();
            }
          }
        } else {
          if (dollarAmount <= 0 || dollarAmount == "") {
            toast.error(`Enter Valid ${activeTab.value} Amount`, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            // console.log("buying with usdt withoutt referral code");

            await buyWithUsdt(
              0,
              dollarAmount,
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            );

            toast.success("Success", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            handleClose();
          }
          // console.log("no referral");
        }
      } else {
        if (hasReferral) {
          if (referralCode == "" || referralCode.length != 66) {
            toast.error("Provide a Referral Code", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            // console.log("buying with referraall busd");
            if (dollarAmount <= 0) {
              toast.error(`Enter Valid ${activeTab.value} Amount`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              // console.log("buying with busd with referral code");

              await buyWithBusd(1, dollarAmount, referralCode);
              toast.success("Success", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              handleClose();
            }
          }
        } else {
          if (dollarAmount <= 0) {
            toast.error(`Enter Valid ${activeTab.value} Amount`, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            // console.log("buying with busd without referral code");

            await buyWithBusd(
              0,
              dollarAmount,
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            );
            toast.success("Success", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            handleClose();
          }
          // console.log("no referral");
        }
      }
    } catch (err) {
      const errormessage = err.toString();
      console.log(errormessage);
      const reasonMatch = errormessage.match(/reason="([^"]+)"/);
      const reason = reasonMatch ? reasonMatch[1] : "Failed";
      console.log(reason);

      toast.error(reason, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleDollarChange = async (e) => {
    let temp = e.target.value;
    if (temp >= 0) {
      let buyerReceives =
        (temp * 10 ** 18) / ethers.utils.parseEther(`${stagePrice}`);
      // console.log(buyerReceives);
      setReceivingTokens(buyerReceives);
    }
    setDollarAmount(e.target.value);
  };

  const handleReferralChange = async (e) => {
    setReferralCode(e.target.value);
  };

  return (
    <div>
      {/* <Button className="btn"></Button> */}

      <button className="btn btn-two" onClick={handleShow}>
        {props.label}
      </button>

      <Modal
        className="custom-modal"
        show={show}
        onHide={isLoading ? undefined : handleClose}
        centered
      >
        <LoadingOverlay
          active={isLoading}
          spinner
          styles={{
            overlay: (base) => ({
              ...base,
              zIndex: 9999, // Increase the z-index value
            }),
          }}
        >
          <Modal.Header>
            <button
              className="all-unset close-button"
              onClick={() => setShow(false)}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineClose />
            </button>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              handleTabChange={handleTabChange}
            />
            {activeTab.value === "usdt" && (
              <>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 subtle-text">Have a referral code? </p>
                  <ToggleButton on={hasReferral} setOnState={setHasReferral} />
                </div>
                <div className={hasReferral ? "show-input" : "hide-input"}>
                  <input
                    type="text"
                    placeholder="Referral Code"
                    className="my-3 custom-input"
                    required={hasReferral}
                    onChange={(e) => handleReferralChange(e)}
                  />
                </div>

                <input
                  type="number"
                  placeholder="Amount in USDT"
                  className="my-3 custom-input number-input"
                  step="any"
                  value={dollarAmount}
                  required
                  onChange={(e) => handleDollarChange(e)}
                />
                <p className="mb-0 subtle-text">
                  {" "}
                  <p className="mb-0 subtle-text"> ${stagePrice} = 1 CRNT</p>
                </p>
                <p className="mb-0 text-end subtle-text">
                  You'll get:{" "}
                  {receivingTokens - (receivingTokens * 0.1).toLocaleString()}{" "}
                  CRNT
                </p>
                <p className="mb-0 text-end subtle-text tnc2">
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </p>
              </>
            )}
            {activeTab.value === "busd" && (
              <>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 subtle-text">Have a referral code? </p>
                  <ToggleButton on={hasReferral} setOnState={setHasReferral} />
                </div>
                <div className={hasReferral ? "show-input" : "hide-input"}>
                  <input
                    type="text"
                    placeholder="Referral Code"
                    className="my-3 custom-input"
                    required={hasReferral}
                    onChange={(e) => handleReferralChange(e)}
                  />
                </div>
                {/* <p className="subtle-text">Amount:</p> */}

                <input
                  type="number"
                  step="any"
                  value={dollarAmount}
                  placeholder="Amount in BUSD"
                  className="my-3 custom-input number-input"
                  onChange={(e) => handleDollarChange(e)}
                />
                <p className="mb-0 subtle-text"> ${stagePrice} = 1 CRNT</p>

                <p className="mb-0 text-end subtle-text">
                  You'll get:{" "}
                  {receivingTokens - (receivingTokens * 0.1).toLocaleString()}{" "}
                  CRNT
                </p>
                <p className="mb-0 text-end subtle-text tnc2">
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="header-btn">
              <button
                className="btn btn-two pu"
                onClick={() => {
                  handleBuy(activeTab, hasReferral);
                }}
              >
                Purchase Tokens
              </button>
            </div>
          </Modal.Footer>
        </LoadingOverlay>
      </Modal>
    </div>
  );
};

export default BuyNow;
