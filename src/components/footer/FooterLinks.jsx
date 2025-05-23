import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../constant/data.js';

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-8 bg-gray-50 text-sm">
      {footerData.map((section, index) => (
        <div key={index}>
          <p className="font-semibold text-blue-700 text-base mb-3">{section.title}</p>
          <ul className="space-y-2">
            {section.heading.map((heading, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  to={section.links[linkIndex] || '#'}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
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
