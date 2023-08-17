export enum PostTypes {
  Blogs = 'blogs',
  Projects = 'projects'
}

export type PostContent = {
  type: string;
  data: string;
};

export type Post = {
  id?: string;
  title: string;
  readTime: number;
  creationDate?: number;
  subtext?: string;
  coverImage: string;
  content?: PostContent[];
  contentImages?: string[];
  references?: string[];
};
