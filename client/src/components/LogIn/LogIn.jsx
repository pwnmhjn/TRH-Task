import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function LogIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setUser((prev) => {
      prev[fieldName] = fieldValue;
      return { ...prev };
    });
  };

  const CreateUser = (event) => {
    event.preventDefault();
    axios
      .post("/api/listings/login", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <form className="InputBox" onSubmit={CreateUser} style={{ marginTop: 10 }}>
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
      <Button type="submit" variant="contained" size="large" color="success">
        LogIN
      </Button>
    </form>
  );
}

export default LogIn;
