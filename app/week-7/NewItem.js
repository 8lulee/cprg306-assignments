"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4 flex gap-3">
        <div className="w-1/3">
          <label
            htmlFor="quantity"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-blue-500 focus:outline-none"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 p-2 font-semibold text-white transition hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
