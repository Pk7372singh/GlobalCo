import { User } from "@/types/user";

export const currentUser: User = {
  id: "1",
  name: "Prafful Kumar",
  username: "@prafful",
  email: "prafful@example.com",
  bio: "Frontend Developer passionate about React, Next.js and TypeScript. I enjoy building clean and user-friendly web applications.",
};

export const users: User[] = [
  currentUser,
  {
    id: "2",
    name: "Aarav Sharma",
    username: "@aarav",
    email: "aarav@example.com",
    bio: "UI/UX Designer",
  },
  {
    id: "3",
    name: "Priya Singh",
    username: "@priya",
    email: "priya@example.com",
    bio: "Frontend Developer",
  },
  {
    id: "4",
    name: "Rahul Kumar",
    username: "@rahul",
    email: "rahul@example.com",
    bio: "Software Engineer",
  },
];