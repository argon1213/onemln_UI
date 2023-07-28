import { Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import LogIn from "../views/login";
import Register from "../views/register";
import MyDetail from "../views/detail";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MyDetail />} />
        <Route path="/" element={<LogIn />} />
      </Route>
    </Routes>
  );
}

export default Router;
