export type Form = {
  title: boolean;
  readTime: boolean;
  subtext: boolean;
  coverImage: boolean;
  contentImages: boolean;
  content: boolean;
  references: boolean;
};

export const BlogForm: Form = {
  title: true,
  readTime: true,
  subtext: true,
  coverImage: true,
  contentImages: true,
  content: true,
  references: true
};

export const ProjectForm: Form = {
  title: true,
  readTime: false,
  subtext: true,
  coverImage: true,
  contentImages: false,
  content: true,
  references: true
};
