import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LogIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
const Navigate = useNavigate()
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
       if(res.data.success){
        Navigate("/")
      toast.success("User LogIn")
        window.location.reload(false)

       }else{
        toast.error(res.data.message)
        Navigate("/login")
       }
      })
      .catch((err) => {
        console.log(err)
      });
    setUser({
      username: "",
      password: "",
    });
    
  };

  return (
    <>
    
    
    <form className="InputBox"  style={{ marginTop: 10 }}>
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
      <Button type="submit" variant="contained" onClick={LoginUser}  size="large" color="success">
        LogIN
      </Button>
      &nbsp;
      <Button  variant="outlined" onClick={()=>{
      Navigate("/signup")
    }}  size="large" color="success">
        SignUP
      </Button>
    </form>
   
    </>
  );
}

export default LogIn;
