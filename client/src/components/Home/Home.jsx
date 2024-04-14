import { useEffect, useState } from "react";
// import './App.css'
import axios from "axios";
// import Header from './components/Header/Header.jsx'
// import Footer from './components/Footer/Footer.jsx'
import RecipeReviewCard from "../Reusables/HomeCard";
import Stack from "@mui/material/Stack";

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("/api/listings").then((res) => {
      setListings(res.data);
    });
  }, []);

  return (
    <>
      <Stack
        spacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="space-between"
        marginRight={2}
        marginLeft={2}
      >
        {listings.map((listing, index) => (
          <div key={listing._id}>
            <RecipeReviewCard listing={listing} />
          </div>
        ))}
      </Stack>
    </>
  );
}

export default Home;
export { axios };
