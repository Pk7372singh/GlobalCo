import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

import PageHeader from "@/components/common/PageHeader";

import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";

import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}

          <Sidebar />

          {/* Feed */}

          <section className="min-w-0">
            <div className="mb-8">
              <PageHeader
                title="Home "
                description="Discover the latest updates from your community."
              />
            </div>

            <div className="space-y-6">
              <CreatePost />

              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
