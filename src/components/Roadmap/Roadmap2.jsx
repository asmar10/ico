import React, { useEffect, useState } from "react";
import RoadmapItem2 from "./RoadmapItem2";
import { Container } from "react-bootstrap";
import { AiOutlineSetting } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";

const roadmapItems = [
  {
    id: 1,
    label: "Q1 2022",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Project conceptualization, team formation, and initial research.",
      },
      {
        id: 2,
        text: "ICO planning and strategy development",
      },
    ],
  },
  {
    id: 2,
    label: "Q2 2023",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "ICO marketing and community outreach to attract investors and build a strong supporter base.",
      },
      { id: 2, text: "Development of the Creationnetwork platform begins" },
    ],
  },
  {
    id: 3,
    label: "Q3 2023",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "ICO token sale and allocation.",
      },
      {
        id: 2,
        text: "Finalize platform development, including bug fixing, performance optimization, and security audits",
      },
      {
        id: 3,
        text: "Launch the Creationnetwork platform",
      },
    ],
  },
  {
    id: 4,
    label: "Q4 2023 – I",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Gather user feedback and implement improvements to enhance user experience and functionality",
      },
    ],
  },
  {
    id: 5,
    label: "Q4 2023 – I I",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Start creating the Creationnetwork mobile app for easier access and to meet the increasing need for using the platform on mobile devices",
      },
    ],
  },
  {
    id: 6,
    label: "Q1 2024",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Introduction of additional tools and products, such as podcasting capabilities, analytics features, and campaign management tools",
      },
    ],
  },
  {
    id: 7,
    label: "Q2 2024",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Expansion of the Creationnetwork community through marketing and outreach efforts to attract new users, content creators, and investors",
      },
    ],
  },
  {
    id: 8,
    label: "Q3 2024",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Further expansion of the user base and platform adoption through strategic partnerships and collaborations",
      },
    ],
  },
  {
    id: 9,
    label: "Q4 2024",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Continuous improvement and innovation of existing tools and products based on user feedback and market trends",
      },
    ],
  },
  {
    id: 10,
    label: "Q1 2025",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Exploration of emerging technologies, such as AI-generated content and virtual reality, to enhance the Creationnetwork platform's capabilities",
      },
    ],
  },
  {
    id: 11,
    label: "Q2 2025",
    icon: AiOutlineSetting,
    list: [
      {
        id: 1,
        text: "Continued growth and expansion into new markets, establishing the Creationnetwork as a leading platform for content creation and AI-powered services",
      },
    ],
  },
];

const Roadmap2 = () => {
  return (
    <section id="roadmap" className="roadmap-section team-bg">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="title pb-20">
          Project<span> Roadmap</span>
        </h2>
        <div className="scroll-x" style={{ overflowX: "auto" }}>
          <div className="roadmap">
            <div
              className="roadmap-line-segment"
              style={{ minWidth: "100vw" }}
            ></div>
            <div className="roadmap-line">
              <Container>
                <div className="roadmap-items-wrapper">
                  {roadmapItems.map((item, index) => {
                    return (
                      <RoadmapItem2
                        key={item.id}
                        reverse={index % 2 !== 0}
                        data={item}
                        firstItem={index === 0}
                      />
                    );
                  })}
                </div>
              </Container>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Roadmap2;
