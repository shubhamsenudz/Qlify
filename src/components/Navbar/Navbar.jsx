import React from "react";
import "../../App.css";
import MinimalistSearchBar from "../Search/Search";
import Logo from "../Logo";
import CustomButton from "../Button/Button";
import { Grid } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Grid container className="navbar" spacing={4} sx={{ padding: "2rem" }}>
        <Logo />
        <MinimalistSearchBar />
        <CustomButton />
      </Grid>
    </>
  );
};

export default Navbar;