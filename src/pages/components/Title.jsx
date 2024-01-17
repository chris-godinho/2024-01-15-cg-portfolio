import { useEffect } from "react";
import React from "react";
import SocialIcons from "./SocialIcons";

function Title({ currentPage, handlePageChange }) {
  const [isLightMode, setIsLightMode] = React.useState(
    localStorage.getItem("isLightMode") === "true"
    ? true
    : false
  );

  useEffect(() => {
    document.getElementById("root").classList.toggle("light-mode-cg", isLightMode);
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isLightMode", newMode.toString());
      return newMode;
    });

    document
      .getElementById("root")
      .classList.toggle("light-mode-cg", !isLightMode);
  };

  return (
    <div className="title-cg">
      <a href="#about-me" onClick={() => handlePageChange("AboutMe")}>
        <p className="title-lettering-cg">Chris Godinho</p>
      </a>
      <div className="title-navbar-cg">
        <a
          href="#about-me"
          onClick={() => handlePageChange("AboutMe")}
          className={
            currentPage === "AboutMe" ? "nav-link-cg active" : "nav-link-cg"
          }
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link-cg active" : "nav-link-cg"
          }
        >
          Portfolio
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={
            currentPage === "Resume" ? "nav-link-cg active" : "nav-link-cg"
          }
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "Contact" ? "nav-link-cg active" : "nav-link-cg"
          }
        >
          Contact
        </a>
      </div>
      <div className="desktop-icons-cg">
        <SocialIcons isLightMode={isLightMode} />
        <a href="#" onClick={toggleTheme}>
          <span className="material-symbols-outlined color-mode-icon-cg">
            {isLightMode ? "clear_night" : "clear_day"}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Title;
