import { createContext, useState } from "react";

const ReviewContext = createContext(null);

const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState({});

  return (
    <ReviewContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewContextProvider };
