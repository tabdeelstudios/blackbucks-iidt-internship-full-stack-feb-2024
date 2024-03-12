import React from "react";

import Header from "./Header";
import SectionOne from "./home/SectionOne";
import SectionTwo from "./home/SectionTwo";
import SectionThree from "./home/SectionThree";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

export default Home;
