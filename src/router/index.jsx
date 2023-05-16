import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashBoard, HomePage, Login, Setting, SignUp } from "../pages";
import { ProtectedRoute } from "../components/";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route element={<ProtectedRoute/>}> 
        <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
