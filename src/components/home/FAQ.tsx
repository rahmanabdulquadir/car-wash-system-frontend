import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Define the type for each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // FAQ data array with question and answer pairs
  const faqs: FAQItem[] = [
    {
      question: "What services are included in the standard wash?",
      answer:
        "Our standard wash includes exterior cleaning, window washing, tire shine, and interior vacuuming.",
    },
    {
      question: "How long does a full service typically take?",
      answer:
        "A full service usually takes between 30 minutes to an hour, depending on the package selected.",
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer:
        "While we welcome walk-ins, we recommend booking an appointment to ensure faster service.",
    },
    {
      question: "Are eco-friendly products used in the wash?",
      answer:
        "Yes, we prioritize using eco-friendly products that are safe for your vehicle and the environment.",
    },
    {
      question: "Is there a loyalty program available?",
      answer:
        "Yes! We offer a loyalty program where you can earn points for each wash and redeem them for discounts.",
    },
  ];

  // State to manage which FAQ item is open (null if none are open)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the open/close state of an FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-green-50 via-gray-50 to-green-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text text-green-600 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border transition-all duration-300 rounded-lg overflow-hidden ${
                openIndex === index
                  ? "border-green-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <button
                className="w-full p-5 flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none hover:text-green-600 transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`text-green-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? (
                    <FiChevronUp size={24} />
                  ) : (
                    <FiChevronDown size={24} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
