import React from "react";
import { Mail, PhoneCall } from "lucide-react";

export default function Contacts() {
  return (
    <section className="mx-auto max-w-screen-sm px-5 py-12">
      <h2 className="text-3xl font-bold text-center mb-8" id="contacts">Contacts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a 
          href="mailto:fenkywah15@gmail.com" 
          className="flex items-center p-4 rounded-lg border"
        >
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium hover:underline hover:text-gray-300 transition duration-200">Email</h3>
            <p className="text-gray-600">fenkywah15@gmail.com</p>
          </div>
        </a>

        <a 
          href="https://github.com/fenkur" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 rounded-lg border"
        >
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-800">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
          <div>
            <h3 className="font-medium hover:underline hover:text-gray-300 transition duration-200">GitHub</h3>
            <p className="text-gray-600">github.com/fenkur</p>
          </div>
        </a>

        <a 
          href="https://linkedin.com/in/fenky-wah/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 rounded-lg border"
        >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-700">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          <div>
            <h3 className="font-medium hover:underline hover:text-gray-300 transition duration-200">LinkedIn</h3>
            <p className="text-gray-600">linkedin.com/in/fenky-wah/</p>
          </div>
        </a>

        <a 
          href="tel:+6512357317" 
          className="flex items-center p-4 rounded-lg border "
        >
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <PhoneCall className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium hover:underline hover:text-gray-300 transition duration-200">Phone</h3>
            <p className="text-gray-600">(651) 235-7317</p>
          </div>
        </a>
      </div>
    </section>
  );
}