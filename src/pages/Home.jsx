import React from "react";
import Header from "../components/Header";
import PresentContainer from "../components/PresentContainer";
import MainContainer from "../components/MainContainer";
import PresentContainer2 from "../components/PresentContainer2";
import StreamContainer from "../components/StreamContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <PresentContainer />
      <MainContainer />
      <PresentContainer2 />
      <StreamContainer />
      <Footer />
    </div>
  );
}
