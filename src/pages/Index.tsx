import { Link } from "react-router-dom";
import { Terminal, BookOpen, Code, Shield, Trophy, ChevronRight, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
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
      {/* Hero Section */}
      <section className="hero-bg text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
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
                Start Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Path</h2>
            <p className="text-xl text-muted-foreground">
              Follow our structured curriculum designed by Linux experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
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
            
            <Card className="border-0 shadow-lg">
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
            
            <Card className="border-0 shadow-lg">
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
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/getting-started">
                Begin Learning Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
