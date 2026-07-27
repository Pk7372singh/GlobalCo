import { Heart, MessageCircle, Share2 } from "lucide-react";

import Avatar from "@/components/common/Avatar";
import Card from "@/components/common/Card";

import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <Avatar name={post.author} />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">{post.author}</h3>

              <p className="text-sm text-slate-500">
                {post.username} • {post.time}
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-700">{post.content}</p>

          <div className="mt-6 flex items-center gap-8 border-t border-slate-200 pt-5">
            <button className="flex items-center gap-2 text-slate-500 transition hover:text-red-500">
              <Heart size={18} />
              <span>{post.likes}</span>
            </button>

            <button className="flex items-center gap-2 text-slate-500 transition hover:text-indigo-600">
              <MessageCircle size={18} />
              <span>{post.comments}</span>
            </button>

            <button className="flex items-center gap-2 text-slate-500 transition hover:text-green-600">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
