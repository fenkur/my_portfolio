import Link from 'next/link';
import Contacts from '@/components/Contacts';

export const metadata = {
  title: 'Fenky Wah | Home',
  description: 'Portfolio Website',
}

export default function Home() {
  return (
    <>
      <div className="bg-background text-foreground min-h-screen px-8">
        <section className="mx-auto max-w-screen-sm px-5 py-12">
          <div className="space-y-6">
            <h1 className="text-1xl font-bold">Hi, I&apos;m Fenky</h1>
            <p className="text-foreground leading-relaxed">
              I&apos;m a student at the University of Minnesota majoring in IT Infrastructure. 
              I like learning new technologies and things in general. I hope to one day inspire others,
              just like how I was inspired by others. In my spare time I like to listen to music, 
              go to the gym, drive, read mangas and books, eat food, and try new things. I also volunteer from time to time.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-screen-sm px-5 py-8">
          <div className="space-y-4">
            <h1 className="text-1xl font-bold underline" id="projects">Projects</h1>

            <Link href="https://github.com/fenkur/study-website" className="hover:text-primary transition-colors">
              <h1 className="font-semibold">Study Tracker Website:</h1>
            </Link>
            <p className="text-muted-foreground">
              I wanted to practice frontend and backend development so I tried making a simple full-stack web application. 
              It was built using Next.js (TypeScript), Tailwind CSS, Express.js, and MongoDB.
            </p>

            <Link href="https://github.com/fenkur/Subscription-Tracker" className="hover:text-primary transition-colors">
              <h1 className="font-semibold">Subscription Tracker:</h1>
            </Link>
            <p className="text-muted-foreground">
              A project I made following a YouTube tutorial on Backend Development. 
              It taught me things such as building RESTful APIs, JWT Authentication, Security, Database Modeling with MongoDB, etc.
            </p>

            <Link href="https://github.com/fenkur/night-shift" className="hover:text-primary transition-colors">
              <h1 className="font-semibold">Night Shift Chrome Extension:</h1>
            </Link>
            <p className="text-muted-foreground">
              A simple Google Extension that stimulates night shift mode by reducing blue light on any website that you visit.
              This helped me get into Google Chrome Extension development.
            </p>
            
            <Link href="https://github.com/fenkur/my_portfolio" className="hover:text-primary transition-colors">
              <h1 className="font-semibold">Portfolio Website:</h1>
            </Link>
            <p className="text-muted-foreground">
              A simple portfolio website built using Next.js and Tailwind CSS. Initially, I was going to make it using React but I ended up making it using Next.js because
              I liked how easy the routing was.
            </p>

            <Link href="https://github.com/fenkur/resume-rater" className="hover:text-primary transition-colors">
              <h1 className="font-semibold">Resume Rater:</h1>
            </Link>
            <p className="text-muted-foreground">
              I had the idea from learning about Embedding and I want to compare an applicant&apos;s resume against a job description to determine how well they match, using 
              natural language embeddings and semantic similarity scoring. It uses a Sentence Transform from HuggingFace to generate the semantic embeddings and compute a cosine similarity
              score that reflects how well the resume fits the job. I visualized the semantic relationship between the two using a scatter plot. I used Jupyter Notebook because some
              of the libraries wasn&apos;t working for me locally.
            </p>

            <Link href='https://github.com/fenkur/QuickAI' className="hover:text-primary transition-colors">
              <h1 className="font-semibold">QuickAI - AI SaaS Platform:</h1>
            </Link>
            <p className="text-muted-foreground">
              QuickAI is a full-stack AI-powered SaaS platform built with the PERN stack (PostgreSQL, Express.js, React, Node.js). 
              The platform provides a unified dashboard for multiple AI-powered tools including content generation, 
              image manipulation, and resume analysis.
            </p>

            <Link href='https://github.com/fenkur/agentic-ai/tree/main/financial-application' className="hover:text-primary transition-colors">
              <h1 className="font-semibold">Agentic AI: Financial Assistant</h1>
            </Link>
            <p className="text-muted-foreground">
              A multi-agent AI system that I built to learn about agentic AI and how specialized agents can work together to solve complex tasks. 
              The project uses Phidata to orchestrate multiple AI agents - one for web search and another for financial data analysis. 
              It taught me about agent coordination, tool integration with YFinance and DuckDuckGo, and how to structure AI systems that can 
              delegate tasks intelligently. I used Groq's LLaMA 3.3 model for the AI inference.
            </p>
          </div>
        </section>
        <Contacts />
      </div>
    </>
  );
}