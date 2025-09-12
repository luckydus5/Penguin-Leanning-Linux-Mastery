import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Terminal, BookOpen, Shield, Network, Code, Server, Trophy, FileText, List, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { name: "📚 Table of Contents", path: "/table-of-contents", icon: List, description: "Complete learning roadmap", featured: true },
  
  // Beginner Level
  { name: "Getting Started", path: "/getting-started", icon: BookOpen, description: "Linux basics & installation", level: "Beginner" },
  { name: "Foundation Concepts", path: "/foundation", icon: Layers, description: "Core Linux concepts", level: "Beginner" },
  { name: "Essential Commands", path: "/commands", icon: Terminal, description: "Command line mastery", level: "Beginner" },
  
  // Intermediate Level
  { name: "System Administration", path: "/system-admin", icon: Server, description: "User & service management", level: "Intermediate" },
  { name: "Networking Commands", path: "/networking-commands", icon: Network, description: "Network tools & protocols", level: "Intermediate" },
  { name: "Shell Scripting", path: "/linux", icon: Code, description: "Automation & scripting", level: "Intermediate" },
  
  // Advanced Level
  { name: "Offensive Security", path: "/offensive-security", icon: Shield, description: "Ethical hacking tools", level: "Advanced" },
  { name: "Defensive Security", path: "/defensive-security", icon: Shield, description: "System hardening", level: "Advanced" },
  
  // Expert Level
  { name: "Practical Labs", path: "/labs", icon: Server, description: "Hands-on projects", level: "Expert" },
  { name: "Certifications", path: "/certifications", icon: Trophy, description: "Professional certs", level: "Expert" },
  { name: "Master Challenges", path: "/challenges", icon: Trophy, description: "Ultimate challenges", level: "Expert" },
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
            const level = section.level;
            
            // Add level headers
            const prevSection = sections[sections.indexOf(section) - 1];
            const showLevelHeader = level && (!prevSection || prevSection.level !== level);
            
            return (
              <div key={section.path}>
                {showLevelHeader && (
                  <div className="px-4 py-2 mt-4 mb-1">
                    <div className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
                      {level} Level
                    </div>
                  </div>
                )}
                <Link
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
                    </div>
                    <div className="text-xs text-sidebar-foreground/60">{section.description}</div>
                  </div>
                </Link>
              </div>
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
