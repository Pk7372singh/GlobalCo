"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  href?: string;

  variant?: "primary" | "secondary";
}

export default function Button({
  children,

  href,

  variant = "primary",

  className = "",

  type = "button",

  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-300",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:-translate-y-1",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
