import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
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
const Navigate = useNavigate()
  const CreateUser = (event) => {
    event.preventDefault();
    axios
      .post("/api/listings/register", user)
      .then((res) => {
       if(res.data.success){
         Navigate("/login")
        toast.success(res.data.message)
       }else{
        toast.error(res.data.message)
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
    <form className="InputBox" onSubmit={CreateUser}  style={{ marginTop: 10 }}>
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
      />
      <br />
      <br />
      <Button type="submit"  variant="contained" size="large" color="success">
        SignUp
      </Button>
      &nbsp;
      <Button variant="outlined" onClick={()=>{
        Navigate("/login")
      }}  size="large" color="success">
        LogIN
      </Button>
    </form>
  );
}

export default SignUp;
