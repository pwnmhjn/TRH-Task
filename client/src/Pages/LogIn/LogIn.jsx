import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { ToggleContext } from "../../Contexts/ToggleContext";

function LogIn() {
  const { setIsToggle, isToggle } = useContext(ToggleContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const Navigate = useNavigate();
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setUser((prev) => {
      prev[fieldName] = fieldValue;
      return { ...prev };
    });
  };

  const LoginUser = (event) => {
    axios
      .post("/api/listings/login", user)
      .then((res) => {
        if (res.data.success) {
          Navigate("/");
          toast.success("User LogIn");
          window.location.reload(false);
        } else {
          toast.error(res.data.message);
          Navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <Card
      sx={{
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        width: 700,
        height: "300px",
      }}
      style={{ marginTop: 50 }}
    >
      <form style={{ marginTop: 20 }}>
        <Typography variant="h4" component="h1">
          Log In
        </Typography>
        <br />
        <TextField
          label="UserName"
          className="Inputs"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <TextField
          label="Password"
          className="Inputs"
          name="password"
          value={user.password}
          required
          onChange={handleChange}
          type="password"
        />
        <br />
        <br />
        <span>
          {" "}
          Create Account?{" "}
          <Link onClick={() => setIsToggle(!isToggle)}>Click</Link>
        </span>

        <div style={{ marginLeft: 250 }}>
          <Button
            type="submit"
            variant="contained"
            onClick={LoginUser}
            size="large"
            color="success"
          >
            LogIN
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default LogIn;
