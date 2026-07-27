"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import PageHeader from "@/components/common/PageHeader";

export default function SignupPage() {
  const router = useRouter();

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Signup button clicked");

    localStorage.setItem(
      "connecthub-user",
      JSON.stringify({
        name: "Prafful Kumar",

        username: "@prafful",

        email: "prafful@example.com",

        loggedIn: true,
      }),
    );

    console.log("User created");

    router.replace("/main/home");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-5 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <PageHeader
          title="Create Your Account"
          description="Join ConnectHub and start sharing your ideas."
        />

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              required
            />

            <Input
              label="Username"
              type="text"
              placeholder="@johndoe"
              required
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            required
          />

          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              required
              className="mt-1 rounded border-slate-300"
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                className="font-medium text-indigo-600 hover:underline"
              >
                Terms & Conditions
              </button>
            </span>
          </label>

          <Button type="submit" className="w-full">
            Create Account
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
          Already have an account?
          <Link
            href="/auth/login"
            className="ml-2 font-semibold text-indigo-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
