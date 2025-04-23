export interface Project {
  title: string;
  description: string;
  link: string;
  images: Image[];
  id: number;
  color: string;
  technologies: Technologies[];
}

export interface Image {
  src: string;
  alt: string;
}

export interface Technologies {
  name: string;
  icon: string;
}
