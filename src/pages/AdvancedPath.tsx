import { Link } from "react-router-dom";
import { 
  Shield, 
  Target, 
  Lock,
  Server,
  Code,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Network,
  Clock, 
  Star,
  ArrowRight,
  Zap,
  Trophy,
  Flame,
  Settings,
  Monitor,
  FileCode,
  Layers
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AdvancedPath = () => {
  const advancedContent = [
    {
      id: 1,
      title: "Advanced System Architecture & Performance",
      path: "/advanced-system-architecture",
      icon: Cpu,
      estimatedTime: "4 hours",
      difficulty: "Advanced",
      description: "Master enterprise-level system design, performance tuning, and scalability concepts.",
      topics: [
        "Kernel Tuning and Optimization",
        "Memory Management and Swap Optimization", 
        "I/O Scheduling and Storage Performance",
        "CPU Affinity and Process Prioritization",
        "System Call Tracing and Performance Analysis",
        "High Availability and Clustering Concepts",
        "Load Balancing and Failover Strategies",
        "Capacity Planning for Enterprise Systems"
      ],
      expertApplications: [
        "Optimize database servers for maximum throughput",
        "Design high-availability web service architectures",
        "Troubleshoot complex performance bottlenecks",
        "Implement enterprise monitoring and alerting systems"
      ],
      prerequisites: ["Strong system administration background", "Performance monitoring experience", "Understanding of hardware architecture"],
      practicalOutcome: "Design and optimize enterprise-grade Linux systems for maximum performance and reliability"
    },
    {
      id: 2,
      title: "Container Orchestration & Cloud Infrastructure",
      path: "/container-orchestration-cloud",
      icon: Cloud,
      estimatedTime: "5 hours",
      difficulty: "Advanced",
      description: "Master Docker, Kubernetes, and modern cloud-native infrastructure management.",
      topics: [
        "Advanced Docker: Multi-stage builds, Networks, Volumes",
        "Kubernetes Architecture and Components",
        "Pod, Service, and Ingress Management",
        "ConfigMaps, Secrets, and Storage Classes",
        "Helm Charts and Package Management",
        "CI/CD Pipeline Integration with Containers",
        "Service Mesh Implementation (Istio basics)",
        "Cloud Platform Integration (AWS/GCP/Azure)"
      ],
      expertApplications: [
        "Deploy microservices architectures at scale",
        "Implement rolling updates and canary deployments",
        "Design fault-tolerant distributed systems",
        "Automate infrastructure provisioning and management"
      ],
      prerequisites: ["Docker fundamentals", "Networking concepts", "YAML configuration", "Basic cloud knowledge"],
      practicalOutcome: "Orchestrate and manage containerized applications in production cloud environments"
    },
    {
      id: 3,
      title: "Infrastructure as Code & DevOps Automation",
      path: "/infrastructure-as-code-devops", 
      icon: GitBranch,
      estimatedTime: "4 hours",
      difficulty: "Advanced",
      description: "Master Infrastructure as Code, advanced automation, and DevOps engineering practices.",
      topics: [
        "Terraform for Infrastructure Provisioning",
        "Ansible for Configuration Management",
        "Advanced Bash and Python Automation",
        "GitOps Workflows and Best Practices",
        "Infrastructure Testing and Validation",
        "Monitoring and Observability (Prometheus, Grafana)",
        "Log Aggregation and Analysis (ELK Stack)",
        "Disaster Recovery and Business Continuity"
      ],
      expertApplications: [
        "Automate complete infrastructure deployments",
        "Implement comprehensive monitoring solutions",
        "Design self-healing system architectures",
        "Create reproducible development environments"
      ],
      prerequisites: ["Scripting experience", "Version control (Git)", "System administration", "Cloud platform familiarity"],
      practicalOutcome: "Automate and manage infrastructure like a senior DevOps engineer"
    },
    {
      id: 4,
      title: "Cybersecurity & Penetration Testing",
      path: "/cybersecurity-penetration-testing",
      icon: Shield,
      estimatedTime: "6 hours",
      difficulty: "Advanced",
      description: "Master ethical hacking, penetration testing, and advanced cybersecurity techniques.",
      topics: [
        "Advanced Network Reconnaissance (Nmap, Masscan)",
        "Vulnerability Assessment and Analysis",
        "Exploitation Techniques and Payloads",
        "Post-Exploitation and Privilege Escalation",
        "Web Application Security Testing",
        "Wireless Network Penetration Testing",
        "Social Engineering and OSINT",
        "Forensics and Incident Response"
      ],
      expertApplications: [
        "Conduct professional penetration tests",
        "Implement comprehensive security programs",
        "Respond to security incidents effectively",
        "Design secure system architectures"
      ],
      prerequisites: ["Strong networking knowledge", "Security fundamentals", "Scripting abilities", "Understanding of web technologies"],
      practicalOutcome: "Perform professional-grade security assessments and implement enterprise security measures"
    },
    {
      id: 5,
      title: "Kernel Development & System Programming",
      path: "/kernel-development-system-programming",
      icon: Code,
      estimatedTime: "8 hours",
      difficulty: "Expert",
      description: "Deep dive into kernel internals, device drivers, and low-level system programming.",
      topics: [
        "Linux Kernel Architecture and Source Code",
        "Kernel Module Development",
        "Device Driver Programming",
        "System Call Implementation",
        "Memory Management Internals",
        "Interrupt Handling and Concurrency",
        "Debugging Kernel Code (KGDB, ftrace)",
        "Kernel Security and Hardening"
      ],
      expertApplications: [
        "Develop custom kernel modules for specialized hardware",
        "Contribute to open-source kernel projects", 
        "Debug complex system-level issues",
        "Optimize system performance at the kernel level"
      ],
      prerequisites: ["Strong C programming", "Assembly language basics", "Computer architecture", "Operating system theory"],
      practicalOutcome: "Understand and modify Linux kernel internals for specialized applications"
    },
    {
      id: 6,
      title: "Distributed Systems & High Performance Computing",
      path: "/distributed-systems-hpc",
      icon: Network,
      estimatedTime: "5 hours", 
      difficulty: "Expert",
      description: "Master distributed computing, cluster management, and high-performance computing environments.",
      topics: [
        "Distributed System Design Patterns",
        "Message Queuing and Event Streaming (Kafka, RabbitMQ)",
        "Distributed Storage Systems (Ceph, GlusterFS)",
        "HPC Cluster Management (SLURM, PBS)",
        "Parallel Computing and MPI Programming",
        "Big Data Processing (Hadoop, Spark on Linux)",
        "Network File Systems and Distributed Computing",
        "Fault Tolerance and Consensus Algorithms"
      ],
      expertApplications: [
        "Design scalable distributed applications",
        "Manage large-scale computing clusters",
        "Implement big data processing pipelines",
        "Optimize parallel computing workloads"
      ],
      prerequisites: ["Distributed systems concepts", "Programming experience", "Network architecture", "Database design"],
      practicalOutcome: "Architect and manage enterprise-scale distributed computing systems"
    },
    {
      id: 7,
      title: "Enterprise Security Architecture",
      path: "/enterprise-security-architecture",
      icon: Lock,
      estimatedTime: "4 hours",
      difficulty: "Expert",
      description: "Design and implement comprehensive security architectures for enterprise environments.",
      topics: [
        "Zero Trust Security Architecture",
        "Identity and Access Management (IAM) Systems",
        "Security Information and Event Management (SIEM)",
        "Threat Intelligence and Hunting",
        "Compliance Frameworks (SOC2, ISO27001, PCI-DSS)",
        "Security Automation and Orchestration (SOAR)",
        "Advanced Cryptography Implementation",
        "Security Risk Assessment and Management"
      ],
      expertApplications: [
        "Design enterprise security architectures",
        "Implement compliance monitoring systems",
        "Lead security incident response teams",
        "Develop organizational security policies"
      ],
      prerequisites: ["Cybersecurity fundamentals", "Risk management", "Compliance knowledge", "Enterprise architecture"],
      practicalOutcome: "Lead enterprise security initiatives and design comprehensive security programs"
    }
  ];

  const expertiseDomains = [
    { domain: "Performance Engineering", icon: Cpu, modules: 2, description: "System optimization and scalability" },
    { domain: "Cloud & DevOps", icon: Cloud, modules: 2, description: "Modern infrastructure and automation" },
    { domain: "Cybersecurity", icon: Shield, modules: 2, description: "Security architecture and pen testing" },
    { domain: "System Programming", icon: Code, modules: 1, description: "Kernel and low-level development" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Expert") return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
  };

  return (
    <div className="py-8 px-4 max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-xl shadow-lg">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <Badge className="px-4 py-2 text-sm bg-purple-100 text-purple-800">
            <Trophy className="w-4 h-4 mr-2" />
            Expert Level
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
          🔥 Advanced Linux Expertise
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Master enterprise-level Linux systems, security architectures, and cutting-edge technologies. 
          This path prepares you for senior technical leadership roles.
        </p>

        <Alert className="max-w-2xl mx-auto mb-8 border-purple-200 bg-purple-50">
          <Flame className="h-4 w-4 text-purple-600" />
          <AlertDescription className="text-purple-800">
            <strong>Expert Level:</strong> These modules require extensive Linux experience, programming skills, 
            and deep system understanding. Recommended for senior professionals seeking specialization.
          </AlertDescription>
        </Alert>
      </div>

      {/* Expertise Domains */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Expert Specialization Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseDomains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <Card key={index} className="text-center border-purple-200 bg-gradient-to-b from-purple-50 to-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{domain.domain}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{domain.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {domain.modules} Module{domain.modules > 1 ? 's' : ''}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Learning Modules */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Expert-Level Specialization Modules</h2>
        <div className="grid gap-6">
          {advancedContent.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.id} className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-purple-600 bg-gradient-to-r from-purple-50/50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-red-600 text-white group-hover:scale-110 transition-transform shadow-lg">
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
                        <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-4">
                          {module.description}
                        </CardDescription>
                        
                        {/* Prerequisites */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-red-700">🎯 Expert Prerequisites:</h4>
                          <div className="flex flex-wrap gap-1">
                            {module.prerequisites.map((prereq, pIndex) => (
                              <Badge key={pIndex} variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                                {prereq}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Expert Applications */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2 text-purple-700">🚀 Expert Applications:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {module.expertApplications.map((application, aIndex) => (
                              <div key={aIndex} className="text-xs text-purple-700 bg-purple-50 rounded px-2 py-1">
                                • {application}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Outcome */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-1 text-green-700">🏆 Expert Outcome:</h4>
                          <p className="text-sm text-green-700 bg-green-50 rounded px-3 py-2 font-medium">
                            {module.practicalOutcome}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button asChild size="sm" className="bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg hover:shadow-xl">
                        <Link to={module.path}>
                          Master This
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">⚡ Advanced Technical Skills:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className="text-sm bg-muted/50 rounded-lg px-3 py-2 flex items-center gap-2"
                        >
                          <Zap className="w-3 h-3 text-purple-600 flex-shrink-0" />
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

      {/* Expert Career Development */}
      <div className="bg-gradient-to-r from-purple-50 to-red-50 border border-purple-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-purple-900">🎯 Expert Career Development</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">1</div>
              <div>
                <strong className="text-purple-900">Lead Technical Projects</strong>
                <p className="text-sm text-purple-700 mt-1">Take ownership of complex infrastructure and security initiatives.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">2</div>
              <div>
                <strong className="text-purple-900">Contribute to Open Source</strong>
                <p className="text-sm text-purple-700 mt-1">Contribute to major Linux projects and build your technical reputation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">3</div>
              <div>
                <strong className="text-purple-900">Mentor and Teach</strong>
                <p className="text-sm text-purple-700 mt-1">Share knowledge through mentoring, blogging, and conference speaking.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">4</div>
              <div>
                <strong className="text-purple-900">Pursue Expert Certifications</strong>
                <p className="text-sm text-purple-700 mt-1">RHCE, CISSP, OSCP - validate your advanced expertise.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">5</div>
              <div>
                <strong className="text-purple-900">Research Emerging Technologies</strong>
                <p className="text-sm text-purple-700 mt-1">Stay ahead with quantum computing, AI/ML infrastructure, edge computing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">6</div>
              <div>
                <strong className="text-purple-900">Build Strategic Partnerships</strong>
                <p className="text-sm text-purple-700 mt-1">Network with industry leaders and technology vendors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">7</div>
              <div>
                <strong className="text-purple-900">Architect Solutions</strong>
                <p className="text-sm text-purple-700 mt-1">Design enterprise-scale solutions that impact business outcomes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-1">8</div>
              <div>
                <strong className="text-purple-900">Lead Technology Strategy</strong>
                <p className="text-sm text-purple-700 mt-1">Influence organizational technology decisions and roadmaps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-xl p-8 mb-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Advanced Linux Expertise? 🏆</h3>
          <p className="text-lg mb-6 opacity-90">
            These advanced modules represent the pinnacle of Linux expertise. 
            Master these skills to become a recognized expert in your field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/advanced-system-architecture">
                <Cpu className="w-5 h-5 mr-2" />
                Master System Architecture
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10">
              <Link to="/cybersecurity-penetration-testing">
                <Shield className="w-5 h-5 mr-2" />
                Master Cybersecurity
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>⏱️ <strong>Estimated Time to Complete:</strong> 30-40 hours of intensive study and hands-on practice</p>
          <p className="mt-2">🚀 <strong>Career Impact:</strong> These skills position you for senior architect, principal engineer, and technical leadership roles</p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPath;