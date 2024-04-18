import { useEffect, useState } from "react";
import axios from "axios";

const useReviewAuth = () => {
  const [isAuthor, setIsAuthor] = useState("");

  useEffect(() => {
    axios
      .get("/api/listings/author")
      .then((res) => {
        setIsAuthor(res.data)
      })
      .catch((err) => console.log(err));
  },[]);

  return isAuthor;
};

export default useReviewAuth;