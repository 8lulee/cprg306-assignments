"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function handleItemSelect(item) {
    // Remove size/quantity info (anything after a comma with numbers) and emojis
    const cleaned = item.name
      .replace(/,.*$/, "")           // remove everything after a comma
      .replace(/\p{Emoji}/gu, "")    // remove emojis
      .trim();
    setSelectedItemName(cleaned);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6">
      <h1 className="text-3xl font-bold">Week 8 — Shopping List</h1>
      <div className="flex w-full max-w-6xl gap-8">
        <div className="flex flex-1 flex-col items-center gap-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-80">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
