import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import Home from "./pages/Home";
import NavBare from "./components/NavBare";
import AddEmployee from "./pages/employee/AddEmployee";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import { ToastContainer } from "react-toastify";
import EmloyeeList from "./pages/employee/EmloyeeList";
import { useAuth } from "./context/AuthContext";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/Add",
    element: <AddEmployee />,
  },
  {
    path: "/list",
    element: <EmloyeeList />,
  },
];

const App = () => {
  const { loading, setLoading } = useAuth();
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);
  return (
    <div className="flex flex-col ">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick={true}
        draggable={true}
        pauseOnHover={true}
      />

      {loading && <Spinner />}
      {!location.pathname.includes("/login") && <NavBare />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
