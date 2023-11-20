import React from "react";
import shape01 from "../../assets/img/images/faq_shape01.png";
import shape02 from "../../assets/img/images/faq_shape02.png";
import shape03 from "../../assets/img/images/faq_shape03.png";
import FaqItem from "./FaqItem";
import ScrollAnimation from "react-animate-on-scroll";

const Faq = () => {
  const faq_items = [
    {
      id: "headingOne",
      controls: "collapseOne",
      expanded: true,
      btnClass: "",
      contentClass: "show",
      title: "What is Creationnetwork and what does it offer?",
      details: `Creationnetwork is an innovative platform that empowers global internet users by providing a comprehensive suite of tools for content creation, marketing, podcasting, and social media management. It simplifies and enhances the creative and entrepreneurial process by consolidating various platforms into one ecosystem.`,
    },
    {
      id: "headingTwo",
      controls: "collapseTwo",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "How does the CRNT token benefit users?",
      details: `The CRNT token serves as the main currency on the platform and offers benefits such as revenue distribution and token value appreciation. Users can stake CRNT tokens to receive a share of the platform's revenue earnings, and holding more tokens can result in higher earnings. Additionally, the token's value can increase over time, providing potential financial gains for token holders.`,
    },
    {
      id: "headingThree",
      controls: "collapseThree",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Who can benefit from using Creationnetwork?",
      details: `Creationnetwork targets a global audience and aims to transform individuals into professional artists, marketers, writers, and more. It caters to freelancers, influencers, corporate marketing firms, product manufacturers, and individuals seeking to enhance their creative potential, reach their target audience, and achieve professional success.`,
    },
    {
      id: "headingFour",
      controls: "collapseFour",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title:
        "How does Creationnetwork simplify content creation and management?",
      details: `Creationnetwork consolidates the fragmented market of content creation platforms into a single, unified ecosystem. It offers a wide range of tools and products within one centralized hub, allowing users to seamlessly transition between various mediums such as text, audio, images, and videos. The platform also provides automation capabilities for scheduling and distributing content across multiple social media platforms, saving time and maximizing reach.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "What sets Creationnetwork apart from other platforms?",
      details: `Creationnetwork stands out by integrating a vast array of features and products that are typically scattered across multiple platforms. It offers a comprehensive suite of tools for content creation, marketing, podcasting, and social media management. Additionally, it emphasizes affordable pricing, democratizing the creative process, and provides algorithmic revenue distribution to incentivize user participation and reward stakeholders for their contributions.`,
    },
  ];

  return (
    <section id="faq" className="faq-area">
      <div className="container custom-container-four">
        <div className="faq-shape-wrap">
          <img src={shape01} alt="" className="img-one" />
          <img src={shape02} alt="" className="img-two rotateme" />
          <img src={shape03} alt="" className="img-three" />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="section-title section-title-two text-center mb-60">
              <h2 className="title">Frequently asked questions</h2>
            </div>
            <div className="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion" id="accordionExample">
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
