import React from 'react';
import GroceryItemList from './GroceryItemList';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      <GroceryItemList />
    </main>
  );
};

export default Page;