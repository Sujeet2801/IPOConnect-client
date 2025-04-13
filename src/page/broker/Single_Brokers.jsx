import React from "react";
import { BiMessage, BiUser } from "react-icons/bi";

function Single_Brokers({
    companyName,
    companyLogo,
    ratings,
    reviews,
    accounts,
    openAccLink,
    learnMore,
    tradingCategory,
    accOpenCharge,
    maintainanceCharge,
    deliveryCharge,
    intradayBrokerage
}) {
    return (
        <div className="flex flex-col md:flex-row gap-6 px-6 py-4 rounded-lg justify-between 
    items-center w-full">
            {/* Left Section */}
            <div className="flex flex-col gap-2 text-center md:text-left w-full md:w-auto">
                <h2 className="text-lg font-bold">{companyName}</h2>
                <p className="text-sm text-gray-700">⭐ {ratings}</p>

                {/* Reviews & Accounts */}
                <div className="flex justify-center md:justify-start mt-4 gap-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center md:justify-start gap-1 text-gray-700">
                            <BiMessage />
                            <p>{reviews}L</p>
                        </div>
                        <p className="text-sm text-gray-600">Reviews</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center md:justify-start gap-1 text-gray-700">
                            <BiUser />
                            <p>{accounts}</p>
                        </div>
                        <p className="text-sm text-gray-600">Accounts</p>
                    </div>
                </div>

                {/* Open Account Section */}
                <p className="text-green-600 font-semibold mt-2">Open Demat A/C for FREE</p>
                <div className="flex justify-center md:justify-start gap-4 mt-2">
                    <a href={openAccLink} target="_blank" rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
                        Open A/C
                    </a>

                    <a href={learnMore} target="_blank" rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
                        Learn More
                    </a>
                </div>
            </div>

            {/* Trading Categories */}
            <div className="flex md:flex-col flex-wrap text-sm gap-2 text-gray-700">
                {tradingCategory.map((value, index) => (
                    <span key={index} className="bg-blue-100 px-2 py-1 rounded">{value}</span>
                ))}
            </div>


            {/* Charges Section */}
            <div className="text-sm text-gray-800 space-y-2 text-center md:text-left">
                <div>
                    <p className="font-semibold">A/C</p>
                    <p>{accOpenCharge}</p>
                </div>
                <div>
                    <p className="font-semibold">Maintenance</p>
                    <p>{maintainanceCharge}</p>
                </div>
                <div>
                    <p className="font-semibold">Delivery</p>
                    <p>{deliveryCharge}</p>
                </div>
                <div>
                    <p className="font-semibold">Intraday</p>
                    <p>{intradayBrokerage}</p>
                </div>
            </div>

            {/* Company Logo */}
            <div className="w-20 md:w-28">
                <img src={companyLogo} alt={companyName} className="rounded-lg shadow-md w-full" />
            </div>
        </div>
    );
}

export default Single_Brokers;
