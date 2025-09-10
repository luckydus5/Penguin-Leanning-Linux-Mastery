import { Link, Outlet } from "react-router-dom";

const sections = [
  { name: "🚀 Getting Started", path: "/getting-started" },
  { name: "🏗️ Foundation Concepts", path: "/foundation" },
  { name: "📁 Essential Commands", path: "/commands" },
  { name: "🌐 Networking Mastery", path: "/networking" },
  { name: "🔒 Offensive Security", path: "/offensive-security" },
  { name: "🛡️ Defensive Security", path: "/defensive-security" },
  { name: "🎯 Penetration Testing", path: "/pentesting" },
  { name: "💻 Windows Mastery", path: "/windows" },
  { name: "🏆 Practical Projects", path: "/labs" },
  { name: "📚 Certifications", path: "/certifications" },
  { name: "🎯 Final Challenges", path: "/challenges" },
  { name: "🚀 Your Journey", path: "/journey" },
];

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-72 bg-gray-900 text-white p-4 flex flex-col gap-2 overflow-y-auto">
        <Link to="/" className="text-2xl font-bold mb-4 text-center">🐧 Penguin Pathways</Link>
        <nav className="flex flex-col gap-1">
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="hover:bg-gray-700 rounded px-3 py-2 text-sm transition-colors"
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
