import React from 'react';

const Security = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Security Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Data Protection</h2>
          <p className="text-gray-700">
            We prioritize the protection of your data using encryption, firewalls, and secure
            server infrastructures. All sensitive data is encrypted both in transit and at rest.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Access Control</h2>
          <p className="text-gray-700">
            We enforce strict role-based access controls. Only authorized personnel can access
            critical systems and data, following the principle of least privilege.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Monitoring & Auditing</h2>
          <p className="text-gray-700">
            Our systems are continuously monitored for suspicious activities. We maintain
            detailed audit logs to ensure accountability and transparency.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Incident Response</h2>
          <p className="text-gray-700">
            In the event of a security incident, we follow a documented incident response plan,
            including immediate containment, assessment, and notification to affected parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Vulnerability Management</h2>
          <p className="text-gray-700">
            We regularly update software and systems, perform security assessments, and address
            vulnerabilities as part of our proactive risk management.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Contact</h2>
          <p className="text-gray-700">
            To report security concerns or vulnerabilities, contact our security team at{' '}
            <a href="mailto:security@example.com" className="text-blue-600 hover:underline">
              security@example.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Security;
