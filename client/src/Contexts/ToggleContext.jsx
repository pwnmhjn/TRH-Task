import { createContext, useState } from "react";

export const ToggleContext = createContext(null);

export const ToggleContextProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ isToggle, setIsToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
