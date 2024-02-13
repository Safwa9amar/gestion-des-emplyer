// AccountParameters.js
import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import profileHolder from "../assests/images/profileHolder.jpg";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import checkPasswordMatch from "../utils/checkPasswordMatch";
import { toast } from "react-toastify";
const AccountParameters = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    // Update the form data when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if password is empty
    if (formData.password === "") {
      toast.error("كلمة السر فارغة");
      return;
    }

    // check the size of the password
    if (formData.password.length < 8) {
      toast.error("كلمة السر يجب ان تكون اكثر من 8 احرف");
      return;
    }
    if (!checkPasswordMatch(formData)) {
      toast.error("كلمة السر غير متطابقة");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/users/${user.id}`, {
      method: "PUT",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    setFormData({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    });
  }, [user]);
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="mt-20 text-3xl font-bold">اعدادت الحساب</h1>
        <div className="mt-10 flex justify-center gap-20 w-full">
          <form className="w-1/2" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">الاسم</span>
              </label>
              <input
                type="text"
                placeholder="الاسم"
                className="input input-bordered w-full max-w-xs"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  البريد الالكتروني <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                className="input input-bordered w-full max-w-xs"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  رقم الهاتف <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="phone"
                placeholder="رقم الهاتف"
                className="input input-bordered w-full max-w-xs"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">كلمة السر</span>
              </label>
              <input
                type="password"
                placeholder="كلمة السر"
                className="input input-bordered w-full max-w-xs"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">تاكيد كلمة السر</span>
              </label>
              <input
                type="password"
                placeholder="تاكيد كلمة السر"
                className="input input-bordered w-full max-w-xs"
                name="password2"
                value={formData.password2}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control mt-6  self-start">
              <input
                type="submit"
                value="تحديث"
                className="btn btn-primary btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default AccountParameters;
