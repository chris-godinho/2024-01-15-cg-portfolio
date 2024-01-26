// SocialIcons.jsx

import React from "react";

const SocialIcons = ({isLightMode}) => {
  return (
    <div className="navbar-icons-cg">
      <a href="https://github.com/chris-godinho" target="_blank">
        <img src={isLightMode ? "/github_bk_icon.png" : "/github_wt_icon.png"} className="icon-size-cg" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/cristianobgodinho/" target="_blank">
        <img
          src={isLightMode ? "/linkedin_bk_icon.png" : "/linkedin_wt_icon.png"}
          className="icon-size-cg"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
