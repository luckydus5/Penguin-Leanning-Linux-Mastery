import { Link } from "react-router-dom";
import { 
  Terminal, 
  BookOpen, 
  Code, 
  Shield, 
  Trophy, 
  ChevronRight, 
  Star,
  FileText,
  Layers,
  Zap,
  GraduationCap,
  Target,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";

const Index = () => {
  const skillLevels = [
    {
      level: "Beginner",
      icon: BookOpen,
      color: "from-green-500 to-emerald-600",
      description: "Perfect for those starting their Linux journey",
      topics: ["Getting Started", "Foundation Concepts", "Essential Commands"],
      estimatedTime: "6-8 hours",
      completionRate: "95%"
    },
    {
      level: "Intermediate", 
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      description: "Build on basics with system administration and networking",
      topics: ["System Administration", "Networking", "Shell Scripting"],
      estimatedTime: "8-10 hours",
      completionRate: "85%"
    },
    {
      level: "Advanced",
      icon: Shield,
      color: "from-purple-500 to-violet-600", 
      description: "Master security concepts and advanced topics",
      topics: ["Offensive Security", "Defensive Security", "Advanced Linux"],
      estimatedTime: "10-12 hours",
      completionRate: "75%"
    },
    {
      level: "Expert",
      icon: Trophy,
      color: "from-orange-500 to-red-600",
      description: "Professional-level challenges and certifications",
      topics: ["Penetration Testing", "Certifications", "Master Challenges"],
      estimatedTime: "15+ hours", 
      completionRate: "60%"
    }
  ];

  const features = [
    {
      icon: Terminal,
      title: "200+ Commands",
      description: "Comprehensive command reference with real examples and terminal outputs"
    },
    {
      icon: Layers,
      title: "Structured Learning",
      description: "Progressive skill-based levels from beginner to expert"
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Ethical hacking and system hardening techniques"
    },
    {
      icon: Zap,
      title: "Hands-on Labs",
      description: "Practical exercises and real-world scenarios"
    }
  ];

  return (
    <div className="min-h-screen">
      <FullscreenToggle />
      
      {/* Hero Section */}
      <section className="hero-bg text-white py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-4 bg-primary rounded-2xl glow">
              <Terminal className="w-10 h-10" />
            </div>
            <Badge variant="secondary" className="px-6 py-3 text-base font-medium">
              <Star className="w-5 h-5 mr-2" />
              Complete Linux Guide
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">
            Linux Mastery
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
            Master Linux from Zero to Expert
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Complete learning path covering Linux fundamentals, system administration, 
            networking, cybersecurity, and professional certifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="text-xl px-12 py-6 glow">
              <Link to="/table-of-contents">
                📚 Explore Learning Path
                <ChevronRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl px-12 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/commands">
                🚀 Start with Commands
                <ChevronRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skill Levels Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Target className="w-4 h-4 mr-2" />
                Skill-Based Learning
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Choose Your Level
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our structured curriculum is organized by skill level, making it easy to find exactly 
              what you need whether you're a complete beginner or seasoned professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg">
                  <Link to="/table-of-contents" className="block h-full">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {level.level}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {level.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        {level.topics.map((topic, idx) => (
                          <div key={idx} className="text-sm bg-muted/50 rounded-lg px-3 py-2">
                            {topic}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{level.estimatedTime}</span>
                        <span className="text-green-600 font-medium">{level.completionRate}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-10 py-4">
              <Link to="/table-of-contents">
                <FileText className="w-5 h-5 mr-2" />
                View Complete Table of Contents
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Linux Mastery?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most comprehensive Linux learning platform designed for practical, hands-on experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
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

      {/* Call to Action Section */}
      <section className="py-24 px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-12 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-10 h-10" />
              <Badge variant="secondary" className="px-4 py-2 text-primary">
                Start Today
              </Badge>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Linux?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers with our 
              comprehensive Linux mastery program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-4">
                <Link to="/table-of-contents">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Full Curriculum
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-4 border-white/20 text-white hover:bg-white/10">
                <Link to="/getting-started">
                  <Terminal className="w-5 h-5 mr-2" />
                  Start with Basics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;