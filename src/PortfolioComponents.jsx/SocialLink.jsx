import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">Social Links</h2>

      <div className="flex justify-center gap-6">
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
  );
};

export default SocialLink;
