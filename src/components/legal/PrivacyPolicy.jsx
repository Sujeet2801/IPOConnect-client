import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            This Privacy Policy explains how we collect, use, and protect your personal data
            when you visit or use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal information you provide (e.g., name, email)</li>
            <li>Usage data (e.g., pages visited, browser info)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the information to operate our website, improve user experience,
            and communicate updates or offers if opted-in.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            We take reasonable steps to protect your data from unauthorized access,
            alteration, or disclosure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Third-Party Services</h2>
          <p className="text-gray-700">
            We may use third-party services like analytics or payment processors, which
            may collect data under their own privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Changes will be posted
            on this page with the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, please contact us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
