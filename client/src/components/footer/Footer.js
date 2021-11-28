// import fontaswesome icons
import { FaGithub, FaInfo } from "react-icons/fa";
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <div>
      <div className="row">
        <div className="col-12">
          <footer className="footer">
            <div className="container text-center mx-auto">
              {/* a link to about us*/}
              <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href= "/about"
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
            <div className="row footer-bottom text-center w-100"><p className="mx-auto">Copyright © 2021, All Rights Reserved</p></div>
          </footer>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
