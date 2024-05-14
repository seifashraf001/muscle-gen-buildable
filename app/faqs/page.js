import React from "react";
import "./GymFAQs.css"; // Renamed from 'page.css' to 'GymFAQs.css'
import faqData from "../mock/faqData.json";

const GymFAQs = () => {
  return (
    <div className="container-center">
      <h3 className="faq-title">FAQ</h3>
      <section className="faq-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item content rounded-lg text-white p-5 pb-3">
                <h6 className="faq-question mb-6">{faq.question}</h6>
                <p className="faq-answer mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymFAQs;
