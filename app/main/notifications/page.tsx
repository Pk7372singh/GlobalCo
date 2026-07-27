"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";

import {
  notifications as notificationData,
  Notification,
} from "@/data/notifications";

import {
  Heart,
  MessageCircle,
  UserPlus,
  Bell,
} from "lucide-react";

function NotificationIcon({
  type,
}: {
  type: string;
}) {
  if (type === "like") {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600">
        <Heart size={20} />
      </div>
    );
  }

  if (type === "comment") {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <MessageCircle size={20} />
      </div>
    );
  }

  if (type === "follow") {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
        <UserPlus size={20} />
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
      <Bell size={20} />
    </div>
  );
}

export default function NotificationsPage() {
  const [items, setItems] = useState<Notification[]>(() => {
    if (typeof window === "undefined") {
      return notificationData;
    }

    const savedNotifications = localStorage.getItem("notifications");

    if (savedNotifications) {
      return JSON.parse(savedNotifications);
    }

    localStorage.setItem(
      "notifications",
      JSON.stringify(notificationData),
    );

    return notificationData;
  });

  function markAllRead() {
    const updatedNotifications = items.map((item) => ({
      ...item,
      unread: false,
    }));

    setItems(updatedNotifications);

    localStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications),
    );

    localStorage.setItem(
      "notification-count",
      "0",
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="container mx-auto flex max-w-7xl gap-8 px-4 py-8">
        <Sidebar />

        <section className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <PageHeader
              title="Notifications"
              description="Stay updated with your latest activities and connections."
            />

            <button
              onClick={markAllRead}
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Mark all as read
            </button>
          </div>

          <Card className="mt-8">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 rounded-xl border p-4 transition ${
                    item.unread
                      ? "border-blue-200 bg-blue-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <NotificationIcon type={item.type} />

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      {item.unread && (
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                          New
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm text-slate-600">
                      {item.description}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}