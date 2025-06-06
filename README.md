

# 🌮 Cancun Menu App

A mobile app built with **React Native + Expo** to explore, favorite, and preview dishes from Moon Palace Cancun’s resort restaurants.

## ✨ Features

* 📖 Browse bilingual (English/Chinese) restaurant menus
* 💗 Double-tap to favorite dishes with animated heart
* 🔍 Swipe left/right to preview saved favorites
* 🧠 Speech support: tap `EN` or `粵` to hear item names in English or Cantonese
* 🧭 Restaurant links to view more
* ✅ Toast + Alert messages for feedback (e.g., "Added to Favorites", "End of List")

## 🛠 Tech Stack

* React Native + Expo SDK 53
* TypeScript
* Context API for Favorites state
* `expo-speech` for voice playback
* `expo-router` for navigation

## 📂 Structure

```
/components
  - MenuItemCard.tsx
  - MenuItemPreviewCard.tsx
/contexts
  - FavoriteContext.tsx
/data
  - globalMenu.ts
  - restaurantData.ts
/app
  - favorites.tsx
  - [restaurantId].tsx
```

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/cancun-menu-app.git
cd cancun-menu-app
npm install
npx expo start
```

## 🗣 Notes

> Cantonese voice support uses `"zh-HK"` via `expo-speech`. Make sure your device supports the language pack.
