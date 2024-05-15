import React from "react";
import "./page.css"

export default function Page() {
  return (
    
    <div className="max-w-4xl mx-auto px-6 py-12 bg-black">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Privacy Policy</h1>
      <div className="content bg-black text-gray-200 shadow-lg rounded-lg px-8 py-6 mb-8">
      <p className="mb-4">
          Your privacy is important to us. We collect and use your personal information responsibly
          to provide you with the best gym experience possible. Our privacy policy includes:
        </p>
        <ul className=" pl-8 mb-4">
          <li className="mb-2">● How we collect and use your personal information.</li>
          <li className="mb-2">
          ● How we protect your information from unauthorized access.
          </li>
          <li className="mb-2">
          ● Your rights regarding your personal data and how to update or delete it.
          </li>
          <li className="mb-2">● Our commitment to not share your information with third parties without your consent.</li>
          <li className="mb-2">
          ● Notify us of any health concerns before participating in any fitness programs.
          </li>
        </ul>
        <p>
        If you have any questions or concerns about our privacy policy, please contact us.
        </p>
      </div>
    </div>
);
}
