function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header-cg">
      <div className="header-content-cg">
        <a
          href="#about-me"
          onClick={() => handlePageChange("AboutMe")}
          className="logo-brand-cg"
        >
          <img src="/logo-cg.png" alt="Chris Godinho" />
          Chris Godinho
        </a>
        <nav className="nav-menu-dropdown-cg">
          <span className="material-symbols-outlined nav-menu-dropdown-button-cg">
            menu
          </span>
          <div className="nav-menu-dropdown-content-cg">
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
