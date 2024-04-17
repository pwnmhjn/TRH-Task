import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "./Header.css";
import axios from "axios";

export default function ButtonAppBar() {
  const Navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ExploreIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className="HomeNav" to="/">
              WanderLand
            </NavLink>
            <Button
              sx={{ ml: 4 }}
              color="inherit"
              onClick={() => {
                Navigate("/create");
              }}
            >
              New Listing
            </Button>
          </Typography>
          <Button
            className="NewList"
            color="inherit"
            onClick={() => {
              Navigate("/signup");
            }}
          >
            SignUp
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              Navigate("/login");
            }}
          >
            LogIn
          </Button>
          <Button color="inherit" onClick={Logout}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
