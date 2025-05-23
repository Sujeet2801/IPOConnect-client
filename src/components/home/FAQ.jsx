import { useState } from "react";
import { faqs } from "../../constant/data.js";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border border-blue-200 rounded-lg shadow-sm 
            transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-blue-100 
                hover:bg-blue-200 text-left text-blue-800 font-medium"
              >
                {faq.question}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {/* Smooth transition wrapper */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } bg-white px-4`}
              >
                <div className="py-4 text-gray-700 border-t">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
