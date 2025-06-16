import React, { useState, useEffect } from "react";
import { fetchAllBlogs } from "../../services/api.js";
import { useAuth } from "../../hooks/useAuth.jsx";
import Loader from "../../utility/Loader.jsx";
import RequireLoginMessage from "../../utility/RequireLoginMessage.jsx";

const itemsPerPage = 9;

function BlogHome() {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const { data } = await fetchAllBlogs();
        setBlogs(data.data.allBlog);
        setError("");
      } catch (err) {
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [user]);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogs.slice(startIndex, startIndex + itemsPerPage);

  if (!user) return <RequireLoginMessage page="Blogs" />;
  if (loading) return <Loader message="Loading blogs..." />;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="p-6">
      {/* Heading and tagline */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 
        via-pink-500 to-blue-500 bg-clip-text cursor-pointer hover:scale-105 
        transition-transform duration-300 mb-4">
          Blogs
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover insightful blog posts curated for investors and enthusiasts alike.
          Explore market trends, deep dives, and financial wisdom.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item, index) => (
          <div
            key={item.id || index}
            className="p-6 rounded-lg shadow-md flex flex-col items-center text-center 
            hover:shadow-xl transition duration-300 bg-gradient-to-b from-blue-100 to-white transform hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-60 h-40 object-cover rounded-md bg-gray-200"
            />
            <div className="text-lg font-semibold mt-3 text-blue-700">{item.title}</div>
            <div className="text-gray-600 mt-2 text-sm">
              <p>{item.Date} • {item.Time}</p>
            </div>
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-4 py-2 border rounded-md font-medium transition-all duration-300 ${
              currentPage === i + 1
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogHome;
