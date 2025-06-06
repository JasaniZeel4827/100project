import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Coffee, Terminal, Server, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { name: 'Frontend', icon: <Code />, items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'] },
    { name: 'Backend', icon: <Server />, items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
    { name: 'DevOps', icon: <Terminal />, items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
    { name: 'Other', icon: <Cpu />, items: ['WebGL', 'Three.js', 'TensorFlow.js', 'WebRTC'] },
  ];
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-dark-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            
            <p className="text-neutral-700 dark:text-neutral-300">
              I'm a Data Scientist and startup founder with over 8 years of experience building innovative web and mobile applications. I specialize in creating high-performance, user-friendly experiences that solve real problems.
            </p>
            
            <p className="text-neutral-700 dark:text-neutral-300">
              My journey began as a data scientist, but I quickly expanded my skills to include backend development, DevOps, and product design. I'm passionate about the entire product development lifecycle and creating tools that make developers' lives easier.
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-accent-500 mr-2" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">8+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Coffee className="h-5 w-5 text-accent-500 mr-2" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Countless Coffees</span>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card-brutal p-5"
              >
                <div className="flex items-center mb-3">
                  <div className="mr-2 text-accent-500">
                    {category.icon}
                  </div>
                  <h3 className="font-bold">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map(skill => (
                    <li key={skill} className="text-neutral-700 dark:text-neutral-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};