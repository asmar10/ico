import React from "react";
import icon01 from "../../assets/img/icon/h2_choose_icon01.svg";
import icon02 from "../../assets/img/icon/h2_choose_icon02.svg";
import icon03 from "../../assets/img/icon/h2_choose_icon03.svg";
import icon04 from "../../assets/img/icon/h2_choose_icon04.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import WhyChooseUsTwoItem from "./WhyChooseUsTwoItem";

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: icon01,
      alt: "",
      url: "/",
      title: "Empowering AI Tools & Products",
      desc: "CRNT powers current and future products and tools that produce and govern cutting-edge AI content production models.",
    },
    {
      src: icon02,
      alt: "",
      url: "/",
      title: "Cultivating AI Content Economy",
      desc: "Creationnetwork infrastructure supports the development and deployment of AI content production models and economies.",
    },
    {
      src: icon03,
      alt: "",
      url: "/",
      title: <>Content Industry Revolutionized</>,
      desc: "CRNT disrupts the $75 billion content/design industry by revolutionizing global-scale production of virtual goods, fueling new economies and marketplaces",
    },
    {
      src: icon04,
      alt: "",
      url: "/",
      title: "Revenue Distribution",
      desc: "Creationnetwork shares 50% of revenue with CRNT token stakers, who are platform investors",
    },
  ];

  return (
    <section className="choose-area-two team-bg pb-130">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">why Choose us</span>
              <h2 className="title">Why choose CRNT Token</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <ScrollAnimation animateIn="fadeInUp">
                <WhyChooseUsTwoItem item={x} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
