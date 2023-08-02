export type Blog = {
  id?: string;
  title: string;
  readTime: number;
  subtext?: string;
  coverImage: string;
  content: string[];
  contentImages?: string[];
  creationDate?: number;
};
