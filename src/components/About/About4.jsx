import React from "react";
import graphic from "../../assets/img/images/graphic.svg";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";

import BuyNow from "../Buttons/BuyNow";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollAnimation from "react-animate-on-scroll";

const About4 = () => {
  const { connectWallet, currentAccount } = useContext(IcoContext);
  return (
    <section className="about-area-two">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container custom-container-four">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="about-img-two about-img-two-graphic text-center wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <img src={graphic} width={"100%"} alt="" />
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

export default About4;
