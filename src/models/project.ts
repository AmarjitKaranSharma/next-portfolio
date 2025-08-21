export interface Project {
  title: string;
  description: string;
  link: string;
  images: Image[];
  id: number;
  color: string;
  technologies: Technologies[];
  details: ProjectDetails;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Technologies {
  name: string;
  icon: string;
}

export interface ProjectDetails {
  projectType: string;
  status: string;
  role: string;
  keyFeatures: string[];
}
