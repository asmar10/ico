import { Link } from "react-router-dom";
import React from "react";
import { scrollToTop } from "../../lib/helpers";

// scroll to element by id
const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container custom-container-four">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-8">
                <div className="footer-menu-two">
                  <ul className="navigation">
                    <li>
                      <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-5">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2023. All Rights Reserved Creationnetwork
                  </p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="scroll-up text-center">
                  <button
                    className="scroll-to-target"
                    data-target="html"
                    onClick={scrollToTop}
                  >
                    <i className="fas fa-arrow-up"></i>
                  </button>
                  <span>scroll Top</span>
                </div>
              </div>
              {/* <div className="col-lg-5"> */}
              <div className="col-md-4">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/www.CreationNetworkAI/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/CRNTNetworkAI"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/creation_network.ai/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pinterest.com/wwwcreationnetworkai/"
                        target="_blank"
                      >
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="footer-bottom-menu">
                  <ul>
                    <li>
                      <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
