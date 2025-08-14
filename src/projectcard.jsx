// src/components/ProjectCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      role="article"
      aria-label={project.title}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-neon/40 transition-colors duration-300"
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full bg-neon/15 text-neon border border-neon/30"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.links?.demo || project.links?.repo) && (
        <div className="flex gap-2">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm rounded-lg bg-[#1e90ff]/20 hover:bg-[#1e90ff]/30 border border-[#1e90ff]/40"
              aria-label={`${project.title} demo`}
            >
              Live Demo
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
              aria-label={`${project.title} repository`}
            >
              Source
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}
