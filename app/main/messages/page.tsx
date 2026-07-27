import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

import Avatar from "@/components/common/Avatar";
import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";

const conversations = [
  {
    id: 1,
    name: "Aarav Sharma",
    message: "Let's connect and collaborate on a project.",
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Priya Singh",
    message: "Your latest post was really helpful!",
    time: "1 hour ago",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    message: "Can we schedule a quick meeting tomorrow?",
    time: "Yesterday",
  },
];

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="container mx-auto flex max-w-7xl gap-8 px-4 py-8">
        <Sidebar />

        <section className="flex-1">
          <PageHeader
            title="Messages"
            description="Stay connected with your conversations."
          />

          <div className="mt-8 space-y-5">
            {conversations.map((chat) => (
              <Card key={chat.id} className="transition hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar name={chat.name} />

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {chat.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-600">
                        {chat.message}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-slate-400">{chat.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
