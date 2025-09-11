import { Link } from "react-router-dom";
import { 
  Settings, 
  Network, 
  Shield, 
  Code,
  Server,
  Clock, 
  Star,
  ArrowRight,
  Target,
  Zap,
  Database,
  FileText,
  Users,
  GitBranch,
  Monitor,
  Lock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const IntermediatePath = () => {
  const intermediateContent = [
    {
      id: 1,
      title: "System Administration Fundamentals",
      path: "/system-admin-fundamentals",
      icon: Settings,
      estimatedTime: "2 hours",
      difficulty: "Intermediate",
      description: "Manage users, processes, and system resources like a professional system administrator.",
      topics: [
        "User and Group Management (adduser, usermod, groups)",
        "Process Management (ps, top, kill, jobs, nohup)",
        "Service Management (systemctl, service status)",
        "System Monitoring (htop, iostat, netstat)",
        "Log File Analysis (/var/log/, journalctl)",
        "Cron Jobs and Task Scheduling",
        "System Resource Management (CPU, Memory, Disk)"
      ],
      realWorldApplications: [
        "Set up user accounts for team members",
        "Monitor server performance and troubleshoot issues",
        "Schedule automated backups and maintenance tasks",
        "Manage running services and restart failed applications"
      ],
      prerequisites: ["Basic command line knowledge", "Understanding of file permissions", "Familiarity with text editors"],
      practicalOutcome: "Manage Linux systems professionally and troubleshoot common issues"
    },
    {
      id: 2,
      title: "Networking and Security Essentials",
      path: "/networking-security-intermediate",
      icon: Network,
      estimatedTime: "2.5 hours",
      difficulty: "Intermediate",
      description: "Master network configuration, security basics, and remote access protocols.",
      topics: [
        "Network Configuration (ip, ifconfig, netplan)",
        "Firewall Management (ufw, iptables basics)",
        "SSH Configuration and Key Management",
        "Network Troubleshooting (ping, traceroute, nslookup)",
        "VPN Setup and Configuration",
        "Basic Security Hardening",
        "Port Management and Service Binding"
      ],
      realWorldApplications: [
        "Configure secure remote access to servers",
        "Set up firewall rules to protect systems",
        "Troubleshoot network connectivity issues",
        "Implement basic security best practices"
      ],
      prerequisites: ["Understanding of IP addresses", "Basic system administration", "File editing skills"],
      practicalOutcome: "Configure secure, well-connected Linux systems in professional environments"
    },
    {
      id: 3,
      title: "Shell Scripting and Automation",
      path: "/shell-scripting-automation",
      icon: Code,
      estimatedTime: "3 hours",
      difficulty: "Intermediate",
      description: "Write powerful bash scripts to automate repetitive tasks and system management.",
      topics: [
        "Bash Scripting Fundamentals (variables, loops, conditionals)",
        "Function Creation and Script Organization",
        "File Processing and Text Manipulation (sed, awk, grep)",
        "Error Handling and Debugging Techniques",
        "Script Parameters and User Input",
        "Automation Best Practices",
        "Practical Automation Scripts (backup, deployment, monitoring)"
      ],
      realWorldApplications: [
        "Automate system backups and maintenance",
        "Create deployment scripts for applications",
        "Build monitoring and alerting systems",
        "Streamline repetitive administrative tasks"
      ],
      prerequisites: ["Solid command line skills", "Understanding of file operations", "Basic programming concepts"],
      practicalOutcome: "Create professional automation scripts to improve efficiency and reduce manual work"
    },
    {
      id: 4,
      title: "Package Management and Software Deployment",
      path: "/package-management-deployment",
      icon: Database,
      estimatedTime: "1.5 hours", 
      difficulty: "Intermediate",
      description: "Master package managers, software installation, and application deployment strategies.",
      topics: [
        "Advanced Package Management (apt, yum, dnf, snap)",
        "Software Compilation from Source",
        "Dependency Resolution and Conflict Management",
        "Repository Management and Custom Repos",
        "Container Basics (Docker introduction)",
        "Application Deployment Strategies",
        "Version Control Integration (Git workflows)"
      ],
      realWorldApplications: [
        "Install and manage software across different Linux distributions",
        "Deploy applications to production servers",
        "Create custom software packages",
        "Maintain consistent development environments"
      ],
      prerequisites: ["System administration basics", "Understanding of Linux file system", "Basic networking knowledge"],
      practicalOutcome: "Deploy and manage software professionally across different environments"
    },
    {
      id: 5,
      title: "Performance Monitoring and Optimization",
      path: "/performance-monitoring-optimization",
      icon: Monitor,
      estimatedTime: "2 hours",
      difficulty: "Intermediate",
      description: "Learn to monitor, analyze, and optimize Linux system performance.",
      topics: [
        "System Performance Metrics (CPU, Memory, I/O, Network)",
        "Performance Monitoring Tools (top, htop, iotop, iftop)",
        "Log Analysis and Performance Debugging", 
        "Resource Optimization Techniques",
        "Benchmarking and Load Testing",
        "Capacity Planning Basics",
        "Troubleshooting Performance Issues"
      ],
      realWorldApplications: [
        "Optimize server performance for better application response",
        "Identify and resolve system bottlenecks",
        "Plan hardware upgrades based on usage patterns",
        "Monitor production systems proactively"
      ],
      prerequisites: ["System administration knowledge", "Understanding of system resources", "Basic scripting skills"],
      practicalOutcome: "Monitor and optimize Linux systems for peak performance"
    },
    {
      id: 6,
      title: "Advanced File Systems and Storage",
      path: "/advanced-filesystems-storage",
      icon: Database,
      estimatedTime: "2 hours",
      difficulty: "Intermediate",
      description: "Master advanced file system concepts, storage management, and backup strategies.",
      topics: [
        "File System Types and Selection (ext4, XFS, Btrfs)",
        "Logical Volume Management (LVM)",
        "RAID Configuration and Management",
        "File System Mounting and /etc/fstab",
        "Backup Strategies and Tools (rsync, tar, borgbackup)",
        "Disk Usage Analysis and Cleanup",
        "Storage Performance Optimization"
      ],
      realWorldApplications: [
        "Set up reliable storage solutions for servers",
        "Implement automated backup systems",
        "Manage storage growth and capacity planning",
        "Recover from storage failures and corruption"
      ],
      prerequisites: ["Basic file system understanding", "System administration skills", "Command line proficiency"],
      practicalOutcome: "Design and manage robust storage solutions for professional environments"
    },
    {
      id: 7,
      title: "Web Server Administration",
      path: "/web-server-administration",
      icon: Server,
      estimatedTime: "2.5 hours",
      difficulty: "Intermediate", 
      description: "Install, configure, and manage web servers for hosting applications and websites.",
      topics: [
        "Apache HTTP Server Configuration",
        "Nginx Setup and Optimization",
        "SSL/TLS Certificate Management",
        "Virtual Host Configuration",
        "Load Balancing Basics",
        "Web Server Security Hardening",
        "Performance Tuning and Caching"
      ],
      realWorldApplications: [
        "Host websites and web applications",
        "Configure secure HTTPS connections",
        "Set up development and staging environments",
        "Implement basic load balancing"
      ],
      prerequisites: ["Networking fundamentals", "System administration basics", "Understanding of web protocols"],
      practicalOutcome: "Deploy and manage professional web hosting environments"
    }
  ];

  const skillAreas = [
    { area: "System Administration", icon: Settings, modules: 2, description: "User, process, and service management" },
    { area: "Networking & Security", icon: Shield, modules: 2, description: "Network config and security hardening" },
    { area: "Automation & Scripting", icon: Code, modules: 1, description: "Bash scripting and task automation" },
    { area: "Infrastructure Management", icon: Server, modules: 2, description: "Storage, performance, and web servers" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
  };

  return (
    <div className="py-8 px-4 max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <Badge className="px-4 py-2 text-sm bg-orange-100 text-orange-800">
            <Star className="w-4 h-4 mr-2" />
            Skill Building
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          🎯 Intermediate Linux Mastery
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Ready to level up? This path builds professional Linux administration skills. 
          Perfect for those comfortable with basics and ready for real-world challenges.
        </p>

        <Alert className="max-w-2xl mx-auto mb-8 border-orange-200 bg-orange-50">
          <Target className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Prerequisites:</strong> Comfortable with basic commands, file navigation, and text editing. 
            If you're still learning the basics, start with our Beginner Path first.
          </AlertDescription>
        </Alert>
      </div>

      {/* Skill Areas Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Professional Skill Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillAreas.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card key={index} className="text-center border-orange-200 bg-gradient-to-b from-orange-50 to-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{skill.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{skill.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {skill.modules} Module{skill.modules > 1 ? 's' : ''}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Learning Modules */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Professional Development Modules</h2>
        <div className="grid gap-6">
          {intermediateContent.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50/50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white group-hover:scale-110 transition-transform shadow-lg">
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
                        <CardTitle className="text-xl mb-2 group-hover:text-orange-600 transition-colors">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-4">
                          {module.description}
                        </CardDescription>
                        
                        {/* Prerequisites */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-red-700">📋 Prerequisites:</h4>
                          <div className="flex flex-wrap gap-1">
                            {module.prerequisites.map((prereq, pIndex) => (
                              <Badge key={pIndex} variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                                {prereq}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Real World Applications */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-orange-700">💼 Real-World Applications:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {module.realWorldApplications.map((application, aIndex) => (
                              <div key={aIndex} className="text-xs text-orange-700 bg-orange-50 rounded px-2 py-1">
                                • {application}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Outcome */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-1 text-green-700">🎯 Professional Outcome:</h4>
                          <p className="text-sm text-green-700 bg-green-50 rounded px-3 py-2 font-medium">
                            {module.practicalOutcome}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button asChild size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl">
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
                    <h4 className="font-semibold text-sm mb-2">📚 Technical Skills Covered:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className="text-sm bg-muted/50 rounded-lg px-3 py-2 flex items-center gap-2"
                        >
                          <Zap className="w-3 h-3 text-orange-500 flex-shrink-0" />
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

      {/* Professional Development Tips */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-orange-900">🚀 Professional Development Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
              <div>
                <strong className="text-orange-900">Build a Lab Environment</strong>
                <p className="text-sm text-orange-700 mt-1">Set up VMs or containers to practice without affecting production systems.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
              <div>
                <strong className="text-orange-900">Document Everything</strong>
                <p className="text-sm text-orange-700 mt-1">Keep notes on commands, configurations, and solutions for future reference.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
              <div>
                <strong className="text-orange-900">Practice Troubleshooting</strong>
                <p className="text-sm text-orange-700 mt-1">Break things intentionally in your lab to learn how to fix them.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
              <div>
                <strong className="text-orange-900">Join Professional Communities</strong>
                <p className="text-sm text-orange-700 mt-1">Connect with sysadmins and DevOps professionals for real-world insights.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">5</div>
              <div>
                <strong className="text-orange-900">Automate Everything</strong>
                <p className="text-sm text-orange-700 mt-1">Look for repetitive tasks and write scripts to automate them.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">6</div>
              <div>
                <strong className="text-orange-900">Learn Version Control</strong>
                <p className="text-sm text-orange-700 mt-1">Use Git to track your configuration files and scripts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">7</div>
              <div>
                <strong className="text-orange-900">Consider Certifications</strong>
                <p className="text-sm text-orange-700 mt-1">RHCSA, Linux+ can validate your skills professionally.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">8</div>
              <div>
                <strong className="text-orange-900">Stay Current</strong>
                <p className="text-sm text-orange-700 mt-1">Follow Linux news, updates, and emerging technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-8 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Professional Linux Skills? 💪</h3>
          <p className="text-lg mb-6 opacity-90">
            These intermediate modules will take you from basic user to competent system administrator. 
            Start building the skills that employers value most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100">
              <Link to="/system-admin-fundamentals">
                <Settings className="w-5 h-5 mr-2" />
                Start System Administration
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10">
              <Link to="/networking-security-intermediate">
                <Network className="w-5 h-5 mr-2" />
                Begin Networking & Security
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>⏱️ <strong>Estimated Time to Complete:</strong> 15-20 hours of focused study and practice</p>
          <p className="mt-2">💼 <strong>Career Impact:</strong> These skills are essential for Linux system administrator and DevOps roles</p>
        </div>
      </div>
    </div>
  );
};

export default IntermediatePath;