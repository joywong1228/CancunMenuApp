import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type CategoryDescription = {
  name: string;
  description: string;
  zhName: string;
  zhDescription: string;
};

const CATEGORY_DESCRIPTIONS: Record<string, CategoryDescription> = {
  'Secondi': {
    name: 'Secondi',
    zhName: '主菜',
    description: 'Main course dishes in Italian cuisine, typically meat, fish or hearty vegetarian plates.',
    zhDescription: '主菜類，包含肉類、魚類或豐盛的素食餐點，是義大利料理的核心部分。',
  },
  'Zuppe': {
    name: 'Zuppe',
    zhName: '湯品',
    description: 'Soups – often rich, hearty, and traditionally served before the main dish in Italian meals.',
    zhDescription: '義式傳統濃湯，通常在主餐前享用，口感濃郁、溫暖身心。',
  },
  'Antipasti': {
    name: 'Antipasti',
    zhName: '開胃菜',
    description: 'Italian-style starters served before the main course. Often includes cured meats, cheese, and small bites.',
    zhDescription: '義大利風格的前菜，常見搭配為醃肉、起司與小點心。',
  },
  'Paste e Risotti': {
    name: 'Paste e Risotti',
    zhName: '義大利麵與燉飯',
    description: 'Pasta and risotto dishes – staple Italian carbs served with diverse sauces and ingredients.',
    zhDescription: '義式主食類，包含多樣醬料與配料的義大利麵與燉飯。',
  },
  'Pizza': {
    name: 'Pizza',
    zhName: '披薩',
    description: 'Italian flatbread topped with tomato sauce, cheese, meats or vegetables, baked until crisp.',
    zhDescription: '經典義式披薩，餅皮搭配番茄醬、起司與多樣配料，烘烤酥脆。',
  },
  'Starter': {
    name: 'Starter',
    zhName: '前菜',
    description: 'Appetizers to begin the meal, often light and flavorful.',
    zhDescription: '用餐的開場小品，輕盈可口，挑動味蕾。',
  },
  'Soup': {
    name: 'Soup',
    zhName: '湯品',
    description: 'Warm, savory bowls often served as the first course.',
    zhDescription: '溫暖可口的湯品，適合在餐前享用。',
  },
  'Salad': {
    name: 'Salad',
    zhName: '沙拉',
    description: 'Fresh and often cold dishes made of vegetables, fruits, cheese or meats.',
    zhDescription: '清爽涼拌料理，主要以蔬果、起司或肉類為主。',
  },
  'Steak': {
    name: 'Steak',
    zhName: '牛排',
    description: 'Beef steaks grilled or pan-seared, often served with sides and sauces.',
    zhDescription: '香煎或碳烤牛排，常搭配配菜與醬料。',
  },
  'Side': {
    name: 'Side',
    zhName: '配菜',
    description: 'Small dishes meant to complement the main dish.',
    zhDescription: '搭配主餐的小品料理，增添口感層次。',
  },
  'Dessert': {
    name: 'Dessert',
    zhName: '甜點',
    description: 'Sweet treats served at the end of the meal.',
    zhDescription: '餐後的甜品，為整餐劃下完美句點。',
  },
  'Cocktail': {
    name: 'Cocktail',
    zhName: '調酒',
    description: 'Alcoholic mixed drinks with various bases and flavor profiles.',
    zhDescription: '各式基酒與風味的創意混合調酒。',
  },
  'Coffee': {
    name: 'Coffee',
    zhName: '咖啡',
    description: 'Espresso-based beverages served after meals or with dessert.',
    zhDescription: '餐後或搭配甜點的濃縮咖啡飲品。',
  },
  'Homemade Ice Cream': {
    name: 'Homemade Ice Cream',
    zhName: '自製冰淇淋',
    description: 'Freshly made ice creams and sorbets in assorted flavors.',
    zhDescription: '手工製作的冰淇淋與雪酪，風味多樣。',
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
      <Text style={styles.description}>
        {info.description}
      </Text>
      <Text style={styles.descriptionZh}>
        {info.zhDescription}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff8f0',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderColor: '#e0d9d0',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  descriptionZh: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});
