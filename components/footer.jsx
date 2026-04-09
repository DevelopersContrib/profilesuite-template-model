import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ domain, social }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <p className="footer-brand">{domain}</p>
            <div className="social-icons">
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copyright mb-0">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
            <p className="footer-powered mb-0">
              Powered by ProfileSuite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
