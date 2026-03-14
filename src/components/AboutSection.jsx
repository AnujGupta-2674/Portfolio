import { CheckCircle, Code, Database, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative pt-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About and Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-primary">About Me</span>
              </h3>
              <p className="text-muted-foreground text-left">
                Full Stack MERN Developer with production experience building scalable REST APIs, optimizing MongoDB aggregation pipelines and implementing real-time features using Socket.IO and BullMQ. Currently contributing to
                live platform development in Agile teams, focusing on backend architecture, performance and reliable frontend
                solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-primary">Work Experience</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground font-semibold">
                    Backend Developer Intern — PlaytPlus
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    October 2025 – April 2026
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Worked on backend development for a events tournament management platform.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Developed reusable React components and integrated them with RESTful backend APIs, contributing to data validation and error handling for smoother data flow across the application.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Designed and maintained RESTful APIs following MVC architecture and HTTP best practices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Optimized MongoDB aggregation pipelines to support complex filtering queries and improve performance for high-traffic endpoints.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Built a real-time notification pipeline using BullMQ, Redis, Firebase FCM and Socket.IO as part of the core backend team.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold">
                    MERN Stack Teaching Assistant — Jainemo Private Limited
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    September 2024 – February 2025
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Assisted in teaching and mentoring students in MERN Stack technologies.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Mentored 5000+ students learning MERN Stack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Resolved 600+ technical doubts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-left">Guided students in debugging full-stack applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Anuj's Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-primary">Concepts</span>
            </h3>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Built RESTful APIs using Node.js and Express.js following MVC architecture with authentication, validation, and middleware handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Database</h4>
                  <p className="text-muted-foreground">
                    Experience working with MongoDB and Mongoose for schema design, CRUD operations, and efficient data management in full-stack applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
