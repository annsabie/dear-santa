// import fontaswesome icons
import { FaGithub, FaInfo } from "react-icons/fa";
import './footer.css'

// footer function
function Footer() {
  // hovers
  const handleMouseEnter = (event) => {
    event.target.style.color = "######";
  };
  const handleMouseLeave = (event) => {
    event.target.style.color = "######";
  };

  // return code with jsx
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <div className="container text-center justify-content-center">
              {/* a link to about us*/}
              <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaInfo id="footer-icons" />
              </a>
              {/* a link GitHub*/}
              <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="https://github.com/cassjmeyer/dear-santa"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub id="footer-icons" />
              </a>
            </div>
          </footer>
          <div className="footer-bottom">Copyright © 2021, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
