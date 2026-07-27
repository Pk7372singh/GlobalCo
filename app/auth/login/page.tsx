"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import PageHeader from "@/components/common/PageHeader";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Login button clicked");

    localStorage.setItem(
      "connecthub-user",
      JSON.stringify({
        name: "Prafful Kumar",

        email: "prafful@example.com",

        loggedIn: true,
      }),
    );

    console.log("User saved");

    router.replace("/main/home");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-5 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <PageHeader
          title="Welcome Back"
          description="Sign in to continue to ConnectHub."
        />

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="px-4 text-sm text-slate-400">OR</span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          className="w-full rounded-xl border border-slate-300 py-3 font-medium hover:bg-slate-100"
        >
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-slate-600">
          Don't have an account?
          <Link
            href="/auth/signup"
            className="ml-2 font-semibold text-indigo-600"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
