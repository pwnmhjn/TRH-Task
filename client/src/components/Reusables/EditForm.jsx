import React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./EditForm.css";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";

function EditForm() {
  const [listing, setListing] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    country: "",
    location: "",
  });
 
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/listings/edit/${id}`).then((res) => {
      setListing({
        ...listing,
        title: res.data.title,
        price: res.data.price,
        image: res.data.image,
        description: res.data.description,
        country: res.data.country,
        location: res.data.location,
      });
    });
  }, [id]);

  const changeListing = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setListing((prev) => {
      prev[fieldName] = fieldValue;
      return { ...prev };
    });
  };
  const navigate = useNavigate();
  const putData =  (event) => {
    event.preventDefault();
     axios
      .put(`/api/listings/${id}`, listing)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate("/");
    toast.success("Listing Edited")
  };

  return (
    <div className="EditBox">
      <Typography variant="h4" component="h1">
        Edit Your Listing
      </Typography>
      <TextField
        label="Title"
        name="title"
        value={listing.title}
        id="fullWidth"
        onChange={changeListing}
        className="EditInput"
        required
      />
      <br />
      <br />
      <TextField
        label="Description"
        name="description"
        value={listing.description}
        onChange={changeListing}
        id="fullWidth"
        className="EditInput"
        required
      />
      <br />
      <br />
      <TextField
        label="Price"
        name="price"
        value={listing.price}
        id="fullWidth"
        onChange={changeListing}
        className="EditInput"
        required
      />
      <br />
      <br />
      <TextField
        label="Image"
        name="image"
        value={listing.image}
        id="fullWidth"
        onChange={changeListing}
        className="EditInput"
        required
      />
      <br />
      <br />
      <TextField
        label="Location"
        name="location"
        value={listing.location}
        id="fullWidth"
        onChange={changeListing}
        className="EditInput"
        required
      />
      <br />
      <br />
      <TextField
        label="Country"
        name="country"
        value={listing.country}
        id="fullWidth"
        onChange={changeListing}
        className="EditInput"
        required
      />
      <br />
      <br />
      <Button variant="contained" onClick={putData} size="large">
        Submit
      </Button>
    </div>
  );
}

export default EditForm;
