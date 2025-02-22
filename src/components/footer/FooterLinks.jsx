import React from 'react';

function FooterLinks() {
  const sections = [
    {
      title: 'Resources',
      links: ['Trading View', 'NSE Holidays', 'e-Voting CDSL', 'e-Voting NSDL', 'Market Timings'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'FAQs', 'Contact Us', 'Live Chat', 'Report an Issue'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Investor Relations', 'Blog'],
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Security', 'Compliance', 'Disclaimers'],
    },
    {
      title: 'Social',
      links: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'YouTube'],
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-10 py-6">
      {sections.map((section, index) => (
        <div key={index}>
          <p className="font-semibold text-lg">{section.title}</p>
          <ul className="mt-2 space-y-1">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
