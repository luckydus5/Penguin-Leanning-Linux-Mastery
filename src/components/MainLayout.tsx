import { Link, Outlet, useLocation } from "react-router-dom";
import { Terminal, BookOpen, Shield, Network, Code, Server, Trophy, FileText, List } from "lucide-react";

const sections = [
  { name: "Table of Contents", path: "/table-of-contents", icon: List, description: "Complete learning roadmap", featured: true },
  { name: "Getting Started", path: "/getting-started", icon: Terminal, description: "Linux basics and installation" },
  { name: "Foundation Concepts", path: "/foundation", icon: BookOpen, description: "Core Linux concepts" },
  { name: "Essential Commands", path: "/commands", icon: Code, description: "Command line mastery" },
  { name: "Networking Mastery", path: "/networking", icon: Network, description: "Network tools and protocols" },
  { name: "Offensive Security", path: "/offensive-security", icon: Shield, description: "Penetration testing tools" },
  { name: "Defensive Security", path: "/defensive-security", icon: Shield, description: "System hardening and defense" },
  { name: "Penetration Testing", path: "/pentesting", icon: Shield, description: "Advanced pen-testing" },
  { name: "Linux Mastery", path: "/linux", icon: Terminal, description: "Advanced Linux topics" },
  { name: "Practical Labs", path: "/labs", icon: Server, description: "Hands-on projects" },
  { name: "Certifications", path: "/certifications", icon: Trophy, description: "Certification roadmap" },
  { name: "Final Challenges", path: "/challenges", icon: Trophy, description: "Master level challenges" },
  { name: "Your Journey", path: "/journey", icon: FileText, description: "Track your progress" },
];

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-80 bg-sidebar text-sidebar-foreground p-6 flex flex-col gap-2 overflow-y-auto border-r border-sidebar-border">
        <Link to="/" className="flex items-center gap-3 mb-8 group">
          <div className="p-2 bg-primary rounded-lg text-primary-foreground group-hover:glow transition-all duration-300">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Linux Mastery</h1>
            <p className="text-sm text-sidebar-foreground/70">Complete Learning Guide</p>
          </div>
        </Link>
        
        <nav className="flex flex-col gap-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = location.pathname === section.path;
            const isFeatured = section.featured;
            
            return (
              <Link
                key={section.path}
                to={section.path}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                  isFeatured 
                    ? "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:from-primary/20 hover:to-secondary/20"
                    : isActive 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md" 
                      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${
                  isFeatured 
                    ? "text-primary" 
                    : isActive 
                      ? "text-primary" 
                      : "text-sidebar-foreground/70"
                }`} />
                <div className="flex-1">
                  <div className={`font-medium ${isFeatured ? "text-primary" : ""}`}>
                    {section.name}
                    {isFeatured && <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">📚</span>}
                  </div>
                  <div className="text-xs text-sidebar-foreground/60">{section.description}</div>
                </div>
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto pt-6 border-t border-sidebar-border">
          <div className="bg-sidebar-accent/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">Progress</span>
            </div>
            <div className="w-full bg-sidebar-border rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-1/3"></div>
            </div>
            <p className="text-xs text-sidebar-foreground/60 mt-2">3 of 12 sections completed</p>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
