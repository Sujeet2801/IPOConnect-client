import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing this website, you agree to be bound by these terms of service, all applicable laws, and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Use License</h2>
          <ul className="space-y-4 text-gray-600 list-disc list-inside">
            <li>
              Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.
            </li>
            <li>
              This is the grant of a license, not a transfer of title.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
          <p className="text-gray-600">
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Limitations</h2>
          <p className="text-gray-600">
            In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contact</h2>
          <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
            <p className="text-gray-600">Questions about the Terms of Service?</p>
            <a
              href="mailto:sujeetgupta2801@gmail.com"
              className="inline-flex items-center text-blue-600 hover:text-blue-500"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
