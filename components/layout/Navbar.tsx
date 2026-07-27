"use client";

import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button";

type User = {
  name: string;
  email: string;
  username?: string;
};

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("connecthub-user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [open, setOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("connecthub-user");

    setUser(null);

    router.push("/auth/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}

        <Link
          href="/main/home"
          className="text-2xl font-extrabold tracking-tight text-slate-900"
        >
          Connect
          <span className="text-blue-600">Hub</span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/main/home"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/main/messages"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Messages
          </Link>

          <Link
            href="/main/notifications"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Notifications
          </Link>

          <Link
            href="/main/profile"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Profile
          </Link>
        </nav>

        {/* Right Section */}

        <div className="hidden items-center gap-4 lg:flex">
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <span className="font-medium text-slate-700">
                  {user.name}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
              >
                <LogOut size={17} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="font-medium text-slate-600 transition hover:text-blue-600"
              >
                Login
              </Link>

              <Button href="/auth/signup">
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-200 p-2 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/main/home"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-blue-50"
            >
              Home
            </Link>

            <Link
              href="/main/messages"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-blue-50"
            >
              Messages
            </Link>

            <Link
              href="/main/notifications"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-blue-50"
            >
              Notifications
            </Link>

            <Link
              href="/main/profile"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-blue-50"
            >
              Profile
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="mt-3 flex items-center gap-2 rounded-xl px-4 py-3 text-red-600 hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-blue-50"
                >
                  Login
                </Link>

                <Link
                  href="/auth/signup"
                  className="rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}