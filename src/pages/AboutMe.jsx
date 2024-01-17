import { useEffect } from "react";
import React from "react";
import SocialIcons from "./components/SocialIcons";

export default function AboutMe() {
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
    <div className="main-container-cg">
      <p>I am a Full Stack Developer based in Mississauga, Ontario, Canada.</p>
      <p>
        My journey in the world of web development is fueled by a desire to turn
        innovative ideas into tangible digital reality.
      </p>
      <p>
        My approach to every project is shaped by an unwavering attention to
        detail, a commitment to ethical behaviour in all aspects of my work, and
        a relentless drive to overcome challenges, ensuring precision,
        integrity, and a determination to achieve excellence.
      </p>
      <p>
        I thrive on the challenges of translating concepts into user-friendly,
        responsive, and robust products that leave a lasting impression.
      </p>
      <div className="mobile-icons-cg">
        <a href="#" onClick={toggleTheme}>
          <span className="material-symbols-outlined color-mode-icon-cg">
            {isLightMode ? "clear_night" : "clear_day"}
          </span>
        </a>
        <SocialIcons isLightMode={isLightMode}/>
      </div>
    </div>
  );
}
