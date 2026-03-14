import ZigZag from "./ZigZag";
import { FiDownload } from "react-icons/fi";
function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto px-8 py-10">
      <h2 className="text-4xl font-bold">My Resume / CV</h2>

<p className="mt-4 text-gray-400">
  Here you can explore my technical skills and professional experience gained while building scalable web and cross-platform applications.
</p>

<a
  href="/jyotirmoy-pal-cv.pdf"
  download
  className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 hover:scale-105 transition duration-200"
>
  <FiDownload size={16} />
  Download CV
</a>

      <ZigZag />

      {/* Skills */}

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>

<div className="flex flex-wrap gap-3">
  {[
    "Angular",
    "React",
    "HTML",
    "Css/Scss",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Java",
    "Micro Frontends",
    "RxJS",
    "NGXS",
    "Ionic",
    "Capacitor",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Jira",
    "RPA",
    "VS Code",
    "Intellij",
    "Figma",
    "AI Tools & Prompt Engineering"
  ].map((skill) => (
    <span
      key={skill}
      className="cursor-pointer bg-yellow-400 text-black px-3 py-1 rounded-md text-sm font-medium hover:scale-105 transition duration-200"
    >
      {skill}
    </span>
  ))}
</div>
      </div>

      {/* Work History */}

<div className="mt-16">
  <h3 className="text-xl font-semibold mb-8">Work History</h3>

  <div className="border-l border-gray-700 pl-6 space-y-12">

    {/* Job */}
    <div className="flex gap-4">
      
      {/* Dot */}
      <div className="mt-1 w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>

      {/* Content */}
      <div>
        <h4 className="text-lg font-semibold">
          Senior Associate Consultant
        </h4>

        <p className="text-gray-400 text-sm">
          Infosys • Jul 2024 – Present
        </p>

        <p className="mt-2 text-gray-400 leading-relaxed">
          Working on telecom product platforms using Angular 18 and Micro
          Frontend architecture. Designing modular UI systems and integrating
          backend microservices to improve application scalability.
        </p>
      </div>

    </div>


    {/* Job */}
    <div className="flex gap-4">
      <div className="mt-1 w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>

      <div>
        <h4 className="text-lg font-semibold">
          Angular Developer
        </h4>

        <p className="text-gray-400 text-sm">
          Eccentric Engine • May 2022 – Jul 2024
        </p>

        <p className="mt-2 text-gray-400 leading-relaxed">
          Built cross-platform applications using Angular, Ionic and Node.js
          supporting web, desktop (EXE/MSI) and iOS platforms.
        </p>
      </div>
    </div>


    {/* Job */}
    <div className="flex gap-4">
      <div className="mt-1 w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>

      <div>
        <h4 className="text-lg font-semibold">
          Application Developer
        </h4>

        <p className="text-gray-400 text-sm">
          Web Idea Solution • Sept 2021 – May 2022
        </p>

        <p className="mt-2 text-gray-400 leading-relaxed">
          Developed frontend features for international client projects using
          Angular and modern UI architecture.
        </p>
      </div>
    </div>


    {/* Job */}
    <div className="flex gap-4">
      <div className="mt-1 w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>

      <div>
        <h4 className="text-lg font-semibold">
          Application Developer
        </h4>

        <p className="text-gray-400 text-sm">
          Crystal Tech Lab • Jun 2020 – Sept 2021
        </p>

        <p className="mt-2 text-gray-400 leading-relaxed">
          Worked on Angular and Node.js applications while managing AWS EC2
          deployments and backend integrations.
        </p>
      </div>
    </div>


    {/* Job */}
    <div className="flex gap-4">
      <div className="mt-1 w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>

      <div>
        <h4 className="text-lg font-semibold">
          Developer / System Tester
        </h4>

        <p className="text-gray-400 text-sm">
          Tata Consultancy Services • Aug 2011 – Apr 2013
        </p>

        <p className="mt-2 text-gray-400 leading-relaxed">
          Worked on enterprise banking applications performing system testing,
          automation support and defect analysis.
        </p>
      </div>
    </div>

  </div>
</div>



    </section>
  );
}

export default Resume;
