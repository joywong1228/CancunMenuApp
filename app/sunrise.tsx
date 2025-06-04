import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import { moonPalaceRestaurants, Restaurant } from '@/data/restaurantData';
import RestaurantCard from '@/components/RestaurantCard';

const FILTER_OPTIONS = ['All', 'Buffet', 'À la Carte'];

export default function SunrisePage() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Buffet' | 'À la Carte'>('All');

  // Filter + group by mealPeriod
const filteredData = useMemo(() => {
  const filtered = moonPalaceRestaurants.filter(
    (r) =>
      r.location === 'Sunrise' &&
      (selectedFilter === 'All' || r.style.includes(selectedFilter))
  );

  const grouped: Record<string, Restaurant[]> = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    'All Day': [],
  };

  filtered.forEach((r) => {
    const periods = r.mealPeriod.split(',').map((p) => p.trim());
    periods.forEach((period) => {
      if (grouped[period]) {
        grouped[period].push(r);
      }
    });
  });

  return Object.entries(grouped)
    .filter(([_, items]) => items.length > 0)
    .map(([title, data]) => ({ title, data }));
}, [selectedFilter]);


  return (
    <View style={styles.container}>
      {/* Filter Bar */}
      <View style={styles.filterBar}>
        {FILTER_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterButton,
              selectedFilter === option && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(option as typeof selectedFilter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === option && styles.filterTextActive,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Grouped List by Meal Period */}
      <SectionList
        sections={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantCard {...item} />}
      renderSectionHeader={({ section: { title } }) => (
  <View style={{ backgroundColor: '#f9f9f9', paddingVertical: 4 }}>
    <Text style={styles.sectionHeader}>{title.toUpperCase()}</Text>
  </View>
)}

        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#ddd',
  },
  filterButtonActive: {
    backgroundColor: '#444',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  filterTextActive: {
    color: '#fff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 16,
  marginBottom: 6,
  color: '#222',
},

});
