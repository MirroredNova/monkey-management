export type Content = {
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
  content?: Content[];
  contentImages?: string[];
  references?: string[];
};
