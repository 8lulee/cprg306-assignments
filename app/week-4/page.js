import React from 'react';

import groceryItems from "./groceryItems.json";
import GroceryItemList from "./components/GroceryItemList";

export const metadata = {
  title: "Week 4 Grocery List",
};

export default function Page() {
  const listTitle = "Louis' Grocery List 🛒";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">{metadata.title}</h1>
      <GroceryItemList title={listTitle} items={groceryItems} />
    </main>
  );
}
