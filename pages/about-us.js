import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";

import EcomVsFrelancer from "../components/Services/EcomVsFrelancer";

class OmOss extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="About Us
                    "
          BGImage="bg-one"
        />

        <AboutContent />

        <EcomVsFrelancer />
      </>
    );
  }
}

export default OmOss;
