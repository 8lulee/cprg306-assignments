"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserAuth } from "@/contexts/AuthContext";
import NewItem from "./components/NewItem";
import ItemList from "./components/ItemList";
import MealIdeas from "./components/MealIdeas";
import { getItems, addItem } from "@/app/week-10/_services/shopping-list-service";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week-10");
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    const data = await getItems(user.uid);
    setItems(data);
  }

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems((current) => [...current, { id, ...newItem }]);
  }

  function handleItemSelect(item) {
    const cleaned = item.name
      .replace(/,.*$/, "")
      .replace(/\p{Emoji}/gu, "")
      .trim();
    setSelectedItemName(cleaned);
  }

  if (!user) return null;

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-3xl font-bold">Week 10 — Shopping List</h1>
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
