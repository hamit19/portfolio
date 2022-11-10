import React, { useState } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Layout from "./components/layout/Layout";
import AboutMe from "./components/aboutMe/AboutMe";
import SkillsSection from "./components/skills/SkillsSection";
import Portfolio from "./components/portfolio/Portfolio";
import Modal from "./components/modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Layout setOpen={setOpen}>
      <HeroSection />
      <AboutMe setOpen={setOpen} />
      <SkillsSection />
      <Portfolio />
      <Modal open={open} setOpen={setOpen} />
      <ToastContainer theme="dark" />
    </Layout>
  );
}

export default App;
