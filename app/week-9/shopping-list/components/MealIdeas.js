"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="w-full max-w-sm">
      <h2 className="mb-3 text-xl font-bold">Meal Ideas for &quot;{ingredient}&quot;</h2>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="h-12 w-12 rounded-md object-cover" />
            <span className="text-sm font-medium text-gray-800">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
