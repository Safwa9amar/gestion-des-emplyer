// routes.js
import React from "react";
import LoginForm from "../auth/LoginForm";
import Home from "../pages/Home";
import AddEmployee from "../pages/employee/AddEmployee";
import NotFound from "../pages/NotFound";
import EmloyeeList from "../pages/employee/EmloyeeList";
import AccountParameters from "../pages/AccountParameters";
import AddUser from "../pages/users/AddUser";
import UsersList from "../pages/users/UsersList";
import Statics from "../pages/Statics";
import Payroll from "../pages/employee/Payroll";

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
  {
    path: "/edit/:id",
    element: <AddEmployee edit={true} />,
  },
  {
    path: "/account-parameters",
    element: <AccountParameters />,
  },
  {
    path: "/add-user",
    element: <AddUser />,
  },
  {
    path: "/users-list",
    element: <UsersList />,
  },
  {
    path: "/users/edit/:id",
    element: <AddUser edit={true} />,
  },
  {
    path: "/statistics",
    element: <Statics />,
  },
  {
    path: "/payroll/:id",
    element: <Payroll />,
  },
];

export default routes;
