import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import moment from "moment/moment";

const CountDownTwo = () => {
  const {
    currentStage,
    preSaleStartTime,
    publicSaleStartTime,
    getCurrentStage,
  } = useContext(IcoContext);

  // console.log(preSaleStartTime, publicSaleStartTime);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      getCurrentStage();
      return (
        <>
          {currentStage >= 1 && currentStage <= 3 ? (
            <>
              <div className="time-count day">
                <span>{days < 10 ? "0" + days : days}</span>Days
              </div>
              <div className="time-count hour">
                <span>{hours < 10 ? "0" + hours : hours}</span>hour
              </div>
              <div className="time-count min">
                <span>{minutes < 10 ? "0" + minutes : minutes}</span>minute
              </div>
              <div className="time-count sec">
                <span>{seconds < 10 ? "0" + seconds : seconds}</span>second
              </div>
            </>
          ) : (
            <>
              <div className="time-count day">
                <span>{"00"}</span>Days
              </div>
              <div className="time-count hour">
                <span>{"00"}</span>hour
              </div>
              <div className="time-count min">
                <span>{"00"}</span>minute
              </div>
              <div className="time-count sec">
                <span>{"00"}</span>second
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          <div className="time-count day">
            <span>{days < 10 ? "0" + days : days}</span>Days
          </div>
          <div className="time-count hour">
            <span>{hours < 10 ? "0" + hours : hours}</span>hour
          </div>
          <div className="time-count min">
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>minute
          </div>
          <div className="time-count sec">
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>second
          </div>
        </>
      );
    }
  };

  return (
    <section id="countdown" className="countdown-area-two">
      <div className="container custom-container-four">
        <div className="row">
          <div className="col-lg-12">
            <div className="countdown-wrap">
              <h2 className="title">
                {currentStage && currentStage == 4
                  ? `Sale Ended`
                  : currentStage >= 1
                  ? `Stage ${currentStage && currentStage} will End In..`
                  : "Sale Not Started"}
              </h2>
              <div id="countdown-gampang"></div>

              <div className="custom-countdown-two">
                {currentStage == 1
                  ? preSaleStartTime && (
                      <Countdown
                        date={moment.unix(preSaleStartTime)}
                        renderer={renderer}
                      />
                    )
                  : currentStage == 2
                  ? publicSaleStartTime && (
                      <Countdown
                        date={moment.unix(publicSaleStartTime)}
                        renderer={renderer}
                      />
                    )
                  : currentStage == 3
                  ? publicSaleStartTime && (
                      <Countdown
                        date={moment.unix(publicSaleStartTime + 1296000)}
                        renderer={renderer}
                      />
                    )
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDownTwo;
