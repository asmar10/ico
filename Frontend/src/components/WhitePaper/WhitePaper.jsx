import React from "react";
import { Link } from "react-router-dom";
import docImg from "../../assets/img/images/document_img.jpg";
import whitePaper from "./../../whitepaper.pdf";
import { Modal } from "react-bootstrap";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { pdflink } from "../../utils/constants";
import ScrollAnimation from "react-animate-on-scroll";
// import Modal from "react-modal";

const WhitePaper = () => {
  return (
    <>
      <section className="document-area pt-60">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 order-2 order-lg-0">
                <div
                  className="document-img text-center wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <img src={docImg} alt="" />
                </div>
              </div>

              <div className="col-lg-6 col-md-7">
                <div
                  className="document-content mt-50 wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <div className="section-title mb-35">
                    <span className="sub-title text-dark">Whitepaper</span>
                    <h2 className="title">
                      <span className="text-dark">Read CRNT</span>
                      <br /> <span>Documents</span>
                    </h2>
                  </div>
                  {/* <ul className="document-list">
                <li>White Paper</li>
                <li>Privaci & Policy</li>
                <li>Terms Of Coin Sale</li>
                <li>One Pager</li>
              </ul> */}

                  {/* <button className="btn btn-two"> */}
                  <a
                    className="btn btn-two"
                    href={
                      "https://drive.google.com/file/d/1nLiV3mbFJT1WCqOqKWHvIFbD9lPMapfc/view"
                    }
                    target="_blank"
                  >
                    View
                  </a>
                  {/* </button> */}

                  {/* <Modal
                  className="custom-modal"
                  show={show}
                  onHide={handleClose}
                  centered
                >
                  <iframe
                    src={
                      "https://drive.google.com/file/d/1r-W3m4um_9bJfUM0p3v_69UdH17VR7_Y/view"
                    }
                    // title="Document"
                    width="100%"
                    height="600px"
                  />
                </Modal> */}
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${pdflink}`}
                    download={"CRNT Whitepaper"}
                    className="btn btn-two"
                    style={{ marginLeft: "5px" }}
                  >
                    Download Doc
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default WhitePaper;
