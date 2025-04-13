import React from 'react';

const Compliance = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Compliance Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Regulatory Compliance</h2>
          <p className="text-gray-700">
            We adhere to applicable laws and regulations, including data protection, financial regulations,
            and local compliance mandates in all jurisdictions we operate.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Industry Standards</h2>
          <p className="text-gray-700">
            Our systems and practices align with recognized industry standards such as ISO 27001, PCI DSS,
            and SOC 2 where applicable, to ensure secure and compliant operations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Internal Audits</h2>
          <p className="text-gray-700">
            Regular internal audits are conducted to verify compliance with internal policies, legal requirements,
            and external standards. Findings are documented and remediated promptly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Training & Awareness</h2>
          <p className="text-gray-700">
            All employees undergo regular compliance training to stay up-to-date with the latest legal, regulatory,
            and ethical standards relevant to their roles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Code of Conduct</h2>
          <p className="text-gray-700">
            We maintain a strict Code of Conduct that promotes ethical behavior, accountability,
            and compliance with legal and regulatory requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Contact</h2>
          <p className="text-gray-700">
            For any compliance-related concerns or inquiries, please contact us at{' '}
            <a href="mailto:compliance@example.com" className="text-blue-600 hover:underline">
              compliance@example.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Compliance;
