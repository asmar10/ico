import React from "react";
import aboutImg from "../../assets/img/images/about_img03.png";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";

import BuyNow from "../Buttons/BuyNow";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollAnimation from "react-animate-on-scroll";

const About3 = () => {
  const { connectWallet, currentAccount } = useContext(IcoContext);
  return (
    <section className="about-area-two">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container custom-container-four">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content-two wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="section-title section-title-two mb-15">
                  {/* <span style={{ color: "#00c4f4", fontWeight: "bold" }}>
                    WHO WE ARE
                  </span> */}
                  <h2 className="title">
                    Fragmented & Overwhelming <span>Content Creation </span>
                    Landscape
                  </h2>
                </div>
                <p>
                  In today's digital age, content creators, artists, marketers,
                  and individuals face the challenge of navigating a fragmented
                  landscape of platforms and tools. To effectively promote their
                  projects, brands, or ideas, they often find themselves
                  juggling multiple memberships, paying numerous fees, and
                  struggling with time-consuming processes. This complexity can
                  hinder their creative potential and hinder their ability to
                  reach their target audience effectively.
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

                {/* <>
                  {currentAccount == null ? (
                    <button className="btn btn-two" onClick={handleClick}>
                      Purchase Tokens
                    </button>
                  ) : (
                    <BuyNow label={"Purchase Tokens"} />
                  )}
                </> */}
              </div>
            </div>
            <div style={{ marginTop: '25px' }} className="col-lg-6">
              <div
                className="about-img-two text-center wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <img src={aboutImg} width={"100%"} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="about-shape-wrap">
          <img src={shape01} alt="" className="shape-one" />
          <img src={shape02} alt="" className="shape-two rotateme" />
        </div> */}
      </ScrollAnimation>
    </section>
  );
};

export default About3;
