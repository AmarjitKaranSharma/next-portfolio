export interface Project {
  title: string;
  description: string;
  link: string;
  images: Image[];
  id: string;
  color: string;
}

export interface Image {
  src: string;
  alt: string;
}
