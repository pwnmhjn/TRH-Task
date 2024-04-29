import { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import HomeCard from "../../Components/HomeCard";

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
            <HomeCard listing={listing} />
          </div>
        ))}
      </Stack>
    </>
  );
}

export default Home;
export { axios };
