import React from "react";
import "./GymFAQs.css"; // Renamed from 'page.css' to 'GymFAQs.css'
import faqData from "../mock/faqData.json";

const GymFAQs = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
    <section className="px-40">
    <div className=" text-center">

    <div className="mb-10">
        <h3 className="antialiased italic  font-semibold relative text-center text-2xl bg-gradient-to-r from-red-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text">{" "}- We’ve got answers -{" "}</h3>
        <h1 className="block antialiased  relative my-3 text-center text-4xl font-bold text-white md:text-5xl">{" "}Frequently Asked Questions{" "}</h1>
        <p className="block antialiased  relative my-3 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-gray-200 md:text-xl lg:max-w-4xl">{" "}Check out what other people are usually interested in!{" "}</p>
    </div>    

        <div className="grid grid-cols-12 ">
            <div className="col-span-12 lg:col-start-4 lg:col-span-6">

            {faqData.map((faq, index) => (
              <div key={index} className="faq-item rounded-lg text-white p-5 pb-3">
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-2 mb-1 font-semibold !text-white">{faq.question}</h5>
                <p className="block antialiased font-sans text-base leading-relaxed mb-1 font-normal text-gray-300">{faq.answer}</p>
                <hr className="my-2 border-[#811d1d] " />
            </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymFAQs;