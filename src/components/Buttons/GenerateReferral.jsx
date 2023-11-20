import React, { useRef, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { AiOutlineClose, AiOutlineConsoleSql } from "react-icons/ai";

import { useContext } from "react";
import { IcoContext } from "../../contexts/context";

import LoadingOverlay from "react-loading-overlay";
import clipboardCopy from "clipboard-copy";

import "react-toastify/dist/ReactToastify.css";
import { whitelistAddress } from "../../utils/constants";

const GenerateReferral = () => {
  const { isWhitelisted, referralCode, isLoading, generateReferralCode } =
    useContext(IcoContext);
  const textRef = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleCopyClick = () => {
    clipboardCopy(textRef.current.textContent);
  };

  const handleShow = () => setShow(true);

  return (
    <div>
      {/* <Button className="btn"></Button> */}

      <p className="ref" onClick={handleShow}>
        Referral Code
      </p>
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
              <b>For Whitelisted Users Only</b>
              <br />
              Every CRNT token purchased using your referral code, you will
              receive a generous reward equivalent to 10% of the purchased token
              amount
              <br />
              <br />
              {isWhitelisted && (
                <span style={{ wordBreak: "break-all" }}>
                  {referralCode !==
                  "0x0000000000000000000000000000000000000000000000000000000000000000"
                    ? referralCode
                    : ""}
                </span>
              )}
              <button
                class="button btn btn-two"
                disabled={
                  !isWhitelisted ||
                  referralCode !==
                    "0x0000000000000000000000000000000000000000000000000000000000000000"
                }
                onClick={() => generateReferralCode()}
              >
                <span class="button__text">
                  {isWhitelisted
                    ? "Generate Referral Code"
                    : "Not a Whitelisted Address"}
                </span>
              </button>
            </>
          </Modal.Body>
        </LoadingOverlay>
      </Modal>
    </div>
  );
};

export default GenerateReferral;
