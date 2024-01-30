// App.js
import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBare from "./components/NavBare";
import Spinner from "./components/Spinner";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import routes from "./navigation/routes";

const App = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick={true}
        draggable={true}
        pauseOnHover={true}
        limit={3}
      />

      {/* {loading && <Spinner />} */}
      {!location.pathname.includes("/login") && <NavBare />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
