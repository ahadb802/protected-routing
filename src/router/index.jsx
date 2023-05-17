import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashBoard, HomePage, Login, Setting, SignUp } from "../pages";
import {
  ProtectDashBoard,
  ProtectSettings,
} from "../components/ProtectedRoutes";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectSettings />}>
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route element={<ProtectDashBoard />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
