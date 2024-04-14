import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./From.css";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Form() {
  const navigate = useNavigate();

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
        setListing(res.data)
        toast.success("Listing Created!");
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data);
      });
    navigate(`/`);
  };

  return (
    <form onSubmit={submitListing} className="InputBox">
      <Typography variant="h4" component="h1">
        Create New Listing
      </Typography>
      <br />
      <TextField
        label="Enter Title"
        onChange={handleChange}
        name="title"
        value={listing.title}
        className="Inputs"
        required
      />
      <br />
      <br />
      <TextField
        label="Description"
        onChange={handleChange}
        name="description"
        value={listing.description}
        className="Inputs"
        required
      />
      <br />
      <br />
      <TextField
        label="Enter Price"
        onChange={handleChange}
        name="price"
        value={listing.price}
        className="Inputs"
        required
      />
      <br />
      <br />
      <TextField
        label="Enter Image URL"
        onChange={handleChange}
        name="image"
        value={listing.image}
        className="Inputs"
        required
      />
      <br />
      <br />
      <TextField
        label="Enter Location"
        onChange={handleChange}
        name="location"
        value={listing.location}
        className="Inputs"
        required
      />
      <br />
      <br />
      <TextField
        label="Enter Country"
        onChange={handleChange}
        name="country"
        value={listing.country}
        className="Inputs"
        required
      />
      <br />
      <br />
      <Button type="submit" variant="contained" size="large" color="success">
        Submit
      </Button>
    </form>
  );
}
