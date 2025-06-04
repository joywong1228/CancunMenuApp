import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type { MenuItem } from "@/data/asaderoMenu";

type Props = {
  item: MenuItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export default function MenuItemCard({
  item,
  isFavorite,
  onToggleFavorite,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>
          {item.name.en} / {item.name.zh}
        </Text>
        <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
          <Text style={styles.heart}>{isFavorite ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </View>

      {item.description?.en?.trim() && (
        <Text style={styles.description}>{item.description.en}</Text>
      )}
      {item.description?.zh?.trim() && (
        <Text style={styles.descriptionZh}>{item.description.zh}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#255",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    flex: 1,
    marginRight: 10,
  },
  heart: {
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
  descriptionZh: {
    fontSize: 14,
    marginTop: 5,
    color: "#444",
    fontStyle: "italic",
  },
});
