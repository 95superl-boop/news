import { Post, FlashNews } from './types';

// 获取来自 WordPress functions.php localize 的数据
const wp = (window as any).th_vars || {
  translations: {
    home: '首页',
    news: '资讯',
    flash: '快讯',
    share: '生成分享图',
    subscribe: '订阅',
    login: '登录',
    search: '搜索关键词...',
    popular: '热门排行',
    tags: '热门标签',
    viewAll: '查看更多',
    flashChannel: '进入频道',
    footerDesc: 'TechHub.news 是全球领先的 Web3 资讯分发平台。',
  },
  logo_url: '',
  qr_url: '',
  site_name: 'TechHub.news',
  api_url: '/wp-json'
};

export const UI_TRANSLATIONS = wp.translations;

export const WP_CONFIG = {
  logoUrl: wp.logo_url,
  qrUrl: wp.qr_url,
  siteName: wp.site_name,
  apiUrl: wp.api_url
};

export const CATEGORIES = [
  { id: 1, name: '全部', slug: 'all' },
  { id: 2, name: '加密货币', slug: 'crypto' },
  { id: 3, name: '政策法规', slug: 'policy' },
  { id: 4, name: '人工智能', slug: 'ai' },
  { id: 5, name: '深度分析', slug: 'analysis' },
  { id: 6, name: 'Web3', slug: 'web3' },
];

// 默认占位数据
export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: '比特币突破历史新高，市场情绪进入极度贪婪阶段',
    excerpt: '随着机构投资者持续流入，比特币价格在过去24小时内大幅上涨...',
    content: '<p>正文内容...</p>',
    featured_image: 'https://picsum.photos/seed/btc/800/450',
    author: { id: 1, name: 'Editor', avatar: 'https://picsum.photos/seed/a1/100/100' },
    categories: [{ id: 2, name: '加密货币', slug: 'crypto' }],
    tags: [{ id: 1, name: '比特币', slug: 'bitcoin' }],
    date: '2024-05-20',
    views: 8888,
    link: '#/post/1'
  }
];

export const FLASH_NEWS: FlashNews[] = [
  { 
    id: 1, 
    title: '美联储宣布维持利率不变，符合市场预期', 
    time: '10:30', 
    date: '2024-05-21',
    content: '美联储今日一致投票决定维持基准利率在5.25%-5.5%区间...',
    tag: '宏观政策'
  }
];
