import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      return (
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      );
    }

    return a.name.localeCompare(b.name);
  });

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort((a, b) =>
    a.localeCompare(b)
  );

  const buttonClass = (value) =>
    `rounded px-3 py-1 text-sm font-medium transition ${
      sortBy === value
        ? "bg-slate-800 text-white"
        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
    }`;

  return (
    <section className="w-full max-w-4xl px-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">Sort by:</span>
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={buttonClass("name")}
        >
          Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={buttonClass("category")}
        >
          Category
        </button>
        <button
          type="button"
          onClick={() => setSortBy("grouped")}
          className={buttonClass("grouped")}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        <div className="space-y-4">
          {sortedCategories.map((category) => {
            const categoryItems = [...groupedItems[category]].sort((a, b) =>
              a.name.localeCompare(b.name)
            );

            return (
              <section key={category}>
                <h2 className="mb-2 text-lg font-semibold capitalize text-slate-800">
                  {category}
                </h2>
                <ul className="space-y-2">
                  {categoryItems.map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  );
}
