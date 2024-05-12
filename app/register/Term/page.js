// pages/terms.js

import React from 'react';

const TermsPage = () => {
    return (
        <div className="bg-primary min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
                <div className="bg-primary2 shadow-lg rounded-lg px-8 py-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Welcome to Our Gym Community!</h2>
                    <p className="mb-4">By joining, you agree to abide by the following terms and conditions:</p>
                    <ol className="list-decimal pl-8 mb-4">
                        <li className="mb-2">Respect the gym equipment and facilities.</li>
                        <li className="mb-2">Follow the instructions of our trainers for a safe workout experience.</li>
                        <li className="mb-2">Be mindful of other members and maintain a positive environment.</li>
                        <li className="mb-2">Keep your membership information confidential.</li>
                        <li className="mb-2">Notify us of any health concerns before participating in any fitness programs.</li>
                    </ol>
                    <p>If you have any questions or concerns about our terms and conditions, please contact us.</p>
                </div>
             
            </div>
        </div>
    );
};

export default TermsPage;
