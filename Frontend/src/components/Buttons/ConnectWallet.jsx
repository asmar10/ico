import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Tabs from "./Tabs";
import ToggleButton from "./ToggleButton";
import { AiOutlineClose, AiOutlineConsoleSql } from "react-icons/ai";
import { formatEther, parseEther } from "ethers/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import { Contract, ethers, providers } from "ethers";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { useWeb3Modal } from "@web3modal/react";
import LoadingOverlay from "react-loading-overlay";

import "react-toastify/dist/ReactToastify.css";
import { icoAbi, icoAddress } from "../../utils/constants";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const ConnectWallet = (props) => {
  const { connectWallet, currentAccount, isLoading, setCurrentAccount } =
    useContext(IcoContext);
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleWalletConnect = async () => {
    handleClose();
    await open();
  };

  const isWalletconnected = async () => {
    // console.log("1");
    if (isConnected) {
      // console.log("2");

      setCurrentAccount(address);
    } else {
      // console.log("3");

      setCurrentAccount(null);
    }
  };

  useEffect(() => {
    isWalletconnected();
  });

  return (
    <div>
      {/* <Button className="btn"></Button> */}

      <button className="btn" onClick={handleShow}>
        Connect Wallet
      </button>
      <Modal
        className="custom-modal"
        show={show}
        onHide={isLoading ? null : handleClose}
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
            <>
              <button class="button btn btn-two" onClick={connectWallet}>
                <img
                  src="/images/icons/MetaMask_Fox.png"
                  // src="/images/icons/usdt.png"
                  alt="Logo"
                  class="button__logo"
                />
                <span class="button__text">Metamask</span>
              </button>

              <button class="button btn btn-two" onClick={handleWalletConnect}>
                <img
                  src="/images/icons/wconnect.png"
                  alt="Logo"
                  class="button__logo"
                />
                <span class="button__text">WalletConnect</span>
              </button>
            </>
          </Modal.Body>
        </LoadingOverlay>
      </Modal>
    </div>
  );
};

export default ConnectWallet;
