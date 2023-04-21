import React from "react";
import Header from "../components/Header";
import PresentContainer from "../components/PresentContainer";
import MainContainer from "../components/MainContainer";
import PresentContainer2 from "../components/PresentContainer2";
import SoutenirContainer from "../components/SoutenirContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <PresentContainer />
      <MainContainer />
      <PresentContainer2 />
      <SoutenirContainer />
      <Footer />
    </div>
  );
}
