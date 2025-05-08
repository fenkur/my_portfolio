import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 bg-black border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white text-sm">© {currentYear} Fenky Wah. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;