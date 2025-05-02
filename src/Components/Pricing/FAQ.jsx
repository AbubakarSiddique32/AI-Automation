import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is AI Sales Automation?",
    answer:
      "AI Sales Automation uses artificial intelligence to automate repetitive sales tasks like outreach, follow-ups, and lead scoring.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Pricing is based on your plan type, usage volume, and features you enable. You can view full details on our pricing page.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account dashboard.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all premium features.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, PayPal, and wire transfers for enterprise clients.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] m-auto py-[50px] pb-[60px] flex md:flex-row flex-col  ">
      <div className="faq-left md:w-[40%] w-[100%]">
        <h1 className=" font-outfit lg:text-[48px] lg:font-[400] font-[600] md:text-[28px] md:text-left text-center md:mb-0 mb-5 text-[24px] text-[#000000]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="faq-right md:w-[60%] w-[100%]">
        <div className="w-full mx-auto ">
          {faqData.map((item, index) => (
            <div key={index} className="border-t border-black">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 flex items-center justify-between text-[17px] text-[#000000] font-medium"
              >
                {item.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-[15px] text-[#000000]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
