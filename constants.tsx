
import { Post, FlashNews } from './types';

export const CATEGORIES = [
  { id: 1, name: '全部', slug: 'all' },
  { id: 2, name: '加密货币', slug: 'crypto' },
  { id: 3, name: '政策法规', slug: 'policy' },
  { id: 4, name: '人工智能', slug: 'ai' },
  { id: 5, name: '深度分析', slug: 'analysis' },
  { id: 6, name: 'Web3', slug: 'web3' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: '比特币突破历史新高，市场情绪进入极度贪婪阶段',
    excerpt: '随着机构投资者持续流入，比特币价格在过去24小时内大幅上涨，成功突破前高。分析师预测这仅仅是牛市的开端...',
    content: '<h2>行情回顾</h2><p>比特币（BTC）今日表现强劲，突破了关键阻力位。这主要归功于现货ETF的持续买入。{{ the_content() }}</p><p>在全球宏观经济环境不确定的背景下，数字黄金的地位进一步巩固。</p>',
    featured_image: 'https://picsum.photos/seed/btc/800/450',
    author: { id: 1, name: '张三', avatar: 'https://picsum.photos/seed/author1/100/100' },
    categories: [{ id: 2, name: '加密货币', slug: 'crypto' }],
    tags: [{ id: 1, name: '比特币', slug: 'bitcoin' }, { id: 2, name: '牛市', slug: 'bull' }],
    date: '2024-05-20',
    views: 12500,
    link: '#/post/1'
  },
  {
    id: 2,
    title: 'OpenAI 发布 GPT-5 预告，人工智能领域再掀波澜',
    excerpt: '萨姆·奥特曼在最新的访谈中透露，下一代大模型将具备前所未有的推理能力和跨模态理解能力...',
    content: '<p>人工智能的进化速度远超想象。GPT-5不仅是性能的提升，更是逻辑思维的质变。</p>',
    featured_image: 'https://picsum.photos/seed/ai/800/450',
    author: { id: 2, name: '李四', avatar: 'https://picsum.photos/seed/author2/100/100' },
    categories: [{ id: 4, name: '人工智能', slug: 'ai' }],
    tags: [{ id: 3, name: 'GPT-5', slug: 'gpt5' }, { id: 4, name: 'OpenAI', slug: 'openai' }],
    date: '2024-05-19',
    views: 8900,
    link: '#/post/2'
  },
  {
    id: 3,
    title: '香港 Web3 嘉年华圆满落幕，亚洲加密中心地位稳固',
    excerpt: '为期四天的盛会吸引了全球超过5万名参与者，多项关于稳定币监管和RWA发展的政策草案在期间公开讨论...',
    content: '<p>香港正在成为Web3创新的热土。政府的大力支持为行业注入了强心剂。</p>',
    featured_image: 'https://picsum.photos/seed/hk/800/450',
    author: { id: 1, name: '张三', avatar: 'https://picsum.photos/seed/author1/100/100' },
    categories: [{ id: 6, name: 'Web3', slug: 'web3' }],
    tags: [{ id: 5, name: '香港', slug: 'hk' }, { id: 6, name: '会议', slug: 'event' }],
    date: '2024-05-18',
    views: 6200,
    link: '#/post/3'
  }
];

export const FLASH_NEWS: FlashNews[] = [
  { id: 1, title: '美联储宣布维持利率不变，符合市场预期', time: '10:30', content: '美联储今日一致投票决定维持基准利率在5.25%-5.5%区间...' },
  { id: 2, title: '以太坊现货ETF审批进展加快，多家机构更新申报文件', time: '09:45', content: 'SEC要求交易所加快19b-4文件的更新速度，这被视为积极信号...' },
  { id: 3, title: 'NVIDIA 季度财报大超预期，AI 芯片需求依然强劲', time: '08:20', content: '英伟达今日公布的财报显示，数据中心业务增长惊人...' }
];
