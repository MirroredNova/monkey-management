export type Blog = {
  id?: string;
  title: string;
  readTime: number;
  creationDate?: number;
  subtext?: string;
  coverImage: string;
  content: string[];
  contentImages?: string[];
  references?: string[];
};
