import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import LogoImage from "../../assets/BrandLogo.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar} data-testid="navbar">
      <div className={styles.logoDiv}>
        <img src={LogoImage} alt="logo" /> 
      </div>
      <input type="text" placeholder="Search a song of your choice" /> 
      <button className={styles.feedbackButton} variant="black" textColor="var(--button-text-color)" fontFamily="Poppins"> 
        Give Feedback
      </button>
    </nav>
  );
};

export default NavBar;
