import React from "react";
import { FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="bg-base-200 py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
          Educational Qualification
        </h2>

        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
          className="card bg-base-100 shadow-md border border-base-300"
        >
          <div className="card-body items-center text-center px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
              <FaUniversity className="text-3xl text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold break-words max-w-xs">
                Northern University of Bangladesh (NUB)
              </h3>
            </div>

            <p className="text-sm sm:text-base">
              <span className="font-medium">Degree:</span> Bachelor of Science
              (BSc)
            </p>
            <p className="text-sm sm:text-base mt-1">
              <span className="font-medium">Department:</span> Computer Science
              and Engineering (CSE)
            </p>
            <p className="text-sm sm:text-base mt-1">
              <span className="font-medium">Session:</span> Ongoing (Expected
              Graduation: End of 2026)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
