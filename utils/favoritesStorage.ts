import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favoritedItemIds";

export async function getFavoriteIds(): Promise<Set<string>> {
  const data = await AsyncStorage.getItem(FAVORITES_KEY);
  return data ? new Set(JSON.parse(data)) : new Set();
}

export async function saveFavoriteIds(ids: Set<string>) {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(ids)));
}
