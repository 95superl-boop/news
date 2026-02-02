
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
  date: string;
  content: string;
  tag?: string;
}

export type ShareLayoutStyle = 'standard' | 'poster' | 'minimal' | 'breaking';

export interface ShareConfig {
  logoPosition: 'top' | 'bottom';
  theme: 'light' | 'dark' | 'gradient' | 'gold';
  layoutStyle: ShareLayoutStyle;
  showQrCode: boolean;
  brandName: string;
  logoUrl?: string; // New: Custom logo URL from backend
  qrCodeUrl?: string; // New: Custom QR code URL from backend
}
