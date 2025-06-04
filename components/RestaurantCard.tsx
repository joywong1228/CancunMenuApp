import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

type Props = {
  id: string;
  name: string;
  image?: ImageSourcePropType;
  description?: string;
  style?: string;
  openTime?: string;
  mealPeriod?: string;
  dressCode?: string;
};

export default function RestaurantCard({
  id,
  name,
  image,
  description,
  style,
  openTime,
  mealPeriod,
  dressCode,
}: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/restaurant/${id}`)}>
      <View style={styles.card}>
        {image && <Image source={image} style={styles.image} />}
        <Text style={styles.name}>{name}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {style && <Text style={styles.meta}>🍽 {style}</Text>}
        {mealPeriod && <Text style={styles.meta}>🕐 {mealPeriod}</Text>}
        {openTime && <Text style={styles.meta}>⏰ {openTime}</Text>}
        {dressCode && <Text style={styles.meta}>👕 {dressCode}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },
  meta: {
    fontSize: 12,
    color: "#444",
    marginTop: 2,
  },
});
