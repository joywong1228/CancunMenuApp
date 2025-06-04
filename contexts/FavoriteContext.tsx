import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type FavoriteContextType = {
  favoriteIds: Set<string>;
  toggleFavorite: (id: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadFavorites = async () => {
      const stored = await AsyncStorage.getItem("favoriteIds");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setFavoriteIds(new Set(parsed));
        } catch {
          console.warn("Failed to parse favoriteIds from storage");
        }
      }
    };
    loadFavorites();
  }, []);

  const toggleFavorite = async (id: string) => {
    const newSet = new Set(favoriteIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setFavoriteIds(newSet);
    await AsyncStorage.setItem("favoriteIds", JSON.stringify([...newSet]));
  };

  return (
    <FavoriteContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error("useFavorites must be used within FavoriteProvider");
  return context;
};
