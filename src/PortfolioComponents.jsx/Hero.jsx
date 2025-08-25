import React from "react";
import myImage from "../assets/hero.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import nextLogo from "../assets/logos/NextjsLogo.png";
import mongoLogo from "../assets/logos/MongoDBLogo.png";
import nodeLogo from "../assets/logos/NodejsLogo.png";
import tailwindLogo from "../assets/logos/TailwindLogo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-around md:p-12 bg-base-200 min-h-[70vh] overflow-hidden font-poppins"
    >
      <div className="absolute inset-0 z-0 blur-3xl animate-pulse" />

      {/* Left Text */}
      <div className="text-center md:text-left max-w-xl space-y-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-primary">Shuvo Chakrabarti</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
          I am a{" "}
          <span className="text-primary font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Enthusiast",
                "Next.js Developer",
                "MERN Stack Coder",
                "Tech Explorer",
                "Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-lg text-base-content">
          I build modern, scalable, and responsive web applications using
          technologies like Next.js, Postgresql, Node.js, Express.js .
          passionate about clean code, teamwork, and continuous learning.
        </p>

        {/* Buttons + Social */}
        <div className="flex items-center gap-5">
          <button className="btn btn-primary mt-2">
            <a href="#contact">Hire Me</a>
          </button>
          <div className="flex justify-center gap-6 mt-2">
            <a
              href="https://github.com/shuvoredsky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline text-xl hover:btn-primary"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shuvoredsky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline text-xl hover:btn-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/sk.shuvo.129794"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline text-xl hover:btn-primary"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Section with rotating logos */}
      <div className="relative mt-10 md:mt-0 md:ml-10 z-10">
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg relative">
          <img
            src={myImage}
            alt="Shuvo Chakrabarti"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rotating Logos */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full animate-rotate relative">
            <img
              src={nextLogo}
              alt="Next.js"
              className="w-10 h-10 absolute top-[-40px] left-1/2 -translate-x-1/2"
            />
            <img
              src={mongoLogo}
              alt="MongoDB"
              className="w-10 h-10 absolute top-1/2 right-[-40px] -translate-y-1/2"
            />
            <img
              src={nodeLogo}
              alt="Node.js"
              className="w-10 h-10 absolute bottom-[-40px] left-1/2 -translate-x-1/2"
            />
            <img
              src={tailwindLogo}
              alt="Tailwind CSS"
              className="w-10 h-10 absolute top-1/2 left-[-40px] -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
