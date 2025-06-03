export type MenuItem = {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  category: 'Starter' | 'Soup' | 'Salad' | 'Main' | 'Steak' | 'Side' | 'Dessert' | 'Drink';
  priceUSD?: number; // Optional: Include if pricing is available
};

export const asaderoMenu: MenuItem[] = [
  {
    id: 'starter-01',
    name: {
      en: 'Smoked Bacon Skewer',
      zh: '烟熏培根串',
    },
    description: {
      en: 'Served with sweet soy sauce reduction, coleslaw salad, and fresh leaves.',
      zh: '搭配甜酱油酱汁、凉拌卷心菜沙拉和新鲜蔬菜。',
    },
    category: 'Starter',
  },
  {
    id: 'starter-02',
    name: {
      en: 'Melted Cheese and Shrimp',
      zh: '融化奶酪虾',
    },
    description: {
      en: 'Cheese custard with tomato and fresh leaves, served with flour tortillas to build your own quesadillas.',
      zh: '奶酪蛋奶冻配番茄和新鲜蔬菜，搭配面粉玉米饼，自制墨西哥玉米饼。',
    },
    category: 'Starter',
  },
  {
    id: 'starter-03',
    name: {
      en: 'Iberian Ham Croquette',
      zh: '伊比利亚火腿可乐饼',
    },
    description: {
      en: 'Spanish Redondo Iglesias ham served with red wine reduction and sweet onion.',
      zh: '西班牙红多·伊格莱西亚斯火腿，配红酒酱汁和甜洋葱。',
    },
    category: 'Starter',
  },
  {
    id: 'starter-04',
    name: {
      en: 'Steak Tartar',
      zh: '牛排塔塔',
    },
    description: {
      en: 'Lean cut Certified Angus Beef® drizzled with creamy caper sauce, parsley, and balsamic vinegar.',
      zh: '精选安格斯牛肉，淋上奶油酸豆酱、香菜和香醋。',
    },
    category: 'Starter',
  },
  {
    id: 'starter-05',
    name: {
      en: 'Flavorful Guacamole',
      zh: '风味鳄梨酱',
    },
    description: {
      en: 'Served with pork crackling, grilled cheese, and roasted spring onions. Vegan option available.',
      zh: '搭配炸猪皮、烤奶酪和烤春葱。提供素食选项。',
    },
    category: 'Starter',
  },
  {
    id: 'soup-01',
    name: {
      en: 'Creamy Corn Soup with Cheese',
      zh: '奶油玉米奶酪汤',
    },
    description: {
      en: 'Sweet corn soup with fried bacon and Cheddar cheese au gratin.',
      zh: '甜玉米汤，配炸培根和切达奶酪焗烤。',
    },
    category: 'Soup',
  },
  {
    id: 'salad-01',
    name: {
      en: 'Smoked Bacon Caesar',
      zh: '烟熏培根凯撒沙拉',
    },
    description: {
      en: 'A classic Caesar salad with Asadero\'s own twist.',
      zh: 'Asadero风格的经典凯撒沙拉。',
    },
    category: 'Salad',
  },
  {
    id: 'salad-02',
    name: {
      en: 'Red Berries Salad',
      zh: '红莓沙拉',
    },
    description: {
      en: 'Strawberries, cranberries, lettuce, and goat cheese, drizzled with balsamic vinegar reduction and basil pesto.',
      zh: '草莓、蔓越莓、生菜和山羊奶酪，淋上香醋酱和罗勒香蒜酱。',
    },
    category: 'Salad',
  },
  {
    id: 'main-01',
    name: {
      en: 'Fish & Chips',
      zh: '炸鱼薯条',
    },
    description: {
      en: 'Breaded fish strips with a side of French fries.',
      zh: '裹面包屑的鱼条，配薯条。',
    },
    category: 'Main',
  },
  {
    id: 'main-02',
    name: {
      en: 'Mac & Cheese with Shrimp',
      zh: '奶酪通心粉配虾',
    },
    description: {
      en: 'On a crust of Cheddar cheese. Optional: Add lobster tail 7oz for an additional charge.',
      zh: '切达奶酪酥皮。可选：加7盎司龙虾尾（需额外付费）。',
    },
    category: 'Main',
  },
  {
    id: 'main-03',
    name: {
      en: 'Pulled Pork Sandwich',
      zh: '手撕猪肉三明治',
    },
    description: {
      en: 'Brioche with shredded pork stuffing served with adobo sauce, guacamole, French fries, and corn.',
      zh: '奶油面包夹手撕猪肉，配阿多波酱、鳄梨酱、薯条和玉米。',
    },
    category: 'Main',
  },
  {
    id: 'main-04',
    name: {
      en: 'Beef Au Jus',
      zh: '原汁牛肉',
    },
    description: {
      en: 'Rich consommé served with juicy hanger steak, topped with chopped onion, cilantro, and lime.',
      zh: '浓郁清汤配多汁的牛腹肉，撒上洋葱、香菜和酸橙。',
    },
    category: 'Main',
  },
  {
    id: 'main-05',
    name: {
      en: 'Picanha Gremolata',
      zh: '香蒜酱烤牛臀肉',
    },
    description: {
      en: 'Olive-crusted roast beef with parsley, garlic, and a habanero kick.',
      zh: '橄榄皮烤牛肉，配香菜、大蒜和哈瓦那辣椒。',
    },
    category: 'Main',
  },
  {
    id: 'main-06',
    name: {
      en: 'Baby Back Ribs',
      zh: '小排骨',
    },
    description: {
      en: 'Slow-cooked pork ribs topped with our secret BBQ glaze.',
      zh: '慢炖猪排，涂上秘制烧烤酱。',
    },
    category: 'Main',
  },
  {
    id: 'main-07',
    name: {
      en: 'Roasted Chicken',
      zh: '烤鸡',
    },
    description: {
      en: 'With sweet onion purée, sauerkraut salad, and potato crisps.',
      zh: '配甜洋葱泥、酸菜沙拉和薯片。',
    },
    category: 'Main',
  },
  {
    id: 'main-08',
    name: {
      en: 'Asadero Grill',
      zh: 'Asadero烧烤',
    },
    description: {
      en: 'Our top-notch dish served with giant shrimp and grilled cowboy steak.',
      zh: '招牌菜，配大虾和烤牛排。',
    },
    category: 'Main',
  },
  {
    id: 'steak-01',
    name: {
      en: 'Flat Iron 7 oz',
      zh: '7盎司肩胛牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '配土豆泥和炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'steak-02',
    name: {
      en: 'Sirloin Filet 7 oz',
      zh: '7盎司西冷牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '配土豆泥和炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'steak-03',
    name: {
      en: 'Hanger Steak 7 oz',
      zh: '7盎司牛腹肉',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '配土豆泥和炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'steak-04',
    name: {
      en: 'New York 10 oz',
      zh: '10盎司纽约客牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '配土豆泥和炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'steak-05',
    name: {
      en: 'Cowboy 21 oz',
      zh: '21盎司牛仔牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '配土豆泥和炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'steak-06',
    name: {
      en: 'Porterhouse 31 oz',
      zh: '31盎司T骨牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '配土豆泥和炸薯片。',
    },
    category: 'Steak',
  }
];