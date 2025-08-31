import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="col-span-1">
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-2xl transition flex flex-col h-full">
        {/* Responsive Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56 object-cover"
        />

        {/* Card Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-lg font-semibold text-white">{project.title}</h5>

          <p className="text-sm text-gray-300 mt-2 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.tech && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-800 text-blue-200 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Live Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-blue-400 hover:text-blue-300 underline self-start"
            >
              View Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
