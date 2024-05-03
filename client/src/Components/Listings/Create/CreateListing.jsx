import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import "./CreateListing.css";
import { toast } from "react-toastify";
import Form from "./Form";
import useLogin from "../../../utils/useLogin";

import "react-toastify/dist/ReactToastify.css";

export default function CreateListing() {
  const navigate = useNavigate();
  const isLogin = useLogin();

  const [listing, setListing] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    country: "",
    location: "",
  });
  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    setListing((currListing) => {
      currListing[fieldName] = fieldValue;
      return { ...currListing };
    });
  };

  const submitListing = (event) => {
    event.preventDefault();
    axios
      .post("/api/listings", listing)
      .then((res) => {
        setListing(res.data);
        navigate("/");
        toast.success("Listing Created!");
      })
      .catch((err) => {
        console.log(err.response);
        navigate("/create");
        toast.error(err.response.data);
      });
  };

  if (isLogin) {
    return (
      <Form
        handleChange={handleChange}
        listing={listing}
        submitListing={submitListing}
      />
    );
  } else {
    return <Navigate to="/" />;
  }
}
