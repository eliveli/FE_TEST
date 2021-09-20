import React from "react";
import { ReactComponent as Logo } from "../image/logo.svg";
import {Grid} from "../elements";

const Header = () => {
  return(
    <Grid position="fixed" top="0" zIndex="2" width="100%" bgColor="white"> 
      <Logo />
    </Grid>
  )
};

export default Header;
