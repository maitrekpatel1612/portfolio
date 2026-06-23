export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description?: string;
  year?: string;
  coverImage: string;
  github: string;
  liveUrl: string;
  highlights?: string[];
  technologies: string[];
}