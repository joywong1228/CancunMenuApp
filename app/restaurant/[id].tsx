import React, { useMemo, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { moonPalaceRestaurants } from "@/data/restaurantData";
import { globalMenu } from "@/data/globalMenu";
import MenuItemCard from "@/components/MenuItemCard";
import CategoryCard from "@/components/CategoryCard";
import MenuItemPreview from "@/components/MenuItemPreview";
import { useFavorites } from "@/contexts/FavoriteContext";

export default function RestaurantDetailPage() {
  const { id } = useLocalSearchParams();
  const restaurant = moonPalaceRestaurants.find((r) => r.id === id);
  const [showInfo, setShowInfo] = useState(true);

  const { favoriteIds, toggleFavorite } = useFavorites(); // ✅ use context

  const restaurantMenu = useMemo(() => {
    return globalMenu.filter((item) => item.restaurantId === id);
  }, [id]);

  const [selectedCategory, setSelectedCategory] = useState<
    "All" | (typeof restaurantMenu)[number]["category"]
  >("All");

  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    restaurantMenu.forEach((item) => cats.add(item.category));
    return ["All", ...Array.from(cats)];
  }, [restaurantMenu]);

  const filteredMenu = useMemo(() => {
    if (selectedCategory === "All") return restaurantMenu;
    return restaurantMenu.filter((item) => item.category === selectedCategory);
  }, [restaurantMenu, selectedCategory]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem =
    selectedIndex !== null ? filteredMenu[selectedIndex] : null;

  if (!restaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Restaurant not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      {/* Sticky Filter Bar */}
      <View style={styles.stickyBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterBar}
        >
          {availableCategories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat as any)}
              style={[
                styles.filterOption,
                selectedCategory === cat && styles.filterOptionActive,
              ]}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  selectedCategory === cat && styles.filterOptionTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          onPress={() => setShowInfo(!showInfo)}
          style={styles.infoHeader}
        >
          <Text style={styles.infoHeaderText}>
            {showInfo ? "▲ Restaurant Info" : "▼ Show Restaurant Info"}
          </Text>
        </TouchableOpacity>

        {showInfo && (
          <View style={styles.infoContainer}>
            {restaurant.image && (
              <Image source={restaurant.image} style={styles.image} />
            )}
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.desc}>{restaurant.description}</Text>
            <Text style={styles.meta}>Style: {restaurant.style}</Text>
            <Text style={styles.meta}>Open Time: {restaurant.openTime}</Text>
            <Text style={styles.meta}>Meal: {restaurant.mealPeriod}</Text>
          </View>
        )}

        {selectedCategory !== "All" && (
          <CategoryCard category={selectedCategory} />
        )}

        {filteredMenu.length > 0 ? (
          <>
            <Text style={styles.menuHeader}>🍽 Menu</Text>
            {filteredMenu.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setSelectedIndex(index);
                }}
              >
                <MenuItemCard
                  item={item}
                  isFavorite={favoriteIds.has(item.id)}
                  onToggleFavorite={() => toggleFavorite(item.id)}
                />
              </TouchableOpacity>
            ))}
          </>
        ) : selectedCategory === "All" ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No menu available</Text>
            <Text style={styles.emptyText}>
              We're still cooking up something delicious for this restaurant.
            </Text>
          </View>
        ) : null}
      </ScrollView>

      {/* Modal Popup Preview */}
      <MenuItemPreview
        visible={selectedIndex !== null && selectedItem !== undefined}
        item={
          selectedItem && selectedItem.image
            ? {
                image:
                  typeof selectedItem.image === "string"
                    ? { uri: selectedItem.image }
                    : selectedItem.image,
                name: selectedItem.name,
                description: selectedItem.description,
              }
            : { image: 0, name: { en: "", zh: "" } }
        }
        itemId={selectedItem?.id || ""}
        favoriteIds={favoriteIds}
        setFavoriteIds={() => toggleFavorite(selectedItem?.id || "")}
        onClose={() => setSelectedIndex(null)}
        onSwipeLeft={() => {
          if (selectedIndex !== null && selectedIndex < filteredMenu.length - 1)
            setSelectedIndex(selectedIndex + 1);
        }}
        onSwipeRight={() => {
          if (selectedIndex !== null && selectedIndex > 0)
            setSelectedIndex(selectedIndex - 1);
        }}
        isFirst={selectedIndex === 0}
        isLast={selectedIndex === filteredMenu.length - 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, backgroundColor: "#fff" },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  stickyBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    backgroundColor: "#fff",
    zIndex: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  filterBar: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  filterOption: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 10,
  },
  filterOptionActive: {
    backgroundColor: "#333",
  },
  filterOptionText: {
    fontSize: 14,
    color: "#444",
    fontWeight: "600",
  },
  filterOptionTextActive: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  desc: {
    fontSize: 15,
    marginBottom: 8,
  },
  meta: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  menuHeader: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  infoHeader: {
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  infoHeaderText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  infoContainer: {
    marginBottom: 3,
  },
  emptyCard: {
    backgroundColor: "#fef3f3",
    borderColor: "#f5c2c7",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#c00",
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    color: "#a33",
    textAlign: "center",
  },
});
