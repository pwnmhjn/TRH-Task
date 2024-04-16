import React, { useEffect } from "react";
import ShowCard from "../Reusables/ShowCard";
import { useState } from "react";
import axios from "axios";

function Show() {
  const [listing, setListing] = useState({});
  const pathName = document.location.pathname;
  const URL = `/api/listings${pathName}`;

  const getData = () => {
    useEffect(() => {
      async function getListing() {
        const response = await axios.get(URL);
        setListing(response.data);
      }
      getListing();
    }, []);
  };

  getData();
  return (
    <div>
      <ShowCard listing={listing} />
    </div>
  );
}

export default Show;
