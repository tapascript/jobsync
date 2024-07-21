"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import Logo from "./shared/Logo";

export default function Login() {
  return (
    <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="rounded-full overflow-hidden flex items-center place-items-center">
          <Logo />
          <div className="space-y-1 ml-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              JobSync
            </h1>
            <p className="text-sm text-gray-500">
              Sync your skills to requirements and get started with your job
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <button
          onClick={() => signIn('github')}
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 md:col-start-3"
        >
          Login with GitHub
        </button>
        <button
          onClick={() => signIn('google')}
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white hover:bg-red-500/90 h-10 px-4 py-2 md:col-start-3 mt-4"
        >
          Login with Google
        </button>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Signup to JobSync.
          </Link>
        </p>
      </div>
    </div>
  );
}
