import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-dark-900 dark:to-neutral-dark-800 -z-10"></div>
      <div className="noise-bg"></div>
      
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300 rounded-full font-medium text-sm">
              Data Scientist & Startup Founder
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white leading-tight">
              I build tools people <span className="text-accent-500">love</span> to use.
            </h1>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
              Passionate developer focused on creating high-performance products with exceptional user experiences. I turn complex problems into elegant solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                See my work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Get in touch
              </a>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://github.com" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-lg overflow-hidden border-4 border-black dark:border-white bg-accent-500 shadow-brutal dark:shadow-brutal-light">
              <div className="h-full w-full p-6 flex items-center justify-center">
                <pre className="text-xs md:text-sm overflow-hidden text-white font-mono">
                  <code>{`
function Developer() {
  const [skills, setSkills] = useState([
    'JavaScript', 'TypeScript',
    'React', 'Node.js', 
    'NextJS', 'TailwindCSS'
  ]);
  
  const [coffee, setCoffee] = useState(true);
  
  useEffect(() => {
    if (!coffee) {
      setCoffee(true);
      learnNewSkills();
    }
  }, [coffee]);
  
  return (
    <Product 
      that="people love"
      withPassion={true}
      andCoffee={coffee}
    />
  );
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};