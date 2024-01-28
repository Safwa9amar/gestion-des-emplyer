import React from "react";
import logo from "../assests/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function NavBare() {
  const { logout } = useAuth();
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1 gap-6 items-center">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="">
            <div className="avatar mx-5">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>الضبط والاعدادات</a>
            </li>
            <li>
              <Link
                onClick={() => {
                  logout();
                }}
              >
                تسجيل الخروج
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-14" src={logo} alt="employee namagement" />
        </Link>
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
              <summary>
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
              <summary>
                <IoPeopleCircleOutline />
                ادارة المستخدمين
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none w-60">
                <li>
                  <Link to="list">قائمة المستخدمين</Link>
                </li>
                <li>
                  <Link to={"Add"}>اضافة مستخدم</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link>
              <FaChartPie />
              احصائيات
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
