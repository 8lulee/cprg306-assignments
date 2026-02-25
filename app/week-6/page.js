"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
