export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export type NavItem = {
  name: string;
  path: string;
};