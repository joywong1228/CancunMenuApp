import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type CategoryDescription = {
  name: string;
  description: string;
  zhName: string;
  zhDescription: string;
};

const CATEGORY_DESCRIPTIONS: Record<string, CategoryDescription> = {
  Antipasti: {
    name: "Antipasti",
    zhName: "開胃菜",
    description:
      "Italian-style starters served before the main course. Often includes cured meats, cheese, and small bites.",
    zhDescription: "義大利風格的前菜，常見搭配為醃肉、起司與小點心。",
  },
  Appetizer: {
    name: "Appetizer",
    zhName: "前菜",
    description:
      "Small dishes served before the main course to stimulate the appetite.",
    zhDescription: "用以刺激食慾的前菜料理，精緻可口。",
  },
  Bao: {
    name: "Bao",
    zhName: "包子",
    description: "Steamed or pan-fried filled buns popular in Chinese cuisine.",
    zhDescription: "中式經典點心，內餡豐富的蒸或煎包。",
  },
  "Best Potluck Appetizers": {
    name: "Best Potluck Appetizers",
    zhName: "聚餐人氣前菜",
    description: "Top appetizer selections ideal for sharing at gatherings.",
    zhDescription: "最適合聚餐分享的人氣前菜選擇。",
  },
  Chicken: {
    name: "Chicken",
    zhName: "雞肉料理",
    description:
      "Dishes centered around various cuts and preparations of chicken.",
    zhDescription: "以雞肉為主角的各式佳餚，烹調方式多樣。",
  },
  Cocktail: {
    name: "Cocktail",
    zhName: "調酒",
    description:
      "Alcoholic mixed drinks with various bases and flavor profiles.",
    zhDescription: "各式基酒與風味的創意混合調酒。",
  },
  "Cocktail Bar": {
    name: "Cocktail Bar",
    zhName: "調酒吧",
    description: "A selection of house-made cocktails available at the bar.",
    zhDescription: "酒吧供應的特製調酒，風味多樣。",
  },
  Coffee: {
    name: "Coffee",
    zhName: "咖啡",
    description: "Espresso-based beverages served after meals or with dessert.",
    zhDescription: "餐後或搭配甜點的濃縮咖啡飲品。",
  },
  "Cold Starters": {
    name: "Cold Starters",
    zhName: "冷盤開胃菜",
    description: "Chilled appetizers like ceviche, salads or sushi.",
    zhDescription: "冷食開胃菜，例如果醋醃魚、生菜沙律、壽司等。",
  },
  "Delights Of The Sea": {
    name: "Delights Of The Sea",
    zhName: "海洋珍饈",
    description: "Seafood-based specialties highlighting ocean flavors.",
    zhDescription: "以海鮮為主角的美饌，展現海洋風味。",
  },
  Dessert: {
    name: "Dessert",
    zhName: "甜點",
    description: "Sweet treats served at the end of the meal.",
    zhDescription: "餐後的甜品，為整餐劃下完美句點。",
  },
  Desserts: {
    name: "Desserts",
    zhName: "甜點",
    description: "Sweet dishes served at the end of a meal.",
    zhDescription: "飯後甜品，為美味餐點畫下完美句點。",
  },
  Digestive: {
    name: "Digestive",
    zhName: "餐後酒",
    description: "Alcoholic beverages served after meals to aid digestion.",
    zhDescription: "用餐後飲用的烈酒，有助於消化。",
  },
  Digestives: {
    name: "Digestives",
    zhName: "餐後酒",
    description: "A broader selection of post-meal alcoholic drinks.",
    zhDescription: "多款餐後飲用的烈酒選擇，有助消化。",
  },
  "Dim Sum": {
    name: "Dim Sum",
    zhName: "點心",
    description: "Small bite-sized Chinese dishes like dumplings and buns.",
    zhDescription: "中式小吃如餃子、包子，適合分食。",
  },
  Drink: {
    name: "Drink",
    zhName: "飲品",
    description: "Beverages including water, soft drinks, tea or juice.",
    zhDescription: "各式飲品，包括水、汽水、茶與果汁。",
  },
  "Earthly Delicacies": {
    name: "Earthly Delicacies",
    zhName: "陸上珍味",
    description:
      "Meat and vegetable dishes sourced from land-based ingredients.",
    zhDescription: "以陸地食材如肉類與蔬菜烹調而成的佳餚。",
  },
  "For Kids": {
    name: "For Kids",
    zhName: "兒童餐",
    description:
      "Kid-friendly dishes with familiar flavors and milder seasoning.",
    zhDescription: "口味溫和、造型可愛的兒童專屬菜單。",
  },
  "For The Little Fishermen": {
    name: "For The Little Fishermen",
    zhName: "小小漁夫餐",
    description: "Seafood dishes tailored for children.",
    zhDescription: "專為小朋友設計的海鮮類兒童餐。",
  },
  Garden: {
    name: "Garden",
    zhName: "田園風味",
    description: "Vegetarian dishes inspired by fresh produce.",
    zhDescription: "以新鮮蔬果為主的素食料理。",
  },
  "Hand Shaken Cocktails": {
    name: "Hand Shaken Cocktails",
    zhName: "手搖調酒",
    description: "Cocktails freshly shaken to order for balanced flavor.",
    zhDescription: "現場搖製調酒，風味均衡，口感層次豐富。",
  },
  Handi: {
    name: "Handi",
    zhName: "手工燉鍋料理",
    description: "Slow-cooked Indian curries served in traditional pots.",
    zhDescription: "使用傳統陶鍋長時間燉煮的印度咖哩料理。",
  },
  "Homemade Ice Cream": {
    name: "Homemade Ice Cream",
    zhName: "自製冰淇淋",
    description: "Freshly made ice creams and sorbets in assorted flavors.",
    zhDescription: "手工製作的冰淇淋與雪酪，風味多樣。",
  },
  "Hot Starters": {
    name: "Hot Starters",
    zhName: "熱前菜",
    description: "Warm appetizers to begin the meal with bold flavors.",
    zhDescription: "溫熱開胃菜，開啟味蕾的第一道料理。",
  },
  "Little Cravings": {
    name: "Little Cravings",
    zhName: "小小嘴饞",
    description: "Mini bites and snacks to satisfy small hunger.",
    zhDescription: "輕鬆解饞的小點心與小吃。",
  },
  "Main Dish": {
    name: "Main Dish",
    zhName: "主菜",
    description:
      "Signature entrees like steaks, grilled chicken, and seafood plates.",
    zhDescription: "主打料理如牛排、燒雞與海鮮拼盤等。",
  },
  "Main Dishes": {
    name: "Main Dishes",
    zhName: "主菜",
    description: "Hearty dishes forming the core of the meal.",
    zhDescription: "構成一餐重心的豐盛料理。",
  },
  Makis: {
    name: "Makis",
    zhName: "壽司卷",
    description: "Sushi rolls with rice, seaweed and various fillings.",
    zhDescription: "日式壽司卷，內含多樣餡料。",
  },
  "Mexican Delights": {
    name: "Mexican Delights",
    zhName: "墨西哥風味",
    description:
      "Traditional Mexican dishes like fajitas, quesadillas, and tacos.",
    zhDescription: "經典墨西哥菜式，如法加它、墨西哥夾餅與塔可。",
  },
  Mutton: {
    name: "Mutton",
    zhName: "羊肉料理",
    description: "Dishes based on tender and flavorful mutton meat.",
    zhDescription: "以香嫩羊肉製成的料理，風味濃郁。",
  },
  Naan: {
    name: "Naan",
    zhName: "印度烤餅",
    description: "Leavened flatbread from Indian cuisine.",
    zhDescription: "印度傳統烤餅，外酥內軟。",
  },
  Nigiri: {
    name: "Nigiri",
    zhName: "握壽司",
    description: "Slices of raw fish atop vinegared rice.",
    zhDescription: "魚生與醋飯組合的日式經典壽司。",
  },
  "Pasta and Pizza": {
    name: "Pasta and Pizza",
    zhName: "義大利麵與披薩",
    description: "Italian comfort dishes with pasta and wood-fired pizza.",
    zhDescription: "義式經典主食，如各式義大利麵與披薩。",
  },
  "Paste e Risotti": {
    name: "Paste e Risotti",
    zhName: "義大利麵與燉飯",
    description:
      "Pasta and risotto dishes – staple Italian carbs served with diverse sauces and ingredients.",
    zhDescription: "義式主食類，包含多樣醬料與配料的義大利麵與燉飯。",
  },
  Pizza: {
    name: "Pizza",
    zhName: "披薩",
    description:
      "Italian flatbread topped with tomato sauce, cheese, meats or vegetables, baked until crisp.",
    zhDescription: "經典義式披薩，餅皮搭配番茄醬、起司與多樣配料，烘烤酥脆。",
  },
  "Raita & Chutney": {
    name: "Raita & Chutney",
    zhName: "酸奶與酸辣醬",
    description: "Traditional Indian condiments for balancing spice.",
    zhDescription: "印度料理常見配料，用以平衡辛辣風味。",
  },
  Rice: {
    name: "Rice",
    zhName: "米飯料理",
    description: "Dishes featuring rice as the main component.",
    zhDescription: "以米飯為主的料理，百搭多變。",
  },
  Salad: {
    name: "Salad",
    zhName: "沙拉",
    description:
      "Fresh and often cold dishes made of vegetables, fruits, cheese or meats.",
    zhDescription: "清爽涼拌料理，主要以蔬果、起司或肉類為主。",
  },
  Salads: {
    name: "Salad",
    zhName: "沙拉",
    description:
      "Fresh and often cold dishes made of vegetables, fruits, cheese or meats.",
    zhDescription: "清爽涼拌料理，主要以蔬果、起司或肉類為主。",
  },
  Sandwiches: {
    name: "Sandwiches",
    zhName: "三文治",
    description:
      "Hearty handheld meals including burgers, chicken, and plant-based options.",
    zhDescription: "包含漢堡、雞肉與植物性選擇的飽足三文治。",
  },
  Sashimis: {
    name: "Sashimis",
    zhName: "刺身",
    description: "Slices of fresh raw fish served without rice.",
    zhDescription: "新鮮魚生片，不附飯，突顯魚鮮美味。",
  },
  Sauce: {
    name: "Sauce",
    zhName: "醬料",
    description: "A selection of sauces to complement your dishes.",
    zhDescription: "多樣醬汁，為料理增添風味層次。",
  },
  Sea: {
    name: "Sea",
    zhName: "海鮮料理",
    description: "Ocean-based dishes such as fish, shrimp and shellfish.",
    zhDescription: "海產為主的料理，包括魚類、蝦、貝等。",
  },
  Secondi: {
    name: "Secondi",
    zhName: "主菜",
    description:
      "Main course dishes in Italian cuisine, typically meat, fish or hearty vegetarian plates.",
    zhDescription:
      "主菜類，包含肉類、魚類或豐盛的素食餐點，是義大利料理的核心部分。",
  },
  Side: {
    name: "Side",
    zhName: "配菜",
    description: "Small dishes meant to complement the main dish.",
    zhDescription: "搭配主餐的小品料理，增添口感層次。",
  },
  Snacks: {
    name: "Snacks",
    zhName: "小食",
    description:
      "Quick and tasty bites like fries, wings, nachos, and chicken bites.",
    zhDescription: "快速小吃，如薯條、雞翼、芝士粟米片等。",
  },
  Soup: {
    name: "Soup",
    zhName: "湯品",
    description: "Warm, savory bowls often served as the first course.",
    zhDescription: "溫暖可口的湯品，適合在餐前享用。",
  },
  "Soup, Rice and Noodles": {
    name: "Soup, Rice and Noodles",
    zhName: "湯品、米飯與麵類",
    description: "A combination of comforting Asian staples.",
    zhDescription: "亞洲經典主食組合，包含湯品、飯與麵。",
  },
  Soups: {
    name: "Soups",
    zhName: "湯品",
    description: "Various warm soups served before or with meals.",
    zhDescription: "溫暖湯品，可作前菜或搭配主餐。",
  },
  "Soups and Salads": {
    name: "Soups and Salads",
    zhName: "湯品與沙拉",
    description: "Light and refreshing combinations to start the meal.",
    zhDescription: "清爽組合，適合餐前享用的湯與沙拉。",
  },
  Starter: {
    name: "Starter",
    zhName: "前菜",
    description: "Appetizers to begin the meal, often light and flavorful.",
    zhDescription: "用餐的開場小品，輕盈可口，挑動味蕾。",
  },
  Starters: {
    name: "Starter",
    zhName: "前菜",
    description: "Appetizers to begin the meal, often light and flavorful.",
    zhDescription: "用餐的開場小品，輕盈可口，挑動味蕾。",
  },
  Steak: {
    name: "Steak",
    zhName: "牛排",
    description:
      "Beef steaks grilled or pan-seared, often served with sides and sauces.",
    zhDescription: "香煎或碳烤牛排，常搭配配菜與醬料。",
  },
  Tandoor: {
    name: "Tandoor",
    zhName: "坦都烤爐料理",
    description: "Indian dishes cooked in a traditional clay oven.",
    zhDescription: "使用傳統坦都爐烹製的印度料理。",
  },
  Tea: {
    name: "Tea",
    zhName: "茶品",
    description: "Aromatic beverages made by infusing tea leaves.",
    zhDescription: "以茶葉沖泡的香氣飲品，種類繁多。",
  },
  Zuppe: {
    name: "Zuppe",
    zhName: "湯品",
    description:
      "Soups – often rich, hearty, and traditionally served before the main dish in Italian meals.",
    zhDescription: "義式傳統濃湯，通常在主餐前享用，口感濃郁、溫暖身心。",
  },
  //my own check
  "Pastas & wood-fired pizzas": {
    name: "Pastas & wood-fired pizzas",
    zhName: "義大利麵與烤披薩",
    description: "Italian staples including pasta dishes and artisanal pizzas.",
    zhDescription: "經典義大利麵與手工烤披薩，美味道地。",
  },
  "Main course": {
    name: "Main course",
    zhName: "主菜",
    description: "Primary dish of a meal, typically the most substantial.",
    zhDescription: "一餐中最主要且份量最多的料理。",
  },
  "Tequila Cocktails": {
    name: "Tequila Cocktails",
    zhName: "龍舌蘭調酒",
    description: "Creative cocktails made with tequila as the base spirit.",
    zhDescription: "使用龍舌蘭酒調製的創意調酒。",
  },
  "Mezcal Cocktails": {
    name: "Mezcal Cocktails",
    zhName: "梅斯卡爾調酒",
    description: "Cocktails crafted with smoky mezcal spirits.",
    zhDescription: "以煙燻味濃厚的梅斯卡爾為基底調製的特調。",
  },
  "Our Tequilas": {
    name: "Our Tequilas",
    zhName: "我們的龍舌蘭",
    description: "A curated list of premium tequilas available at the bar.",
    zhDescription: "精選優質龍舌蘭酒款，盡在吧台供應。",
  },
  "Mi Casa Es Su Casa, Please Come Right In": {
    name: "Mi Casa Es Su Casa, Please Come Right In",
    zhName: "歡迎光臨",
    description: "A welcoming selection of starters and comfort dishes.",
    zhDescription: "多款開胃菜與舒適家常料理，表達熱情好客。",
  },
  "There's No Home Like Soup": {
    name: "There's No Home Like Soup",
    zhName: "湯品暖心",
    description: "Homestyle soups inspired by family recipes.",
    zhDescription: "以家傳食譜烹調的溫暖湯品。",
  },
  "Without Corn There's No Country": {
    name: "Without Corn There's No Country",
    zhName: "玉米是靈魂",
    description:
      "Corn-based Mexican staples celebrating its cultural importance.",
    zhDescription: "向墨西哥飲食文化核心－玉米致敬的料理。",
  },
  "Keep Calm, It's Taco Tuesday": {
    name: "Keep Calm, It's Taco Tuesday",
    zhName: "塔可星期二",
    description: "A special taco selection to celebrate Taco Tuesday.",
    zhDescription: "每週二限定塔可菜單，盡情享受塔可樂趣。",
  },
  "We Also Have Salads": {
    name: "We Also Have Salads",
    zhName: "也別錯過沙拉",
    description: "A variety of refreshing salads to balance the meal.",
    zhDescription: "多款清爽沙拉，為你的餐點增添健康選項。",
  },
  "The Mighty Mole": {
    name: "The Mighty Mole",
    zhName: "醇香莫雷",
    description: "Dishes highlighting the rich, chocolate-chili mole sauce.",
    zhDescription: "以濃郁巧克力辣椒醬「莫雷」為特色的料理。",
  },
  "But Wait, There’s More…": {
    name: "But Wait, There's More...",
    zhName: "更多驚喜",
    description:
      "Additional delicious options beyond the main menu highlights.",
    zhDescription: "除了主打餐點之外，還有更多美味選擇等你發掘。",
  },
  "Soups & Salads": {
    name: "Soups * Salads",
    zhName: "湯與沙拉",
    description:
      "A selection of soups and salads to start or accompany your meal.",
    zhDescription: "多款湯品與沙拉，適合餐前或搭配主餐享用。",
  },
  Drinks: {
    name: "Drinks",
    zhName: "飲品",
    description: "A selection of coffee, teas, and other refreshing beverages.",
    zhDescription: "咖啡、茶與清涼飲品的選擇。",
  },
};

export default function CategoryCard({ category }: { category: string }) {
  const info = CATEGORY_DESCRIPTIONS[category];

  if (!info) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {info.name} · {info.zhName}
      </Text>
      <Text style={styles.description}>{info.description}</Text>
      <Text style={styles.descriptionZh}>{info.zhDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff8f0",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderColor: "#e0d9d0",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  descriptionZh: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
});
