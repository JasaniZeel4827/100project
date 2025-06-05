import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';

export const Projects: React.FC = () => {
  // Separate featured project from others
  const featuredProject = projects.find(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              A collection of products I've built. Each project is crafted with attention to detail and a focus on user experience.
            </p>
          </motion.div>
        </div>
        
        {featuredProject && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-brutal overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    {featuredProject.demoUrl && (
                      <a href={featuredProject.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    {featuredProject.codeUrl && (
                      <a href={featuredProject.codeUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="card-brutal overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="text-sm btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} className="text-sm btn btn-outline" target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};