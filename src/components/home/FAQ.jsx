import { useState } from "react";
import { ChevronDown, ChevronUp, Factory } from "lucide-react";

const faqs = [
  {
    question: "What is an IPO?",
    answer: "IPO or the Initial Public Offering is the first time a company issues its shares to the public. As an investor, you will now be able to subscribe for such shares, which was earlier open to only a specific lot of internal and institutional investors via opening a Demat account.",
  },
  {
    question: "How to invest in an IPO?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
  },
  {
    question: "What is the benefit of an IPO?",
    answer: "You can install React using create-react-app or Vite.",
  },
  {
    question: "What are the disadvantages of an IPO?",
    answer: "You can install React using create-react-app or Vite.",
  },
  {
    question: "What is the difference between book building issue and fixed price issue?",
    answer: "You can install React using create-react-app or Vite.",
  },
  {
    question: "Is it mandatory to have a PAN number to apply in an IPO?",
    answer: "You can install React using create-react-app or Vite.",
  },
  {
    question: "Is it mandatory to have a PAN number to apply in an IPO?",
    answer: "You can install React using create-react-app or Vite.",
  },
  {
    question: "Is it mandatory to have a PAN number to apply in an IPO?",
    answer: "You can install React using create-react-app or Vite.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-3 text-left
              font-medium bg-gray-100 hover:bg-gray-200"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="p-3 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default FAQ
