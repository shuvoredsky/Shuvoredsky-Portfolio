import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
    y: 80,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.2,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="bg-base-200 py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">About Me</h2>
        <p className="mt-2 text-base-content text-lg">Get to know me better!</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          className="card bg-base-100 shadow-md border border-base-300"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="card-body">
            <h3 className="card-title text-primary">My Programming Journey</h3>
            <p>
              I started coding out of curiosity and quickly fell in love with
              creating web apps. Over time, I've learned modern tools like{" "}
              <span className="font-medium">React</span>,{" "}
              <span className="font-medium">Node.js</span>, and{" "}
              <span className="font-medium">MongoDB</span> to bring ideas to
              life.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="card bg-base-100 shadow-md border border-base-300"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="card-body">
            <h3 className="card-title text-primary">Work I Enjoy</h3>
            <p>
              I love building full stack applications that are clean,
              functional, and impactful. From designing beautiful frontends to
              building efficient backends — I enjoy the whole process of
              crafting digital products.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="card bg-base-100 shadow-md border border-base-300"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="card-body">
            <h3 className="card-title text-primary">Hobbies & Interests</h3>
            <p>
              Beyond coding, I enjoy{" "}
              <span className="font-medium">walking outside</span>, exploring
              new places, and expressing creativity through{" "}
              <span className="font-medium">photo and video editing</span>.
              These activities keep me refreshed and inspired.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
