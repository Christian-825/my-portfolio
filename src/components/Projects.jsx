import React from 'react'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="w-full px-6 sm:px-12 md:px-20 pb-14 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center max-w-7xl mx-auto">
        <h1 id="projects" className="pt-24 pb-20 text-3xl md:text-4xl font-bold text-white">
          <span className="inline-block border-b-4 border-blue-400 pb-5">
            My Portfolio
          </span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="w-full">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>

  )
}
