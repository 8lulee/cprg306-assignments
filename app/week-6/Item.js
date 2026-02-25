import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
     <li className="w-full rounded-xl border border-gray-700 bg-black px-6 py-4 text-left">
      <h3 className="text-base font-semibold text-white">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-200 ">
        Quantity: <span className="font-semibold">{quantity}</span>
      </p>


      <p className="mt-1 text-sm text-gray-400">
        Category: {category}
      </p>
    </li>
  );
};

export default Item;
