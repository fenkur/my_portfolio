import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="mx-auto max-w-screen-sm px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-white text-bold">© {currentYear} | Fenky Wah</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;