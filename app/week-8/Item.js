import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      onClick={onSelect}
      className="w-full cursor-pointer rounded-xl border border-gray-700 bg-black px-6 py-4 text-left hover:bg-gray-900"
    >
      <h3 className="text-base font-semibold text-white">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-200">
        Quantity: <span className="font-semibold">{quantity}</span>
      </p>

      <p className="mt-1 text-sm text-gray-400">
        Category: {category}
      </p>
    </li>
  );
};

export default Item;
