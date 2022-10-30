import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Layout from "./components/layout/Layout";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutMe />
    </Layout>
  );
}

export default App;
