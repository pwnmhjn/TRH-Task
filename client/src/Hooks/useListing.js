import axios from "axios";

import React from "react";

const useListings = () => {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/listings")
      .then((res) => {
        setListings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return listings;
};

export default useListings;
