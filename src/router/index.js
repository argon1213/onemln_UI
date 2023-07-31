import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts";
import LogIn from "../views/login";
import Register from "../views/register";
import MyDetail from "../views/detail";
import ErrorPage from "../views/error-page";

const useAuth = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

function Router() {
  const currentUser = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        {!currentUser ? (
          <>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Navigate to={"/login"} />} />
            <Route path="/" element={<Navigate to={"/login"} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to={"/dashboard"} />} />
            <Route path="/register" element={<Navigate to={"/dashboard"} />} />
            <Route path="/dashboard" element={<MyDetail />} />
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
          </>
        )}
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
