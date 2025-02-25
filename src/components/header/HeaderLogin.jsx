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
    <div id="auth-modal" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-[900px] bg-white shadow-lg rounded-md h-[470px] flex">
        
        {/* Left Side */}
        <div className="w-1/3 bg-gray-200 flex flex-col justify-center items-center p-6 rounded-l-md">
          <h2 className="text-xl font-semibold mb-4">
            {isSignUp ? "Welcome Back!" : "New Here?"}
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            {isSignUp ? "Already have an account?" : "Create an account to get started."}
          </p>
          <button
            onClick={() => closeAuth()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Right Side */}
        <div className="w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          <form className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input type="text" className="w-full border border-gray-300 
                rounded-md p-2" placeholder="Enter full name" />
              </div>
            )}

            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full border border-gray-300 
              rounded-md p-2" placeholder="Enter email" />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full border border-gray-300 
              rounded-md p-2" placeholder="Enter password" />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" className="w-full border border-gray-300 
                rounded-md p-2" placeholder="Confirm password" />
              </div>
            )}

            <button className="w-full bg-blue-500 text-white py-2 rounded-md 
            hover:bg-blue-600">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderLogin;

