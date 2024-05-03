import { useEffect, useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    axios
      .get("/api/listings/token")
      .then((res) => {
        if (res.data.status == true) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return isLogin;
};

export default useLogin;
