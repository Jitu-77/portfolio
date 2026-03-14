import { useState } from "react";
import { projects } from "../data/projects";
import ZigZag from "./ZigZag";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects" className="max-w-4xl mx-auto px-10 py-24">

      {/* Section Header */}
      <h2 className="text-4xl font-bold">Projects</h2>
      <ZigZag />

      <p className="mt-4 text-gray-400">
        A selection of projects I have worked on across telecom,
        automotive and enterprise platforms.
      </p>

      {/* Timeline */}
      <div className="mt-12 space-y-10">

        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-[24px_1fr] gap-6">

            {/* Timeline column */}
            <div className="flex flex-col items-center">

              {/* Yellow dot */}
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>

              {/* Vertical line */}
              {index !== projects.length - 1 && (
                <div className="flex-1 w-px bg-gray-700 mt-2"></div>
              )}

            </div>

            {/* Project content */}
            <div
              onClick={() => toggleProject(index)}
              className="cursor-pointer hover:translate-x-1 transition duration-200"
            >

              {/* Title + Date */}
              <div className="flex justify-between flex-wrap gap-2">

                <h3 className="text-lg font-semibold hover:text-yellow-400 transition">
                  {project.title}, {project.company}
                </h3>

                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {project.period}
                </span>

              </div>

              {/* Expandable Content */}
              {openIndex === index && (
                <div className="mt-4">

                  <ul className="space-y-2 text-gray-400 list-disc ml-5">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <p className="mt-3 text-gray-400 text-sm">
                    <span className="font-semibold text-white">Tech:</span>{" "}
                    {project.tech.join(", ")}
                  </p>

                </div>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;