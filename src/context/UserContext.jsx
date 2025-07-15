import React, { createContext, useState, useContext } from "react";


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); 

  
  const logout = () => setToken(true);

 

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);