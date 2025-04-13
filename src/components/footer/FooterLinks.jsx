import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../constant/data.js';

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 py-6 justify-end lg:ml-16">
      {footerData.map((section, index) => (
        <div key={index}>
          <p className="font-semibold text-lg">{section.title}</p>
          <ul className="mt-2 space-y-1">
            {section.heading.map((heading, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  to={section.links[linkIndex] || '#'}
                  className="text-gray-500 hover:underline"
                >
                  {heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
