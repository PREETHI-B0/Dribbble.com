import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ handleLoadMore }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.loadMoreButton}>
        <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
          Load more work
        </button>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img src="/image/logo.png" alt="Dribbble Logo" className={styles.logo} />
          </div>
          <nav className={styles.footerNav}>
            <ul className={styles.footerNavList}>
              <li><a href="#">For designers</a></li>
              <li><a href="#">Hire talent</a></li>
              <li><a href="#">Inspiration</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </nav>
          <div className={styles.socialIcons}>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          © 2024 Dribbble
        </div>
        <nav className={styles.legalLinks}>
          <ul className={styles.legalLinksList}>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Designers</a></li>
            <li><a href="#">Freelancers</a></li>
            <li><a href="#">Tags</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
