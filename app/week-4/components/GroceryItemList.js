import React from 'react';
import Item from './GroceryItem';

const GroceryItemList = ({ title, items }) => {
  return (
     <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="divide-y divide-gray-200 space-y-2">
        {items.map((item) => (
          <Item key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default GroceryItemList;