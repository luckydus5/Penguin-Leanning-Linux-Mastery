import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Terminal, 
  Play, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Lightbulb,
  Target,
  Code,
  FileText,
  HelpCircle,
  Layers
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const BeginnerPath = () => {
  const beginnerContent = [
    {
      id: 1,
      title: "What is Linux? (Complete Beginner's Introduction)",
      path: "/linux-introduction",
      icon: HelpCircle,
      estimatedTime: "15 min",
      difficulty: "Absolute Beginner",
      description: "Never heard of Linux? Start here! We'll explain what Linux is in simple terms, like explaining to a friend.",
      topics: [
        "What is an Operating System?",
        "Linux vs Windows vs Mac - Simple Comparison", 
        "Why Learn Linux? (Career Benefits)",
        "Linux in Real Life - Where You've Already Used It",
        "Common Myths About Linux Debunked"
      ],
      keyQuestions: [
        "What exactly is Linux?",
        "Is Linux difficult to learn?",
        "Do I need to be a programmer?",
        "Can I break my computer learning Linux?"
      ],
      practicalOutcome: "Understand what Linux is and feel confident about starting your journey"
    },
    {
      id: 2,
      title: "Getting Your First Linux System (Step-by-Step)",
      path: "/first-linux-setup",
      icon: Play,
      estimatedTime: "30 min",
      difficulty: "Beginner",
      description: "Safe, easy ways to try Linux without changing your current computer setup.",
      topics: [
        "Virtual Machine Setup (Safest Method)",
        "Live USB - Try Without Installing",
        "Online Linux Terminals (Start in 30 seconds)",
        "Choosing Your First Distribution (Ubuntu Recommendation)",
        "Step-by-Step Installation Guide with Screenshots"
      ],
      keyQuestions: [
        "How do I try Linux safely?",
        "Which Linux should I choose first?",
        "Will this affect my Windows/Mac?",
        "What if something goes wrong?"
      ],
      practicalOutcome: "Have a working Linux system ready for learning"
    },
    {
      id: 3,
      title: "Your First Steps - The Desktop Environment",
      path: "/linux-desktop-basics",
      icon: Layers,
      estimatedTime: "20 min", 
      difficulty: "Beginner",
      description: "Learn to navigate the Linux desktop - it's more familiar than you think!",
      topics: [
        "Desktop Tour - It's Like Windows/Mac",
        "File Manager Basics (Just Like File Explorer)",
        "Installing Software (App Store Equivalent)",
        "Basic Settings and Customization",
        "Where to Find Help When Stuck"
      ],
      keyQuestions: [
        "How do I open programs?",
        "Where are my files stored?",
        "How do I install new software?",
        "How do I connect to WiFi?"
      ],
      practicalOutcome: "Navigate Linux desktop comfortably like any other computer"
    },
    {
      id: 4,
      title: "The Terminal - Your New Superpower (Gentle Introduction)",
      path: "/terminal-basics-gentle",
      icon: Terminal,
      estimatedTime: "45 min",
      difficulty: "Beginner",
      description: "The terminal isn't scary! Learn why it's actually faster and more powerful than clicking.",
      topics: [
        "What is the Terminal? (Simple Explanation)",
        "Opening Your First Terminal Window",
        "Your First Commands - 'Hello World' Moment",
        "Understanding File Paths (Like Address System)",
        "Basic Navigation - Moving Around Your Computer",
        "Creating Your First File Using Commands"
      ],
      keyQuestions: [
        "Why use terminal instead of clicking?",
        "What if I type something wrong?",
        "How do I know what commands exist?",
        "Can I break something with the terminal?"
      ],
      practicalOutcome: "Feel comfortable opening terminal and running basic commands"
    },
    {
      id: 5,
      title: "Essential Commands - Your First 20 Commands",
      path: "/first-20-commands",
      icon: Code,
      estimatedTime: "60 min",
      difficulty: "Beginner",
      description: "Master the 20 most important commands that you'll use every day.",
      topics: [
        "ls - See What's in a Folder (Like Opening File Explorer)",
        "cd - Change Directories (Like Double-Clicking Folders)", 
        "pwd - Where Am I? (Show Current Location)",
        "mkdir - Create New Folders",
        "touch - Create New Files",
        "cp - Copy Files and Folders",
        "mv - Move and Rename Things",
        "rm - Delete Files (With Safety Tips)",
        "cat - Read File Contents",
        "nano - Edit Text Files (Beginner-Friendly Editor)"
      ],
      keyQuestions: [
        "How do I see what files are here?",
        "How do I create a new folder?",
        "How do I copy files safely?",
        "How do I delete something?"
      ],
      practicalOutcome: "Perform basic file operations confidently using the command line"
    },
    {
      id: 6,
      title: "Understanding Linux File System (The Big Picture)",
      path: "/linux-filesystem-explained",
      icon: FileText,
      estimatedTime: "30 min",
      difficulty: "Beginner", 
      description: "Learn how Linux organizes files - it's actually very logical once explained simply.",
      topics: [
        "Linux File Tree - Like an Upside-Down Tree",
        "Important Folders Explained in Simple Terms",
        "/home - Your Personal Space (Like Documents Folder)",
        "/etc - Configuration Files (Settings)",
        "/usr - Programs Live Here",
        "Permissions - Who Can Do What (Basic Understanding)"
      ],
      keyQuestions: [
        "Where should I put my files?",
        "What are all these folders for?",
        "Why can't I edit some files?",
        "How is this different from Windows?"
      ],
      practicalOutcome: "Understand where files go and why the system is organized this way"
    }
  ];

  const progressSteps = [
    { step: 1, title: "Understanding", description: "Learn what Linux is" },
    { step: 2, title: "Setup", description: "Get Linux running" },
    { step: 3, title: "Exploration", description: "Navigate the desktop" },
    { step: 4, title: "Terminal", description: "Command line basics" },
    { step: 5, title: "Commands", description: "Essential operations" },
    { step: 6, title: "Foundation", description: "System understanding" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes("Absolute")) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
  };

  return (
    <div className="py-8 px-4 max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <Badge className="px-4 py-2 text-sm bg-green-100 text-green-800">
            <Users className="w-4 h-4 mr-2" />
            Beginner Friendly
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🌱 Beginner's Path to Linux
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Complete beginner? Perfect! This path assumes you know absolutely nothing about Linux. 
          We'll start from "What is Linux?" and guide you step-by-step to confidence.
        </p>

        <Alert className="max-w-2xl mx-auto mb-8 border-green-200 bg-green-50">
          <Lightbulb className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>No Experience Needed!</strong> This path is designed for complete beginners. 
            Every term is explained, every step is shown, and every concept is made simple.
          </AlertDescription>
        </Alert>
      </div>

      {/* Progress Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Your Learning Journey (6 Steps)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {progressSteps.map((step, index) => (
            <div key={step.step} className="text-center">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2 shadow-lg">
                  {step.step}
                </div>
                {index < progressSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground absolute top-3 -right-4 hidden lg:block" />
                )}
              </div>
              <h3 className="font-semibold text-sm">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Modules */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Detailed Learning Modules</h2>
        <div className="grid gap-6">
          {beginnerContent.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-r from-green-50/50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white group-hover:scale-110 transition-transform shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <Badge variant="outline" className="text-xs">
                            Module {module.id}
                          </Badge>
                          <Badge className={getDifficultyColor(module.difficulty)}>
                            {module.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {module.estimatedTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-4">
                          {module.description}
                        </CardDescription>
                        
                        {/* Key Questions Section */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-blue-700">🤔 Key Questions We'll Answer:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {module.keyQuestions.map((question, qIndex) => (
                              <div key={qIndex} className="text-xs text-muted-foreground bg-blue-50 rounded px-2 py-1">
                                • {question}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Outcome */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-1 text-green-700">🎯 What You'll Achieve:</h4>
                          <p className="text-sm text-green-700 bg-green-50 rounded px-3 py-2 font-medium">
                            {module.practicalOutcome}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button asChild size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:shadow-xl">
                        <Link to={module.path}>
                          Start Module
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📚 Topics Covered:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className="text-sm bg-muted/50 rounded-lg px-3 py-2 flex items-center gap-2"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">💡 Tips for Success</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
              <div>
                <strong className="text-blue-900">Take Your Time</strong>
                <p className="text-sm text-blue-700 mt-1">Don't rush! Linux learning is like learning to drive - practice makes perfect.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
              <div>
                <strong className="text-blue-900">Practice Everything</strong>
                <p className="text-sm text-blue-700 mt-1">Try every command, follow every example. Hands-on practice is essential.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
              <div>
                <strong className="text-blue-900">Don't Fear Mistakes</strong>
                <p className="text-sm text-blue-700 mt-1">You can't break anything! We'll show you safe ways to practice.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
              <div>
                <strong className="text-blue-900">Ask Questions</strong>
                <p className="text-sm text-blue-700 mt-1">Every expert was once a beginner. Questions mean you're learning!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">5</div>
              <div>
                <strong className="text-blue-900">Build Projects</strong>
                <p className="text-sm text-blue-700 mt-1">Apply what you learn by building simple projects and automation scripts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">6</div>
              <div>
                <strong className="text-blue-900">Join the Community</strong>
                <p className="text-sm text-blue-700 mt-1">Connect with other learners and experienced users for support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-8 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Linux Journey? 🚀</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of learners who started exactly where you are now. 
            Every Linux expert was once a complete beginner!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-green-600 hover:bg-gray-100">
              <Link to="/linux-introduction">
                <Play className="w-5 h-5 mr-2" />
                Start Module 1: What is Linux?
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10">
              <Link to="/first-linux-setup">
                <Terminal className="w-5 h-5 mr-2" />
                Jump to Setup Guide
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>⏱️ <strong>Estimated Time to Complete:</strong> 4-6 hours spread over several sessions</p>
          <p className="mt-2">💡 <strong>Remember:</strong> Learning Linux is a journey, not a destination. Take it one step at a time!</p>
        </div>
      </div>
    </div>
  );
};

export default BeginnerPath;