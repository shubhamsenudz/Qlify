import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Logo />
            <SearchBar search={"Search a song of your choice"} />
            <Button children={"Give Feedback"} />
        </div>
    );
}

export default Navbar;