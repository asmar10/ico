import React from "react";
import about2Img from "../../assets/img/images/about2_img01.svg";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";
import BuyNow from "../Buttons/BuyNow";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollAnimation from "react-animate-on-scroll";

const About2 = () => {
  const { connectWallet, currentAccount } = useContext(IcoContext);
  return (
    <section id="about2" className="about-area-two">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container  custom-container-four">
          <div className="row align-items-center">
            {/* <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src="/images/icons/logo.png" width={"70%"} alt="" />
            </div>
          </div> */}
            <div className="col-lg-12">
              <div
                className=" wow fadeInRight text-center"
                data-wow-delay=".2s"
              >
                <div className="section-title section-title-two">
                  <span style={{ color: "#00c4f4", fontWeight: "bold" }}>
                    Vision & Mission
                  </span>
                  <h2 className="title">
                    Enabling all internet users to <span>unlock</span> their
                    creative potential
                  </h2>
                </div>
                <br />

                <p>
                  Creationnetwork is dedicated to empowering individuals across
                  the globe, providing them with the means to unleash their
                  creative potential and pursue professional endeavors in
                  various fields. By leveraging cutting-edge technology, our
                  platform equips users with transformative tools that enable
                  the seamless transformation of ideas into compelling articles,
                  captivating visuals, immersive audio, impactful videos, and
                  influential brands. We strive to be a driving force for global
                  innovation, fostering creativity, and empowering individuals
                  to thrive in the dynamic digital landscape.
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
                  <button className="btn" onClick={handleClick}>
                    Purchase Tokens
                  </button>
                ) : (
                  <BuyNow label={"Purchase Tokens"} />
                )}
              </> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="col-lg-12">
          <div
            className="about-img-two text-center wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <img className="ring-image" src={about2Img} alt="" />
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

export default About2;
