function Footer() {
  return (
    <footer>
      <div className="footer-container-cg">
        <div className="footer-icons-cg">
          <a href="https://github.com/chris-godinho">
            <img src="/github_wt_icon.png" className="footer-icon-size-cg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/cristianobgodinho/">
            <img src="/linkedin_wt_icon.png" className="footer-icon-size-cg" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/chris__godinho">
            <img src="/x_wt_icon.png" className="footer-icon-size-cg" alt="X" />
          </a>
        </div>
        <p>Created by Chris Godinho using <a href="https://react.dev/">React</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
