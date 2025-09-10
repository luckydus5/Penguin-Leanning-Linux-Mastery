import { Link } from "react-router-dom";
import { 
  Terminal, 
  BookOpen, 
  Code, 
  Shield, 
  Trophy, 
  ChevronRight, 
  Github, 
  Star,
  Settings, 
  Network, 
  Zap, 
  Target,
  Users,
  FileText,
  Layers,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";

const Index = () => {
  const chapters = [
    {
      chapter: "Chapter 1",
      title: "Getting Started",
      path: "/getting-started",
      icon: BookOpen,
      difficulty: "Beginner",
      estimatedTime: "30 min",
      description: "Your introduction to Linux - what it is, why it matters, and how to get started",
      topics: [
        "What is Linux?",
        "Linux Distributions", 
        "Installation Guide",
        "First Boot Setup"
      ],
      color: "bg-green-500"
    },
    {
      chapter: "Chapter 2", 
      title: "Foundation Concepts",
      path: "/foundation",
      icon: Layers,
      difficulty: "Beginner",
      estimatedTime: "45 min",
      description: "Core concepts every Linux user must understand",
      topics: [
        "Filesystem Hierarchy",
        "Terminal Basics",
        "Package Managers", 
        "Environment Variables"
      ],
      color: "bg-blue-500"
    },
    {
      chapter: "Chapter 3",
      title: "Essential Commands",
      path: "/commands", 
      icon: Terminal,
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      description: "Master 200+ essential Linux commands with practical examples",
      topics: [
        "Navigation Commands",
        "File Operations",
        "Text Processing",
        "Process Management",
        "System Monitoring"
      ],
      color: "bg-purple-500"
    },
    {
      chapter: "Chapter 4",
      title: "System Administration", 
      path: "/system-admin",
      icon: Settings,
      difficulty: "Intermediate",
      estimatedTime: "1.5 hours",
      description: "Learn to manage and maintain Linux systems effectively",
      topics: [
        "User Management",
        "Service Control", 
        "Cron Jobs",
        "Log Management",
        "System Performance"
      ],
      color: "bg-orange-500"
    },
    {
      chapter: "Chapter 5",
      title: "Networking Mastery",
      path: "/networking",
      icon: Network, 
      difficulty: "Intermediate",
      estimatedTime: "2 hours",
      description: "Comprehensive networking concepts and troubleshooting",
      topics: [
        "TCP/IP Fundamentals",
        "Network Diagnostics",
        "Firewall Configuration",
        "SSH & Remote Access",
        "Network Tools"
      ],
      color: "bg-cyan-500"
    },
    {
      chapter: "Chapter 6",
      title: "Shell Scripting & Automation",
      path: "/linux",
      icon: Code,
      difficulty: "Intermediate", 
      estimatedTime: "2.5 hours",
      description: "Automate tasks and create powerful scripts",
      topics: [
        "Bash Fundamentals",
        "Variables & Parameters",
        "Control Structures", 
        "Functions & Libraries",
        "Advanced Techniques"
      ],
      color: "bg-indigo-500"
    },
    {
      chapter: "Chapter 7",
      title: "Offensive Security",
      path: "/offensive-security",
      icon: Target,
      difficulty: "Advanced",
      estimatedTime: "3 hours", 
      description: "Ethical hacking and penetration testing fundamentals",
      topics: [
        "Reconnaissance",
        "Vulnerability Assessment",
        "Exploitation Techniques",
        "Post-Exploitation",
        "Reporting"
      ],
      color: "bg-red-500"
    },
    {
      chapter: "Chapter 8", 
      title: "Defensive Security",
      path: "/defensive-security",
      icon: Shield,
      difficulty: "Advanced",
      estimatedTime: "2.5 hours",
      description: "Protect systems and detect threats effectively", 
      topics: [
        "System Hardening",
        "Intrusion Detection",
        "Log Analysis",
        "Incident Response",
        "Security Monitoring"
      ],
      color: "bg-emerald-500"
    },
    {
      chapter: "Chapter 9",
      title: "Practical Labs",
      path: "/labs", 
      icon: Zap,
      difficulty: "All Levels",
      estimatedTime: "5+ hours",
      description: "Hands-on projects to cement your knowledge",
      topics: [
        "Web Server Setup",
        "Database Administration", 
        "Container Management",
        "Security Scenarios",
        "Real-world Projects"
      ],
      color: "bg-yellow-500"
    },
    {
      chapter: "Chapter 10",
      title: "Certifications & Career",
      path: "/certifications",
      icon: Award,
      difficulty: "Expert", 
      estimatedTime: "1 hour",
      description: "Professional certifications and career development",
      topics: [
        "Linux+ Certification",
        "RHCSA/RHCE",
        "Security Certifications",
        "Career Paths",
        "Study Strategies"
      ],
      color: "bg-pink-500"
    },
    {
      chapter: "Final Challenge",
      title: "Master Challenges", 
      path: "/challenges",
      icon: Trophy,
      difficulty: "Expert",
      estimatedTime: "3+ hours",
      description: "Ultimate tests of your Linux mastery",
      topics: [
        "Comprehensive Scenarios",
        "Time-based Challenges",
        "Real-world Problems", 
        "Capstone Projects",
        "Certification Prep"
      ],
      color: "bg-violet-500"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800"; 
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      case "All Levels": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const totalEstimatedTime = "20+ hours";
  const totalTopics = chapters.reduce((acc, chapter) => acc + chapter.topics.length, 0);

  const features = [
    {
      icon: Terminal,
      title: "Command Line Mastery",
      description: "Master 200+ essential Linux commands with practical examples"
    },
    {
      icon: BookOpen,
      title: "Complete Learning Path",
      description: "From beginner to expert with structured, progressive content"
    },
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Learn offensive and defensive security techniques"
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Real-world labs and challenges to build expertise"
    }
  ];

  const stats = [
    { label: "Commands Covered", value: "200+" },
    { label: "Hands-on Labs", value: "50+" },
    { label: "Topics", value: "12" },
    { label: "Difficulty Levels", value: "4" }
  ];

  return (
    <div className="min-h-screen">
      <FullscreenToggle />
      {/* Hero Section */}
      <section className="hero-bg text-white py-20 px-8">
        <div className="w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary rounded-xl glow">
              <Terminal className="w-8 h-8" />
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2" />
              Complete Guide
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Linux Mastery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
            The Complete Guide to Linux, DevOps & Cybersecurity
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            From beginner to expert: Master Linux fundamentals, command line tools, 
            system administration, networking, and cybersecurity in one comprehensive guide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 glow">
              <Link to="/getting-started">
                � Start Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/commands">
                📖 Essential Commands
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents Section */}
      <section className="py-20 px-8">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <FileText className="w-4 h-4 mr-2" />
                Complete Curriculum
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              📚 Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Follow this structured learning path from complete beginner to expert-level 
              system administrator and security professional.
            </p>
          </div>

          {/* Learning Path */}
          <div className="mb-12">
            <div className="grid gap-6">
              {chapters.map((chapter, index) => {
                const IconComponent = chapter.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary cursor-pointer">
                    <Link to={chapter.path} className="block">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${chapter.color} text-white group-hover:scale-110 transition-transform`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {chapter.chapter}
                                </Badge>
                                <Badge className={getDifficultyColor(chapter.difficulty)}>
                                  {chapter.difficulty}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  {chapter.estimatedTime}
                                </div>
                              </div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {chapter.title}
                              </CardTitle>
                              <CardDescription className="mt-2 text-sm">
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

          {/* Quick Start Guide */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">🚀 How to Use This Guide</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
                  <div>
                    <strong className="text-blue-900">Follow the Order</strong>
                    <p className="text-sm text-blue-700 mt-1">Each chapter builds on previous knowledge. Start from Chapter 1 for best results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
                  <div>
                    <strong className="text-blue-900">Practice Everything</strong>
                    <p className="text-sm text-blue-700 mt-1">Every command and concept includes hands-on examples. Practice as you learn.</p>
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
                    <strong className="text-blue-900">Test Yourself</strong>
                    <p className="text-sm text-blue-700 mt-1">Use challenges and assessments to validate your progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-muted/20">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Linux Mastery?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a Linux expert, from basic commands to advanced cybersecurity techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-20 px-8 bg-muted/30">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Path</h2>
            <p className="text-xl text-muted-foreground">
              Follow our structured curriculum designed by Linux experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-green-100 text-green-800">Beginner</Badge>
                  <span className="text-sm text-muted-foreground">Chapters 1-4</span>
                </div>
                <CardTitle>Foundation</CardTitle>
                <CardDescription>
                  Linux basics, file system, essential commands, and user management
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
                  <span className="text-sm text-muted-foreground">Chapters 5-8</span>
                </div>
                <CardTitle>System Administration</CardTitle>
                <CardDescription>
                  Process management, networking, services, and shell scripting
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-red-100 text-red-800">Advanced</Badge>
                  <span className="text-sm text-muted-foreground">Chapters 9-12</span>
                </div>
                <CardTitle>DevOps & Security</CardTitle>
                <CardDescription>
                  DevOps tools, cybersecurity, penetration testing, and advanced topics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your Linux mastery journey? Choose your path:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link to="/linux-basics">
                  🐧 Start with Linux Basics
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/commands">
                  📖 Jump to Essential Commands
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Or explore specific topics: 
              <Link to="/networking" className="text-primary hover:underline ml-1">Networking</Link>
              {" • "}
              <Link to="/scripting" className="text-primary hover:underline">Shell Scripting</Link>
              {" • "}
              <Link to="/security" className="text-primary hover:underline">Cybersecurity</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
