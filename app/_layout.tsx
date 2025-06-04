import { Stack } from "expo-router";
import { FavoriteProvider } from "@/contexts/FavoriteContext";

export default function Layout() {
  return (
    <FavoriteProvider>
      <Stack />
    </FavoriteProvider>
  );
}
