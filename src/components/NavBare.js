import React, { useEffect } from "react";
import logo from "../assests/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaChartPie, FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { CiLogout, CiUser } from "react-icons/ci";
import Spinner from "./Spinner";

export default function NavBare() {
  const { logout, loading, setLoading } = useAuth();
  // const location = useLocation();
  const location = useLocation().pathname;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);
  // get path name

  return (
    <div className="noprint navbar bg-base-100 fixed w-[90%] filter drop-shadow-lg z-50 top-0 left-0 right-0 m-auto rounded-b-3xl">
      <div className="flex-1 gap-6 items-center">
        {/* <Link to="/">
          <img className="w-10" src={logo} alt="employee namagement" />
        </Link> */}
        <div className="dropdown dropdown-bottom">
          {/* <FaUser
            className="text-2xl cursor-pointer m-5 "
            tabIndex={0}
            aria-label="Open user menu"
          /> */}
          {/* 
          <ul
            dir="rtl"
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          > */}
          <ul className="menu menu-horizontal px-1 z-50">
            <li>
              <Link
                onClick={() => {
                  logout();
                }}
                to={"/login"}
              >
                <CiLogout /> تسجيل الخروج
              </Link>
            </li>
            <li>
              <Link to={"/account-parameters"}>
                <CiUser /> اعدادت الحساب
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none" dir="rtl">
        <ul className="menu menu-horizontal px-1 z-50">
          <li>
            <Link to={"/"}>
              <IoHomeOutline /> الرئيسية
            </Link>
          </li>

          <li>
            <details>
              <summary
                className={`
                ${location === "/list" ? "bg-green-400" : ""}
                `}
              >
                <BsPeople /> ادارة الموظفين
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none w-60">
                <li>
                  <Link to="list">قائمة الموظفين</Link>
                </li>
                <li>
                  <Link to={"Add"}>اضافة موظف</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary
                className={`
                ${
                  location === "/users-list" || location === "/add-user"
                    ? "bg-green-400"
                    : ""
                }
                `}
              >
                <IoPeopleCircleOutline />
                ادارة المستخدمين
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none w-60">
                <li>
                  <Link to="/users-list">قائمة المستخدمين</Link>
                </li>
                <li>
                  <Link to={"/add-user"}>اضافة مستخدم</Link>
                </li>
              </ul>
            </details>
          </li>
          <li
            className={`
                ${location === "/statistics" ? "bg-green-400" : ""}
                `}
          >
            <Link to={"/statistics"}>
              <FaChartPie />
              احصائيات
            </Link>
          </li>
        </ul>
      </div>
      {loading && <Spinner />}
    </div>
  );
}
