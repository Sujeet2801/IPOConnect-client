import React from 'react'

function Ad() {
    return (
      <div className="flex flex-col bg-white max-w-[750px] mx-auto gap-5 p-4 border rounded-lg shadow-md mb-10 bg-gradient-to-b from-blue-400 to-white">
        <p className="text-xl text-center font-bold">IPOConnect</p>
        <p className="text-2xl text-center font-bold">Applying for this IPO?</p>
        <p className=' opacity-70'>
          The way you compare & invest in only the best IPO, let us help you get
          started by comparing and selecting the best Demat account. Open your
          Demat account now to apply for your favourite IPO.
        </p>
        <button className="bg-blue-500 w-56 text-white px-4 py-2 rounded-lg mx-auto">
          Open a Demat Account
        </button>
      </div>
    );
  }

export default Ad