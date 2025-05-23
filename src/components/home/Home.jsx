import React from "react";
import UpcomingIPO from "./UpcomingIPO";
import Ongoing from "./Ongoing";
import IPONewsAnalysis from "./IPONewsAnalysis";
import FAQ from "./FAQ";
import Ad from "./Ad";
import NewlyListedIPO from "./NewlyListed";

function Home() {
  return (
    <div className="flex flex-col gap-12 mx-4 md:mx-12 mt-8">
      {/* Banner Section */}
      <section
        className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white 
        text-center py-10 px-4 rounded-xl shadow-md"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome to IPOConnect 🚀
        </h1>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          Your one-stop platform to explore, analyze, and apply for the hottest
          IPOs in India. Stay informed. Invest smart. 📈
        </p>
      </section>

      {/* Features Section */}
      <div className="flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all
          duration-300 flex flex-col items-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold text-lg text-blue-700 mb-2">
              Track Upcoming IPOs
            </h3>
            <p className="text-sm text-gray-600">
              Get real-time data on all upcoming IPOs in India.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all
          duration-300 flex flex-col items-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-semibold text-lg text-blue-700 mb-2">
              In-depth Analysis
            </h3>
            <p className="text-sm text-gray-600">
              In depth sector and shark investor information.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300
          flex flex-col items-center">
            <div className="text-4xl mb-3">🏦</div>
            <h3 className="font-semibold text-lg text-blue-700 mb-2">
              Top Broker Insights
            </h3>
            <p className="text-sm text-gray-600">
              Evaluate broker ratings, reviews, and charges at one place.
            </p>
          </div>
        </div>
      </div>

      <UpcomingIPO />
      <Ongoing />
      
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        <Ad />
        <img
          src="/images/ipo_image.png"
          alt="IPO Illustration"
          className="h-[200px] sm:h-[250px] md:h-[265px] w-full md:w-[500px] object-cover rounded-lg"
        />
      </div>

      <NewlyListedIPO />
      <IPONewsAnalysis />
      <FAQ />
    </div>
  );
}

export default Home;
