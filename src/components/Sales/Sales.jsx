import React from "react";
import chartImg from "../../assets/img/images/chart.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import ScrollAnimation from "react-animate-on-scroll";

const Sales = () => {
  const chart_info_list = [
    "33% - Sale Pre & Sale",
    "20% - Liquidity",
    "12% - Team/Advisors",
    "10% - Reserve",
    "20% - Marketing",
    "5% - Creator",
  ];

  return (
    <section id="sales" className="chart-area team-bg">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container">
          <div className="chart-inner">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                <div
                  className="chart-wrap wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <img src={chartImg} alt="" />
                  <ul>
                    {chart_info_list.map((x, index) => (
                      <li key={index}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-10">
                <div
                  className="chart-content wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <SalesTabButton
                      title="Stage 1"
                      className="active"
                      id="seedsaletab"
                      target="#seedsale"
                      ariaControls="seedsale"
                      ariaSelected={true}
                    />

                    <SalesTabButton
                      title="Stage 2"
                      className=""
                      id="presaletab"
                      target="#presale"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 3"
                      className=""
                      id="publicsaletab"
                      target="#publicsale"
                      ariaControls="publicsale"
                      ariaSelected={false}
                    />
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <SalesTabContent
                      className={"show active"}
                      id="seedsale"
                      ariaLabel="seedsaletab"
                      title="1 CRNT = 0.0175 USD"
                      subtitle="Seed Sale"
                      description="During the seedsale, early participants have a remarkable opportunity to acquire CRNT tokens. With a generous allocation of 33,000,000 tokens, this Seedsale phase presents exclusive discounted rates, allowing you to become an early adopter and potentially benefit from the future growth and value of CRNT."
                      link="/"
                    />

                    <SalesTabContent
                      className={""}
                      id="presale"
                      ariaLabel="presaletab"
                      title="1 CRNT = 0.0225 USD"
                      subtitle="Presale"
                      description="
                    Stepping into the second stage, where early participants have an exclusive opportunity to acquire CRNT tokens. With a significant allocation of 44,000,000 tokens, this presale phase offers discounted rates, enabling you to become an early adopter and potentially reap the benefits of CRNT's future growth and value."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="publicsale"
                      ariaLabel="publicsaletab"
                      title="1 CRNT = 0.0275 USD"
                      subtitle="Public Sale"
                      description="Public Sale Unleashed! With an allocation of 44,770,000 CRNT tokens, this will be your chance to join the token sale open to the general public. Experience broader participation and seize the opportunity to access CRNT tokens."
                      link="/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Sales;
