import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import Home from "./pages/Home";
import NavBare from "./components/NavBare";
import AddEmployee from "./pages/employee/AddEmployee";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import { useLoading } from "./context/Loading";
import { ToastContainer } from "react-toastify";
import EmloyeeList from "./pages/employee/EmloyeeList";

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
  const location = useLocation();
  const { loading, setLoadingState } = useLoading();

  useEffect(() => {
    setLoadingState(true);
    let timer = setTimeout(() => {
      setLoadingState(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <div className="flex flex-col gap-5">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick={true}
        draggable={true}
        pauseOnHover={true}
      />

      {loading && <Spinner />}
      {location.pathname !== "/s" && <NavBare />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
