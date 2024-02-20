import React from "react";

import styles from "../../components/Navbar/Navbar.module.css";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import LogoImage from "../../assets/BrandLogo.png";


const NavBar = () => {
  return (
    // <nav className={styles.navBar}>
    //   <Logo/>
    //   <Search />
    //   <Button>
    //   Feedback Button
    // </Button>
    // </nav>
    <nav className={styles.navbar}>
    <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
     <Search search={"Search a song of your choice"}/>
    <Button children="Give Feedback"/>
</nav>
  );
};

export default NavBar;
