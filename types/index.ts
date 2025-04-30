export type IBlog = {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  content: string;
  readTime: string;
  createdAt: string;
};

export type IBlogItem = Omit<IBlog, 'content'>;

export type IProject = {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  description: string;
  link: string;
  linkText: string;
  published: string;
  createdAt: string;
};

export type IHead = {
  title: string;
  description: string;
};

export type IExperience = {
  title: string;
  company: string;
  link?: string;
  position?: string;
  period: string;
  duration?: string;
  location: string;
  description: string;
  active?: boolean;
  skills?: string[];
};

export type INavItem = {
  title: string;
  link: string;
};
export type IHero = {
  title: string;
  subtitle: string;
  background: string;
};
export type IHeadline = {
  blog: string;
  about: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
  findMe: string;
};

export type ISkill = {
  title: string;
  icon: string;
  description: string;
  stacks: { name: string; icon: string }[];
};

export type ISocialLink = {
  name: string;
  link: string;
  icon: string;
};

export type IContents = {
  head: IHead;
  nav: INavItem[];
  hero: IHero;
  headlines: IHeadline;
  about: string;
  skills: ISkill[];
  experiences: IExperience[];
  findMeOn: ISocialLink[];
};
