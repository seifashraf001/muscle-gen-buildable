import React from 'react';
import './page.css'; // Assuming your CSS file is named GymFAQs.css

function GymFAQs() {
  return (
    
    <div className="container-center">
   <h3 className="text-center text-3xl bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text  text-transparent  font-bold mb-4">
           FAQ
        </h3>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Each FAQ item wrapped with a div and a class 'faq-item' */}
            <div className="faq-item mb-8 content rounded-lg">
              <h6 className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text font-extrabold text-transparent  text-xl mb-3">
                How can I get started at the gym?
              </h6>
              <p className='text-white'>
                <strong>
                  <u>Getting started is easy!</u>
                </strong> Our trainers will guide you through a personalized workout plan based on your goals and fitness level.
              </p>
            </div>
            <div className="faq-item mb-8 content rounded-lg">
              <h6 className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text font-extrabold text-transparent  text-xl mb-3">
                What are the membership options available?
              </h6>
              <p className='text-white'>
                We offer flexible membership plans including monthly, quarterly, and annual options. You can choose the plan that suits your schedule and preferences.
              </p>
            </div>
            <div className="faq-item mb-8 content rounded-lg">
              <h6 className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text font-extrabold text-transparent  text-xl mb-3">
                Can I cancel my membership anytime?
              </h6>
              <p className='text-white'>
                <strong>
                  <u>Yes, you can!</u>
                </strong> We understand that circumstances may change, so you can cancel your membership at any time with no additional fees.
              </p>
            </div>
            <div className="faq-item mb-8 content rounded-lg">
              <h6 className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text font-extrabold text-transparent  text-xl mb-3">
                Do you offer personal training sessions?
              </h6>
              <p className='text-white'>
                Absolutely! Our experienced trainers provide one-on-one sessions to help you achieve your fitness goals effectively.
              </p>
            </div>
            <div className="faq-item mb-8 content rounded-lg">
              <h6 className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text font-extrabold text-transparent  text-xl mb-3">
                What equipment is available at the gym?
              </h6>
              <p className='text-white'>
                We have a wide range of state-of-the-art equipment including cardio machines, free weights, and specialized workout stations.
              </p>
            </div>
            <div className="faq-item mb-8 content rounded-lg">
              <h6 className="bg-gradient-to-r from-red-600 via-red-500 to-red-300 bg-clip-text font-extrabold text-transparent  text-xl mb-3">
                Can I bring a guest with my membership?
              </h6>
              <p className='text-white'>
                Yes, many of our membership plans allow you to bring a guest for workouts. Check with our front desk for more details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GymFAQs;