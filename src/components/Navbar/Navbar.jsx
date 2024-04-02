import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  
      return (
        <div className={styles.navbar}>
            <Logo data-test="logo" />
            <SearchBar data-test="searchBar" search={"Search a song of your choice"} />
            <Button data-test="feedbackButton" children={"Give Feedback"} />
        </div>
    );
    
}

export default Navbar;