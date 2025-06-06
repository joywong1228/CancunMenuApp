import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { moonPalaceRestaurants } from "@/data/restaurantData";

type Props = {
  visible: boolean;
  onClose: () => void;
  item: {
    image: number | { uri: string };
    name: string | { en: string; zh: string };
    description?: string | { en: string; zh: string };
    restaurantId?: string;
  };
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  itemId: string;
  favoriteIds: Set<string>;
  setFavoriteIds: (ids: Set<string>) => void;
};

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 30;

export default function MenuItemPreviewCard({
  visible,
  onClose,
  item,
  onSwipeLeft,
  onSwipeRight,
  isFirst,
  isLast,
  itemId,
  favoriteIds,
  setFavoriteIds,
}: Props) {
  const router = useRouter();
  const lastTapRef = React.useRef<number>(0);
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null);

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

  const handleImageTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    if (lastTapRef.current && now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      toggleFavorite();
    }
    lastTapRef.current = now;
  };

  const speakItemName = (lang: "en" | "zh-HK") => {
    const nameToRead =
      typeof item.name === "string"
        ? item.name
        : lang === "en"
        ? item.name.en
        : item.name.zh;

    Speech.speak(nameToRead, {
      language: lang,
      rate: 0.9,
    });
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 10,
    onPanResponderRelease: (
      _: GestureResponderEvent,
      gestureState: PanResponderGestureState
    ) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        if (isFirst) {
          setAlertMessage("This is the beginning of the list.");
        } else {
          onSwipeRight?.();
        }
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        if (isLast) {
          setAlertMessage("This is the end of the list.");
        } else {
          onSwipeLeft?.();
        }
      }
    },
  });

  const restaurant = item.restaurantId
    ? moonPalaceRestaurants.find((r) => r.id === item.restaurantId)
    : null;

  return (
    <View style={styles.overlay} {...panResponder.panHandlers}>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />

      {alertMessage && (
        <TouchableOpacity
          style={styles.customAlertOverlay}
          activeOpacity={1}
          onPress={() => setAlertMessage(null)}
        >
          <View style={styles.customAlertBox}>
            <Text style={styles.customAlertText}>{alertMessage}</Text>
          </View>
        </TouchableOpacity>
      )}

      <View style={styles.swipeArea} pointerEvents="box-none">
        <View style={styles.card}>
          <TouchableOpacity onPress={toggleFavorite} style={styles.heart}>
            <FontAwesome
              name={favoriteIds.has(itemId) ? "heart" : "heart-o"}
              size={28}
              color={favoriteIds.has(itemId) ? "#e11d48" : "#444"}
              style={styles.heartIcon}
            />
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={handleImageTap}>
            <Image
              source={item.image}
              style={styles.image}
              onError={(e) =>
                console.log("Image load error:", e.nativeEvent.error)
              }
            />
          </TouchableWithoutFeedback>

          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={styles.title}>{getText(item.name)}</Text>

            <View style={styles.langButtonsRow}>
              <TouchableOpacity
                onPress={() => speakItemName("en")}
                style={styles.langButton}
              >
                <Text style={styles.langButtonText}>EN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => speakItemName("zh-HK")}
                style={styles.langButton}
              >
                <Text style={styles.langButtonText}>粵</Text>
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
  customAlertOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  customAlertBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderRadius: 12,
    maxWidth: "80%",
  },
  customAlertText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  langButtonsRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  langButton: {
    backgroundColor: "#eee",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  langButtonText: {
    fontSize: 16,
    color: "#000",
  },
});
