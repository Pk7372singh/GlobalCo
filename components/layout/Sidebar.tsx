"use client";

import Link from "next/link";

import { Home, User, MessageCircle, Bell } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "/main/home",
    icon: Home,
  },
  {
    title: "Profile",
    href: "/main/profile",
    icon: User,
  },
  {
    title: "Messages",
    href: "/main/messages",
    icon: MessageCircle,
  },
  {
    title: "Notifications",
    href: "/main/notifications",
    icon: Bell,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-6 text-lg font-bold text-slate-900">Navigation</h2>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon size={20} />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
