import {
  ArrowRight,
  Users,
  MessageCircle,
  Bell,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}

      <section className="container mx-auto max-w-7xl px-4 pt-24 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-semibold text-indigo-700">
            <Sparkles size={16} />
            Modern Social Platform
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Connect with
            <br />
            <span className="text-indigo-600">People That Matter.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Build meaningful relationships, discover communities, share ideas
            and stay connected through a modern social platform built for
            creators, developers and professionals.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button href="/auth/signup">
              Get Started
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <Button href="/auth//login" variant="secondary">
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="text-center">
            <h2 className="text-4xl font-bold text-indigo-600">20K+</h2>

            <p className="mt-3 text-slate-600">Active Members</p>
          </Card>

          <Card className="text-center">
            <h2 className="text-4xl font-bold text-indigo-600">5K+</h2>

            <p className="mt-3 text-slate-600">Communities</p>
          </Card>

          <Card className="text-center">
            <h2 className="text-4xl font-bold text-indigo-600">99%</h2>

            <p className="mt-3 text-slate-600">User Satisfaction</p>
          </Card>
        </div>
      </section>

      {/* Features */}

      <section className="container mx-auto max-w-7xl px-4 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything you need in one place
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            A modern social experience designed for collaboration, networking
            and meaningful conversations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card className="rounded-3xl hover:-translate-y-2 hover:shadow-xl">
            <Users size={40} className="mb-6 text-indigo-600" />

            <h3 className="text-2xl font-semibold">Communities</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Join communities that match your interests and connect with
              like-minded people.
            </p>
          </Card>

          <Card className="rounded-3xl hover:-translate-y-2 hover:shadow-xl">
            <MessageCircle size={40} className="mb-6 text-indigo-600" />

            <h3 className="text-2xl font-semibold">Discussions</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Share your thoughts, ask questions and build meaningful
              conversations.
            </p>
          </Card>

          <Card className="rounded-3xl hover:-translate-y-2 hover:shadow-xl">
            <Bell size={40} className="mb-6 text-indigo-600" />

            <h3 className="text-2xl font-semibold">Instant Updates</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Stay informed with real-time notifications and never miss
              important updates.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}

      <section className="container mx-auto max-w-7xl px-4 pb-24">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 px-10 py-20 text-center text-white shadow-2xl">
          <ShieldCheck size={46} className="mx-auto mb-8" />

          <h2 className="text-4xl font-bold">Ready to Join ConnectHub?</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-indigo-100">
            Start building your network today and discover a better way to
            connect, communicate and grow.
          </p>

          <div className="mt-10">
            <Button href="/auth/signup" variant="secondary">
              Create Free Account
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
