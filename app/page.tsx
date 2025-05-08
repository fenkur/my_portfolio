import Navbar from "@/components/NavBar";
import Link from 'next/link';
import Contacts from '@/components/Contacts'
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-black text-white min-h-screen px-8">
      <section className="mx-auto max-w-screen-sm px-5 py-12">
        <div className="space-y-6">
          <h1 className="text-1xl font-bold">Hi, I'm Fenky</h1>
          <p className="text-white leading-relaxed">I'm a student at the University of Minnesota majoring in IT Infrastructure. 
            Even though I'm not a Computer Science student, I like to code and learn computer science related topics in my spare time. 
            Feel free to connect with me on LinkedIn or send me an email.</p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-sm px-5 py-12">
        <div className="space-y-6">
          <h1 className="text-1xl font-bold" id="projects">Projects</h1>
          <Link href="https://github.com/fenkur/study-website">
            <h1>Study Tracker Website: </h1>
          </Link>
          <p>I wanted to practice frontend and backend development so I tried making a simple full-stack web application. It was built using Next.js (TypeScript), Tailwind CSS, Express.js, and MongoDB. </p>
          
          <Link href="https://github.com/fenkur/Subscription-Tracker">
            <h1>Subscription Tracker: </h1>
          </Link>
          <p>A project I made following a YouTube tutorial on Backend Development. It taught me things such as building RESTful APIs, JWT Authentication, Security, Database Modeling with MongoDB, etc.</p>

          <div>
            <h1>Other Projects: </h1>
            <p>I will try my best to add more projects in the future!!</p>
          </div>
        </div>
      </section>
      
      <Contacts />
      <Footer />
    </div>
    </>
  );
}
