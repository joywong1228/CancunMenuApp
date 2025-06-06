/* 
this is a abdoned component that was used in the CancunMenuApp project.
*/

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { moonPalaceRestaurants } from "@/data/restaurantData";

type Props = {
  visible: boolean;
  onClose: () => void;
  item: {
    image: number | { uri: string };
    name: string | { en: string; zh: string };
    description?: string | { en: string; zh: string };
    restaurantId: string;
  };
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  itemId: string;
  favoriteIds: Set<string>;
  setFavoriteIds: (ids: Set<string>) => void;
};

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 30;

export default function RestaurantPreviewCard({
  visible,
  onClose,
  item,
  onSwipeLeft,
  onSwipeRight,
  itemId,
  favoriteIds,
  setFavoriteIds,
}: Props) {
  const router = useRouter();

  if (!visible) return null;

  const getText = (val?: string | { en: string; zh: string }) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    return `${val.en}\n${val.zh}`;
  };

  const hasDescription =
    item.description &&
    ((typeof item.description === "string" && item.description.trim() !== "") ||
      (typeof item.description === "object" &&
        (item.description.en.trim() !== "" ||
          item.description.zh.trim() !== "")));

  const toggleFavorite = () => {
    const newSet = new Set(favoriteIds);
    if (newSet.has(itemId)) {
      newSet.delete(itemId);
    } else {
      newSet.add(itemId);
    }
    setFavoriteIds(newSet);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 10,
    onPanResponderRelease: (
      _: GestureResponderEvent,
      gestureState: PanResponderGestureState
    ) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        onSwipeRight?.();
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        onSwipeLeft?.();
      }
    },
  });

  const restaurant = moonPalaceRestaurants.find(
    (r) => r.id === item.restaurantId
  );

  return (
    <View style={styles.overlay} {...panResponder.panHandlers}>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />

      <View style={styles.swipeArea} pointerEvents="box-none">
        <View style={styles.card}>
          {/* Heart Icon */}
          <TouchableOpacity onPress={toggleFavorite} style={styles.heart}>
            <FontAwesome
              name={favoriteIds.has(itemId) ? "heart" : "heart-o"}
              size={28}
              color={favoriteIds.has(itemId) ? "#e11d48" : "#444"}
              style={styles.heartIcon}
            />
          </TouchableOpacity>

          {/* Image */}
          <Image
            source={item.image}
            style={styles.image}
            onError={(e) =>
              console.log("Image load error:", e.nativeEvent.error)
            }
          />

          {/* Title + Description */}
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={styles.title}>{getText(item.name)}</Text>

            {hasDescription && (
              <Text style={styles.description}>
                {getText(item.description)}
              </Text>
            )}

            <View style={styles.swipeHint}>
              <Text style={styles.swipeHintText}>
                <Text style={styles.arrow}>←</Text> Swipe to see more{" "}
                <Text style={styles.arrow}>→</Text>
              </Text>
            </View>

            {/* Restaurant Link */}
            {restaurant && (
              <TouchableOpacity
                onPress={() => {
                  onClose();
                  router.push(`/restaurant/${restaurant.id}`);
                }}
              >
                <Text style={styles.restaurantLink}>
                  🔗 View {restaurant.name} →
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Close Button */}
          <TouchableOpacity
            style={[styles.closeButton, !hasDescription && { marginTop: 12 }]}
            onPress={onClose}
          >
            <Text style={styles.closeText}>✖ Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  swipeArea: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "90%",
    padding: 16,
    alignItems: "center",
    zIndex: 1001,
    position: "relative",
  },
  image: {
    width: 330,
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
    whiteSpace: "pre-line",
  },
  heart: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  heartIcon: {
    alignSelf: "center",
  },

  swipeHint: {
    marginTop: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 12,
  },
  swipeHintText: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
  arrow: {
    fontSize: 14,
    color: "#999",
  },
  restaurantLink: {
    marginTop: 6,
    fontSize: 14,
    color: "#2563eb",
    fontWeight: "600",
  },
  closeButton: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007aff",
  },
});
