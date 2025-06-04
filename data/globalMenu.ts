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
  category?: string; // ← now optional and open to any string
  priceUSD?: number;
};

export const globalMenu: MenuItem[] = [
  {
    id: 'asadero-cocktail-01',
    restaurantId: 'sun-04', // change this to correct restaurant ID if needed
    name: {
      en: 'Rosemary Cosmo',
      zh: '迷迭香柯夢波丹',
    },
    description: {
      en: 'Well balanced cocktail between the freshness of its acidity and the sweetness from the cranberry combined with vodka.',
      zh: '酸味清新與蔓越莓的甜味完美融合，再搭配伏特加，口感平衡出眾。',
    },
    category: 'Cocktail',
  },
  {
    id: 'asadero-cocktail-02',
    restaurantId: 'sun-04',
    name: {
      en: 'Sazerac',
      zh: '紳士薩澤拉克',
    },
    description: {
      en: 'A powerful beverage blended with whiskey, Pernod and a twist of lime.',
      zh: '濃烈酒感調和威士忌、茴香酒與一抹萊姆清香。',
    },
    category: 'Cocktail',
  },
  {
    id: 'asadero-cocktail-03',
    restaurantId: 'sun-04',
    name: {
      en: 'Caipirinha',
      zh: '巴西凱琵霓亞',
    },
    description: {
      en: 'The national drink of Brazil made with cachaça along with fresh muddled limes.',
      zh: '巴西國民調酒，使用卡夏沙酒與新鮮萊姆搗碎混合。',
    },
    category: 'Cocktail',
  },
  {
    id: 'asadero-cocktail-04',
    restaurantId: 'sun-04',
    name: {
      en: 'Ice Beer',
      zh: '冰啤特調',
    },
    description: {
      en: 'This cocktail combines the best of tequila, lime and orange with lager beer.',
      zh: '結合龍舌蘭、萊姆、橙汁與拉格啤酒的創新調酒。',
    },
    category: 'Cocktail',
  },
  {
    id: 'asadero-cocktail-05',
    restaurantId: 'sun-04',
    name: {
      en: 'Ginger Lemon Drop',
      zh: '薑味檸檬滴',
    },
    description: {
      en: 'Simple, elegant and delicious: ginger and vodka are just fabulous together.',
      zh: '簡約優雅的美味：薑汁與伏特加絕妙融合。',
    },
    category: 'Cocktail',
  },
  {
    id: 'asadero-cocktail-06',
    restaurantId: 'sun-04',
    name: {
      en: 'Manhattan',
      zh: '曼哈頓',
    },
    description: {
      en: 'Considered one of the most famous spirit forward cocktails: whiskey, Vermouth rosso and cherry.',
      zh: '經典烈酒調酒代表之一：威士忌、紅味美思與櫻桃調製而成。',
    },
    category: 'Cocktail',
  },
  {
    id: 'asadero-cocktail-07',
    restaurantId: 'sun-04',
    name: {
      en: 'Berry Mocktail',
      zh: '莓果無酒精特調',
    },
    description: {
      en: 'Soft and fresh mouth feel: wild berries blended with lime and hints of basil. (Alcohol-free)',
      zh: '口感清新柔順：野莓混合萊姆與羅勒香氣。 （無酒精）',
    },
    category: 'Cocktail',
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
   {
    id: 'asadero-side-01',
    restaurantId: 'sun-04',
    name: {
      en: 'Mashed Potatoes',
      zh: '馬鈴薯泥',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Side',
  },
  {
    id: 'asadero-side-02',
    restaurantId: 'sun-04',
    name: {
      en: 'French Fries',
      zh: '炸薯條',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Side',
  },
  {
    id: 'asadero-side-03',
    restaurantId: 'sun-04',
    name: {
      en: 'Sautéed Mushrooms',
      zh: '香炒蘑菇',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Side',
  },
  {
    id: 'asadero-side-04',
    restaurantId: 'sun-04',
    name: {
      en: 'Chiles Toreados',
      zh: '香煎墨西哥辣椒',
    },
    description: {
      en: 'Blistered serrano peppers sautéed in oil.',
      zh: '以油香煎墨西哥辣椒（Serrano）至微焦。',
    },
    category: 'Side',
  },
  {
    id: 'asadero-side-05',
    restaurantId: 'sun-04',
    name: {
      en: 'Fried Onions',
      zh: '香炸洋蔥圈',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Side',
  },
  {
    id: 'asadero-side-06',
    restaurantId: 'sun-04',
    name: {
      en: 'Grilled Aubergine & Bell Peppers',
      zh: '炭烤茄子與甜椒',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Side',
  },
  {
    id: 'asadero-side-07',
    restaurantId: 'sun-04',
    name: {
      en: 'Roasted Corn',
      zh: '烤玉米',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Side',
  },
   {
    id: 'asadero-steak-01',
    restaurantId: 'sun-04',
    name: {
      en: 'Flat Iron 7oz',
      zh: '7盎司肩胛牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '附馬鈴薯泥與炸薯片。',
    },
    category: 'Steak',
    priceUSD: undefined,
  },
  {
    id: 'asadero-steak-02',
    restaurantId: 'sun-04',
    name: {
      en: 'Sirloin Filet 7oz',
      zh: '7盎司西冷牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '附馬鈴薯泥與炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'asadero-steak-03',
    restaurantId: 'sun-04',
    name: {
      en: 'Hanger Steak 7oz',
      zh: '7盎司牛腹肉',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '附馬鈴薯泥與炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'asadero-steak-04',
    restaurantId: 'sun-04',
    name: {
      en: 'New York 10oz',
      zh: '10盎司紐約客牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '附馬鈴薯泥與炸薯片。',
    },
    category: 'Steak',
  },
  {
    id: 'asadero-steak-05',
    restaurantId: 'sun-04',
    name: {
      en: 'Cowboy 21oz',
      zh: '21盎司牛仔牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '附馬鈴薯泥與炸薯片。',
    },
    category: 'Steak',
    priceUSD: 55,
  },
  {
    id: 'asadero-steak-06',
    restaurantId: 'sun-04',
    name: {
      en: 'Porterhouse 31oz',
      zh: '31盎司T骨牛排',
    },
    description: {
      en: 'Served with mashed potatoes and fried potato crisps.',
      zh: '附馬鈴薯泥與炸薯片。',
    },
    category: 'Steak',
    priceUSD: 110,
  },
   {
    id: 'asadero-sauce-01',
    restaurantId: 'sun-04',
    name: {
      en: 'Béarnaise',
      zh: '貝爾納醬',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Sauce',
  },
  {
    id: 'asadero-sauce-02',
    restaurantId: 'sun-04',
    name: {
      en: 'Blue Cheese',
      zh: '藍紋起司醬',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Sauce',
  },
  {
    id: 'asadero-sauce-03',
    restaurantId: 'sun-04',
    name: {
      en: 'Macha',
      zh: '墨西哥辣醬（Macha）',
    },
    description: {
      en: 'Dried chili peppers sautéed in oil with garlic, salt and sesame seeds.',
      zh: '乾辣椒與大蒜、鹽與芝麻炒香而成的辣油醬。',
    },
    category: 'Sauce',
  },
  {
    id: 'asadero-sauce-04',
    restaurantId: 'sun-04',
    name: {
      en: 'Rosemary Mojo',
      zh: '迷迭香蒜香醬',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Sauce',
  },
  {
    id: 'asadero-sauce-05',
    restaurantId: 'sun-04',
    name: {
      en: 'Mushroom Demi-Glace',
      zh: '蘑菇濃縮醬汁',
    },
    description: {
      en: '',
      zh: '',
    },
    category: 'Sauce',
  },
   {
    id: 'asadero-coffee-01',
    restaurantId: 'sun-04',
    name: { en: 'Regular Coffee', zh: '黑咖啡' },
    description: { en: '', zh: '' },
    category: 'Coffee',
  },
  {
    id: 'asadero-coffee-02',
    restaurantId: 'sun-04',
    name: { en: 'Espresso', zh: '濃縮咖啡' },
    description: { en: '', zh: '' },
    category: 'Coffee',
  },
  {
    id: 'asadero-coffee-03',
    restaurantId: 'sun-04',
    name: { en: 'Cappuccino', zh: '卡布奇諾' },
    description: { en: '', zh: '' },
    category: 'Coffee',
  },
  {
    id: 'asadero-coffee-04',
    restaurantId: 'sun-04',
    name: { en: 'Latte', zh: '拿鐵' },
    description: { en: '', zh: '' },
    category: 'Coffee',
  },
   {
    id: 'asadero-dessert-01',
    restaurantId: 'sun-04',
    name: { en: 'Oreo Ice Cream', zh: 'OREO 冰淇淋' },
    description: {
      en: 'Rich chocolate and bits of puffed rice are folded into sweet oreo ice cream to create this playfully indulgent flavor',
      zh: '濃郁巧克力與脆米融合於香甜 OREO 冰淇淋，打造出俏皮又奢華的風味。',
    },
    category: 'Homemade Ice Cream',
  },
  {
    id: 'asadero-dessert-02',
    restaurantId: 'sun-04',
    name: { en: 'Tres Leches Ice Cream', zh: '三奶冰淇淋' },
    description: {
      en: 'The traditional tres leches cake recipe turned into a deliciously creamy ice cream',
      zh: '將經典三奶蛋糕轉化為極致滑順的冰淇淋版本。',
    },
    category: 'Homemade Ice Cream',
  },
  {
    id: 'asadero-dessert-03',
    restaurantId: 'sun-04',
    name: { en: 'Baileys Ice Cream', zh: '百利甜冰淇淋' },
    description: {
      en: 'Irish Cream Liqueur is the perfect base for this amazing homemade Baileys ice cream recipe!',
      zh: '愛爾蘭奶酒是這款驚艷自製百利甜冰淇淋的完美基底！',
    },
    category: 'Homemade Ice Cream',
  },
  {
    id: 'asadero-dessert-04',
    restaurantId: 'sun-04',
    name: { en: 'Mixed Berry Sorbet', zh: '綜合莓果雪酪' },
    description: {
      en: "If you haven't already fallen in love with the gorgeous purple hues of this sorbet, just wait until you taste it!",
      zh: '如果你還沒愛上這款紫紅色雪酪的絕美色澤，那就等你嚐一口再說吧！',
    },
    category: 'Homemade Ice Cream',
  },
   {
    id: 'asadero-digestive-01',
    restaurantId: 'sun-04',
    name: { en: 'Baileys', zh: '百利甜酒' },
    description: {
      en: 'A blend of fresh cream and real Irish whisky in coffee, on the rocks or in a decadent dessert',
      zh: '新鮮奶油與真正愛爾蘭威士忌的調和，可用於咖啡、純飲或甜點中享用。',
    },
    category: 'Digestive',
  },
  {
    id: 'asadero-digestive-02',
    restaurantId: 'sun-04',
    name: { en: 'Manhattan', zh: '曼哈頓' },
    description: {
      en: 'Considered one of the most famous spirit forward cocktails: whiskey, Vermouth rosso and cherry',
      zh: '經典烈酒系調酒之一：威士忌、甜苦艾酒與櫻桃調和而成。',
    },
    category: 'Digestive',
  },
  {
    id: 'asadero-digestive-03',
    restaurantId: 'sun-04',
    name: { en: 'Carajillo', zh: '西班牙烈酒咖啡' },
    description: {
      en: 'Mighty coffee drink balanced with Licor 43, its bright golden glow and notes of caramel highlight this amazing drink',
      zh: '搭配 Licor 43 的咖啡酒，金黃色澤與焦糖風味令人難忘。',
    },
    category: 'Digestive',
  },
   {
    id: 'asadero-dessert-05',
    restaurantId: 'sun-04',
    name: { en: 'Sweet Lime & Strawberry Cake', zh: '青檸草莓蛋糕' },
    description: {
      en: 'Soft sweet lime cake with strawberry-lime cream',
      zh: '綿密的青檸蛋糕，搭配草莓青檸奶油。',
    },
    category: 'Dessert',
  },
  {
    id: 'asadero-dessert-06',
    restaurantId: 'sun-04',
    name: { en: 'Cheesecake', zh: '起司蛋糕' },
    description: {
      en: 'Creamy yoghurt cheese cake with mandarin and mango custard',
      zh: '滑順優格起司蛋糕，搭配橘子與芒果卡士達醬。',
    },
    category: 'Dessert',
  },
  {
    id: 'asadero-dessert-07',
    restaurantId: 'sun-04',
    name: { en: 'Banoffee Pie', zh: '香蕉太妃派' },
    description: {
      en: 'Thick slices of fresh banana, dulce de leche and billowy whipped cream',
      zh: '厚切香蕉片、太妃糖醬與蓬鬆鮮奶油的完美結合。',
    },
    category: 'Dessert',
  },
  {
    id: 'asadero-dessert-08',
    restaurantId: 'sun-04',
    name: { en: 'Chocolate Lava Cake', zh: '熔岩巧克力蛋糕' },
    description: {
      en: 'With vanilla ice cream',
      zh: '佐香草冰淇淋。',
    },
    category: 'Dessert',
  },
  // Pier 8
  {
  id: 'pier8-cocktail-01',
  restaurantId: 'sun-05',
  name: { en: 'Mandarin Pisco Sour', zh: '柑橘皮斯可酸酒' },
  description: {
    en: 'A South American classic balanced with zesty citrus blends of lime and mandarin',
    zh: '南美經典調酒，結合檸檬與柑橘的清爽酸香。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktail-02',
  restaurantId: 'sun-05',
  name: { en: 'Pisco Mar', zh: '海洋皮斯可' },
  description: {
    en: 'A reassuringly balanced cocktail combined with peppery notes of ginger and lime',
    zh: '帶有薑與檸檬辛香的調酒，口感平衡順口。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktail-03',
  restaurantId: 'sun-05',
  name: { en: 'Gin Gin', zh: '薰衣草琴酒' },
  description: {
    en: 'An invigorating composition made with gin and the addition of sweet lavender',
    zh: '用琴酒與薰衣草調製的清新調酒。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktail-04',
  restaurantId: 'sun-05',
  name: { en: 'Northern Clamato', zh: '北境蕃茄啤酒' },
  description: {
    en: 'A yummy Mexican version of the Bloody Mary: dark beer, lime, spicy sauces and a pinch of salt',
    zh: '墨西哥風味的血腥瑪麗：黑啤酒加上檸檬、辣醬與鹽調製。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktail-05',
  restaurantId: 'sun-05',
  name: { en: 'Fruity Clericot', zh: '果香紅酒特調' },
  description: {
    en: 'An elegant expression of red wine mixed with lime and diced fruit',
    zh: '紅酒搭配檸檬與切丁水果的優雅特調。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktail-06',
  restaurantId: 'sun-05',
  name: { en: 'Passion Fruit Sour', zh: '百香果酸酒' },
  description: {
    en: 'Flavorful and uplifting cocktail made with rum and passion fruit topped with sparkling water',
    zh: '以蘭姆酒與百香果搭配氣泡水調製的果香調酒。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktail-07',
  restaurantId: 'sun-05',
  name: { en: 'Mexican Chicha', zh: '墨西哥紫蘇酒' },
  description: {
    en: 'Unique and interesting flavor made with sorrel and lively expressions of cinnamon',
    zh: '以洛神花與肉桂調製而成，風味獨特。'
  },
  category: 'Cocktail',
},
{
  id: 'pier8-cocktailbar-01',
  restaurantId: 'sun-05',
  name: { en: 'Seafood Cocktail', zh: '墨西哥風味海鮮杯' },
  description: {
    en: 'Mexican-inspired cocktail: the best way to serve this mixed seafood cocktail with a hit of freshness',
    zh: '墨西哥風格海鮮杯，清新提味。'
  },
  category: 'Cocktail Bar',
},
{
  id: 'pier8-cocktailbar-02',
  restaurantId: 'sun-05',
  name: { en: 'Fish Ceviche', zh: '魚肉酸橘醃沙拉' },
  description: {
    en: 'Try this perfect zingy dish, light and fresh for a warm day',
    zh: '酸爽清新的魚肉沙拉，適合溫暖天氣享用。'
  },
  category: 'Cocktail Bar',
},
{
  id: 'pier8-cocktailbar-03',
  restaurantId: 'sun-05',
  name: { en: 'Tuna Tartare', zh: '鮪魚塔塔' },
  description: {
    en: 'Yucatán’s ubiquitous grilled tuna tartar served with spicy pumpkin seeds and chaya crisps',
    zh: '尤卡坦風味炭烤鮪魚塔塔，佐辣味南瓜籽與恰亞脆片。'
  },
  category: 'Cocktail Bar',
},
{
  id: 'pier8-littlecravings-01',
  restaurantId: 'sun-05',
  name: { en: 'Octopus Chayita', zh: '章魚恰亞餡餅' },
  description: {
    en: 'Fried puffed up pocket made from masa dough and chaya, served with a side of fried octopus in salsa verde',
    zh: '玉米麵糰與恰亞葉製炸餅，搭配綠醬章魚。'
  },
  category: 'Little Cravings',
},
{
  id: 'pier8-littlecravings-02',
  restaurantId: 'sun-05',
  name: { en: 'Spicy Shrimp Bao', zh: '辣味蝦包' },
  description: {
    en: 'Asian steamed bun served with Indian sauce and shrimp a la diabla. Ask for our vegan option with oyster mushrooms',
    zh: '亞洲蒸包配印度醬與辣蝦，可選香菇素食版本。'
  },
  category: 'Little Cravings',
},
{
  id: 'pier8-littlecravings-03',
  restaurantId: 'sun-05',
  name: { en: 'Chimichangas Veracruz Style', zh: '韋拉克魯斯炸魚捲' },
  description: {
    en: 'It’s quite similar to a burrito, but it is deep-fried, stuffed with Veracruz style fish topped with cheese',
    zh: '類似捲餅的油炸魚捲，內餡為韋拉克魯斯風味魚與起司。'
  },
  category: 'Little Cravings',
},
{
  id: 'pier8-littlecravings-04',
  restaurantId: 'sun-05',
  name: { en: 'Tuna Carnitas Huarache', zh: '鮪魚厚餅' },
  description: {
    en: 'One of the most rated dishes in Mexico: thick dough tortillas topped with sour-spicy tuna belly. Ask for our vegan option with oyster mushrooms',
    zh: '墨西哥熱門菜：厚玉米餅搭配酸辣鮪魚肚，可改素香菇版。'
  },
  category: 'Little Cravings',
},
{
  id: 'pier8-potluck-01',
  restaurantId: 'sun-05',
  name: { en: 'Baja Tacos', zh: '下加州炸魚塔可' },
  description: {
    en: 'Discover the tastiest fish treat from Baja: crispy beer battered fish tacos. Ask for our vegan option with battered heart of palm',
    zh: '來自下加州的炸魚塔可，可選用炸棕櫚心為素版。'
  },
  category: 'Best Potluck Appetizers',
},
{
  id: 'pier8-potluck-02',
  restaurantId: 'sun-05',
  name: { en: 'Grilled Shrimp Over Hot Embers', zh: '炭烤香料蝦串' },
  description: {
    en: 'Shrimp skewer drizzled with Cajun adobo',
    zh: '蝦串佐卡津風味醬料，炭火燒烤。'
  },
  category: 'Best Potluck Appetizers',
},
{
  id: 'pier8-potluck-03',
  restaurantId: 'sun-05',
  name: { en: 'Fried Onion with Garlic Calamari', zh: '炸洋蔥與蒜香花枝圈' },
  description: {
    en: 'Fried onion croquettes served with garlic calamari rings and Cheddar cheese',
    zh: '炸洋蔥球搭配蒜香花枝圈與切達起司。'
  },
  category: 'Best Potluck Appetizers',
},
{
  id: 'pier8-soups-01',
  restaurantId: 'sun-05',
  name: { en: 'Crab Meatballs', zh: '蟹肉丸' },
  description: {
    en: 'Smothered in a smoky chipotle sauce, the best way to revitalize and refuel your soul',
    zh: '煙燻辣醬燴蟹肉丸，是補充能量與滋養靈魂的最佳選擇。'
  },
  category: 'Soups',
},
{
  id: 'pier8-soups-02',
  restaurantId: 'sun-05',
  name: { en: 'Shrimp Stew', zh: '蝦仁燉湯' },
  description: {
    en: 'Delightful shrimp stew served with potato, carrot and fried tortilla',
    zh: '美味蝦仁燉湯，搭配馬鈴薯、紅蘿蔔與炸玉米餅。'
  },
  category: 'Soups',
},
{
  id: 'pier8-sea-01',
  restaurantId: 'sun-05',
  name: { en: 'A la Tumbada Rice', zh: '韋拉克魯斯海鮮飯' },
  description: {
    en: 'Mix seafood casserole served with Mexican red rice. A tasty blend from Veracruz state, a succulent dish from the Gulf Coast',
    zh: '韋拉克魯斯風味的紅米海鮮焗飯，風味十足。'
  },
  category: 'Delights Of The Sea',
},
{
  id: 'pier8-sea-02',
  restaurantId: 'sun-05',
  name: { en: 'A la Talla Branzino Fillet', zh: '辣烤鱸魚排' },
  description: {
    en: 'Try out the nuances of flavor from the classic cuisine of the state of Guerrero',
    zh: '格雷羅州經典風味的辣烤鱸魚。'
  },
  category: 'Delights Of The Sea',
},
{
  id: 'pier8-sea-03',
  restaurantId: 'sun-05',
  name: { en: 'Fettuccini Rockefeller', zh: '洛克斐勒鮮蝦寬麵' },
  description: {
    en: 'Cooked al dente in Rockefeller sauce, served with shrimp and extra cheese au gratin',
    zh: '佐洛克斐勒醬的寬麵，搭配鮮蝦與焗烤起司。'
  },
  category: 'Delights Of The Sea',
},
{
  id: 'pier8-sea-04',
  restaurantId: 'sun-05',
  name: { en: 'Grilled Glazed Salmon', zh: '醬烤鮭魚' },
  description: {
    en: 'Grilled salmon fillet with oriental sweet and sour sauce, served with crushed peanut made for a savory pipián sauce',
    zh: '佐東方甜酸醬與花生皮皮安醬的香烤鮭魚排。'
  },
  category: 'Delights Of The Sea',
},
{
  id: 'pier8-sea-05',
  restaurantId: 'sun-05',
  name: { en: 'Zarandeado Octopus', zh: '炭烤章魚' },
  description: {
    en: 'Charcoal-grilled octopus served with artichoke, potato and guajillo pepper',
    zh: '炭火烤章魚，搭配洋薊、馬鈴薯與瓜希羅辣椒。'
  },
  category: 'Delights Of The Sea',
},
{
  id: 'pier8-sea-06',
  restaurantId: 'sun-05',
  name: { en: 'Pier 8 Grill', zh: 'Pier 8 海鮮拼盤' },
  description: {
    en: 'Pier8’s favorite, grilled fish and seafood perfect to turn your special occasion into a memorable meal',
    zh: 'Pier8 招牌碳烤海鮮拼盤，為你的特別時光加分。'
  },
  category: 'Delights Of The Sea',
  priceUSD: 24,
},
{
  id: 'pier8-sea-07',
  restaurantId: 'sun-05',
  name: { en: 'Live Lobster', zh: '現烤加勒比龍蝦' },
  description: {
    en: 'Grilled live Caribbean lobster with butter and garlic',
    zh: '現烤加勒比龍蝦，佐以奶油與蒜香。'
  },
  category: 'Delights Of The Sea',
  // price varies by weight: MXN 3.08/g or USD 0.14/g
},
{
  id: 'pier8-earthly-01',
  restaurantId: 'sun-05',
  name: { en: 'Caprese Style Chicken Milanese', zh: '卡布里風雞排' },
  description: {
    en: 'Enjoy this full-flavored chicken cutlet stuffed with mozzarella, tomato and basil',
    zh: '香煎雞排內包莫札瑞拉、番茄與羅勒，風味十足。'
  },
  category: 'Earthly Delicacies',
},
{
  id: 'pier8-earthly-02',
  restaurantId: 'sun-05',
  name: { en: 'New York', zh: '紐約牛排' },
  description: {
    en: 'Grilled steak served with authentic patatas bravas, grilled onion and purslane salad',
    zh: '炭烤牛排搭配炸馬鈴薯塊、烤洋蔥與馬齒莧沙拉。'
  },
  category: 'Earthly Delicacies',
},
{
  id: 'pier8-kids-01',
  restaurantId: 'sun-05',
  name: { en: 'Brioche Molletes', zh: '墨式起司豆醬布里歐' },
  description: {
    en: 'Toasted brioche buns with refried beans and melted cheese, served with Mexican sauce',
    zh: '烤布里歐麵包，夾墨式豆醬與起司，佐墨西哥醬汁。'
  },
  category: 'For The Little Fishermen',
},
{
  id: 'pier8-kids-02',
  restaurantId: 'sun-05',
  name: { en: 'Fettuccini and Chicken', zh: '雞肉寬麵' },
  description: {
    en: 'Creamy fettuccini with fried chicken and Parmesan cheese',
    zh: '奶油寬麵搭配炸雞與帕瑪森起司。'
  },
  category: 'For The Little Fishermen',
},
{
  id: 'pier8-digestive-01',
  restaurantId: 'sun-05',
  name: { en: 'Coffee Liqueur', zh: '咖啡利口酒' },
  description: {
    en: 'A blend of coffee, sugar and spirits which can be enjoyed both as a digestif or dessert',
    zh: '融合咖啡、糖與酒精的利口酒，可作為餐後酒或甜點享用。'
  },
  category: 'Digestives',
},
{
  id: 'pier8-digestive-02',
  restaurantId: 'sun-05',
  name: { en: 'Agavero Liqueur', zh: '龍舌蘭蜂蜜酒' },
  description: {
    en: 'Tequila and honey blended with essence of the damiana flower, native to the Baja region',
    zh: '由龍舌蘭與蜂蜜調和，並加入巴哈地區特有的達米阿那花精。'
  },
  category: 'Digestives',
},
{
  id: 'pier8-digestive-03',
  restaurantId: 'sun-05',
  name: { en: 'Xtabentún with Coffee', zh: '咖啡風味Xtabentún酒' },
  description: {
    en: 'Typical Mayan-region honey liqueur produced from Xtabentún flowers, anise and coconut',
    zh: '瑪雅地區傳統蜂蜜酒，融合Xtabentún花、茴香與椰子風味。'
  },
  category: 'Digestives',
},{
  id: 'pier8-coffee-01',
  restaurantId: 'sun-05',
  name: { en: 'Regular', zh: '黑咖啡' },
  description: { en: '', zh: '' },
  category: 'Coffee',
},
{
  id: 'pier8-coffee-02',
  restaurantId: 'sun-05',
  name: { en: 'Espresso', zh: '濃縮咖啡' },
  description: { en: '', zh: '' },
  category: 'Coffee',
},
{
  id: 'pier8-coffee-03',
  restaurantId: 'sun-05',
  name: { en: 'Cappuccino', zh: '卡布奇諾' },
  description: { en: '', zh: '' },
  category: 'Coffee',
},
{
  id: 'pier8-coffee-04',
  restaurantId: 'sun-05',
  name: { en: 'Latte', zh: '拿鐵' },
  description: { en: '', zh: '' },
  category: 'Coffee',
},
{
  id: 'pier8-tea-01',
  restaurantId: 'sun-05',
  name: { en: 'London Strand Earl Grey', zh: '倫敦斯特蘭德伯爵茶' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-tea-02',
  restaurantId: 'sun-05',
  name: { en: 'Golden Tipped English Breakfast', zh: '金尖英式早餐茶' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-tea-03',
  restaurantId: 'sun-05',
  name: { en: 'Pure Sencha Green Tea', zh: '純煎茶' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-tea-04',
  restaurantId: 'sun-05',
  name: { en: 'Exotic Mango & Ginger Green Tea', zh: '芒果薑綠茶' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-tea-05',
  restaurantId: 'sun-05',
  name: { en: 'Golden Caramel Rooibos', zh: '金焦糖南非茶' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-tea-06',
  restaurantId: 'sun-05',
  name: { en: 'Budding Meadow Camomile', zh: '嫩芽洋甘菊' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-tea-07',
  restaurantId: 'sun-05',
  name: { en: 'Medley of Mint', zh: '綜合薄荷茶' },
  description: { en: '', zh: '' },
  category: 'Tea',
},
{
  id: 'pier8-dessert-01',
  restaurantId: 'sun-05',
  name: { en: 'Key Lime Pie', zh: '紅莓青檸派' },
  description: {
    en: 'Classic pie with red berries',
    zh: '經典青檸派，搭配紅莓。'
  },
  category: 'Desserts',
},
{
  id: 'pier8-dessert-02',
  restaurantId: 'sun-05',
  name: { en: 'Brioche Pudding', zh: '布里歐麵包布丁' },
  description: {
    en: 'Warm pudding with vanilla custard, white chocolate, Greek yogurt sorbet and raspberry',
    zh: '溫熱布丁搭配香草卡士達、白巧克力、希臘優格雪酪與覆盆子。'
  },
  category: 'Desserts',
},
{
  id: 'pier8-dessert-03',
  restaurantId: 'sun-05',
  name: { en: 'Coconut Mousse', zh: '椰香慕斯' },
  description: {
    en: 'With red berry jam, coconut crème and raspberry gel',
    zh: '搭配紅莓醬、椰奶奶油與覆盆子果膠。'
  },
  category: 'Desserts',
},
{
  id: 'pier8-dessert-04',
  restaurantId: 'sun-05',
  name: { en: 'Chocolate Lava Cake', zh: '熔岩巧克力蛋糕' },
  description: {
    en: 'Homemade Graham cracker and vanilla ice cream',
    zh: '搭配手工製作的格雷姆餅與香草冰淇淋。'
  },
  category: 'Desserts',
},
{
  id: 'pier8-icecream-01',
  restaurantId: 'sun-05',
  name: { en: 'Coconut Ice Cream', zh: '椰子冰淇淋' },
  description: {
    en: 'The sweet quality of coconut shines in this creamy flavor',
    zh: '香甜椰子在這款濃郁冰淇淋中完美呈現。'
  },
  category: 'Homemade Ice Cream',
},
{
  id: 'pier8-icecream-02',
  restaurantId: 'sun-05',
  name: { en: 'Mango Sorbet', zh: '芒果雪酪' },
  description: {
    en: 'Fresh mango chunks impart a luscious texture and rich flavor to this gorgeous sorbet',
    zh: '新鮮芒果丁帶來豐富口感與濃郁果香。'
  },
  category: 'Homemade Ice Cream',
},
{
  id: 'pier8-icecream-03',
  restaurantId: 'sun-05',
  name: { en: 'Pineapple and Basil Sorbet', zh: '鳳梨羅勒雪酪' },
  description: {
    en: 'The sweet but tangy taste of this cool treat is perfect after a heavy meal',
    zh: '清爽酸甜，重口味餐後的絕佳選擇。'
  },
  category: 'Homemade Ice Cream',
},
{
  id: 'pier8-icecream-04',
  restaurantId: 'sun-05',
  name: { en: 'Hibiscus Sorbet', zh: '洛神花雪酪' },
  description: {
    en: 'Enjoy the way hibiscus and crispy strawberry pearls seamlessly blend into and flavor this amazing sorbet',
    zh: '洛神花與酥脆草莓珍珠完美融合，風味迷人。'
  },
  category: 'Homemade Ice Cream',
},
// Momo
{
  id: 'momo-cocktail-01',
  restaurantId: 'sun-02',
  name: { en: 'Mango and Green Tea Martini', zh: '芒果綠茶馬丁尼' },
  description: {
    en: 'The coming together of two favorite flavors in Japanese culture, mango and green tea, with vodka',
    zh: '融合日本文化中兩大經典風味：芒果與綠茶，並加入伏特加調製。'
  },
  category: 'Hand Shaken Cocktails',
},
{
  id: 'momo-cocktail-02',
  restaurantId: 'sun-02',
  name: { en: 'Backyard Sake', zh: '後院清酒特調' },
  description: {
    en: 'Cocktail owing its name to its herbaceous components, cucumber and rosemary',
    zh: '因其草本成分—小黃瓜與迷迭香—而得名的清酒調酒。'
  },
  category: 'Hand Shaken Cocktails',
},
{
  id: 'momo-cocktail-03',
  restaurantId: 'sun-02',
  name: { en: 'Vodka & Jasmine Tonic', zh: '茉莉伏特加通寧' },
  description: {
    en: 'A floral and elegant touch to the classic vodka and tonic',
    zh: '為經典伏特加通寧增添優雅茉莉花香。'
  },
  category: 'Hand Shaken Cocktails',
},
{
  id: 'momo-cocktail-04',
  restaurantId: 'sun-02',
  name: { en: 'Ginger Liqueur', zh: '自製薑味利口酒' },
  description: {
    en: 'A homemade liqueur from fresh ginger',
    zh: '以新鮮薑製作的自家利口酒。'
  },
  category: 'Hand Shaken Cocktails',
},
{
  id: 'momo-cocktail-05',
  restaurantId: 'sun-02',
  name: { en: 'Green Tea and Tonic Julep', zh: '綠茶薄荷通寧' },
  description: {
    en: 'Green tea infusion with mint leaves and tonic',
    zh: '綠茶浸泡搭配薄荷葉與通寧水的清爽調酒。'
  },
  category: 'Hand Shaken Cocktails',
},
{
  id: 'momo-cold-01',
  restaurantId: 'sun-02',
  name: { en: 'Som Tam', zh: '青木瓜沙拉' },
  description: {
    en: 'Papaya and cucumber salad with a hint of citrus',
    zh: '青木瓜與小黃瓜沙拉，帶有柑橘香氣。'
  },
  category: 'Cold Starters',
},
{
  id: 'momo-cold-02',
  restaurantId: 'sun-02',
  name: { en: 'Salmon Tiradito', zh: '日式三文魚刺身佐醋汁' },
  description: {
    en: 'Acevichada sauce, ikura and negi',
    zh: '搭配酸辣醋汁、鮭魚卵與青蔥。'
  },
  category: 'Cold Starters',
},
{
  id: 'momo-cold-03',
  restaurantId: 'sun-02',
  name: { en: 'Salmon Crispy Rice', zh: '酥脆飯佐鮭魚' },
  description: {
    en: 'On top of a fried rice crisp, with negi',
    zh: '酥脆米餅上搭配鮭魚與青蔥。'
  },
  category: 'Cold Starters',
},
{
  id: 'momo-cold-04',
  restaurantId: 'sun-02',
  name: { en: 'Tuna or Salmon Won Ton Taco', zh: '吞拿或三文魚雲吞塔可' },
  description: {
    en: 'Crispy won ton filled with spicy tartare and wasabi mayo',
    zh: '酥炸雲吞搭配辣味魚生與芥末蛋黃醬。'
  },
  category: 'Cold Starters',
},
{
  id: 'momo-hot-01',
  restaurantId: 'sun-02',
  name: { en: 'Edamames with Ponzu', zh: '柚子醬毛豆' },
  description: {
    en: 'With ponzu sauce and togarashi at the wok',
    zh: '以柚子醬與七味粉拌炒。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-02',
  restaurantId: 'sun-02',
  name: { en: 'Szechuan Edamames', zh: '四川風味毛豆' },
  description: {
    en: 'With garlic butter, hoisin sauce, oyster, benishoga and negi at the wok',
    zh: '加入蒜香奶油、海鮮醬、蠔油、紅薑與青蔥炒香。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-03',
  restaurantId: 'sun-02',
  name: { en: 'Vegetable Spring Roll', zh: '素春捲' },
  description: {
    en: 'Crunchy roll filled with mixed vegetables',
    zh: '內餡為混合蔬菜的酥炸春捲。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-04',
  restaurantId: 'sun-02',
  name: { en: 'Rock Tempura Corn', zh: '酥炸玉米配辣味蛋黃醬' },
  description: {
    en: 'Tempura corn with spicy mayo',
    zh: '炸玉米佐辣味美乃滋。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-05',
  restaurantId: 'sun-02',
  name: { en: 'Cheese and Plantain Kushikage', zh: '起司與香蕉串炸' },
  description: {
    en: 'Breaded cheese and plantain skewer, with tonkatsu and tartare sauces',
    zh: '裹粉油炸的起司與香蕉串，附豬排醬與塔塔醬。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-06',
  restaurantId: 'sun-02',
  name: { en: 'Tatsutage Chicken', zh: '唐揚炸雞' },
  description: {
    en: 'Japanese fried chicken marinated in a ginger-garlic mix',
    zh: '薑蒜醬汁醃製的日式炸雞。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-07',
  restaurantId: 'sun-02',
  name: { en: 'Pork and Cabbage Gyozas', zh: '豬肉高麗菜煎餃' },
  description: {
    en: 'Seared, with tart-spicy soy sauce',
    zh: '煎餃佐酸辣醬油。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-hot-08',
  restaurantId: 'sun-02',
  name: { en: 'Pork Won Ton', zh: '豬肉雲吞' },
  description: {
    en: 'Filled with pork and vegetables',
    zh: '豬肉與蔬菜內餡。'
  },
  category: 'Hot Starters',
},
{
  id: 'momo-sashimi-01',
  restaurantId: 'sun-02',
  name: { en: 'Tuna', zh: '吞拿魚刺身' },
  description: {
    en: 'Thick cuts of fish, all portions are served with wasabi',
    zh: '厚切生魚片，附芥末。'
  },
  category: 'Sashimis',
},
{
  id: 'momo-sashimi-02',
  restaurantId: 'sun-02',
  name: { en: 'Salmon', zh: '三文魚刺身' },
  description: {
    en: 'Thick cuts of fish, all portions are served with wasabi',
    zh: '厚切生魚片，附芥末。'
  },
  category: 'Sashimis',
},
{
  id: 'momo-nigiri-01',
  restaurantId: 'sun-02',
  name: { en: 'Tuna', zh: '吞拿魚壽司' },
  description: {
    en: 'Prepared with sushi rice, served with wasabi, ginger and nikiri sauce',
    zh: '壽司飯製作，附芥末、薑片與日式壽司醬油。'
  },
  category: 'Nigiri',
},
{
  id: 'momo-nigiri-02',
  restaurantId: 'sun-02',
  name: { en: 'Hiramasa', zh: '平政魚壽司' },
  description: {
    en: 'Prepared with sushi rice, served with wasabi, ginger and nikiri sauce',
    zh: '壽司飯製作，附芥末、薑片與日式壽司醬油。'
  },
  category: 'Nigiri',
},
{
  id: 'momo-nigiri-03',
  restaurantId: 'sun-02',
  name: { en: 'Ikura', zh: '鮭魚卵壽司' },
  description: {
    en: 'Prepared with sushi rice, served with wasabi, ginger and nikiri sauce',
    zh: '壽司飯製作，附芥末、薑片與日式壽司醬油。'
  },
  category: 'Nigiri',
},
{
  id: 'momo-nigiri-04',
  restaurantId: 'sun-02',
  name: { en: 'Salmon', zh: '三文魚壽司' },
  description: {
    en: 'Prepared with sushi rice, served with wasabi, ginger and nikiri sauce',
    zh: '壽司飯製作，附芥末、薑片與日式壽司醬油。'
  },
  category: 'Nigiri',
},
{
  id: 'momo-nigiri-05',
  restaurantId: 'sun-02',
  name: { en: 'Shrimp', zh: '蝦壽司' },
  description: {
    en: 'Prepared with sushi rice, served with wasabi, ginger and nikiri sauce',
    zh: '壽司飯製作，附芥末、薑片與日式壽司醬油。'
  },
  category: 'Nigiri',
},
{
  id: 'momo-maki-01',
  restaurantId: 'sun-02',
  name: { en: 'Spicy Veggie', zh: '香辣蔬菜卷' },
  description: {
    en: 'Pickled eggplant and Japanese daikon with fried garlic and a hint of serrano chili',
    zh: '醃製茄子與日式白蘿蔔，搭配炸蒜與些許墨西哥辣椒。'
  },
  category: 'Makis',
},
{
  id: 'momo-maki-02',
  restaurantId: 'sun-02',
  name: { en: 'Spicy Tuna', zh: '辣味吞拿魚卷' },
  description: {
    en: 'Spicy bluefin tuna, masago and scallion',
    zh: '辣味藍鰭吞拿魚、魚子與青蔥。'
  },
  category: 'Makis',
},
{
  id: 'momo-maki-03',
  restaurantId: 'sun-02',
  name: { en: 'Crispy Salmon', zh: '酥炸三文魚卷' },
  description: {
    en: 'Deep fried roll filled with salmon, avocado, spicy mayo and cream cheese',
    zh: '炸捲壽司內含鮭魚、酪梨、辣味蛋黃醬與奶油乳酪。'
  },
  category: 'Makis',
},
{
  id: 'momo-maki-04',
  restaurantId: 'sun-02',
  name: { en: 'California', zh: '加州卷' },
  description: {
    en: 'Creamy kanikama, fleshy avocado and cucumber',
    zh: '蟹肉棒、酪梨與小黃瓜。'
  },
  category: 'Makis',
},
{
  id: 'momo-maki-05',
  restaurantId: 'sun-02',
  name: { en: 'Momoten', zh: '炸蝦壽司卷' },
  description: {
    en: 'Deep fried roll filled with crispy shrimp, asparagus and avocado, topped with yuzu kosho mayo and sweet chili sauce',
    zh: '炸捲內含脆炸蝦、蘆筍與酪梨，佐柚子胡椒美乃滋與甜辣醬。'
  },
  category: 'Makis',
},
{
  id: 'momo-maki-06',
  restaurantId: 'sun-02',
  name: { en: 'Spider Roll', zh: '軟殼蟹壽司卷' },
  description: {
    en: 'Deep-fried soft shell crab with avocado and spicy creamy sauce on the inside',
    zh: '炸軟殼蟹、酪梨與內餡辣味奶油醬。'
  },
  category: 'Makis',
},
{
  id: 'momo-bao-01',
  restaurantId: 'sun-02',
  name: { en: 'Spicy Chicken', zh: '辣味雞肉刈包' },
  description: {
    en: 'Crunchy chicken topped with gochujang sauce, Japanese pickles, cilantro and cucumber',
    zh: '炸雞配韓式辣醬、日式醃菜、香菜與小黃瓜。'
  },
  category: 'Bao',
},
{
  id: 'momo-bao-02',
  restaurantId: 'sun-02',
  name: { en: 'Char Siu', zh: '叉燒刈包' },
  description: {
    en: 'Pork in hoisin sauce, cucumber, negi and benishoga',
    zh: '叉燒搭配海鮮醬、小黃瓜、青蔥與紅薑。'
  },
  category: 'Bao',
},
{
  id: 'momo-dimsum-01',
  restaurantId: 'sun-02',
  name: { en: 'Char Siu Baozi', zh: '叉燒包' },
  description: {
    en: 'Steamed bun filled with roasted sweet pork and shiitake',
    zh: '內餡為甜叉燒與香菇的蒸包。'
  },
  category: 'Dim Sum',
},
{
  id: 'momo-dimsum-02',
  restaurantId: 'sun-02',
  name: { en: 'Siu Mae', zh: '燒賣' },
  description: {
    en: 'Shanghai style dumpling, shrimp, pork and water chestnuts',
    zh: '上海風味燒賣，包含蝦仁、豬肉與荸薺。'
  },
  category: 'Dim Sum',
},
{
  id: 'momo-dimsum-03',
  restaurantId: 'sun-02',
  name: { en: 'Wo Tip', zh: '鍋貼' },
  description: {
    en: 'Dumpling stuffed with pork in sweet sauce',
    zh: '甜味醬汁豬肉鍋貼。'
  },
  category: 'Dim Sum',
},
{
  id: 'momo-soup-01',
  restaurantId: 'sun-02',
  name: { en: 'Misoshiru', zh: '味噌湯' },
  description: {
    en: 'Fresh tofu, wakame and negi soup',
    zh: '鮮豆腐、海帶芽與蔥花的味噌湯。'
  },
  category: 'Soup, Rice and Noodles',
},
{
  id: 'momo-soup-02',
  restaurantId: 'sun-02',
  name: { en: 'Spicy Seafood', zh: '香辣海鮮湯' },
  description: {
    en: 'Seafood soup flavored with lemongrass, mushrooms, serrano pepper and cilantro',
    zh: '加入香茅、蘑菇、辣椒與香菜的海鮮湯。'
  },
  category: 'Soup, Rice and Noodles',
},
{
  id: 'momo-soup-03',
  restaurantId: 'sun-02',
  name: { en: 'Chicken Chow Fan', zh: '雞肉炒飯' },
  description: {
    en: 'With vegetables, soy bean sprouts, egg and chicken at the wok',
    zh: '含蔬菜、豆芽、雞蛋與雞肉的鐵鍋炒飯。'
  },
  category: 'Soup, Rice and Noodles',
},
{
  id: 'momo-soup-04',
  restaurantId: 'sun-02',
  name: { en: 'Mixed Yakimeshi', zh: '什錦日式炒飯' },
  description: {
    en: 'With egg and a mix of vegetables, slightly scented with garlic butter and soy sauce, with beef, chicken and shrimp',
    zh: '雞蛋、蔬菜、牛肉、雞肉與蝦仁，佐蒜香奶油與醬油炒飯。'
  },
  category: 'Soup, Rice and Noodles',
},
{
  id: 'momo-soup-05',
  restaurantId: 'sun-02',
  name: { en: 'Mixed Yakisoba', zh: '什錦炒麵' },
  description: {
    en: 'Wok-stirfried noodles with vegetables and sweet and sour sauce, mayonnaise, aonori, benishoga, chicken, beef and shrimp',
    zh: '加入甜酸醬、美乃滋、青海苔與紅薑的什錦蔬菜炒麵，含雞肉、牛肉與蝦仁。'
  },
  category: 'Soup, Rice and Noodles',
},
{
  id: 'momo-main-01',
  restaurantId: 'sun-02',
  name: { en: 'Green Curry', zh: '綠咖哩蔬菜' },
  description: {
    en: 'Green Thai-style spicy vegetable curry',
    zh: '泰式綠咖哩蔬菜料理。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-02',
  restaurantId: 'sun-02',
  name: { en: 'Teriyaki Salmon', zh: '照燒鮭魚' },
  description: {
    en: 'Roasted and covered in sweet sauce',
    zh: '烤鮭魚佐甜味照燒醬。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-03',
  restaurantId: 'sun-02',
  name: { en: 'Mandarin Shrimp', zh: '柑橘風味炒蝦' },
  description: {
    en: 'Tempura sweet and sour shrimp, with negi and peaches finished at the wok',
    zh: '甜酸醬天婦羅炸蝦，佐蔥與水蜜桃。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-04',
  restaurantId: 'sun-02',
  name: { en: 'Misoyaki Lobster 7 oz', zh: '味噌燒龍蝦（7盎司）' },
  description: {
    en: 'Slow-cooked lobster marinated in sweet miso sauce',
    zh: '以甜味噌醃製慢煮的龍蝦。'
  },
  category: 'Main Dishes',
  priceUSD: 24,
},
{
  id: 'momo-main-05',
  restaurantId: 'sun-02',
  name: { en: 'Pad Thai', zh: '泰式炒河粉' },
  description: {
    en: 'Wok-fried rice noodles with chicken and tamarind sauce',
    zh: '炒米粉佐雞肉與羅望子醬。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-06',
  restaurantId: 'sun-02',
  name: { en: 'Sweet and Sour Chicken', zh: '糖醋雞丁' },
  description: {
    en: 'Sautéed with peppers, onion and orange, drizzled with peanuts',
    zh: '佐青椒、洋蔥與柳橙醬，再撒上花生。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-07',
  restaurantId: 'sun-02',
  name: { en: 'Teriyaki Chicken', zh: '照燒雞排' },
  description: {
    en: 'Marinated and roasted in sweet soy sauce',
    zh: '醃製後烘烤的甜醬油風味雞排。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-08',
  restaurantId: 'sun-02',
  name: { en: 'Szechuan Pork', zh: '四川風味炒豬肉' },
  description: {
    en: 'Wok-fried with a hint of ginger, garlic and chili',
    zh: '鐵鍋爆炒，帶薑蒜與辣味。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-09',
  restaurantId: 'sun-02',
  name: { en: 'Beef and Broccoli', zh: '蠔油牛肉炒西蘭花' },
  description: {
    en: 'Beef with hoisin, oyster sauce, five spices, carrots and broccoli',
    zh: '牛肉配蠔油、五香粉、紅蘿蔔與西蘭花。'
  },
  category: 'Main Dishes',
},
{
  id: 'momo-main-10',
  restaurantId: 'sun-02',
  name: { en: 'Japanese Wagyu A4 Ishiyaki 5 oz', zh: 'A4和牛石燒（5盎司）' },
  description: {
    en: 'Juicy slices cooked at your table on a hot stone with yuzu sauce, spicy lime and anticuchera sauce',
    zh: '桌邊熱石料理和牛，佐柚子醬、辣檸檬與秘魯辣醬。'
  },
  category: 'Main Dishes',
  priceUSD: 27,
},
{
  id: 'momo-main-11',
  restaurantId: 'sun-02',
  name: { en: 'Japanese Wagyu A4 Teppanyaki 5 oz', zh: 'A4和牛鐵板燒（5盎司）' },
  description: {
    en: 'Seared, with asparagus, carrot and wasabi',
    zh: '煎烤搭配蘆筍、紅蘿蔔與山葵。'
  },
  category: 'Main Dishes',
  priceUSD: 27,
},
// Gondola
{
  id: 'gondola-cocktail-01',
  restaurantId: 'sun-01',
  name: { en: 'Limoncello', zh: '檸檬酒' },
  description: { en: '', zh: '' },
  category: 'Cocktail',
},
{
  id: 'gondola-cocktail-02',
  restaurantId: 'sun-01',
  name: { en: 'House Aperol Spritz', zh: '阿佩羅開胃酒' },
  description: { en: '', zh: '' },
  category: 'Cocktail',
},
{
  id: 'gondola-cocktail-03',
  restaurantId: 'sun-01',
  name: { en: 'Rosmarinus', zh: '迷迭香氣泡飲' },
  description: { en: '', zh: '' },
  category: 'Cocktail',
},
{
  id: 'gondola-cocktail-04',
  restaurantId: 'sun-01',
  name: { en: 'Italian Rose Soda', zh: '義式玫瑰氣泡飲' },
  description: { en: '', zh: '' },
  category: 'Cocktail',
},
{
  id: 'gondola-antipasti-01',
  restaurantId: 'sun-01',
  name: { en: 'Tomato and Burrata Bruschetta', zh: '番茄與布拉塔起司麵包' },
  description: {
    en: 'Soft burrata cheese served on ciabatta bread, spread with tomato sauce',
    zh: '布拉塔起司與番茄醬抹醬搭配恰巴塔麵包。'
  },
  category: 'Antipasti',
},
{
  id: 'gondola-antipasti-02',
  restaurantId: 'sun-01',
  name: { en: 'Caprese Salad', zh: '卡布里沙拉' },
  description: {
    en: 'A classic in the Italian cuisine, with mozzarella, tomato and pesto',
    zh: '義式經典搭配：莫札瑞拉起司、番茄與香草醬。'
  },
  category: 'Antipasti',
},
{
  id: 'gondola-antipasti-03',
  restaurantId: 'sun-01',
  name: { en: 'Caesar Palace Salad', zh: '凱薩宮廷沙拉' },
  description: {
    en: 'Crunchy lettuce leaves dressed with Caesar recipe, drizzled with Parmesan cheese and bacon bits',
    zh: '凱薩醬拌生菜，撒上帕馬森起司與培根碎。'
  },
  category: 'Antipasti',
},
{
  id: 'gondola-antipasti-04',
  restaurantId: 'sun-01',
  name: { en: 'Beef Carpaccio with Capers', zh: '薄切牛肉佐酸豆' },
  description: {
    en: 'Thin slices of beef, garnished with capers and served with arugula salad',
    zh: '薄片牛肉，搭配酸豆與芝麻葉沙拉。'
  },
  category: 'Antipasti',
},
{
  id: 'gondola-antipasti-05',
  restaurantId: 'sun-01',
  name: { en: 'Saffron Arancini', zh: '番紅花起司飯糰' },
  description: {
    en: 'Soft golden brown Parmesan cheese rice balls, a specialty of Sicilian cuisine',
    zh: '酥炸帕馬森起司飯糰，西西里經典。'
  },
  category: 'Antipasti',
},
{
  id: 'gondola-antipasti-06',
  restaurantId: 'sun-01',
  name: { en: 'Fried Seafood Mix', zh: '綜合酥炸海鮮' },
  description: {
    en: 'Crispy batter-fried octopus, squid and fish with a touch of Italian lemon. Vegetarian option available.',
    zh: '酥炸章魚、花枝與魚，帶有義大利檸檬香氣。可改素食版。'
  },
  category: 'Antipasti',
},
{
  id: 'gondola-zuppe-01',
  restaurantId: 'sun-01',
  name: { en: 'Roasted Tomato Cream Soup', zh: '烤番茄奶油濃湯' },
  description: {
    en: 'A hearty creation with poached tomato and cheese',
    zh: '以燉番茄與起司調製的濃湯。'
  },
  category: 'Zuppe',
},
{
  id: 'gondola-zuppe-02',
  restaurantId: 'sun-01',
  name: { en: 'Minestrone', zh: '義式蔬菜湯' },
  description: {
    en: 'Traditional vegetable and pasta soup',
    zh: '義大利經典蔬菜與麵條清湯。'
  },
  category: 'Zuppe',
},
{
  id: 'gondola-pasta-01',
  restaurantId: 'sun-01',
  name: { en: 'Caprese Risotto', zh: '卡布里起司燉飯' },
  description: {
    en: 'Slow-cooked al dente Carnaroli rice, served with mozzarella cheese, tomato and pesto',
    zh: '慢燉卡那羅利米，搭配莫札瑞拉起司、番茄與香草醬。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-02',
  restaurantId: 'sun-01',
  name: { en: 'Saffron Risotto', zh: '番紅花燉飯' },
  description: {
    en: 'Slow-cooked al dente Carnaroli rice scented with saffron',
    zh: '慢燉卡那羅利米，散發番紅花香氣。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-03',
  restaurantId: 'sun-01',
  name: { en: 'Spaghetti Amatriciana', zh: '阿瑪特里切娜義大利麵' },
  description: {
    en: 'Long pasta, prepared with tomato sauce and a golden cheesy crust',
    zh: '長條義大利麵佐番茄醬，配上金黃起司酥皮。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-04',
  restaurantId: 'sun-01',
  name: { en: 'Paccheri with Lobster 7 oz', zh: '7盎司龍蝦寬管麵' },
  description: {
    en: 'Improve your experience by adding a lobster tail to your pasta with tomato and vodka sauce',
    zh: '寬管麵搭配番茄與伏特加醬，佐7盎司龍蝦尾，提升口感。'
  },
  priceUSD: 24,
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-05',
  restaurantId: 'sun-01',
  name: { en: 'Fusilli with Tomato and Prosciutto', zh: '番茄與火腿螺旋麵' },
  description: {
    en: 'Al dente pasta with cherry tomatoes and prosciutto',
    zh: 'Q彈螺旋麵搭配櫻桃番茄與帕瑪火腿。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-06',
  restaurantId: 'sun-01',
  name: { en: 'Lasagna Bolognese', zh: '波隆那肉醬千層麵' },
  description: {
    en: 'Handmade pasta sheets, prepared with the traditional Bolognese sauce and mozzarella cheese',
    zh: '手工千層麵片，佐傳統波隆那肉醬與莫札瑞拉起司。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-07',
  restaurantId: 'sun-01',
  name: { en: 'Pesto Penne', zh: '香草醬斜管麵' },
  description: {
    en: 'Short pasta with basil pesto, Parmesan cheese, and pine nuts',
    zh: '短管麵搭配羅勒青醬、帕瑪森起司與松子。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-pasta-08',
  restaurantId: 'sun-01',
  name: { en: 'Shrimp Ravioli', zh: '蝦仁起司義式餃子' },
  description: {
    en: 'Fresh pasta filled with shrimp, covered with a creamy vodka sauce',
    zh: '內餡為蝦仁，搭配奶香伏特加醬的義式餃子。'
  },
  category: 'Paste e Risotti',
},
{
  id: 'gondola-secondi-01',
  restaurantId: 'sun-01',
  name: { en: 'Caponata', zh: '西西里燉蔬菜' },
  description: {
    en: 'From the Sicilian cuisine, a classic stew of vegetables: tomato, eggplant, and olives',
    zh: '西西里經典蔬菜燉菜：番茄、茄子與橄欖。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-02',
  restaurantId: 'sun-01',
  name: { en: 'Vignarola', zh: '羅馬燉蔬菜' },
  description: {
    en: 'Roman stew prepared with artichokes, peas and broad beans',
    zh: '羅馬風味燉菜，使用朝鮮薊、豌豆與蠶豆。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-03',
  restaurantId: 'sun-01',
  name: { en: 'Grilled Salmon', zh: '炭烤鮭魚' },
  description: {
    en: 'Grilled salmon, served with sautéed vegetables and pesto',
    zh: '炭烤鮭魚佐炒蔬菜與香草醬。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-04',
  restaurantId: 'sun-01',
  name: { en: 'Grilled Octopus', zh: '炭烤章魚' },
  description: {
    en: 'Grilled octopus served with gnocchi in arrabbiata sauce',
    zh: '炭烤章魚佐辣番茄醬義式麵疙瘩。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-05',
  restaurantId: 'sun-01',
  name: { en: 'Stuffed Chicken Breast', zh: '培根包起司雞胸' },
  description: {
    en: 'Chicken breast wrapped in crispy bacon, filled with cheese, ham and spinach',
    zh: '酥脆培根包裹的雞胸，內餡含起司、火腿與菠菜。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-06',
  restaurantId: 'sun-01',
  name: { en: 'Pork Milanese', zh: '米蘭炸豬排' },
  description: {
    en: 'Classic dish from Milan, pork chop breaded with Parmesan, cooked in butter, and served with arugula and cherry tomato salad',
    zh: '米蘭經典炸豬排佐帕瑪森起司、奶油、芝麻葉與番茄沙拉。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-07',
  restaurantId: 'sun-01',
  name: { en: 'Veal Saltimbocca', zh: '火腿起司小牛排' },
  description: {
    en: 'Veal filled with prosciutto, served with sage sauce and vegetables',
    zh: '小牛排包火腿佐鼠尾草醬與蔬菜。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-08',
  restaurantId: 'sun-01',
  name: { en: 'Ossobuco with Milanese Style Risotto', zh: '米蘭燉牛膝佐燉飯' },
  description: {
    en: 'Perfectly cooked beef ossobuco, served with a creamy saffron rice',
    zh: '完美燉煮牛膝，佐奶香番紅花燉飯。'
  },
  category: 'Secondi',
},
{
  id: 'gondola-secondi-09',
  restaurantId: 'sun-01',
  name: { en: 'Bistecca alla Fiorentina Tagliata 31 oz', zh: '31盎司佛羅倫斯丁骨牛排' },
  description: {
    en: 'Grilled Porterhouse steak, served with roasted mushrooms, cherry tomato and arugula',
    zh: '炭烤丁骨牛排佐烤蘑菇、番茄與芝麻葉。'
  },
  priceUSD: 110,
  category: 'Secondi',
},
{
  id: 'gondola-pizza-01',
  restaurantId: 'sun-01',
  name: { en: 'Margherita Pizza', zh: '瑪格麗特披薩' },
  description: {
    en: 'Fresh mozzarella and fragrant basil',
    zh: '新鮮莫札瑞拉起司與香氣羅勒葉。'
  },
  category: 'Pizza',
},
{
  id: 'gondola-pizza-02',
  restaurantId: 'sun-01',
  name: { en: '3 Formaggi Pizza', zh: '三重起司披薩' },
  description: {
    en: 'So good you don’t need 4: fresh mozzarella, goat cheese and provolone',
    zh: '三種起司：莫札瑞拉、羊奶起司與普羅沃洛起司。'
  },
  category: 'Pizza',
},
{
  id: 'gondola-pizza-03',
  restaurantId: 'sun-01',
  name: { en: 'Pepperoni Pizza', zh: '辣香腸披薩' },
  description: {
    en: 'Golden and crunchy with a spicy, tangy crowd favorite; golden pepperoni, tomato sauce, mozzarella and Parmesan cheese',
    zh: '金黃酥脆的經典辣香腸披薩，含番茄醬、莫札瑞拉與帕馬森起司。'
  },
  category: 'Pizza',
},
{
  id: 'gondola-pizza-04',
  restaurantId: 'sun-01',
  name: { en: 'Diavola Pizza', zh: '惡魔辣披薩' },
  description: {
    en: 'Spicy sausage, xcatik chili pepper, pepperoncino flakes and fresh mozzarella for those who like hot flavors',
    zh: '辣味香腸、尤卡坦辣椒、辣椒片與新鮮起司，適合重辣者。'
  },
  category: 'Pizza',
},
{
  id: 'gondola-kids-01',
  restaurantId: 'sun-01',
  name: { en: 'Pomodoro Riccioli', zh: '番茄扭扭麵' },
  description: {
    en: 'Al dente pasta with tomato sauce',
    zh: 'Q彈扭扭麵搭配番茄醬。',
  },
  category: 'For Kids',
},
{
  id: 'gondola-kids-02',
  restaurantId: 'sun-01',
  name: { en: 'Alfredo Penne', zh: '白醬斜管麵' },
  description: {
    en: 'Short pasta with traditional Alfredo sauce',
    zh: '傳統白醬斜管麵。',
  },
  category: 'For Kids',
},
{
  id: 'gondola-kids-03',
  restaurantId: 'sun-01',
  name: { en: 'Fried Calamari', zh: '酥炸花枝圈' },
  description: {
    en: 'Covered with a crispy crust, served with our marinara sauce',
    zh: '外皮酥脆的炸花枝圈，附番茄醬。',
  },
  category: 'For Kids',
},
{
  id: 'gondola-kids-04',
  restaurantId: 'sun-01',
  name: { en: 'Lasagna Bolognese', zh: '波隆那肉醬千層麵' },
  description: {
    en: 'Handmade pasta sheets, prepared with the traditional Bolognese sauce and mozzarella cheese',
    zh: '手工千層麵片，佐傳統波隆那肉醬與莫札瑞拉起司。',
  },
  category: 'For Kids',
},
{
  id: 'gondola-kids-05',
  restaurantId: 'sun-01',
  name: { en: '3 Formaggi Pizza', zh: '三重起司披薩' },
  description: {
    en: 'So good you don’t need 4: fresh mozzarella, goat cheese and provolone',
    zh: '三種起司的完美組合：莫札瑞拉、羊奶起司與普羅沃洛。',
  },
  category: 'For Kids',
},
{
  id: 'gondola-kids-06',
  restaurantId: 'sun-01',
  name: { en: 'Hawaiian Pizza', zh: '夏威夷披薩' },
  description: {
    en: 'Tomato base, mozzarella, Parmesan cheese, pineapple and ham',
    zh: '番茄底、莫札瑞拉與帕瑪森起司、鳳梨與火腿的經典搭配。',
  },
  category: 'For Kids',
},
{
  id: 'gondola-kids-07',
  restaurantId: 'sun-01',
  name: { en: 'Pepperoni Pizza', zh: '辣香腸披薩' },
  description: {
    en: 'Golden pepperoni, tomato sauce, mozzarella and Parmesan cheese',
    zh: '金黃辣香腸、番茄醬、莫札瑞拉與帕瑪森起司。',
  },
  category: 'For Kids',
},
// agra
{
  id: 'agra-cocktail-01',
  restaurantId: 'sun-08',
  name: { en: 'Chai Martini', zh: '印度茶馬丁尼' },
  description: {
    en: 'An aromatic seed blend with undertones of vodka infused with coconut',
    zh: '香料種子融合椰子伏特加的芳香馬丁尼。',
  },
  category: 'Cocktail',
},
{
  id: 'agra-cocktail-02',
  restaurantId: 'sun-08',
  name: { en: 'Bombay Tonic', zh: '孟買通寧酒' },
  description: {
    en: 'A blissfully refreshing cocktail with rose essence and fragrant rosemary',
    zh: '玫瑰精華與迷迭香香氣交織的清爽調酒。',
  },
  category: 'Cocktail',
},
{
  id: 'agra-cocktail-03',
  restaurantId: 'sun-08',
  name: { en: 'Spicy Martini', zh: '辛香馬丁尼' },
  description: {
    en: 'Spicy and bold flavors provide a unique experience featuring spicy peppers, orange liqueur and a dash of lime',
    zh: '辣椒、香橙酒與一抹萊姆，帶來獨特大膽的風味體驗。',
  },
  category: 'Cocktail',
},
{
  id: 'agra-cocktail-04',
  restaurantId: 'sun-08',
  name: { en: 'Agra Colada Mocktail', zh: '阿格拉可樂達（無酒精）' },
  description: {
    en: 'Take a spin on the classic and frothy piña colada: cardamom seeds mixed with a hint of rosemary',
    zh: '經典可樂達的新詮釋：荳蔻種子融合一絲迷迭香香氣。',
  },
  category: 'Cocktail',
},
{
  id: 'agra-cocktail-05',
  restaurantId: 'sun-08',
  name: { en: 'Ginger Mint Lemonade Mocktail', zh: '薑薄荷檸檬特飲（無酒精）' },
  description: {
    en: 'Amazingly refreshing mocktail: dried ginger, mint and muddled fresh limes',
    zh: '清新無比的無酒精飲品：乾薑、薄荷與搗碎鮮萊姆。',
  },
  category: 'Cocktail',
},
{
  id: 'agra-appetizer-01',
  restaurantId: 'sun-08',
  name: { en: 'Onion Bhaji', zh: '炸洋蔥圈' },
  description: {
    en: 'Spicy deep fried onion slices in gram flour',
    zh: '辛香味的洋蔥圈，裹上鷹嘴豆粉炸至酥脆。',
  },
  category: 'Appetizer',
},
{
  id: 'agra-appetizer-02',
  restaurantId: 'sun-08',
  name: { en: 'Vegetable Samosa', zh: '蔬菜咖哩角' },
  description: {
    en: 'Homemade dough stuffed with mashed potatoes, onions, ginger paste, green peas and spices',
    zh: '手工餃皮包入馬鈴薯、洋蔥、薑蓉、青豆與香料。',
  },
  category: 'Appetizer',
},
{
  id: 'agra-appetizer-03',
  restaurantId: 'sun-08',
  name: { en: 'Chicken Samosa', zh: '雞肉咖哩角' },
  description: {
    en: 'Homemade dough stuffed with minced chicken, onion, ginger-garlic paste, green peas and spices',
    zh: '手工餃皮包入雞絞肉、洋蔥、薑蒜醬、青豆與香料。',
  },
  category: 'Appetizer',
},
{
  id: 'agra-appetizer-04',
  restaurantId: 'sun-08',
  name: { en: 'Sabudana Vada', zh: '炸西米餅' },
  description: {
    en: 'Fried patties made of sago, mashed potatoes, green chilies and ginger',
    zh: '以西米、馬鈴薯、青辣椒與薑製成的香炸小餅。',
  },
  category: 'Appetizer',
},
{
  id: 'agra-tandoor-01',
  restaurantId: 'sun-08',
  name: { en: 'Paneer Hariyali Tikka', zh: '香草印式烤起司' },
  description: {
    en: 'Diced Indian cheese marinated in spices',
    zh: '印度起司丁以香料醃製烘烤。',
  },
  category: 'Tandoor',
},
{
  id: 'agra-tandoor-02',
  restaurantId: 'sun-08',
  name: { en: 'Murgh Tikka', zh: '香料烤雞塊' },
  description: {
    en: 'Juicy tender roasted chicken flavored with Indian spices',
    zh: '多汁嫩雞塊佐濃郁印度香料炭烤。',
  },
  category: 'Tandoor',
},
{
  id: 'agra-tandoor-03',
  restaurantId: 'sun-08',
  name: { en: 'Reshmi Malai Kabab', zh: '奶香嫩雞串' },
  description: {
    en: 'Juicy tender roasted chicken with Indian spices, cream and cheese',
    zh: '印度香料搭配奶油與起司醃製的嫩雞串。',
  },
  category: 'Tandoor',
},
{
  id: 'agra-tandoor-04',
  restaurantId: 'sun-08',
  name: { en: 'Salmon Tikka', zh: '香料烤鮭魚' },
  description: {
    en: 'Roasted salmon flavored with mustard, yoghurt, Indian spices and a touch of honey',
    zh: '鮭魚搭配芥末、優格、印度香料與蜂蜜烤製。',
  },
  category: 'Tandoor',
},
{
  id: 'agra-tandoor-05',
  restaurantId: 'sun-08',
  name: { en: 'Mutton Kabab', zh: '香料羊肉串' },
  description: {
    en: 'Minced lamb marinated with Indian spices and fragrant herbs',
    zh: '碎羊肉佐香料與香草醃製，炭烤而成。',
  },
  category: 'Tandoor',
},
{
  id: 'agra-garden-01',
  restaurantId: 'sun-08',
  name: { en: 'Chole', zh: '香料燉鷹嘴豆' },
  description: {
    en: 'Cheakpeas cooked in thick onion and tomato gravy with Indian spices',
    zh: '鷹嘴豆燉煮於濃郁洋蔥番茄醬汁與印度香料中。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-02',
  restaurantId: 'sun-08',
  name: { en: 'Paneer Butter Masala', zh: '奶油香料起司' },
  description: {
    en: 'Indian cottage cheese cooked in thick and spicy tomato gravy',
    zh: '印度起司燉煮於濃郁辛辣番茄醬汁中。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-03',
  restaurantId: 'sun-08',
  name: { en: 'Jeera Aloo', zh: '孜然炒馬鈴薯' },
  description: {
    en: 'Cumin flavored potatoes cooked with onion, green chili and a blend of spices',
    zh: '孜然風味馬鈴薯搭配洋蔥、青辣椒與香料拌炒。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-04',
  restaurantId: 'sun-08',
  name: { en: 'Masala Dosa', zh: '香料馬鈴薯米豆捲' },
  description: {
    en: 'Indian crepes made of rice and lentils with fenugreek seeds, stuffed with spiced mashed potatoes',
    zh: '米與扁豆粉煎製的印度煎餅，包裹香料馬鈴薯餡。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-05',
  restaurantId: 'sun-08',
  name: { en: 'Sadha Dosa', zh: '原味印度煎餅' },
  description: {
    en: 'Indian crepes made of rice and lentils, served with sambar and coconut chutney',
    zh: '以米與扁豆製成的煎餅，搭配南印燉菜與椰子沾醬。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-06',
  restaurantId: 'sun-08',
  name: { en: 'Pav Bhaji', zh: '香辣蔬菜咖哩堡' },
  description: {
    en: 'An amazing blend of spiced vegetables cooked in a thick gravy served with soft dinner rolls',
    zh: '濃郁香辣蔬菜咖哩搭配鬆軟麵包捲。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-07',
  restaurantId: 'sun-08',
  name: { en: 'Hariyali Paneer Kofta', zh: '菠菜起司丸' },
  description: {
    en: 'Fried Indian cheese and spinach balls dipped in rich cashew and tomato gravy',
    zh: '炸起司菠菜球佐腰果番茄醬汁。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-08',
  restaurantId: 'sun-08',
  name: { en: 'Gujarati Kadhi', zh: '古吉拉特酸奶燴醬' },
  description: {
    en: 'The balance of sweet and tangy flavors are quite interesting: yoghurt based sauce made with gram flour and herbs',
    zh: '甜與酸的絕妙平衡：以酸奶、鷹嘴豆粉與香草調製的燴醬。',
  },
  category: 'Garden',
},
{
  id: 'agra-garden-09',
  restaurantId: 'sun-08',
  name: { en: 'Bhindi Masala', zh: '香料秋葵' },
  description: {
    en: 'Healthy dish made with tender okra enveloped in a savory onion and tomato gravy',
    zh: '秋葵佐香濃洋蔥番茄醬汁，營養健康的選擇。',
  },
  category: 'Garden',
},
{
  id: 'agra-sea-01',
  restaurantId: 'sun-08',
  name: { en: 'Meen Moilee', zh: '南印香料椰汁魚燉湯' },
  description: {
    en: 'Kerala style lightly spiced coconut based fish stew',
    zh: '南印度風味，椰汁為基底的淡香辣魚燉湯。',
  },
  category: 'Sea',
},
{
  id: 'agra-sea-02',
  restaurantId: 'sun-08',
  name: { en: 'Goan Fish Curry', zh: '果阿椰汁魚咖哩' },
  description: {
    en: 'Fish in coconut flavored curry sauce',
    zh: '椰香濃郁的果阿魚咖哩料理。',
  },
  category: 'Sea',
},
{
  id: 'agra-sea-03',
  restaurantId: 'sun-08',
  name: { en: 'Zinga Masala', zh: '香料蝦咖哩' },
  description: {
    en: 'Shrimp cooked in thick gravy with spices',
    zh: '鮮蝦燉煮於香料濃醬中。',
  },
  category: 'Sea',
},
{
  id: 'agra-chicken-01',
  restaurantId: 'sun-08',
  name: { en: 'Kori Gassi', zh: '椰香辣味雞' },
  description: {
    en: 'A rich fiery chicken masala cooked with finely ground coconut, spices and chili pepper',
    zh: '濃郁辣味椰香雞肉咖哩，使用細研椰子與香料辣椒燉煮。',
  },
  category: 'Chicken',
},
{
  id: 'agra-chicken-02',
  restaurantId: 'sun-08',
  name: { en: 'Murgh Korma', zh: '優格白醬燉雞' },
  description: {
    en: 'Chicken braised in white gravy, yoghurt and Indian spices',
    zh: '雞肉以優格、香料與白醬慢燉而成。',
  },
  category: 'Chicken',
},
{
  id: 'agra-chicken-03',
  restaurantId: 'sun-08',
  name: { en: 'Chicken Vindaloo', zh: '果阿辣雞咖哩' },
  description: {
    en: 'Traditional Goan dish cooked in spicy and tangy gravy',
    zh: '傳統果阿料理，使用辛辣酸香醬汁燉煮雞肉。',
  },
  category: 'Chicken',
},
{
  id: 'agra-chicken-04',
  restaurantId: 'sun-08',
  name: { en: 'Murgh Tikka Masala', zh: '番茄燴烤雞' },
  description: {
    en: 'Roasted chicken cooked in velvety tomato gravy',
    zh: '烤雞佐濃郁番茄醬汁的經典料理。',
  },
  category: 'Chicken',
},
{
  id: 'agra-chicken-05',
  restaurantId: 'sun-08',
  name: { en: 'Lucknowi Murgh Biryani', zh: '勒克瑙雞肉香飯' },
  description: {
    en: 'Steam-cooked marinated chicken layered with rice',
    zh: '嫩雞與香米交疊蒸煮，香氣四溢的印度經典雞肉香飯。',
  },
  category: 'Chicken',
},
{
  id: 'agra-mutton-01',
  restaurantId: 'sun-08',
  name: { en: 'Mutton Rogan Josh', zh: '克什米爾羊肉咖哩' },
  description: {
    en: 'Mutton cooked in rich gravy flavored with Kashmiri spices',
    zh: '羊肉燉煮於濃郁醬汁中，帶有克什米爾風味香料。',
  },
  category: 'Mutton',
},
{
  id: 'agra-mutton-02',
  restaurantId: 'sun-08',
  name: { en: 'Dal Ghosht', zh: '豆燉羊肉' },
  description: {
    en: 'Marinated lamb cooked with yellow Indian lentils and spices',
    zh: '醃製羊肉與黃豆及香料一同燉煮的傳統料理。',
  },
  category: 'Mutton',
},
{
  id: 'agra-mutton-03',
  restaurantId: 'sun-08',
  name: { en: 'Mutton Vindaloo', zh: '果阿辣羊咖哩' },
  description: {
    en: 'Goan traditional dish: mutton cooked in spicy and tangy gravy',
    zh: '傳統果阿羊肉料理，搭配辛辣酸香醬汁。',
  },
  category: 'Mutton',
},
{
  id: 'agra-mutton-04',
  restaurantId: 'sun-08',
  name: { en: 'Mughlai Karahi Ghosht', zh: '莫臥兒羊肉燴鍋' },
  description: {
    en: 'Slow cooked lamb pieces in thick gravy with ginger, garlic and fragrant herbs',
    zh: '羊肉與薑、蒜與香草慢燉於濃郁醬汁中的莫臥兒料理。',
  },
  category: 'Mutton',
},
{
  id: 'agra-handi-01',
  restaurantId: 'sun-08',
  name: { en: 'Dal Tarka', zh: '香炒黃扁豆' },
  description: {
    en: 'Yellow lentils cooked with turmeric, onion, tomato and spices',
    zh: '以薑黃、洋蔥、番茄與香料炒煮的黃扁豆。',
  },
  category: 'Handi',
},
{
  id: 'agra-handi-02',
  restaurantId: 'sun-08',
  name: { en: 'Dal Agrawali', zh: '濃郁黑扁豆燉煮' },
  description: {
    en: 'Slowly cooked Indian black lentils flavored with cream, butter and fenugreek leaves',
    zh: '印度黑扁豆慢煮入味，融合奶油、奶油與葫蘆巴葉香氣。',
  },
  category: 'Handi',
},
{
  id: 'agra-rice-01',
  restaurantId: 'sun-08',
  name: { en: 'Sadha Chawal', zh: '香米白飯' },
  description: {
    en: 'Fragrant steamed rice',
    zh: '香氣四溢的印度白米飯。',
  },
  category: 'Rice',
},
{
  id: 'agra-rice-02',
  restaurantId: 'sun-08',
  name: { en: 'Zafrani Pulao', zh: '番紅花香飯' },
  description: {
    en: 'Rice cooked with mild spices, saffron and milk',
    zh: '融合淡雅香料、番紅花與牛奶煮成的香氣米飯。',
  },
  category: 'Rice',
},
{
  id: 'agra-naan-01',
  restaurantId: 'sun-08',
  name: { en: 'Plain Naan', zh: '原味烤餅' },
  description: {
    en: 'Traditional Indian bread cooked in Tandoor',
    zh: '經典印度坦都爐烤餅。',
  },
  category: 'Naan',
},
{
  id: 'agra-naan-02',
  restaurantId: 'sun-08',
  name: { en: 'Garlic Naan', zh: '蒜香烤餅' },
  description: {
    en: 'Naan topped with garlic',
    zh: '灑上蒜末的坦都爐烤餅。',
  },
  category: 'Naan',
},
{
  id: 'agra-naan-03',
  restaurantId: 'sun-08',
  name: { en: 'Butter Naan', zh: '奶油烤餅' },
  description: {
    en: 'Naan brushed with butter',
    zh: '塗上奶油的香烤餅。',
  },
  category: 'Naan',
},
{
  id: 'agra-naan-04',
  restaurantId: 'sun-08',
  name: { en: 'Chili Naan', zh: '辣味烤餅' },
  description: {
    en: 'Naan with chili seasoning',
    zh: '加入辣椒調味的烤餅。',
  },
  category: 'Naan',
},
{
  id: 'agra-naan-05',
  restaurantId: 'sun-08',
  name: { en: 'Cilantro Naan', zh: '香菜烤餅' },
  description: {
    en: 'Naan topped with cilantro',
    zh: '撒上香菜的坦都烤餅。',
  },
  category: 'Naan',
},
{
  id: 'agra-naan-06',
  restaurantId: 'sun-08',
  name: { en: 'Cheese Naan', zh: '起司烤餅' },
  description: {
    en: 'Naan filled with cheese',
    zh: '內含起司的印度烤餅。',
  },
  category: 'Naan',
},
{
  id: 'agra-raita-01',
  restaurantId: 'sun-08',
  name: { en: 'Tamarind Chutney', zh: '羅望子酸甜醬' },
  description: {
    en: 'Tamarind pulp flavored with whole spices',
    zh: '使用整顆香料調味的羅望子果醬。',
  },
  category: 'Raita & Chutney',
},
{
  id: 'agra-raita-02',
  restaurantId: 'sun-08',
  name: { en: 'Cucumber Raita', zh: '黃瓜優格醬' },
  description: {
    en: 'Herby yoghurt with grated cucumber, cumin seeds and chaat masala',
    zh: '優格加入刨絲黃瓜、小茴香籽與香料粉調製。',
  },
  category: 'Raita & Chutney',
},
{
  id: 'agra-raita-03',
  restaurantId: 'sun-08',
  name: { en: 'Mint Chutney', zh: '香薄荷醬' },
  description: {
    en: 'Mint and coriander leaves spiced with green chilies, onion and lemon juice',
    zh: '薄荷與香菜葉混合綠辣椒、洋蔥與檸檬汁調味。',
  },
  category: 'Raita & Chutney',
},
// Bugambilias
  {
    id: 'bugambilias-pasta-01',
    restaurantId: 'sun-03',
    name: {
      en: 'Fusilli Bolognese',
      zh: '肉醬螺絲粉',
    },
    description: {
      en: 'An all-time favorite: fusilli, Bolognese sauce, sliced cherry tomato with fresh basil and grated Parmesan cheese',
      zh: '經典人氣之選：螺絲粉配肉醬、櫻桃番茄、新鮮羅勒及帕馬森芝士碎',
    },
    category: 'Pasta and Pizza',
  },
  {
    id: 'bugambilias-pasta-02',
    restaurantId: 'sun-03',
    name: {
      en: 'Fettuccini Alfredo',
      zh: '阿爾弗雷多寬條麵',
    },
    description: {
      en: 'One of our tastiest pastas: fettuccini ladled with creamy Alfredo sauce, loaded with Parmesan cheese and hints of basil and black pepper',
      zh: '招牌濃郁阿爾弗雷多醬寬條麵，搭配帕馬森芝士、羅勒與黑胡椒香氣',
    },
    category: 'Pasta and Pizza',
  },
  {
    id: 'bugambilias-pasta-03',
    restaurantId: 'sun-03',
    name: {
      en: 'Fettuccini Alfredo with Chicken',
      zh: '阿爾弗雷多雞肉寬條麵',
    },
    description: {
      en: 'Rich decadent fettuccini Alfredo with crispy Buffalo chicken, grated Parmesan cheese, hints of basil and black pepper',
      zh: '阿爾弗雷多濃醬寬條麵配酥炸水牛雞柳、芝士碎與羅勒黑胡椒香氣',
    },
    category: 'Pasta and Pizza',
  },
  {
    id: 'bugambilias-pasta-04',
    restaurantId: 'sun-03',
    name: {
      en: 'Mac & Cheese',
      zh: '芝士通心粉',
    },
    description: {
      en: 'We are proud to present mac & cheese done right, served with fresh chopped scallion',
      zh: '經典芝士通心粉，佐以新鮮蔥花',
    },
    category: 'Pasta and Pizza',
  },
  {
    id: 'bugambilias-pizza-01',
    restaurantId: 'sun-03',
    name: {
      en: 'Pepperoni Pizza',
      zh: '辣香腸披薩',
    },
    description: {
      en: 'A classic pizza made with tomato sauce and pepperoni',
      zh: '經典披薩，配番茄醬與辣香腸片',
    },
    category: 'Pasta and Pizza',
  },
  {
    id: 'bugambilias-pizza-02',
    restaurantId: 'sun-03',
    name: {
      en: 'Cheese Pizza',
      zh: '芝士披薩',
    },
    description: {
      en: 'You can’t go wrong with a classic cheese pizza: topped with tomato sauce, fresh mozzarella and Parmesan cheese',
      zh: '經典芝士披薩，番茄醬底加莫札瑞拉與帕馬森雙重芝士',
    },
    category: 'Pasta and Pizza',
  },
 {
    id: 'bugambilias-soup-01',
    restaurantId: 'sun-03',
    name: { en: 'Tortilla Soup', zh: '墨式玉米餅湯' },
    description: {
      en: 'Tortilla soup with cheese, cream, avocado and chili.',
      zh: '搭配起司、奶油、酪梨與辣椒的墨西哥玉米餅湯。',
    },
    category: 'Soups and Salads',
  },
  {
    id: 'bugambilias-soup-02',
    restaurantId: 'sun-03',
    name: { en: 'Chicken Soup', zh: '雞肉湯' },
    description: {
      en: 'Hearty chicken soup with rice, vegetables and fresh herbs.',
      zh: '濃郁雞湯配飯、蔬菜與香草。',
    },
    category: 'Soups and Salads',
  },
  {
    id: 'bugambilias-soup-03',
    restaurantId: 'sun-03',
    name: { en: 'Iceberg Salad', zh: '脆萵苣沙拉' },
    description: {
      en: 'Lettuce, bacon, sliced purple onion and blue cheese dressing.',
      zh: '萵苣、培根、紫洋蔥與藍紋起司醬。',
    },
    category: 'Soups and Salads',
  },
  {
    id: 'bugambilias-soup-04',
    restaurantId: 'sun-03',
    name: { en: 'Caesar Salad', zh: '凱薩沙拉' },
    description: {
      en: 'Romaine lettuce, croutons, Parmesan cheese.',
      zh: '蘿蔓生菜、麵包丁與帕馬森起司。',
    },
    category: 'Soups and Salads',
  },
  {
    id: 'bugambilias-soup-05',
    restaurantId: 'sun-03',
    name: { en: 'Caesar Salad with Chicken', zh: '凱薩雞肉沙拉' },
    description: {
      en: 'Grilled chicken, romaine lettuce, croutons and Parmesan.',
      zh: '烤雞、蘿蔓生菜、麵包丁與帕馬森起司。',
    },
    category: 'Soups and Salads',
  },
  {
    id: 'bugambilias-soup-06',
    restaurantId: 'sun-03',
    name: { en: 'Caesar Salad with Fried Chicken', zh: '炸雞凱薩沙拉' },
    description: {
      en: 'Crispy chicken, romaine lettuce, croutons and Parmesan.',
      zh: '酥炸雞肉、蘿蔓生菜、麵包丁與帕馬森起司。',
    },
    category: 'Soups and Salads',
  },
  {
    id: 'bugambilias-salad-01',
    restaurantId: 'sun-03',
    name: { en: 'Mediterranean Salad', zh: '地中海沙拉' },
    description: {
      en: 'Feta cheese, Kalamata olives, cucumber, oregano and mint.',
      zh: '配費塔起司、橄欖、黃瓜、奧勒岡與薄荷的地中海沙拉。',
    },
    category: 'Soups and Salads',
  },
  {
  id: 'bugambilias-snack-01',
  restaurantId: 'sun-03',
  name: { en: 'French Fries', zh: '炸薯條' },
  description: {
    en: 'Crunchy and surprisingly addictive',
    zh: '酥脆又令人上癮的經典炸薯條',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-02',
  restaurantId: 'sun-03',
  name: { en: 'French Fries with Cheese', zh: '起司炸薯條' },
  description: {
    en: 'Amazing fries topped with melted Cheddar cheese',
    zh: '佐融化切達起司的美味炸薯條',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-03',
  restaurantId: 'sun-03',
  name: { en: 'Canadian Poutine Fries', zh: '加拿大肉汁起司薯條' },
  description: {
    en: 'Canadian delicious concoction of fries, gravy and cheese curds',
    zh: '加拿大經典組合：薯條、肉汁與起司凝塊',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-04',
  restaurantId: 'sun-03',
  name: { en: 'Boneless Chicken Bites', zh: '無骨炸雞塊' },
  description: {
    en: 'Served with either BBQ or Buffalo sauce and a side of blue cheese dressing',
    zh: '搭配BBQ或水牛辣醬與藍紋起司醬',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-05',
  restaurantId: 'sun-03',
  name: { en: 'Chicken Wings', zh: '雞翅' },
  description: {
    en: 'Served with either BBQ or Buffalo sauce and a side of blue cheese dressing',
    zh: '搭配BBQ或水牛辣醬與藍紋起司醬',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-06',
  restaurantId: 'sun-03',
  name: { en: 'Guacamole and Corn Tortilla Chips', zh: '酪梨醬玉米脆片' },
  description: {
    en: 'Made to be eaten right away, served with crispy corn chips',
    zh: '現做現吃，搭配酥脆玉米片的經典酪梨醬',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-07',
  restaurantId: 'sun-03',
  name: { en: 'Beef Nachos', zh: '牛肉起司玉米片' },
  description: {
    en: 'Nachos topped with melted Cheddar cheese, juicy hanger steak and guacamole',
    zh: '玉米脆片配融化切達起司、多汁牛腹肉與酪梨醬',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-snack-08',
  restaurantId: 'sun-03',
  name: { en: 'Shrimp Cocktail', zh: '墨式鮮蝦杯' },
  description: {
    en: 'Shrimp served with our slightly spicy, signature cocktail sauce, crisp lettuce leaves and cherry tomato',
    zh: '微辣特調醬汁鮮蝦杯，搭配生菜與小番茄',
  },
  category: 'Snacks',
},
{
  id: 'bugambilias-mexican-01',
  restaurantId: 'sun-03',
  name: { en: 'Shrimp and Hanger Steak Quesadilla', zh: '鮮蝦與牛腹肉墨西哥餡餅' },
  description: {
    en: 'Hanger steak and shrimp with melted Cheddar and Monterey Jack',
    zh: '牛腹肉與鮮蝦餡，搭配融化切達與蒙特利傑克起司',
  },
  category: 'Mexican Delights',
},
{
  id: 'bugambilias-mexican-02',
  restaurantId: 'sun-03',
  name: { en: 'Beef Fajitas', zh: '牛肉墨式炒餅' },
  description: {
    en: 'Beef fajitas with bell pepper and cilantro served with guacamole and four tortillas',
    zh: '炒牛肉配甜椒與香菜，附酪梨醬與四張玉米餅',
  },
  category: 'Mexican Delights',
},
{
  id: 'bugambilias-mexican-03',
  restaurantId: 'sun-03',
  name: { en: 'Shrimp Tacos', zh: '鮮蝦塔可' },
  description: {
    en: 'Topped with Mexican salsa, a slice of avocado, drizzled with chipotle mayo',
    zh: '配墨西哥醬、酪梨片與墨式辣味蛋黃醬',
  },
  category: 'Mexican Delights',
},
{
  id: 'bugambilias-mexican-04',
  restaurantId: 'sun-03',
  name: { en: 'Cochinita Pibil Tacos', zh: '尤卡坦慢燉豬肉塔可' },
  description: {
    en: 'Yucatán-style pulled pork over corn tortilla loaded with pickled onion and habanero pepper',
    zh: '尤卡坦風味玉米餅，鋪滿慢燉豬肉、醃洋蔥與哈瓦那辣椒',
  },
  category: 'Mexican Delights',
},
{
  id: 'bugambilias-mexican-05',
  restaurantId: 'sun-03',
  name: { en: 'Chicken Fajitas', zh: '雞肉墨式炒餅' },
  description: {
    en: 'Juicy chicken fajitas with bell peppers, chopped cilantro, a choice of salsa and four tortillas',
    zh: '多汁炒雞肉配甜椒與香菜，附四張玉米餅與醬料',
  },
  category: 'Mexican Delights',
},
{
  id: 'bugambilias-sandwich-01',
  restaurantId: 'sun-03',
  name: { en: 'Palace Burger', zh: '宮殿漢堡' },
  description: {
    en: 'Beef burger Certified Angus Beef® with homemade brioche bun, red onion rings, lettuce, Cheddar cheese and dressing',
    zh: '安格斯牛肉漢堡，搭配手工布里歐麵包、紅洋蔥圈、生菜、切達起司與醬料',
  },
  category: 'Sandwiches',
},
{
  id: 'bugambilias-sandwich-02',
  restaurantId: 'sun-03',
  name: { en: 'Palace Hot Dog', zh: '宮殿熱狗堡' },
  description: {
    en: 'Made with homemade brioche bun, jumbo sausage, relish, crispy onion and dressing',
    zh: '手工布里歐麵包、大熱狗腸、酸黃瓜醬、酥洋蔥與醬料',
  },
  category: 'Sandwiches',
},
{
  id: 'bugambilias-sandwich-03',
  restaurantId: 'sun-03',
  name: { en: 'Palace Club Sandwich', zh: '宮殿總匯三明治' },
  description: {
    en: 'Try this savory sandwich with a kick of our Palace dressing',
    zh: '搭配特色宮殿醬的鹹香總匯三明治',
  },
  category: 'Sandwiches',
},
{
  id: 'bugambilias-sandwich-04',
  restaurantId: 'sun-03',
  name: { en: 'Buffalo Chicken Sandwich', zh: '水牛城雞肉三明治' },
  description: {
    en: 'Full-flavored Buffalo chicken sandwich, served with coleslaw and a side of French fries',
    zh: '風味十足的水牛辣雞三明治，附高麗菜沙拉與炸薯條',
  },
  category: 'Sandwiches',
},
{
  id: 'bugambilias-sandwich-05',
  restaurantId: 'sun-03',
  name: { en: 'Vegan Burger', zh: '純素漢堡' },
  description: {
    en: 'Vegan burger made with beans and beetroot, topped with lettuce, tomato and a side of French fries',
    zh: '豆類與甜菜根製成的純素漢堡，搭配生菜、番茄與炸薯條',
  },
  category: 'Sandwiches',
},
{
  id: 'bugambilias-main-01',
  restaurantId: 'sun-03',
  name: { en: 'Grilled Beef Steak', zh: '香煎牛排佐菠菜醬' },
  description: {
    en: 'A perky blend of basil pesto and creamy spinach along with a juicy beef steak',
    zh: '香煎牛排，搭配羅勒青醬與奶油菠菜醬，滋味十足',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-02',
  restaurantId: 'sun-03',
  name: { en: 'Hanger Steak and Poutine Potatoes', zh: '牛腹肉佐肉汁起司薯條' },
  description: {
    en: 'Appealing hanger steak with grilled onions and poutine fries drizzled with gravy sauce',
    zh: '香煎牛腹肉佐烤洋蔥與肉汁起司薯條',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-03',
  restaurantId: 'sun-03',
  name: { en: 'Chicken Cordon Bleu', zh: '藍帶雞排' },
  description: {
    en: 'Pair this tender chicken breast stuffed with ham and cheese, served with vegetables and mashed potatoes',
    zh: '夾心雞胸肉內含火腿與起司，搭配蔬菜與馬鈴薯泥',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-04',
  restaurantId: 'sun-03',
  name: { en: 'Grilled Chicken Breast', zh: '香煎雞胸肉佐肉汁' },
  description: {
    en: 'Flavorful grilled chicken breast served with vegetables and mashed potatoes with gravy sauce',
    zh: '香煎雞胸肉，搭配蔬菜與淋肉汁的馬鈴薯泥',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-05',
  restaurantId: 'sun-03',
  name: { en: 'Caprese Chicken Breast', zh: '卡布里雞排' },
  description: {
    en: 'Crunchy and golden on the outside, chicken breast fried to perfection stuffed with mozzarella and dried tomato',
    zh: '酥炸雞排包入莫札瑞拉與番茄乾，外酥內香',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-06',
  restaurantId: 'sun-03',
  name: { en: 'Fish Fillet', zh: '香煎魚排佐菠菜馬鈴薯泥' },
  description: {
    en: 'Griddled fish fillet with potato–spinach purée and grilled mushrooms',
    zh: '煎魚排搭配菠菜馬鈴薯泥與烤蘑菇',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-07',
  restaurantId: 'sun-03',
  name: { en: 'Salmon Steak', zh: '香煎鮭魚佐煙燻茄子醬' },
  description: {
    en: 'Griddled salmon with tender vegetables, baba ganoush and romesco sauce',
    zh: '煎鮭魚搭配蔬菜、煙燻茄子醬與紅椒堅果醬',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-08',
  restaurantId: 'sun-03',
  name: { en: 'Portobello with Romesco Sauce', zh: '紅椒醬烤波特菇' },
  description: {
    en: 'Griddled portobello with romesco sauce and sparks of parsley with stewed eggplant and zucchini',
    zh: '烤波特菇佐紅椒醬、香芹末、燉茄子與節瓜',
  },
  category: 'Main Dish',
},
{
  id: 'bugambilias-main-09',
  restaurantId: 'sun-03',
  name: { en: 'Southern Fried Chicken', zh: '南方炸雞' },
  description: {
    en: 'Southern crunch chicken with a side of velvety mashed potatoes and coleslaw salad',
    zh: '酥脆南方炸雞，附馬鈴薯泥與高麗菜沙拉',
  },
  category: 'Main Dish',
},

];
