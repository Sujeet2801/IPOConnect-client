import React, { useEffect, useState } from "react";
import Single_Brokers from "./Single_Brokers";
import { fetchAllBrokers, getCurrentUser } from "../../services/api.js";

function All_Brokers() {
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await getCurrentUser();
        if (data?.data) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const getBrokers = async () => {
      try {
        setLoading(true);
        const { data } = await fetchAllBrokers();
        setBrokers(data?.data?.allBrokers || []);
        setError("");
      } catch (err) {
        setError("Failed to fetch brokers.");
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) getBrokers();
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div className="pt-8 px-4 sm:px-8 md:px-16 lg:px-32 bg-slate-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-600 
      font-bold mb-8 text-center sm:text-left">
        Made to <span className="text-green-600">Trade</span>
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading brokers...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid gap-5">
          {brokers.map((data, index) => {
            const rowBgColor =
              index % 2 === 0 ? "bg-purple-100" : "bg-slate-200";
            return (
              <div
                key={index}
                className={`p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg
                  transition duration-300 ${rowBgColor}`}
              >
                <Single_Brokers {...data} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default All_Brokers;
