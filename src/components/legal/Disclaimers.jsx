import React from 'react';

const Disclaimer = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. General Information</h2>
          <p className="text-gray-700">
            The information provided on this website is for general informational purposes only.
            All content is provided in good faith, however we make no representation or warranty
            of any kind regarding the accuracy, adequacy, validity, reliability, availability, or
            completeness of any information on the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. External Links</h2>
          <p className="text-gray-700">
            Our website may contain links to external websites that are not provided or maintained by us.
            We do not guarantee the accuracy or relevance of any information on these external websites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Professional Advice</h2>
          <p className="text-gray-700">
            Nothing on this site constitutes professional advice (legal, financial, or otherwise).
            You should consult a qualified professional before making decisions based on the
            content provided here.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700">
            Under no circumstance shall we have any liability to you for any loss or damage
            incurred as a result of the use of the site or reliance on any information provided.
            Your use of the site is solely at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Contact</h2>
          <p className="text-gray-700">
            If you have any questions regarding this disclaimer, please contact us at{' '}
            <a href="mailto:legal@example.com" className="text-blue-600 hover:underline">
              legal@example.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
