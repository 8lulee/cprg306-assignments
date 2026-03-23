"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserAuth } from "@/contexts/AuthContext";
import NewItem from "./components/NewItem";
import ItemList from "./components/ItemList";
import MealIdeas from "./components/MealIdeas";
import itemsData from "./data.json";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user]);

  if (!user) return null;

  function handleAddItem(newItem) {
    setItems((current) => [...current, newItem]);
  }

  function handleItemSelect(item) {
    const cleaned = item.name
      .replace(/,.*$/, "")
      .replace(/\p{Emoji}/gu, "")
      .trim();
    setSelectedItemName(cleaned);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-3xl font-bold">Week 9 — Shopping List</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user.displayName}</span>
          <button
            onClick={firebaseSignOut}
            className="rounded-md bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-800 hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      </div>
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
