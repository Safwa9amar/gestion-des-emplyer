import React from "react";
import PageContainer from "../../components/PageContainer";
import { toast } from "react-toastify";

export default function AddUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // check if password is empty
    if (data.password === "") {
      toast.error("كلمة السر فارغة");
      return;
    }
    // check the size of the password
    if (data.password.length < 8) {
      toast.error("كلمة السر يجب ان تكون اكثر من 8 احرف");
      return;
    }
    if (data.password !== data.confirmPassword) {
      toast.error("كلمة السر غير متطابقة");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/add-user`, {
      method: "POST",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(
        (res) =>
          res.status === 201 &&
          toast.success("تم اضافة المستخدم بنجاح") &&
          e.target.reset()
      )
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <PageContainer>
      <div className="pt-32 flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold border-b-2 border-green-400">
          اضافة مستخدم
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-10 py-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                الاسم الاول
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="الاسم الاول"
                type="text"
                required
                name="firstName"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                الاسم الاخير
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="الاسم الاخير"
                type="text"
                required
                name="lastName"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                البريد الالكتروني
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="البريد الالكتروني"
                type="email"
                required
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                رقم الهاتف
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                placeholder="رقم الهاتف"
                type="text"
                required
                name="phone"
              />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                الدور
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  name="role"
                >
                  <option value={"user"}>مستخدم</option>
                  <option value={"admin"}>مدير</option>
                  <option value={"manager"}>مراجع</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 8l5 5 5-5H5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* password */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                كلمة السر
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="كلمة السر"
                type="password"
                required
                name="password"
              />
            </div>
          </div>
          {/* password confirm */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                تاكيد كلمة السر
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="تاكيد كلمة السر"
                type="password"
                required
                name="confirmPassword"
              />
            </div>
          </div>
          <button
            className="btn btn-primary mt-5 justify-self-start "
            type="submit"
          >
            اضافة
          </button>
        </form>
      </div>
    </PageContainer>
  );
}
