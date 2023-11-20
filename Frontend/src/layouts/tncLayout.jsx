import React, { useEffect } from "react";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";
import HeaderTwo from "../components/Header/HeaderTwo";
import FooterTwo from "../components/Footer/FooterTwo";

const TncLayout = (props) => {
  useEffect(() => {
    setTimeout(() => {
      let div = document.getElementById(window.location.hash.split("#")[1]);
      div?.scrollIntoView({ behavior: "smooth" });
    }, 2100);
  });

  return (
    <div className={cn("white-background")}>
      {/* <PageLoader /> */}

      <HeaderTwo />

      {props.children}

      <FooterTwo />
    </div>
  );
};

export default TncLayout;
