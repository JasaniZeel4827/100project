import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'DevFlow',
    description: 'A developer-focused productivity platform that streamlines workflows and automates repetitive tasks with AI integration.',
    tags: ['React', 'TypeScript', 'Node.js', 'AI'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/devflow',
    codeUrl: 'https://github.com/johndoe/devflow',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'CodeSphere',
    description: 'An interactive code editor with real-time collaboration and automated code review features.',
    tags: ['React', 'WebSockets', 'Monaco Editor'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/codesphere',
    codeUrl: 'https://github.com/johndoe/codesphere',
  },
  {
    id: 'project-3',
    title: 'DataViz',
    description: 'A data visualization library for creating interactive charts and dashboards with minimal configuration.',
    tags: ['D3.js', 'TypeScript', 'SVG'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/dataviz',
    codeUrl: 'https://github.com/johndoe/dataviz',
  },
  {
    id: 'project-4',
    title: 'CloudSync',
    description: 'A cross-platform file synchronization tool with end-to-end encryption and version control.',
    tags: ['Electron', 'Node.js', 'Cryptography'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/cloudsync',
    codeUrl: 'https://github.com/johndoe/cloudsync',
  },
];