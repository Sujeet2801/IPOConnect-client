import React from 'react';

function FooterRight() {
  return (
    <div className="flex flex-col gap-6 text-sm text-gray-600 leading-relaxed max-w-4xl">
      <p>
        📢 <span className="font-medium">Investing in IPOs and stock markets</span> involves market risk.
        Please read all scheme-related documents carefully before investing. IPOConnect is committed to
        spreading financial literacy and providing publicly available data in an organized format.
      </p>

      <p>
        📬 For any questions or feedback related to the website or platform, feel free to reach 
        out to us at{' '}
        <span className="text-blue-600 underline">support@ipoconnect.in</span>. <br />
        For technical issues or suggestions, contact our tech team directly at{' '}
        <span className="text-blue-600 underline">tech@ipoconnect.in</span>.
      </p>

      <p>
        ⚠️ <span className="font-semibold">Disclaimer:</span> IPOConnect is 
        <span className="underline">not a SEBI-registered advisor</span>. 
        We do not offer investment advice, stock tips, or buy/sell recommendations. <br />
        All data and insights provided on this platform are for 
        <span className="font-medium">educational and informational purposes</span>
        only. Always consult a certified financial advisor before making any investment decisions.
      </p>
    </div>
  );
}

export default FooterRight;
