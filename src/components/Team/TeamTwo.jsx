import React from "react";
import img01 from "../../assets/img/team/h2_team_img01.jpg";
import img02 from "../../assets/img/team/h2_team_img02.jpg";
import img03 from "../../assets/img/team/h2_team_img03.jpg";
import img04 from "../../assets/img/team/h2_team_img04.jpg";
import TeamTwoItem from "./TeamTwoItem";
import Profile from "./../Buttons/Profile";
import ScrollAnimation from "react-animate-on-scroll";

const TeamTwo = () => {
  const team_members = [
    {
      src: img01,
      name: "Ali Demir",
      designation: "Ceo & Co-founder",
      desc: "Ali Demir is a seasoned tech entrepreneur, economist, software developer, and marketing consultant. With his expertise, he has contributed to the creation of highly successful startups, leveraging his skills in designing impactful marketing campaigns and innovative product ideas.",
    },
    {
      src: img02,
      name: "Muhammad Ibtesam Asif",
      designation: "Project Manager (Development & Marketing)",
      desc: "Muhammad Ibtesam Asif, an experienced Project Manager (Development & Marketing), brings a wealth of expertise in software development, marketing, and project management. His exceptional leadership skills and visionary mindset drive innovation and ensure successful project execution.",
    },
    {
      src: img03,
      name: "Abdullah al qarni",
      designation: "Advisor",
      desc: "Abdullah Al Qarni, our esteemed project advisor, brings a wealth of experience and expertise to the table. With his extensive background in the industry, he has consistently provided valuable guidance and strategic insights to drive project success.",
    },
    {
      src: img04,
      name: "Monica Taylor ",
      designation: "Public relations officer",
      desc: "Monica Taylor, our skilled Public Relations Officer, manages our project's reputation and communication. With her expertise and strategic approach, Monica crafts compelling narratives, engages stakeholders, and enhances our brand presence.",
    },
  ];

  return (
    <section className="team-area-two team-bg">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our team</span>
              <h2 className="title">
                The Leadership <br />
                <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" >
          {team_members.map((x, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6" >
              <Profile data={x} />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default TeamTwo;
