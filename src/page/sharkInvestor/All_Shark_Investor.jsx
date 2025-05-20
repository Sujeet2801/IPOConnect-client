import React, { useEffect, useState } from 'react';
import Single_Shark_Investor from './Single_Shark_Investor.jsx';
import { fetchAllSharkInvestors, getCurrentUser } from '../../services/api.js';

function All_Shark_Investor() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await getCurrentUser();
        
        if (data?.data) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);


  useEffect(() => {
    const getInvestors = async () => {
      try {
        setLoading(true);
        const { data } = await fetchAllSharkInvestors();        
        setInvestors(data?.data || []);
        setError('');
      } catch (err) {
        setError('Failed to load shark investors.');
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      getInvestors();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="mt-5">

      {/* Heading */}
      <div className="text-3xl font-bold mx-auto text-center bg-gradient-to-r from-blue-500 
      via-pink-500 to-blue-500 text-transparent bg-clip-text cursor-pointer 
      hover:scale-105 transition-transform duration-300 mb-4">
        Shark Investors
      </div>

      {/* Tagline */}
      <div className="text-lg text-gray-600 mx-auto text-center mb-8 max-w-2xl">
        Discover the prominent Shark Investors who are shaping the future of Indian startups with 
        their strategic investments and expertise.
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading investors...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mx-8 gap-5 justify-center 
        items-center">
          {investors.map((data, index) => (
            <div key={index} className="flex">
              <Single_Shark_Investor {...data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default All_Shark_Investor;
