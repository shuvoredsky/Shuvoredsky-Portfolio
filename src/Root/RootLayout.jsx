import React from "react";
import Navbar from "../PortfolioComponents.jsx/Navbar";
import Hero from "../PortfolioComponents.jsx/Hero";
import SocialLink from "../PortfolioComponents.jsx/SocialLink";
import About from "../PortfolioComponents.jsx/About";
import Skills from "../PortfolioComponents.jsx/Skills";
import Education from "../PortfolioComponents.jsx/Education";
import Contact from "../PortfolioComponents.jsx/Contact";
import Footer from "../PortfolioComponents.jsx/Footer";
import Projects from "../PortfolioComponents.jsx/Project/Projects";
import AnimatedCursor from "react-animated-cursor";

const Root = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid blue",
        }}
      />
      <Navbar></Navbar>
      <Hero></Hero>
      <SocialLink></SocialLink>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Root;
