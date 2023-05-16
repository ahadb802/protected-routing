import { Outlet, Navigate } from "react-router-dom";

const Protectedroute = () => {
  let currentUser = JSON.parse(localStorage.getItem("logedUser"));
  
  if (currentUser === null) {
    currentUser = [{ role: " " }];
  }
  console.log(currentUser[0].role);
  if (currentUser[0].role === "user" || currentUser[0].role === " ") {
    return <Navigate to="/403" />;
  }
  return <Outlet />;
};

export default Protectedroute;
