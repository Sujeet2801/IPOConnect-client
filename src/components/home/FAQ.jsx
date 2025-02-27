import { useState } from "react";
import { ChevronDown, ChevronUp, Factory } from "lucide-react";

const faqs = [
  {
    question: "What is an IPO?",
    answer: "IPO or the Initial Public Offering is the first time a company issues its shares to the public. As an investor, you will now be able to subscribe for such shares, which was earlier open to only a specific lot of internal and institutional investors via opening a Demat account.",
  },
  {
    question: "How to invest in an IPO?",
    answer: "To invest in an IPO, open a brokerage account, research the company, check for eligibility, place an order during the IPO offering period, and follow through once shares are listed.",
  },
  {
    question: "What is the benefit of an IPO?",
    answer: "An IPO allows a company to raise capital by selling shares to the public, helping fund expansion, pay off debt, or invest in new projects. It also provides liquidity for existing shareholders, enhances the company's public profile, and can potentially lead to increased credibility and growth opportunities.",
  },
  {
    question: "What are the disadvantages of an IPO?",
    answer: "The disadvantages of an IPO include high costs, such as underwriting fees and legal expenses. It also requires ongoing regulatory compliance and financial reporting, which can be burdensome. The company loses some control due to public shareholder influence, and stock price volatility can affect the company's reputation.",
  },
  {
    question: "What is the difference between book building issue and fixed price issue?",
    answer: "A book building issue determines the price through a bidding process based on demand, while a fixed price issue sets the price in advance without investor input.",
  },
  {
    question: "Is it mandatory to have a PAN number to apply in an IPO?",
    answer: "Yes, it is mandatory to have a PAN (Permanent Account Number) to apply for an IPO in India, as it is required for identification and tax purposes.",
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
