import React, { useContext } from "react";
import "./IndexHome.css";
import Login from "../LogIn/LogIn";
import useLogin from "../../utils/useLogin";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import { ToggleContext } from "../../Contexts/ToggleContext";

function IndexHome() {
  const isLogin = useLogin();
  const { isToggle } = useContext(ToggleContext);

  if (!isLogin) {
    return (
      <>
        <div className="Index">{isToggle ? <Login /> : <SignUp />}</div>
      </>
    );
  } else {
    return <Home />;
  }
}

export default IndexHome;
