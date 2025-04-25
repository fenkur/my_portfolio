import Navbar from "@/components/NavBar";
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-black text-white min-h-screen px-8">
      <section className="mx-auto max-w-screen-sm px-5 py-12">
        <div className="space-y-6">
          <h1 className="text-1xl font-bold">Hi, I'm Fenky</h1>
          <p className="text-gray-300 leading-relaxed">I'm a student at the University of Minnesota majoring in IT Infrastructure. 
            Even though I'm not a Computer Science student, I like to code and learn computer science related topics in my spare time. 
            Feel free to connect with me on LinkedIn or send me an email.</p>
          <h1 className="text-1xl font-bold">Projects</h1>
          <Link href="https://github.com/fenkur/study-website">
            <h1>Study Tracker Website</h1>
          </Link>
          <p>A full-stack productivity web app that helps users track their coding sessions by programming language and converts time studied into experience points (EXP). Features include secure JWT-based user authentication, a real-time timer, personalized dashboards, and a global leaderboard. Built with Next.js (TypeScript), Tailwind CSS, Express.js, and MongoDB.</p>
        </div>
      </section>
    </div>
    </>
  );
}
