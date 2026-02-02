
export interface Author {
  id: number;
  name: string;
  avatar: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  date: string;
  views: number;
  link: string;
}

export interface FlashNews {
  id: number;
  title: string;
  time: string;
  content: string;
}
