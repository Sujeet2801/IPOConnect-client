import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderLogin() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const nav = useNavigate();

  const handle = () => {
    setShowSignupForm(true);
    nav("/v1/api/users/register");
  };

  const handleClose = () => {
    setShowSignupForm(false);
    nav("/v1/api/users/login");
  };

  return (
    <div className="flex mt-8 mb-8 mx-auto w-[700px] rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 font-sans">
      
      {/* Left Panel */}
      <div className="w-1/3 bg-gradient-to-b from-purple-600 to-purple-800 text-white flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">
          {showSignupForm ? "Welcome!" : "Welcome Back!"}
        </h2>
        <p className="text-center text-base font-light leading-relaxed">
          {showSignupForm
            ? "Create an account to get started."
            : "Sign in to access your account."}
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 bg-white px-10 py-12 flex flex-col justify-center">
        {showSignupForm ? (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter full name"
              className="input-style"
            />
            <input
              type="email"
              placeholder="Enter email"
              className="input-style"
            />
            <input
              type="password"
              placeholder="Create password"
              className="input-style"
            />
            <input
              type="text"
              placeholder="Enter mobile number"
              className="input-style"
            />
            <div className="flex gap-4 mt-6">
              <button className="btn-gradient w-1/2">Register</button>
              <button className="btn-outline w-1/2" onClick={handleClose}>
                Back to Login
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Enter Email"
              className="input-style"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-style"
            />
            <button className="btn-gradient">Sign In</button>
            <button className="btn-outline" onClick={handle}>
              Create New Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderLogin;
