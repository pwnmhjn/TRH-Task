import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card } from "@mui/material";
import { ToggleContext } from "../../Contexts/ToggleContext";

function SignUp() {
  const { setIsToggle, isToggle } = useContext(ToggleContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
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
  const Navigate = useNavigate();
  const CreateUser = (event) => {
    event.preventDefault();
    axios
      .post("/api/listings/register", user)
      .then((res) => {
        if (res.data.success) {
          Navigate("/login");
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => console.log(err));
    setUser({
      name: "",
      email: "",
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
        height: "470px",
      }}
      style={{ marginTop: 50 }}
    >
      <form
        className="InputBox"
        onSubmit={CreateUser}
        style={{ marginTop: 10 }}
      >
        <Typography variant="h4" component="h1">
          Sign Up
        </Typography>
        <br />
        <TextField
          label="Name"
          onChange={handleChange}
          name="name"
          className="Inputs"
          value={user.name}
          required
        />
        <br />
        <br />
        <TextField
          label="Email"
          onChange={handleChange}
          name="email"
          className="Inputs"
          value={user.email}
          required
        />
        <br />
        <br />
        <TextField
          label="UserName"
          onChange={handleChange}
          name="username"
          className="Inputs"
          value={user.username}
          required
        />
        <br />
        <br />
        <TextField
          label="Password"
          onChange={handleChange}
          name="password"
          className="Inputs"
          required
          value={user.password}
          type="password"
        />{" "}
        <br /> <br />
        <span>
          {" "}
          Already have an Account?{" "}
          <Link onClick={() => setIsToggle(!isToggle)}>Click</Link>
        </span>
        <br />
        <br />
        <Button type="submit" variant="contained" size="large" color="success">
          SignUp
        </Button>
        &nbsp;
      </form>
    </Card>
  );
}

export default SignUp;
