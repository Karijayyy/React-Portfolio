import React from "react";
import { Link, useLocation } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(()=>({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight:"20 px",
  },
  title: {
    flexGrow: 1,
  },
}));



function Navbar() {

  const location = useLocation();

  const classes = useStyles();

  return (
    <ul className="nav nav-tabs">

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Kari Johnson
    </Typography>
    {/* <Button color="inherit">Login</Button> */}
  </Toolbar>
</AppBar>

        {/* Home link */}
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>

     {/* Contact link */}
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
        
        {/* Portfolio link */}
        <li className="nav-item">
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>

      {/* </li> */}
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link> */}

    </ul>
  );
}

export default Navbar;
