import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Terminal, 
  Settings, 
  Network, 
  Shield, 
  Zap, 
  Trophy, 
  Target,
  Users,
  FileText,
  Code,
  Layers,
  ChevronRight,
  Clock,
  Star,
  Award,
  GraduationCap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";

const TableOfContents = () => {
  const skillLevels = [
    {
      level: "Beginner",
      icon: BookOpen,
      color: "from-green-500 to-emerald-600",
      description: "Perfect starting point for Linux newcomers",
      chapters: [
        {
          chapter: "Chapter 1",
          title: "Getting Started",
          path: "/getting-started",
          icon: BookOpen,
          estimatedTime: "45 min",
          description: "Your introduction to Linux - what it is, why it matters, and how to get started",
          topics: [
            "What is Linux?",
            "Linux Distributions", 
            "Installation Guide",
            "First Boot Setup",
            "Basic Terminal Setup"
          ]
        },
        {
          chapter: "Chapter 2", 
          title: "Foundation Concepts",
          path: "/foundation",
          icon: Layers,
          estimatedTime: "1 hour",
          description: "Core concepts every Linux user must understand",
          topics: [
            "Filesystem Hierarchy",
            "Terminal Basics",
            "Package Managers", 
            "Environment Variables",
            "File Permissions"
          ]
        },
        {
          chapter: "Chapter 3",
          title: "Essential Commands",
          path: "/commands", 
          icon: Terminal,
          estimatedTime: "2.5 hours",
          description: "Master 200+ essential Linux commands with practical examples",
          topics: [
            "Navigation Commands",
            "File Operations",
            "Text Processing",
            "Process Management",
            "System Monitoring"
          ]
        }
      ]
    },
    {
      level: "Intermediate",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      description: "Build advanced system administration skills",
      chapters: [
        {
          chapter: "Chapter 4",
          title: "System Administration", 
          path: "/system-admin",
          icon: Settings,
          estimatedTime: "2 hours",
          description: "Learn to manage and maintain Linux systems effectively",
          topics: [
            "User Management",
            "Service Control", 
            "Cron Jobs",
            "Log Management",
            "System Performance",
            "Backup Strategies"
          ]
        },
        {
          chapter: "Chapter 5",
          title: "Networking Commands",
          path: "/networking-commands",
          icon: Network, 
          estimatedTime: "1.5 hours",
          description: "Master networking tools and troubleshooting",
          topics: [
            "Network Configuration",
            "Diagnostic Tools",
            "Firewall Management",
            "SSH & Remote Access",
            "Network Monitoring"
          ]
        },
        {
          chapter: "Chapter 6",
          title: "Shell Scripting & Automation",
          path: "/linux",
          icon: Code,
          estimatedTime: "3 hours",
          description: "Automate tasks and create powerful scripts",
          topics: [
            "Bash Fundamentals",
            "Variables & Parameters",
            "Control Structures", 
            "Functions & Libraries",
            "Advanced Scripting"
          ]
        }
      ]
    },
    {
      level: "Advanced",
      icon: Shield,
      color: "from-purple-500 to-violet-600",
      description: "Master security and advanced system topics",
      chapters: [
        {
          chapter: "Chapter 7",
          title: "Offensive Security",
          path: "/offensive-security",
          icon: Target,
          estimatedTime: "3 hours", 
          description: "Ethical hacking and penetration testing fundamentals",
          topics: [
            "Reconnaissance",
            "Vulnerability Assessment",
            "Exploitation Techniques",
            "Post-Exploitation",
            "Reporting & Documentation"
          ]
        },
        {
          chapter: "Chapter 8", 
          title: "Defensive Security",
          path: "/defensive-security",
          icon: Shield,
          estimatedTime: "2.5 hours",
          description: "Protect systems and detect threats effectively", 
          topics: [
            "System Hardening",
            "Intrusion Detection",
            "Log Analysis",
            "Incident Response",
            "Security Monitoring"
          ]
        },
        {
          chapter: "Chapter 9",
          title: "Linux Mastery",
          path: "/linux",
          icon: Terminal,
          estimatedTime: "4 hours",
          description: "Advanced Linux topics for power users",
          topics: [
            "Kernel Management",
            "Advanced File Systems",
            "Performance Tuning",
            "Container Technologies",
            "System Optimization"
          ]
        }
      ]
    },
    {
      level: "Expert", 
      icon: Trophy,
      color: "from-orange-500 to-red-600",
      description: "Professional certifications and mastery challenges",
      chapters: [
        {
          chapter: "Chapter 10",
          title: "Practical Labs",
          path: "/labs", 
          icon: Zap,
          estimatedTime: "8+ hours",
          description: "Hands-on projects to cement your knowledge",
          topics: [
            "Web Server Setup",
            "Database Administration", 
            "Container Deployment",
            "Security Scenarios",
            "Real-world Projects"
          ]
        },
        {
          chapter: "Chapter 11",
          title: "Certifications & Career",
          path: "/certifications",
          icon: Award,
          estimatedTime: "2 hours",
          description: "Professional certifications and career development",
          topics: [
            "Linux+ Certification",
            "RHCSA/RHCE",
            "Security Certifications",
            "Career Paths",
            "Study Strategies"
          ]
        },
        {
          chapter: "Final Challenge",
          title: "Master Challenges", 
          path: "/challenges",
          icon: Trophy,
          estimatedTime: "5+ hours",
          description: "Ultimate tests of your Linux mastery",
          topics: [
            "Comprehensive Scenarios",
            "Time-based Challenges",
            "Real-world Problems", 
            "Capstone Projects",
            "Certification Prep"
          ]
        }
      ]
    }
  ];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800"; 
      case "Advanced": return "bg-purple-100 text-purple-800";
      case "Expert": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const totalEstimatedTime = "25+ hours";
  const totalChapters = skillLevels.reduce((acc, level) => acc + level.chapters.length, 0);
  const totalTopics = skillLevels.reduce((acc, level) => 
    acc + level.chapters.reduce((chapterAcc, chapter) => chapterAcc + chapter.topics.length, 0), 0
  );

  return (
    <div className="py-8 px-4">
      <FullscreenToggle />
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-primary rounded-xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <FileText className="w-4 h-4 mr-2" />
            Complete Guide
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          📚 Table of Contents
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Your comprehensive roadmap to Linux mastery. Follow this structured learning path 
          from complete beginner to expert-level system administrator and security professional.
        </p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary">{totalChapters}</div>
            <div className="text-sm text-muted-foreground">Chapters</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary">{totalTopics}</div>
            <div className="text-sm text-muted-foreground">Topics</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary">{totalEstimatedTime}</div>
            <div className="text-sm text-muted-foreground">Est. Time</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Commands</div>
          </div>
        </div>
      </div>

      {/* Learning Path by Skill Level */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">🎯 Structured Learning by Skill Level</h2>
        
        {skillLevels.map((skillLevel, levelIndex) => {
          const LevelIcon = skillLevel.icon;
          return (
            <div key={levelIndex} className="mb-12">
              {/* Skill Level Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${skillLevel.color} rounded-2xl flex items-center justify-center`}>
                  <LevelIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{skillLevel.level}</h3>
                  <p className="text-muted-foreground">{skillLevel.description}</p>
                </div>
                <Badge className={getDifficultyColor(skillLevel.level)} variant="secondary">
                  {skillLevel.chapters.length} Chapters
                </Badge>
              </div>

              {/* Chapters in this skill level */}
              <div className="grid gap-4 ml-6 border-l-2 border-muted pl-6">
                {skillLevel.chapters.map((chapter, chapterIndex) => {
                  const ChapterIcon = chapter.icon;
                  return (
                    <Card key={chapterIndex} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary cursor-pointer">
                      <Link to={chapter.path} className="block">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${skillLevel.color} text-white group-hover:scale-110 transition-transform`}>
                                <ChapterIcon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge variant="outline" className="text-xs">
                                    {chapter.chapter}
                                  </Badge>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    {chapter.estimatedTime}
                                  </div>
                                </div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                  {chapter.title}
                                </CardTitle>
                                <CardDescription className="mt-1 text-sm">
                                  {chapter.description}
                                </CardDescription>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                            {chapter.topics.map((topic, topicIndex) => (
                              <div 
                                key={topicIndex}
                                className="text-xs bg-muted/50 rounded-full px-3 py-1 text-center text-muted-foreground"
                              >
                                {topic}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">🚀 How to Use This Guide</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
              <div>
                <strong className="text-blue-900">Start with Your Level</strong>
                <p className="text-sm text-blue-700 mt-1">Choose the appropriate skill level and follow the structured path.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
              <div>
                <strong className="text-blue-900">Practice Everything</strong>
                <p className="text-sm text-blue-700 mt-1">Every command includes hands-on examples. Practice as you learn.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
              <div>
                <strong className="text-blue-900">Complete Labs</strong>
                <p className="text-sm text-blue-700 mt-1">Practical labs reinforce learning and build real-world skills.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
              <div>
                <strong className="text-blue-900">Challenge Yourself</strong>
                <p className="text-sm text-blue-700 mt-1">Use challenges and assessments to validate your progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Linux Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Start with the fundamentals and work your way up to expert-level skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/getting-started">
                <BookOpen className="w-5 h-5 mr-2" />
                Start with Chapter 1
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10">
              <Link to="/commands">
                <Terminal className="w-5 h-5 mr-2" />
                Jump to Commands
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>💡 <strong>Pro Tip:</strong> Bookmark this page to track your progress through the complete guide.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TableOfContents;