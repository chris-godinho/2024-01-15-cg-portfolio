function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a
          href="#about-me"
          onClick={() => handlePageChange('AboutMe')}
          className='navbar-brand nav-title'
        >
          Chris Godinho
        </a>
        <a className="" href="#"></a>
        <div className="navbar-linklist" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#about-me"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>    
  );
}

export default Header;
