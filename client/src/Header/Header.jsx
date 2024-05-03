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
import useLogin from "../utils/useLogin";
import { ToggleContext } from "../Contexts/ToggleContext";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LogIn } from "../Pages";
export default function ButtonAppBar() {
  const Navigate = useNavigate();

  const { isToggle, setIsToggle } = useContext(ToggleContext);

  const Logout = () => {
    axios
      .get("/api/listings/logout")
      .then((res) => {
        window.location.reload(false);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const nav = useLogin();

  const Switch = () => {
    // return nav ? Navigate("/create") : setIsToggle(!isToggle);
    if (nav) {
      Navigate("/create");
    } else {
      toast.error("Login To Create Listing");
      setIsToggle(true);
    }
  };

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
              onClick={() =>
                // Navigate(nav ? "/create" : "/login");
                Switch()
              }
            >
              New Listing
            </Button>
          </Typography>
          {nav ? (
            <Button color="inherit" onClick={Logout}>
              LogOut
            </Button>
          ) : (
            <>
              {isToggle ? (
                <Button
                  className="NewList"
                  color="inherit"
                  onClick={() => {
                    // Navigate("/signup");
                    setIsToggle(!isToggle);
                  }}
                >
                  SignUp
                </Button>
              ) : (
                <Button
                  color="inherit"
                  onClick={() => {
                    // Navigate("/login");
                    setIsToggle(!isToggle);
                  }}
                >
                  LogIn
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
