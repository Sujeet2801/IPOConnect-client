import React from "react";
import Single_Brokers from "./Single_Brokers";
import { brokersData } from "../../data/data.js";

function All_Brokers() {
  return (
    <div className="pt-10 px-32 bg-slate-100">
      <h1 className="text-5xl text-purple-600 font-bold mb-16">
        Made to <span className="text-green-600">Trade</span>
      </h1>
      <div className="grid gap-5">
        {brokersData.map((data, index) => {
          const rowBgColor = index % 2 === 0 ? "bg-purple-200" : "bg-slate-200"; // Alternating colors
          return (
            <div key={index} className={`p-4 rounded-lg shadow ${rowBgColor}`}>
              <Single_Brokers {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default All_Brokers;
