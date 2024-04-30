// import axios from "axios";
import Stack from "@mui/material/Stack";
import HomeCard from "../../Components/HomeCard";
import useListings from "../../Hooks/useListing";

function Home() {
  const listings = useListings();

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
        {listings.map((listing) => (
          <div key={listing._id}>
            <HomeCard listing={listing} />
          </div>
        ))}
      </Stack>
    </>
  );
}

export default Home;
