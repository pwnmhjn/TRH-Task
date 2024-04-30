import { createContext } from "react";
import { useContext } from "react";

const ListingContext = createContext({
  delList: () => {},
  name: "pawan",
});

const ListingContextProvider = ListingContext.Provider;

const useList = () => {
  return useContext(ListingContext);
};
export { ListingContext, ListingContextProvider, useList };
