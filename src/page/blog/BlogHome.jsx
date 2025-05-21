import React, { useState, useEffect } from "react";
import { fetchAllBlogs, getCurrentUser } from "../../services/api.js";

const itemsPerPage = 9;

function BlogHome() {
  
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getCurrentUser();
        setUser(data.data);
        console.log(data.data);
        
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

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

  if (user === null) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        Please log in to view the blog posts.
      </div>
    );
  }

  return (
    <div className="mx-12 mt-5">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 
        via-pink-500 to-blue-500 bg-clip-text cursor-pointer hover:scale-105 
        transition-transform duration-300 mb-4">
          Blogs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest blog posts, covering a wide range of topics and trends 
          to keep you informed and inspired.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {currentItems.map((item, index) => (
              <div
                key={item.id || index}
                className="p-4 border rounded-lg bg-white shadow-md flex flex-col 
                justify-center items-center gap-2"
              >
                <img
                  src={item.imageUrl}
                  alt={item.heading}
                  className="w-60 h-auto rounded-md bg-blue-400"
                />
                <p className="font-medium mt-2 mb-1 text-center text-[14px]">
                  {item.heading}
                </p>
                <div className="flex gap-5">
                  <p className="text-gray-600">{item.Date}</p>
                  <p className="text-gray-600">{item.Time}</p>
                </div>
                <a
                  href={item.readMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 mt-3 px-3 py-1 text-white rounded-md hover:bg-blue-600"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`mx-1 px-4 py-2 border rounded-md ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BlogHome;
