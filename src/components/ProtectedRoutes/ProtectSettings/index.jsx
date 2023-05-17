import { Outlet, Navigate } from "react-router-dom";

const ProtectSettings = () => {
  let currentUser = JSON.parse(localStorage.getItem("logedUser"));
  
  if (currentUser === null) {
    currentUser = [{ role: " " }];
  }
  
  if (currentUser[0].role === "admin") {
    return <Outlet />;
  }
  else{
  return <Navigate to="/403" />;
  }
};

export default ProtectSettings;
