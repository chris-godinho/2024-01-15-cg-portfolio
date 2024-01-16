import SocialIcons from "./SocialIcons";

function Title({ currentPage, handlePageChange }) {
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
        <SocialIcons />
      </div>
    </div>
  );
}

export default Title;
