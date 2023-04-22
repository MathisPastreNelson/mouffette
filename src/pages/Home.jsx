import React, { Suspense, useState, useEffect } from "react";
import Header from "../components/Header";
import MouseFollower from "../components/MouseFollower";
const PresentContainer = React.lazy(() =>
  import("../components/PresentContainer")
);
const MainContainer = React.lazy(() => import("../components/MainContainer"));
const PresentContainer2 = React.lazy(() =>
  import("../components/PresentContainer2")
);
const SoutenirContainer = React.lazy(() =>
  import("../components/SoutenirContainer")
);
import Footer from "../components/Footer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <MouseFollower />

      {/* Loader de 2 seconde pour charger le reste du site */}
      {showContent ? (
        <Suspense fallback={<div className="lds-hourglass"></div>}>
          <PresentContainer />
          <MainContainer />
          <PresentContainer2 />
          <SoutenirContainer />
        </Suspense>
      ) : (
        <div className="lds-hourglass"></div>
      )}

      <Footer />
    </div>
  );
}
