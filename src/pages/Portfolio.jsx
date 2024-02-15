// Portfolio.jsx

import React, { useState, useEffect } from "react";

// Import ProjectInfo component
import ProjectInfo from "./components/ProjectInfo";

export default function Portfolio() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);

  // Check if the screen is mobile
  const isMobile = window.innerWidth <= 768;

  // Define project data
  const cardsData = [
    {
      id: 1,
      imageUrl: "/project06_thumbnail.jpg",
      title: "Juggler",
      link: "https://juggler-8f9213eba85d.herokuapp.com/",
      repoLink: "https://github.com/chris-godinho/juggler",
      description:
        "A schedule and task management app with a focus on maintaining a healthy work/life balance.",
    },
    {
      id: 2,
      imageUrl: "/project01_thumbnail.jpg",
      title: "Workflow",
      link: "https://shrouded-reef-15269-7fdf3ccd76bb.herokuapp.com/",
      repoLink: "https://github.com/project3-team3/workflow-app",
      description:
        "An office suite featuring highly customizable widgets, as well as text and video chat capabilities.",
    },
    {
      id: 3,
      imageUrl: "/project03_thumbnail.jpg",
      title: "TravIS",
      link: "https://travis231017-9762a24c277b.herokuapp.com/",
      repoLink: "https://github.com/UofTTeam2/TravIS",
      description:
        "TravIS (or TRAVel Interface System) is a useful tool for planning your next trip and discovering new horizons to explore.",
    },
    {
      id: 4,
      imageUrl: "/project02_thumbnail.jpg",
      title: "Tune-Muse",
      link: "https://tune-muse-team.github.io/tunemuse/",
      repoLink: "https://github.com/tune-muse-team/tunemuse",
      description:
        "An AI-curated music application that provides song recommendations based on a set of parameters and text queries entered by the user.",
    },
    {
      id: 5,
      imageUrl: "/project05_thumbnail.jpg",
      title: "Chris' Tech Thoughts",
      link: "https://peaceful-dawn-48719-8b024e4e358e.herokuapp.com/",
      repoLink: "https://github.com/chris-godinho/2023-10-19-MVC-tech-blog",
      description:
        "A blog where developers can publish their posts as well as comment on other developers'.",
    }
  ];

  // Preload all thumbnail images for performance improvement
  const preloadImages = () => {
    cardsData.forEach((card) => {
      const img = new Image();
      img.src = card.imageUrl;
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  // Handle project name click/hover
  const handleCardClick = (cardId) => {
    const newSelectedCard = selectedCard === cardId ? null : cardId;
    setSelectedCard(newSelectedCard);

    // Set selected card data if a card is selected
    setSelectedCardData(
      newSelectedCard
        ? cardsData.find((card) => card.id === newSelectedCard)
        : null
    );
  };

  return (
    <div className="main-container-cg">
      <div className="portfolio-container-cg">
        <div className="project-links-cg">
          <br id="portfolio-text-cg" />
          {cardsData.map((card) => (
            <div>
              <div
                key={card.id}
                className={`project-link-title-cg ${
                  selectedCard === card.id ? "active" : ""
                } ${isMobile ? "mobile" : ""}`}
                onMouseEnter={() => !isMobile && handleCardClick(card.id)}
              >
                <a
                  href={card.link}
                  target="_blank"
                  onClick={(e) => {
                    isMobile && e.preventDefault();
                    handleCardClick(card.id);
                  }}
                >
                  <p>{card.title}</p>
                </a>
                {isMobile && selectedCard === card.id && (
                  <ProjectInfo card={card} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="project-info-cg">
          {!isMobile && selectedCard && <ProjectInfo card={selectedCardData} />}
        </div>
      </div>
    </div>
  );
}
