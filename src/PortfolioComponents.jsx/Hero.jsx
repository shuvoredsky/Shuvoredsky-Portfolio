import React from "react";
import myImage from "../assets/hero.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-base-200 min-h-[70vh]"
    >
      {/* Left Text Section */}
      <div className="text-center md:text-left max-w-xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-primary">Shuvo Chakrabrati</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
          I am a{" "}
          <span className="text-primary font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Enthusiast",
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
          technologies like React, Node.js, MongoDB, and Firebase. I'm
          passionate about clean code, teamwork, and continuous learning.
        </p>

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

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/shuvoredsky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline text-xl hover:btn-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* Facebook */}
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

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <img
            src={myImage}
            alt="Shuvo Chakrabarti"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
