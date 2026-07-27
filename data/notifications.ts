export interface Notification {
  id: number;
  type: "like" | "comment" | "follow" | "system";
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

export const notifications: Notification[] = [
  {
    id: 1,
    type: "like",
    title: "Someone liked your post",
    description:
      "Rahul Sharma liked your recent post about frontend development.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "comment",
    title: "New comment on your post",
    description:
      "Ankit commented: Great work! Keep building amazing projects.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "follow",
    title: "New follower",
    description: "Priya started following you.",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 4,
    type: "system",
    title: "Welcome to ConnectHub",
    description:
      "Complete your profile to get better connections.",
    time: "Yesterday",
    unread: false,
  },
];