// ProjectInfo.js
import React, { useState, useEffect } from "react";

export default function ProjectInfo({ card }) {
  const [isLightMode, setIsLightMode] = useState(
    document.getElementById("root").classList.contains("light-mode-cg")
  );

  useEffect(() => {
    // Callback function when mutation occurs
    const handleMutation = () => {
      setIsLightMode(document.getElementById("root").classList.contains("light-mode-cg"));
    };

    // Create a MutationObserver instance
    const observer = new MutationObserver(handleMutation);

    // Observe changes to the class attribute of #root
    observer.observe(document.getElementById("root"), { attributes: true });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="project-details-cg">
      <img
        src={card.imageUrl}
        className="project-thumbnail-cg"
        alt={card.title}
      />
      <p>{card.description}</p>
      <div className="project-link-tray-cg">
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined app-link-icon-cg">exit_to_app</span>
        </a>
        <a href={card.repoLink} target="_blank" rel="noopener noreferrer">
          <img
            src={isLightMode ? "/github_rd_icon.png" : "/github_yl_icon.png"}
            className="project-github-icon-cg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
