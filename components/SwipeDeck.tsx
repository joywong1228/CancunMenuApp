// components/SwipeDeck.tsx
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";

const { width } = Dimensions.get("window");

export default function SwipeDeck({ items }: { items: typeof globalMenu }) {
  if (!items.length) return null;

  return (
    <View style={styles.container}>
      <Swiper
        cards={items}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={card.image} style={styles.image} />
            <Text style={styles.name}>
              {card.name.en} / {card.name.zh}
            </Text>
            {card.description?.en?.trim() !== "" && (
              <Text style={styles.description}>
                {card.description.en + "\n" + card.description.zh}
              </Text>
            )}
          </View>
        )}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={3}
        infinite={false}
        disableTopSwipe
        disableBottomSwipe
        onSwipedLeft={(index) => console.log("Swiped Left:", items[index].name)}
        onSwipedRight={(index) =>
          console.log("Swiped Right:", items[index].name)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 400,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  image: {
    width: width * 0.7,
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});
