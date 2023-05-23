import { Outlet, Navigate } from "react-router-dom";

const ProtectSettings = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("User"));

  if (currentUser.role === "admin"&& currentUser.token!=="") {
    return <Outlet />;
  }
  else{
  return <Navigate to="/403" />;
  }
};

export default ProtectSettings;
