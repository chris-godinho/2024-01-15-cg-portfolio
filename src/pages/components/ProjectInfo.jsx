// ProjectInfo.js
import React from "react";

export default function ProjectInfo({ card }) {
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
            src="/github_yl_icon.png"
            className="project-github-icon-cg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
