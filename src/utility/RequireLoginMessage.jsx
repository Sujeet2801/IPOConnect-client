import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RequireLoginMessage = ({ page = "this content" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-4 
      bg-gradient-to-br from-cyan-50 to-violet-100 border border-indigo-200 rounded-2xl 
      shadow-lg mx-auto max-w-md my-12 transition-all duration-300 ease-in-out">

      <FiLock className="text-indigo-500 text-5xl animate-bounce" />

      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600">
        You’re Almost There!
      </h2>

      <p className="text-base text-indigo-700 font-medium">
        To unlock <strong>{page}</strong>, please sign in to your account.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-2 inline-block px-6 py-2.5 text-white font-semibold rounded-md 
          bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 
          hover:to-purple-600 transition-all duration-300 shadow-md"
      >
        Login to Continue
      </button>
    </div>
  );
};

export default RequireLoginMessage;
