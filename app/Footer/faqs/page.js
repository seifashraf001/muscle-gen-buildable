import React from 'react';

function GymFAQs() {
    return (
        <div className="flex min-h-screen items-center justify-center">
        <section className="px-40">
            <div className="mb-24 text-center">
            <h3 className="block antialiased font-sans font-semibold relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-white">
                {" "}
                We’ve got answers{" "}
            </h3>
            <h1 className="block antialiased font-sans relative my-5 text-center text-4xl font-bold leading-tight tracking-normal text-white md:text-5xl">
                {" "}
                Frequently Asked Questions{" "}
            </h1>
            <p className="block antialiased font-sans relative my-5 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-gray-200 md:text-xl lg:max-w-4xl">
                {" "}
                Check out what other people are usually interested in!{" "}
            </p>
            </div>
            <div className="grid grid-cols-12 ">
            <div className="col-span-12 lg:col-start-4 lg:col-span-6">
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-white">
                {" "}
                How can I get started at the gym?{" "}
                </h5>
                <div className="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-300">
                {" "}
                Getting started is easy!
                Our trainers will guide you 
                through a personalized workout plan based on your goals and fitness level.
                {" "}
                </div>
                <hr className="my-6 border-[#811d1d] " />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-white">
                {" "}
                What are the membership options available?{" "}
                </h5>
                <div className="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-300">
                {" "}
                We offer flexible membership plans including monthly, quarterly, and annual options. 
                You can choose the plan that suits your schedule and preferences.{" "}
                </div>
                <hr className="my-6 border-[#811d1d]" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-white">
                {" "}
                Can I cancel my membership anytime?{" "}
                </h5>
                <div className="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-300">
                {" "}
                <strong> Yes, you can! </strong>
                We understand that circumstances may change, 
                so you can cancel your membership at any time with no additional fees.{" "}
                </div>
                <hr className="my-6 border-[#811d1d]" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-white">
                {" "}
                Do you offer personal training sessions?{" "}
                </h5>
                <div className="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-300">
                {" "}
                Absolutely! Our experienced trainers provide one-on-one sessions to help you achieve your fitness goals effectively.{" "}
                </div>
                <hr className="my-6 border-[#811d1d]" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-white">
                {" "}
                What equipment is available at the gym?{" "}
                </h5>
                <div className="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-300">
                {" "}
                We have a wide range of state-of-the-art equipment including cardio machines, free weights, and specialized workout stations.{" "}
                </div>
                <hr className="my-6 border-[#811d1d]" />
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-white">
                {" "}
                Can I bring a guest with my membership?{" "}
                </h5>
                <div className="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-300">
                {" "}
                Yes, many of our membership plans allow you to bring a guest for workouts. Check with our front desk for more details.{" "}
                </div>
            </div>
            </div>
        </section>
        </div>
    );
}

export default GymFAQs;