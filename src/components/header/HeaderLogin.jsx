import React, { useEffect } from "react";

function HeaderLogin({ isSignUp, closeAuth }) {

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "auth-modal") closeAuth();
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [closeAuth]);

  return (
    <div id="auth-modal" className="fixed inset-0 bg-black bg-opacity-60 
          flex justify-center items-center z-50 backdrop-blur-sm">

      <div className="relative w-[900px] bg-purple-500 
      shadow-2xl rounded-lg h-[500px] flex overflow-hidden border border-blue-100">

        {/* Left Side */}
        <div className="w-1/3 backdrop-blur-md flex flex-col justify-center 
              items-center p-6 rounded-l-lg shadow-md">

          <h2 className="text-xl font-semibold text-white drop-shadow-lg mb-4">
            {isSignUp ? "Welcome Back!" : "New Here?"}
          </h2>
          <p className="text-sm text-white/80 mb-6 text-center px-4">
            {isSignUp ? "Already have an account?" : "Create an account to get started."}
          </p>
          <button
            onClick={closeAuth}
            className="px-5 py-2 bg-white/30 text-white font-medium 
            rounded-md hover:bg-white/40 transition duration-300"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Right Side */}
        <div className="w-2/3 p-10 bg-white rounded-r-lg shadow-inner">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          <form className="space-y-5">
            {isSignUp && (
              <div>
                <label className="block text-gray-600 font-medium">Full Name</label>
                <input type="text" className="w-full border border-gray-300 
                rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter full name" />
              </div>
            )}

            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input type="email" className="w-full border border-gray-300 
              rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter email" />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Password</label>
              <input type="password" className="w-full border border-gray-300 
              rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter password" />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-gray-600 font-medium">Confirm Password</label>
                <input type="password" className="w-full border border-gray-300 
                rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Confirm password" />
              </div>
            )}

            <button className="w-full bg-blue-600 text-white py-3 rounded-md 
            font-semibold text-lg shadow-lg hover:bg-blue-700 transition 
            duration-300 transform hover:scale-105">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderLogin;
