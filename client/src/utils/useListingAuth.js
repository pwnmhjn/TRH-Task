import { useEffect, useState } from "react";
import axios from "axios";

const useListingAuth = () => {
  const [isOwner, setIsOwner] = useState("");

  useEffect(() => {
    axios
      .get("/api/listings/owner")
      .then((res) => {
        setIsOwner(res.data)
      })
      .catch((err) => console.log(err));
  },[]);

  return isOwner;
};

export default useListingAuth;