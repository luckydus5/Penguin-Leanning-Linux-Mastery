import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Terminal, BookOpen, Shield, Network, Code, Server, Trophy, FileText, List, ChevronLeft, ChevronRight, Target, Flame, Settings } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { name: "🌱 Beginner Path", path: "/beginner-path", icon: BookOpen, description: "Perfect for complete beginners", featured: true, skillLevel: "beginner" },
  { name: "🎯 Intermediate Path", path: "/intermediate-path", icon: Target, description: "Build professional skills", featured: true, skillLevel: "intermediate" },
  { name: "🔥 Advanced Path", path: "/advanced-path", icon: Flame, description: "Master expert-level topics", featured: true, skillLevel: "advanced" },
  { name: "📚 Table of Contents", path: "/table-of-contents", icon: List, description: "Complete learning roadmap" },
  { name: "Getting Started", path: "/getting-started", icon: Terminal, description: "Linux basics and installation" },
  { name: "Foundation Concepts", path: "/foundation", icon: BookOpen, description: "Core Linux concepts" },
  { name: "Essential Commands", path: "/commands", icon: Code, description: "Command line mastery" },
  { name: "System Administration", path: "/system-admin", icon: Settings, description: "User and system management" },
  { name: "Networking Commands", path: "/networking-commands", icon: Network, description: "Network tools and protocols" },
  { name: "Networking Mastery", path: "/networking", icon: Network, description: "Advanced networking" },
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarHidden, setSidebarHidden] = useState(false);
  
  // Check URL parameter for fullscreen mode
  useEffect(() => {
    const fullscreen = searchParams.get('fullscreen') === 'true';
    setSidebarHidden(fullscreen);
    
    // Add/remove fullscreen class from body
    if (fullscreen) {
      document.body.classList.add('fullscreen-mode');
    } else {
      document.body.classList.remove('fullscreen-mode');
    }
  }, [searchParams]);

  // Toggle sidebar and update URL
  const toggleSidebar = useCallback(() => {
    const newHidden = !sidebarHidden;
    setSidebarHidden(newHidden);
    
    if (newHidden) {
      setSearchParams({ fullscreen: 'true' });
    } else {
      setSearchParams({});
    }
  }, [sidebarHidden, setSearchParams]);

  // Keyboard shortcut for fullscreen toggle
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'F11' || (e.ctrlKey && e.key === 'f')) {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleSidebar]);

  return (
    <div className="flex min-h-screen bg-background relative">
      {/* Sidebar */}
      <aside className={`${
        sidebarHidden ? 'w-0 -translate-x-full' : 'w-80'
      } transition-all duration-300 ease-in-out bg-sidebar text-sidebar-foreground p-6 flex flex-col gap-2 overflow-hidden border-r border-sidebar-border`}>
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
            const skillLevel = section.skillLevel;
            
            // Skill level specific styling
            const getSkillLevelStyle = () => {
              if (!skillLevel) return "";
              switch (skillLevel) {
                case "beginner": return "border-green-200 bg-gradient-to-r from-green-50/50 to-blue-50/50 hover:from-green-100/50 hover:to-blue-100/50";
                case "intermediate": return "border-orange-200 bg-gradient-to-r from-orange-50/50 to-red-50/50 hover:from-orange-100/50 hover:to-red-100/50";
                case "advanced": return "border-purple-200 bg-gradient-to-r from-purple-50/50 to-red-50/50 hover:from-purple-100/50 hover:to-red-100/50";
                default: return "";
              }
            };
            
            return (
              <Link
                key={section.path}
                to={section.path}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                  isFeatured 
                    ? `border ${getSkillLevelStyle()}`
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
      
      {/* Toggle Button */}
      <Button
        onClick={toggleSidebar}
        variant="outline"
        size="sm"
        className={`fixed top-4 z-50 transition-all duration-300 ${
          sidebarHidden ? 'left-4' : 'left-[21rem]'
        } bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90`}
        title={sidebarHidden ? 'Show Navigation (F11)' : 'Hide Navigation (F11)'}
      >
        {sidebarHidden ? (
          <>
            <ChevronRight className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Show Nav</span>
          </>
        ) : (
          <>
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Hide Nav</span>
          </>
        )}
      </Button>
      
      <main className={`flex-1 overflow-y-auto transition-all duration-300 ${
        sidebarHidden ? 'ml-0' : 'ml-0'
      }`}>
        <div className={`${sidebarHidden ? 'p-0' : 'p-0'}`}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
