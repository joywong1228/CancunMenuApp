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

type Props = {
  visible: boolean;
  onClose: () => void;
  item: {
    image: number | { uri: string };
    name: string | { en: string; zh: string };
    description?: string | { en: string; zh: string };
  };
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  itemId: string;
  favoriteIds: Set<string>;
  setFavoriteIds: (ids: Set<string>) => void;
};

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 30;

export default function MenuItemPreview({
  visible,
  onClose,
  item,
  onSwipeLeft,
  onSwipeRight,
  itemId,
  favoriteIds,
  setFavoriteIds,
}: Props) {
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

  return (
    <View style={styles.overlay} {...panResponder.panHandlers}>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />

      <View style={styles.swipeArea} pointerEvents="box-none">
        <View style={styles.card}>
          <Image
            source={item.image}
            style={styles.image}
            onError={(e) =>
              console.log("Image load error:", e.nativeEvent.error)
            }
          />

          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{getText(item.name)}</Text>
              <TouchableOpacity onPress={toggleFavorite} style={styles.heart}>
                <FontAwesome
                  name={favoriteIds.has(itemId) ? "heart" : "heart-o"}
                  size={20}
                  color={favoriteIds.has(itemId) ? "#e11d48" : "#999"}
                />
              </TouchableOpacity>
            </View>

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
          </View>

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
  },
  image: {
    width: 330,
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: "cover",
  },
  titleRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  heart: {
    marginLeft: 10,
    padding: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
    whiteSpace: "pre-line",
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
  closeButton: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 0,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007aff",
  },
});
