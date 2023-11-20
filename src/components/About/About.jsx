import React from "react";
import aboutImg from "../../assets/img/images/about_img01.png";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";

import BuyNow from "../Buttons/BuyNow";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollAnimation from "react-animate-on-scroll";

const handleClick = async () => {
  toast.error("Connect Wallet", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const About = () => {
  const { connectWallet, currentAccount } = useContext(IcoContext);
  return (
    <section id="about" className="about-area-two">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container custom-container-four">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div
                className="about-content-two wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="section-title section-title-two mb-15">
                  <span style={{ color: "#00c4f4", fontWeight: "bold" }}>
                    WHO WE ARE
                  </span>
                  <h2 className="title">
                    A Catalyst for <span>Global</span> Innovation
                  </h2>
                </div>
                <p>
                  With a global audience in mind, the platform's goal is to
                  empower individuals and help them become skilled professionals
                  in various fields such as art, marketing, writing, and more.
                  As users succeed in their creative endeavors, they are
                  rewarded for their achievements.
                </p>
                {/* <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Mouthwatering leading how
                    real formula also
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Locked-in have can mountain
                    thought
                  </li>
                </ul>
              </div> */}
                {/* <div className="light-btn">
                <a
                  href={aboutImg}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Purchase Tokens
                </a>
              </div> */}

                <>
                  {currentAccount == null ? (
                    <button className="btn btn-two" onClick={handleClick}>
                      Purchase Tokens
                    </button>
                  ) : (
                    <BuyNow label={"Purchase Tokens"} />
                  )}
                </>
              </div>
            </div>
            <div style={{ marginTop: '40px' }} className="col-lg-6">
              <div
                className="about-img-two text-center wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <img src={aboutImg} width={"90%"} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-shape-wrap">
          {/* <img src={shape01} alt="" className="shape-one mt-4" /> */}
          {/* <img src={shape02} alt="" className="shape-two rotateme mt-4" /> */}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
