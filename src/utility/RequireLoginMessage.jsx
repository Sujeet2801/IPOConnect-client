import { FiLock } from "react-icons/fi";

const RequireLoginMessage = ({ page = "this content" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-4 
    bg-red-50 border border-red-200 rounded-2xl shadow-md mx-auto max-w-md my-8">
      <FiLock className="text-red-500 text-4xl" />
      <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
      <p className="text-base text-red-500 font-medium">
        Please log in to view {page}.
      </p>
      <a
        href="/login"
        className="mt-2 inline-block px-5 py-2 bg-red-500 hover:bg-red-600 text-white 
        font-semibold rounded-lg transition-all duration-200"
      >
        Login Now
      </a>
    </div>
  );
};

export default RequireLoginMessage;
