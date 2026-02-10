import React from 'react';
import StateEventsLab from './starter';

export default function Page() {
  const listTitle = "Louis' State and Events Lab";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">{listTitle}</h1>
      <StateEventsLab />
    </main>
  );
}
