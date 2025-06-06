import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFavorites } from "@/contexts/FavoriteContext";
import { globalMenu } from "@/data/globalMenu";
import { moonPalaceRestaurants } from "@/data/restaurantData";
import { router } from "expo-router";

import MenuItemCard from "@/components/MenuItemCard";
import MenuItemPreviewCard from "../components/MenuItemPreview";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const favorites = useMemo(
    () => globalMenu.filter((item) => favoriteIds.has(item.id)),
    [favoriteIds]
  );

  const selectedItem = selectedIndex !== null ? favorites[selectedIndex] : null;

  const groupedFavorites = useMemo(() => {
    const map: Record<string, typeof favorites> = {};
    favorites.forEach((item) => {
      if (!map[item.restaurantId]) map[item.restaurantId] = [];
      map[item.restaurantId].push(item);
    });
    return map;
  }, [favorites]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>❤️ Your Favorite Dishes</Text>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>
          You haven’t favorited anything yet. Go explore!
        </Text>
      ) : (
        <ScrollView contentContainerStyle={styles.list}>
          {Object.entries(groupedFavorites).map(([restaurantId, items]) => {
            const restaurant = moonPalaceRestaurants.find(
              (r) => r.id === restaurantId
            );
            return (
              <View key={restaurantId} style={{ marginBottom: 24 }}>
                <TouchableOpacity
                  onPress={() => router.push(`/${restaurantId}`)}
                >
                  <Text style={styles.restaurantHeader}>
                    🍽 {restaurant?.name || "Unknown Restaurant"}
                  </Text>
                </TouchableOpacity>
                {items.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      setSelectedIndex(
                        favorites.findIndex((f) => f.id === item.id)
                      )
                    }
                    activeOpacity={0.9}
                  >
                    <MenuItemCard
                      item={item}
                      isFavorite={true}
                      onToggleFavorite={() => toggleFavorite(item.id)}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            );
          })}
        </ScrollView>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <MenuItemPreviewCard
        visible={!!selectedItem}
        item={
          selectedItem
            ? {
                image:
                  typeof selectedItem.image === "string"
                    ? { uri: selectedItem.image }
                    : selectedItem.image,
                name: selectedItem.name,
                description: selectedItem.description,
                restaurantId: selectedItem.restaurantId,
              }
            : {
                image: 0,
                name: { en: "", zh: "" },
                description: "",
                restaurantId: "",
              }
        }
        itemId={selectedItem?.id || ""}
        favoriteIds={favoriteIds}
        setFavoriteIds={() => toggleFavorite(selectedItem?.id || "")}
        onClose={() => setSelectedIndex(null)}
        onSwipeLeft={() => {
          if (selectedIndex !== null && selectedIndex < favorites.length - 1) {
            setSelectedIndex(selectedIndex + 1);
          }
        }}
        onSwipeRight={() => {
          if (selectedIndex !== null && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
          }
        }}
        isFirst={selectedIndex === 0}
        isLast={selectedIndex === favorites.length - 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  restaurantHeader: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#333",
  },
  list: {
    paddingBottom: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    marginTop: 20,
    textAlign: "center",
  },
  backButton: {
    marginTop: 30,
    alignSelf: "center",
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
