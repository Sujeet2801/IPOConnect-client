import React, { useEffect, useState } from "react";
import Single_Brokers from "./Single_Brokers";
import { fetchAllBrokers } from "../../services/api.js";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../utility/Loader";

function All_Brokers() {
  const { user } = useAuth();
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBrokers = async () => {
      try {
        setLoading(true);
        const { data } = await fetchAllBrokers();
        setBrokers(data?.data?.allBrokers || []);
        console.log(data.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch brokers.");
      } finally {
        setLoading(false);
      }
    };

    getBrokers();
    // if (user) getBrokers();
  }, []);

  if (loading) return <Loader message="Loading Brokers..." />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="pt-8 px-4 sm:px-8 md:px-16 lg:px-32 bg-slate-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-600 
      font-bold mb-8 text-center sm:text-left">
        Made to <span className="text-green-600">Trade</span>
      </h1>

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
    </div>
  );
}

export default All_Brokers;
