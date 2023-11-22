import React, { useEffect, useState } from "react";
import icon from "../../assets/img/icon/scroll_icon.svg";
import bannerImg from "../../assets/img/banner/banner_img.png";
import { Link } from "react-router-dom";
import { handleClickScroll } from "../../lib/helpers";
import fireIcon from "../../assets/img/icon/fire.png";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { ethers } from "ethers";

const BannerTwo = () => {
  const {
    stagePrice,
    currentStage,
    currentStageMinted,
    currentStageAllocation,
  } = useContext(IcoContext);
  // let currentStage = 0;
  const colorScales = {
    1: "#02C4F4",
    2: "#FF9700",
    3: "#12d176",
  };

  let price = stagePrice && ethers.utils.formatEther(`${stagePrice}`);
  // console.log(price);
  let raised =
    ((currentStageMinted && currentStageMinted) /
      (currentStageAllocation && currentStageAllocation)) *
    100;

  // let left = currentStageAllocation - currentStageMinted;

  return (
    <section className="banner-area-two" id="home">
      <div className="banner-bg-two"></div>
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="banner-content text-center">
              {/* progress from home one */}
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="fade-in-up banner-content text-center">
                    <img src={fireIcon} width={"25%"} alt="" />
                    <br />
                    <br />

                    <h2 className="title">
                      An Innovative Platform Empowering <span>Global</span>{" "}
                      Internet Users
                    </h2>
                  </div>
                  <div className="banner-progress-wrap">
                    <ul>
                      <li>Seed Sale</li>
                      <li>Presale</li>
                      <li>Public Sale</li>
                    </ul>

                    <div className="progress">
                      <div
                        className={
                          currentStage == 1
                            ? "progress-bar"
                            : currentStage == 2
                            ? "progress-bar stage-2"
                            : currentStage == 3
                            ? "progress-bar stage-3"
                            : "progress-bar"
                        }
                        role="progressbar"
                        style={{
                          width: `${raised}%`,
                          background: `${colorScales[currentStage]}`,
                        }}
                        aria-valuenow={`${raised}`}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <h4 className="target-banner title text-uppercase">
                      {raised.toFixed(2)}% Raised
                      <span
                        style={{
                          color: `${colorScales[currentStage]}`,
                        }}
                      >
                        {" "}
                        $ {price} = 1 CRNT
                      </span>
                    </h4>
                  </div>
                </div>
              </div>

              <div style={{ height: 200 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-social-wrap">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/www.CreationNetworkAI/"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <span>Facebook</span>
          </li>
          <li>
            <a
              href="https://twitter.com/CRNTNetworkAI"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <span>Twitter</span>
          </li>
          <li>
            <a
              href="https://www.pinterest.com/wwwcreationnetworkai/"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <span>Pinterest</span>
          </li>
          <li>
            <a
              href="https://www.instagram.com/creation_network.ai/"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className="banner-scroll">
        <span>Scroll down</span>
        <Link
          to="#about"
          data-target="#about"
          onClick={() => handleClickScroll("about")}
        >
          <img src={icon} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default BannerTwo;
