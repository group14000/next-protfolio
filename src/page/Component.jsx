import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Diganta Halder's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 bg-gray-900 text-white" id="hero">
          <div className="container px-4 md:px-6 space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Diganta Halder
            </h1>
            <h2 className="text-2xl font-medium">Full-Stack Developer</h2>
            <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
              I am a highly skilled Full Stack Developer with extensive
              expertise in HTML5, CSS3, TypeScript, ReactJS, NodeJS, SQL, NoSQL,
              Git, GitHub, AWS, MongoDB, and Tailwind CSS. I excel at providing
              cutting-edge solutions and possess a creative approach to web
              development projects. With my strong skills and experience, I am
              confident that I can deliver exceptional results in any project I
              undertake.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                View Projects
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-400 bg-transparent px-6 py-2 text-sm font-medium text-gray-400 shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        <section
          className="w-full py-24 bg-gray-100 dark:bg-gray-800"
          id="projects"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Projects
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
                Check out some of my recent work and see what I can do.
              </p>
            </div>
            <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <img
                  alt="Project 1"
                  className="rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardContent className="p-4 space-y-2">
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>
                    A modern web application built with React, Node.js, and
                    MongoDB.
                  </CardDescription>
                  <div className="flex justify-between">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Live Demo
                    </Link>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-400 bg-transparent px-4 text-sm font-medium text-gray-400 shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project 2"
                  className="rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardContent className="p-4 space-y-2">
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>
                    A responsive e-commerce website built with Next.js and
                    Tailwind CSS.
                  </CardDescription>
                  <div className="flex justify-between">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Live Demo
                    </Link>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-400 bg-transparent px-4 text-sm font-medium text-gray-400 shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project 3"
                  className="rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardContent className="p-4 space-y-2">
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>
                    A real-time chat application built with Socket.IO and React.
                  </CardDescription>
                  <div className="flex justify-between">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Live Demo
                    </Link>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-400 bg-transparent px-4 text-sm font-medium text-gray-400 shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-24 bg-gray-900 text-white" id="skills">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Skills
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
                I have a wide range of skills and experience in the world of web
                development.
              </p>
            </div>
            <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 bg-gray-800 rounded-md">
                <ComponentIcon className="w-12 h-12 text-blue-500" />
                <h3 className="mt-2 text-lg font-medium">React</h3>
                <p className="mt-1 text-gray-400">
                  Proficient in building modern, responsive, and scalable web
                  applications with React.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-md">
                <NetworkIcon className="w-12 h-12 text-green-500" />
                <h3 className="mt-2 text-lg font-medium">Node.js</h3>
                <p className="mt-1 text-gray-400">
                  Experienced in building robust and efficient server-side
                  applications with Node.js and Express.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-md">
                <DatabaseIcon className="w-12 h-12 text-green-500" />
                <h3 className="mt-2 text-lg font-medium">MongoDB</h3>
                <p className="mt-1 text-gray-400">
                  Skilled in designing and implementing scalable and performant
                  NoSQL databases with MongoDB.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-md">
                <DatabaseIcon className="w-12 h-12 text-green-500" />
                <h3 className="mt-2 text-lg font-medium">MYSQL</h3>
                <p className="mt-1 text-gray-400">
                  Skilled in designing and implementing scalable and performant
                  SQL databases with MySQL.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-md">
                <WindIcon className="w-12 h-12 text-blue-500" />
                <h3 className="mt-2 text-lg font-medium">Tailwind CSS</h3>
                <p className="mt-1 text-gray-400">
                  Proficient in creating visually appealing and responsive user
                  interfaces using Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-24 bg-gray-100 dark:bg-gray-800"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
                Have a project in mind or just want to say hello? Feel free to
                reach out!
              </p>
            </div>
            <form className="max-w-md mx-auto mt-10 space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required type="text" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." required />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 w-full shrink-0">
        <div className="container px-4 md:px-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
