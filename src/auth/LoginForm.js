// auth/LoginForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageContainer from "../components/PageContainer";
import login_bg from "../assests/images/login_bg.jpg";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset error and set loading to true
    setError("");
    setLoading(true);

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      setLoading(false);
      return;
    }

    // Simple password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      // Simulate authentication with JSONPlaceholder API
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        {
          email,
          password,
          rememberMe: remember,
        }
      );

      // Assuming the API returns a token in the response
      const token = response.data.token;

      // Store the token in localStorage (you might want to use more secure storage)
      localStorage.setItem("token", token);
      // set cookie

      document.cookie = `token=${token}; path=/; max-age=${3600}`;

      // Redirect to the home page on successful login
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      // Set loading to false after API request is complete
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <div
        style={{
          backgroundImage: `url(${login_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-screen h-screen overflow-hidden flex justify-center items-center "
      >
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            تسجيل الدخول
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                اسم المستخدم أو البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                كلمة السر
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your password"
              />
            </div>
            {/* remember password */}
            <div className="mb-4 flex gap-2 items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="remember" className="text-gray-600">
                تذكرني
              </label>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              disabled={loading} // Disable button during API request
            >
              {loading ? (
                <span className="loading loading-ring loading-lg"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default LoginForm;
