import Link from 'next/link';
import Contacts from '@/components/Contacts';

export const metadata = {
  title: 'Fenky Wah | Home',
  description: 'Portfolio Website',
}

export default function Home() {
  return (
    <>
      <div className="bg-[#101218] text-white min-h-screen px-8">
        <section className="mx-auto max-w-screen-sm px-5 py-12">
          <div className="space-y-6">
            <h1 className="text-1xl font-bold">Hi, I&apos;m Fenky</h1>
            <p className="text-white leading-relaxed">
              I&apos;m a student at the University of Minnesota majoring in IT Infrastructure. 
              I like to code in my spare time. I&apos;m gonna make random stuff and hopefully it&apos;ll be fun!
              I&apos;m still a noob but I&apos;ll improve my skills over time.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-screen-sm px-5 py-12">
          <div className="space-y-6">
            <h1 className="text-1xl font-bold" id="projects">Projects</h1>

            <Link href="https://github.com/fenkur/study-website">
              <h1>Study Tracker Website: </h1>
            </Link>
            <p>
              I wanted to practice frontend and backend development so I tried making a simple full-stack web application. 
              It was built using Next.js (TypeScript), Tailwind CSS, Express.js, and MongoDB.
            </p>

            <Link href="https://github.com/fenkur/Subscription-Tracker">
              <h1>Subscription Tracker: </h1>
            </Link>
            <p>
              A project I made following a YouTube tutorial on Backend Development. 
              It taught me things such as building RESTful APIs, JWT Authentication, Security, Database Modeling with MongoDB, etc.
            </p>

            <Link href="https://github.com/fenkur/night-shift">
              <h1>Night Shift Chrome Extension:</h1>
            </Link>
            <p>
              A simple Google Extension that stimulates night shift mode by reducing blue light on any website that you visit.
              This helped me get into Google Chrome Extension development.
            </p>
            
            <Link href="https://github.com/fenkur/my_portfolio">
              <h1>Portfolio Website:</h1>
            </Link>
            <p>
              A simple portfolio website built using Next.js and Tailwind CSS. Initally, I was going to make it using React but I ended up making it using Next.js because
              I liked how easy the routing was.
            </p>

            <Link href="https://github.com/fenkur/doctor-appointment">
              <h1>Doctor Appointment System:</h1>
            </Link>
            <p>
              A project I&apos;m currently working on. I was curious on implementing an appointment system so this is what I&apos;ll be working on. 
              I will the list the features once it&apos;s done.
            </p>

            <div>
              <h1>Other Projects: </h1>
              <p>I will try my best to add more projects in the future!!</p>
            </div>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}
