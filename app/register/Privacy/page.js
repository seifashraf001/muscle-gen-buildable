import React from 'react';

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="bg-primary2 shadow-lg rounded-lg px-8 py-6 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="mb-4">Your privacy is important to us. We collect and use your personal information responsibly to provide you with the best gym experience possible. Our privacy policy includes:</p>
            <ul className="list-disc pl-8 mb-4">
                <li className="mb-2">How we collect and use your personal information.</li>
                <li className="mb-2">How we protect your information from unauthorized access.</li>
                <li className="mb-2">Your rights regarding your personal data and how to update or delete it.</li>
                <li className="mb-2">Our commitment to not share your information with third parties without your consent.</li>
            </ul>
            <p>If you have any questions or concerns about our privacy policy, please contact us.</p>
        </div>
    </div>
    );
}
