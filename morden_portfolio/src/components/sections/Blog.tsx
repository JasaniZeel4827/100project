import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-neutral-50 dark:bg-neutral-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Thoughts & Insights</h2>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              I occasionally write about development, startups, and technology. Here are some recent articles.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-brutal overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <a 
                    href={post.url} 
                    className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium"
                  >
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};