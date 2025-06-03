export type MenuItem = {
  id: string;
  restaurantId: string; // ← NEW: links to restaurant by ID (e.g. 'sun-04')
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  category: 'Starter' | 'Soup' | 'Salad' | 'Main' | 'Steak' | 'Side' | 'Dessert' | 'Drink' | 'Cocktails';
  priceUSD?: number;
};

export const globalMenu: MenuItem[] = [
  {
    id: 'cocktail-01',
    restaurantId: 'sun-04', // change this to correct restaurant ID if needed
    name: {
      en: 'Rosemary Cosmo',
      zh: '迷迭香柯夢波丹',
    },
    description: {
      en: 'Well balanced cocktail between the freshness of its acidity and the sweetness from the cranberry combined with vodka.',
      zh: '酸味清新與蔓越莓的甜味完美融合，再搭配伏特加，口感平衡出眾。',
    },
    category: 'Cocktails',
  },
  {
    id: 'cocktail-02',
    restaurantId: 'sun-04',
    name: {
      en: 'Sazerac',
      zh: '紳士薩澤拉克',
    },
    description: {
      en: 'A powerful beverage blended with whiskey, Pernod and a twist of lime.',
      zh: '濃烈酒感調和威士忌、茴香酒與一抹萊姆清香。',
    },
    category: 'Cocktails',
  },
  {
    id: 'cocktail-03',
    restaurantId: 'sun-04',
    name: {
      en: 'Caipirinha',
      zh: '巴西凱琵霓亞',
    },
    description: {
      en: 'The national drink of Brazil made with cachaça along with fresh muddled limes.',
      zh: '巴西國民調酒，使用卡夏沙酒與新鮮萊姆搗碎混合。',
    },
    category: 'Cocktails',
  },
  {
    id: 'cocktail-04',
    restaurantId: 'sun-04',
    name: {
      en: 'Ice Beer',
      zh: '冰啤特調',
    },
    description: {
      en: 'This cocktail combines the best of tequila, lime and orange with lager beer.',
      zh: '結合龍舌蘭、萊姆、橙汁與拉格啤酒的創新調酒。',
    },
    category: 'Cocktails',
  },
  {
    id: 'cocktail-05',
    restaurantId: 'sun-04',
    name: {
      en: 'Ginger Lemon Drop',
      zh: '薑味檸檬滴',
    },
    description: {
      en: 'Simple, elegant and delicious: ginger and vodka are just fabulous together.',
      zh: '簡約優雅的美味：薑汁與伏特加絕妙融合。',
    },
    category: 'Cocktails',
  },
  {
    id: 'cocktail-06',
    restaurantId: 'sun-04',
    name: {
      en: 'Manhattan',
      zh: '曼哈頓',
    },
    description: {
      en: 'Considered one of the most famous spirit forward cocktails: whiskey, Vermouth rosso and cherry.',
      zh: '經典烈酒調酒代表之一：威士忌、紅味美思與櫻桃調製而成。',
    },
    category: 'Cocktails',
  },
  {
    id: 'cocktail-07',
    restaurantId: 'sun-04',
    name: {
      en: 'Berry Mocktail',
      zh: '莓果無酒精特調',
    },
    description: {
      en: 'Soft and fresh mouth feel: wild berries blended with lime and hints of basil. (Alcohol-free)',
      zh: '口感清新柔順：野莓混合萊姆與羅勒香氣。 （無酒精）',
    },
    category: 'Cocktails',
  },
   {
    id: 'asadero-starter-01',
    restaurantId: 'sun-04',
    name: {
      en: 'Smoked Bacon Skewer',
      zh: '煙燻培根串',
    },
    description: {
      en: 'With sweet soy sauce reduction, coleslaw salad and fresh leaves.',
      zh: '搭配甜醬油濃汁、涼拌捲心菜沙拉與新鮮蔬菜葉。',
    },
    category: 'Starter',
  },
  {
    id: 'asadero-starter-02',
    restaurantId: 'sun-04',
    name: {
      en: 'Melted Cheese and Shrimp',
      zh: '融化起司與鮮蝦',
    },
    description: {
      en: 'Amazing cheese custard with tomato and fresh leaves, served with flour tortillas so you can build your own quesadillas, it’s as easy as it comes!',
      zh: '香濃起司蛋奶凍，搭配番茄與新鮮蔬菜葉，另附麵粉玉米餅，可自製你的專屬墨西哥餡餅！',
    },
    category: 'Starter',
  },
  {
    id: 'asadero-starter-03',
    restaurantId: 'sun-04',
    name: {
      en: 'Iberian Ham Croquette',
      zh: '伊比利火腿可樂餅',
    },
    description: {
      en: 'Veritable Spanish Redondo Iglesias ham served with red wine reduction and sweet onion.',
      zh: '正宗西班牙紅多·伊格萊希亞斯火腿，佐以紅酒濃汁與甜洋蔥。',
    },
    category: 'Starter',
  },
  {
    id: 'asadero-starter-04',
    restaurantId: 'sun-04',
    name: {
      en: 'Steak Tartar',
      zh: '生牛肉塔塔',
    },
    description: {
      en: 'Lean cut Certified Angus Beef® drizzled with creamy caper sauce, parsley and balsamic vinegar.',
      zh: '精選安格斯牛肉丁，搭配酸豆奶油醬、香芹與義式香醋。',
    },
    category: 'Starter',
  },
  {
    id: 'asadero-starter-05',
    restaurantId: 'sun-04',
    name: {
      en: 'Flavorful Guacamole',
      zh: '風味酪梨醬',
    },
    description: {
      en: 'Guacamole is a whole lot better than good! Served with codzitos, pork crackling, grilled cheese and roasted spring onions. *Ask for our vegan option without pork crackling and cheese.',
      zh: '這酪梨醬絕對不只是好吃而已！搭配迷你炸玉米卷、炸豬皮、烤起司與烤春蔥。*可要求純素版本（不含炸豬皮與起司）。',
    },
    category: 'Starter',
  },
   {
    id: 'asadero-soup-01',
    restaurantId: 'sun-04',
    name: {
      en: 'Creamy Corn Soup with Cheese',
      zh: '奶油玉米起司湯',
    },
    description: {
      en: 'Sweet corn soup with fried bacon and Cheddar cheese au gratin.',
      zh: '甜玉米濃湯，搭配煎培根與切達起司焗烤風味。',
    },
    category: 'Soup',
  },
  {
    id: 'asadero-salad-01',
    restaurantId: 'sun-04',
    name: {
      en: 'Smoked Bacon Caesar',
      zh: '煙燻培根凱撒沙拉',
    },
    description: {
      en: "Reinventing the classics with Asadero's own twist.",
      zh: 'Asadero風格重新詮釋經典凱撒沙拉。',
    },
    category: 'Salad',
  },
  {
    id: 'asadero-salad-02',
    restaurantId: 'sun-04',
    name: {
      en: 'Red Berries',
      zh: '紅莓沙拉',
    },
    description: {
      en: 'With strawberry, cranberries, lettuce and goat cheese, drizzled with balsamic vinegar reduction and basil pesto.',
      zh: '草莓、蔓越莓、生菜與羊奶起司，淋上香醋濃縮醬與羅勒青醬。',
    },
    category: 'Salad',
  },
];
