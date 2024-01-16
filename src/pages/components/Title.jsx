function Title({ currentPage, handlePageChange }) {
  return (
    <div className="title-cg">
      <p className="title-lettering-cg">Chris Godinho</p>
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
      <div className="navbar-icons-cg">
        <a href="https://github.com/chris-godinho" target="_blank">
          <img
            src="/github_wt_icon.png"
            className="icon-size-cg"
            alt="GitHub"
          />
        </a>
        <a href="https://www.linkedin.com/in/cristianobgodinho/" target="_blank">
          <img
            src="/linkedin_wt_icon.png"
            className="icon-size-cg"
            alt="LinkedIn"
          />
        </a>
        <a href="https://twitter.com/chris__godinho" target="_blank">
          <img src="/x_wt_icon.png" className="icon-size-cg" alt="X" />
        </a>
      </div>
    </div>
  );
}

export default Title;
