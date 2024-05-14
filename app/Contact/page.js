import React from "react";
import "./ContactSection.css"; // Renamed from 'page.css' to reflect specific styling for the ContactSection component

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-white">
              Get in touch with us to start your fitness journey today. Our team of experienced
              trainers is ready to help you reach your fitness goals.
            </p>
          </div>

          <div className="rounded-lg bg-black p-8 shadow-lg lg:col-span-3 lg:p-12 content">
            <form className="space-y-4">
              <InputField label="Name" type="text" placeholder="Your Name" id="name" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputField
                  label="Email"
                  type="email"
                  placeholder="Your Email address"
                  id="email"
                />
                <InputField label="Phone" type="tel" placeholder="Your Phone Number" id="phone" />
              </div>
              <TextAreaField label="Message" placeholder="Your Message" id="message" rows={6} />
              <div className="mt-4">
                <button type="submit" className="submit-button">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mini Components
const InputField = ({ label, type, placeholder, id }) => {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-lg border-gray-200 p-3 text-sm"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

const TextAreaField = ({ label, placeholder, id, rows }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        className="w-full rounded-lg border-gray-200 p-3 text-sm"
        placeholder={placeholder}
        id={id}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default ContactSection;
