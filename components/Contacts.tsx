import React from "react";
import Link from 'next/link';


export default function Contacts() {
  return (
    <section className="mx-auto max-w-screen-sm px-5 py-1">
      <h2 className="text-white font-bold mb-8" id="contacts">Contacts</h2>
      <div>
        <p>
          Feel free to connect with me on LinkedIn or send me an email.
          I&apos;ve started getting into books and reading so please recommend me some!
        </p>
        <div className="py-3">
          <Link href="https://github.com/fenkur" className="hover:underline hover:text-gray-300 transition duration-200">GitHub</Link>
          <span> / </span>
          <Link href="https://www.linkedin.com/in/fenky-wah/" className="hover:underline hover:text-gray-300 transition duration-200">LinkedIn</Link>
          <span> / </span>
          <a href="mailto:fenkywah15@gmail.com" className="hover:underline hover:text-gray-300 transition duration-200"> fenkywah15@gmail.com</a>
        </div>
      </div>
    </section>
  );
}