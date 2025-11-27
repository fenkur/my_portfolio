import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="mx-auto max-w-screen-sm px-5 py-11">
        <div className="flex flex-col md:flex-row justify-between items-center">
<<<<<<< HEAD
            <span className="text-muted-foreground font-semibold">© {currentYear} | Fenky Wah | Updated: 11/26/2025</span>
=======
            <span className="text-muted-foreground font-semibold">© {currentYear} | Fenky Wah | Updated: 10/14/2025</span>
>>>>>>> d5ef79387419e4946f991436019bd83db98cb2e0
        </div>
      </div>
    </footer>
  );
};

export default Footer;