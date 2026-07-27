import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

import Avatar from "@/components/common/Avatar";
import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";

import { currentUser } from "@/data/users";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="container mx-auto flex max-w-7xl gap-8 px-4 py-8">
        <Sidebar />

        <section className="flex-1">
          <PageHeader
            title="My Profile"
            description="View and manage your profile information."
          />

          <Card className="mt-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Avatar name={currentUser.name} size="lg" />

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900">
                  {currentUser.name}
                </h2>

                <p className="mt-1 text-slate-500">{currentUser.username}</p>

                <p className="mt-4 text-slate-600">{currentUser.bio}</p>
              </div>
            </div>
          </Card>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-2xl font-bold text-indigo-600">124</h3>

              <p className="mt-2 text-slate-600">Posts</p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-indigo-600">1.8K</h3>

              <p className="mt-2 text-slate-600">Followers</p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-indigo-600">356</h3>

              <p className="mt-2 text-slate-600">Following</p>
            </Card>
          </div>

          <Card className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900">About</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Passionate Frontend Developer with experience in React, Next.js
              and TypeScript. I enjoy building clean, responsive and
              user-friendly web applications with modern UI and reusable
              components.
            </p>
          </Card>
        </section>
      </div>
    </main>
  );
}
