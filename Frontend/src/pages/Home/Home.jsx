import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import Roadmap from "../../components/Roadmap/Roadmap";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";
import Roadmap2 from "../../components/Roadmap/Roadmap2";

const Home = () => {
  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
        <WhoWeAre />

        <TopPartners />
        <WhyChooseUs />
        <Sales />

        <div className="area-bg">
          <Roadmap />
          <WhitePaper />
        </div>

        <TeamOne />
        <ContactOne />
      </main>
    </LayoutOne>
  );
};

export default Home;
