import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { MenuItem } from '@/data/asaderoMenu';

type Props = {
  item: MenuItem;
};

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
        {/* <Text style={styles.meta}>
        {item.category}
        {item.priceUSD ? ` • $${item.priceUSD.toFixed(2)}` : ''}
      </Text> */}
      <Text style={styles.name}>
        {item.name.en} / {item.name.zh}
      </Text>
      <Text style={styles.description}>{item.description.en}</Text>
      <Text style={styles.descriptionZh}>{item.description.zh}</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#255',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
  descriptionZh: {
    fontSize: 14,
    marginTop: 5,
    color: '#444',
    fontStyle: 'italic',
  },
  meta: {
    marginTop: 4,
    fontSize: 15,
    color: '#888',
  },
});
