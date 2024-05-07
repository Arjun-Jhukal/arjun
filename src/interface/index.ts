export interface SingleProjectProps {
  title: string;
  techUsed: string[];
  liveLink: string;
  sourceCode: string;
  brief: string;
  image?: {
    url: string;
    alt: string;
  };
}

export interface ProjectCategoryProps {
  id: number;
  key: string;
  label: string;
  relatedProject: SingleProjectProps[];
}
