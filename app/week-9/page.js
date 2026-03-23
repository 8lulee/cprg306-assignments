"use client";

import Link from "next/link";
import { useUserAuth } from "@/contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Week 9 — Firebase Auth</h1>

      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Welcome, <span className="font-semibold">{user.displayName}</span>!
          </p>
          <p className="text-sm text-gray-500">{user.email}</p>
          <Link
            href="/week-9/shopping-list"
            className="rounded-md bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={firebaseSignOut}
            className="rounded-md bg-gray-200 px-5 py-2 font-semibold text-gray-800 hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={gitHubSignIn}
          className="rounded-md bg-gray-900 px-5 py-2 font-semibold text-white hover:bg-gray-700"
        >
          Sign in with GitHub
        </button>
      )}
    </main>
  );
}
