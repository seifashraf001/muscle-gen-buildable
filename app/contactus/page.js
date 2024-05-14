import React from 'react';
import './page.css'
function ContactSection() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-white">
              Get in touch with us to start your fitness journey today. Our team of experienced trainers is ready to help you reach your fitness goals.
            </p>
          </div>

          <div className="rounded-lg bg-black p-8 shadow-lg lg:col-span-3 lg:p-12 content">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your Message"
                  rows="6"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-gradient-to-r from-red-900 via-red-700 to-orange-700 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;