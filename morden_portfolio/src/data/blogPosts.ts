export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building a Command Palette with React and CMDK',
    excerpt: 'Learn how to implement a command palette like Vercel, Linear, and Raycast using React and CMDK.',
    date: 'May 15, 2024',
    tags: ['React', 'UI', 'UX'],
    url: '#'
  },
  {
    id: 'post-2',
    title: 'The Future of Web Development: WASM and Edge Computing',
    excerpt: 'Exploring how WebAssembly and Edge Computing are changing how we build for the web.',
    date: 'April 3, 2024',
    tags: ['WASM', 'Edge', 'WebDev'],
    url: '#'
  },
  {
    id: 'post-3',
    title: 'From Engineer to Founder: Lessons Learned',
    excerpt: 'My journey transitioning from software engineer to startup founder and what I learned along the way.',
    date: 'March 22, 2024',
    tags: ['Startup', 'Leadership'],
    url: '#'
  }
];