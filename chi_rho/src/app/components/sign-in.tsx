"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn("google");
      }}
    >
      <button className="mt-5 mb-6 px-5 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg" type="submit">Sign in with Google</button>
    </form>
  );
}
