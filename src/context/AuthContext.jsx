import {useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
   JSON.parse(localStorage.getItem("user"))|| null
  );

  const login=()=>{
    //TO DO
    setcurrentUser({
      id:1,
      name:"John Doe",
      profilePic:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    });
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser,login}}>
      {children}
    </AuthContext.Provider>
  );
};