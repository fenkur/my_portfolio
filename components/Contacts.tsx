import React from "react";
import Link from 'next/link';

export default function Contacts() {
  return (
    <section className="mx-auto max-w-screen-sm px-5 py-1">
      <h2 className="text-foreground font-bold mb-2 underline" id="contacts">Contacts</h2>
      <div>
        <p className="text-muted-foreground">
          Feel free to connect with me on LinkedIn or shoot me an email!
        </p>
        <div className="py-3 text-foreground">
          <Link href="https://github.com/fenkur" className="hover:underline hover:text-primary transition duration-200">GitHub</Link>
          <span className="text-muted-foreground"> / </span>
          <Link href="https://www.linkedin.com/in/fenky-wah/" className="hover:underline hover:text-primary transition duration-200">LinkedIn</Link>
          <span className="text-muted-foreground"> / </span>
          <a href="mailto:fenkywah15@gmail.com" className="hover:underline hover:text-primary transition duration-200">fenkywah15@gmail.com</a>
          <span className="text-muted-foreground"> / </span>
          <Link href="https://www.youtube.com/@fenkur" className="hover:underline hover:text-primary transition duration-200">YouTube</Link>
        </div>
      </div>
    </section>
  );
}