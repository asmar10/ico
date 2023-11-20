import React, { useEffect, useState } from "react";
// import RoadmapItem2 from "./RoadmapItem2";
import { Container } from "react-bootstrap";
import dist from "../../assets/img/images/dist.svg";
import { AiOutlineSetting } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";

const Distribution = () => {
  return (
    <section className="roadmap-section team-bg">
      <ScrollAnimation animateIn="fadeInUp">
        <p className="title-responsive pb-20">
          Growth of <span style={{ color: "#BD06FC" }}> AI-Driven Tools </span>&{" "}
          <span style={{ color: "#3FFFFF" }}>Social Media Integrations</span>
        </p>
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
                <p className="distCol">
                  This data showcases a gradual increase in the adoption of
                  AI-driven content creation tools and their integration with
                  social media platforms over the course of five years.
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
        <div className="scroll-x" style={{ overflowX: "auto" }}>
          {/* <div className="roadmap">
            <div
              className="roadmap-line-segment"
              style={{ minWidth: "100vw" }}
            ></div>
            <div className="roadmap-line">
              
            </div>
          </div> */}
          <div className="col-lg-12">
            <div
              className="p-2  about-img-two2 text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img className="about-img-two2" width={'80%'} src={dist} alt="" />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Distribution;
