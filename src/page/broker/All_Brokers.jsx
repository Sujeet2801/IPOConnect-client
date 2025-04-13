import React from "react";
import Single_Brokers from "./Single_Brokers";
import { brokersData } from "../../constant/brokers.js"; 

function All_Brokers() {
  return (
    <div className="pt-8 px-4 sm:px-8 md:px-16 lg:px-32 bg-slate-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-600 font-bold mb-8 text-center sm:text-left">
        Made to <span className="text-green-600">Trade</span>
      </h1>
      <div className="grid gap-5">
        {brokersData.map((data, index) => {
          const rowBgColor =
            index % 2 === 0 ? "bg-purple-100" : "bg-slate-200";
          return (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ${rowBgColor}`}
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
