import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shuvo Chakrabrati — All rights
          reserved.
        </p>
        <p className="text-xs">Designed & developed by Shuvo</p>
      </aside>
    </footer>
  );
};

export default Footer;
