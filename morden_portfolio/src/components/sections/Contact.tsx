import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Interested in working together? Have a question about one of my projects?
              I'd love to hear from you.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-brutal p-6 md:p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full p-3 border-2 border-black dark:border-white bg-transparent rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full p-3 border-2 border-black dark:border-white bg-transparent rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full p-3 border-2 border-black dark:border-white bg-transparent rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors" 
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full p-3 border-2 border-black dark:border-white bg-transparent rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn btn-primary py-3"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t-2 border-neutral-200 dark:border-neutral-dark-700">
              <p className="text-center text-neutral-700 dark:text-neutral-300 mb-4">
                Or reach out via social media:
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="mailto:john@example.com" 
                  className="p-3 bg-neutral-100 dark:bg-neutral-dark-700 text-black dark:text-white rounded-full hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://github.com" 
                  className="p-3 bg-neutral-100 dark:bg-neutral-dark-700 text-black dark:text-white rounded-full hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="p-3 bg-neutral-100 dark:bg-neutral-dark-700 text-black dark:text-white rounded-full hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-colors"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="p-3 bg-neutral-100 dark:bg-neutral-dark-700 text-black dark:text-white rounded-full hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};