import React, { useEffect, useState } from "react";
// import RoadmapItem2 from "./RoadmapItem2";
import { Container } from "react-bootstrap";
import table from "../../assets/img/images/table.svg";
import { AiOutlineSetting } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";

const Distribution2 = () => {
  return (
    <section className="roadmap-section team-bg">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="title pb-20">
          Value <span> Proposition</span>
        </h2>
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
                  Effortlessly sync your social media, ecommerce, and scheduling
                  tools with Creationnetwork. Seamlessly create, schedule, and
                  share content across platforms, enhancing your online presence
                  and outreach. This integration simplifies your tasks, allowing
                  you to focus on crafting compelling content and engaging
                  effectively with your audience.
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
          <br />
          <div className="col-lg-12">
            <div
              className="about-img-two about-img-two2 text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={table} alt="" />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Distribution2;
