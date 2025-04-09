import React from 'react';
import { footerData } from '../../data/data.js';

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-10 py-6">
      {footerData.map((section, index) => (
        <div key={index}>
          <p className="font-semibold text-lg">{section.title}</p>
          <ul className="mt-2 space-y-1">
            {section.heading.map((heading, linkIndex) => (
              <li key={linkIndex}>
                <a
                  href={section.links[linkIndex] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:underline"
                >
                  {heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
