"use client";

import { ImagePlus, Smile, Send, Globe2 } from "lucide-react";

import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";

export default function CreatePost() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* User Header */}

      <div className="flex items-center gap-4">
        <Avatar name="Prafful Kumar" />

        <div>
          <h3 className="font-semibold text-slate-900">Prafful Kumar</h3>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
            <Globe2 size={14} />
            Public
          </div>
        </div>
      </div>

      {/* Input */}

      <textarea
        rows={4}
        placeholder="Share something with your community..."
        className="mt-6 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />

      {/* Bottom Actions */}

      <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600">
            <ImagePlus size={20} />
            Photo
          </button>

          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600">
            <Smile size={20} />
            Feeling
          </button>
        </div>

        <Button>
          <Send size={18} className="mr-2" />
          Publish
        </Button>
      </div>
    </div>
  );
}
