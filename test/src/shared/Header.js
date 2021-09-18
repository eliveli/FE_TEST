import React from "react";
import { ReactComponent as Logo } from "../image/logo.svg";
import {Grid} from "../elements";

const Header = () => {
  return(
    <Grid position="fixed"> 
      <Logo />
    </Grid>
  )
};

export default Header;
