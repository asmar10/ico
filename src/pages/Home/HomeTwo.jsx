import React, { useEffect } from "react";
import About from "../../components/About/About";
import About2 from "../../components/About/About2";
import BannerTwo from "../../components/Banner/BannerTwo";
import Banner from "../../components/Banner/Banner";

import ContactTwo from "../../components/Contact/ContactTwo";
import ContactOne from "../../components/Contact/ContactOne";
import CountDownTwo from "../../components/CountDown/CountDownTwo";
import CounterArea from "../../components/CounterArea/CounterArea";
import DownloadArea from "../../components/DownloadArea/DownloadArea";
import Faq from "../../components/Faq/Faq";
import Newsletter from "../../components/Newsletter/Newsletter";
import RoadmapTwo from "../../components/Roadmap/RoadmapTwo";
import TeamTwo from "../../components/Team/TeamTwo";
import WhyChooseUsTwo from "../../components/WhyChooseUs/WhyChooseUsTwo";
import LayoutTwo from "../../layouts/LayoutTwo";
import Roadmap2 from "../../components/Roadmap/Roadmap2";
import Sales from "../../components/Sales/Sales";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import LoadingOverlay from "react-loading-overlay";
import TeamOne from "../../components/Team/TeamOne";
import About3 from "../../components/About/About3";
import Distribution from "../../components/Distribution/Distribution";
import About4 from "../../components/About/About4";
import Distribution2 from "../../components/Distribution/Distribution2";

const HomeTwo = () => {
  const { isLoading } = useContext(IcoContext);

  return (
    <LayoutTwo>
      <main>
        <BannerTwo />
        {/* <Banner /> */}
        <CountDownTwo />
        <WhyChooseUsTwo />
        <About />
        <Distribution />

        <About3 />
        <Distribution2 />

        <About2 />

        {/* <CounterArea /> */}
        {/* <RoadmapTwo /> */}
        <div className="overflow-x-hidden">
          <Roadmap2 />
        </div>
        {/* <DownloadArea /> */}

        <About4 />
        <TeamTwo />

        <WhitePaper />
        <Sales />
        <Faq />
        {/* <ContactTwo />*/}
        <ContactOne />
        {/* <Newsletter /> */}
      </main>
      {/* </LoadingOverlay> */}
    </LayoutTwo>
  );
};

export default HomeTwo;
