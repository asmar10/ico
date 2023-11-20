import React from "react";

import ContactOne from "../../components/Contact/ContactOne.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import TncLayout from "../../layouts/tncLayout.jsx";
import TncData from "../../components/tnc/TncData.jsx";

// import LayoutBlog from "../../layouts/LayoutBlog";

const Terms = () => {
  return (
    <TncLayout>
      <main>
        <TncData />
        {/* <Newsletter /> */}
      </main>
    </TncLayout>
  );
};

export default Terms;
