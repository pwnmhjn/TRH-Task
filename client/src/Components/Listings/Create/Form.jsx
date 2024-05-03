import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function Form({ handleChange, listing, submitListing }) {
  return (
    <Box>
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
    </Box>
  );
}

export default Form;
