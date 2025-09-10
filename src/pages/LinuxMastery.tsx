import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cpu, HardDrive, Network, Lock, Code2 } from "lucide-react";

const LinuxMastery = () => {
  const topics = [
    {
      icon: Terminal,
      title: "Advanced Shell Scripting",
      level: "Expert",
      description: "Complex bash scripts, functions, and automation",
      commands: ["awk", "sed", "grep", "xargs", "find"]
    },
    {
      icon: Cpu,
      title: "System Performance",
      level: "Advanced",
      description: "CPU, memory, and disk performance optimization",
      commands: ["top", "htop", "iotop", "vmstat", "iostat"]
    },
    {
      icon: HardDrive,
      title: "File Systems & Storage",
      level: "Advanced",
      description: "Advanced file system management and storage",
      commands: ["lvm", "mdadm", "fsck", "mount", "fstab"]
    },
    {
      icon: Network,
      title: "Advanced Networking",
      level: "Expert",
      description: "Network configuration and troubleshooting",
      commands: ["iptables", "netstat", "ss", "tcpdump", "nmap"]
    },
    {
      icon: Lock,
      title: "Security Hardening",
      level: "Expert",
      description: "System security and access control",
      commands: ["selinux", "apparmor", "fail2ban", "ufw", "chroot"]
    },
    {
      icon: Code2,
      title: "Kernel & Modules",
      level: "Master",
      description: "Kernel compilation and module management",
      commands: ["modprobe", "lsmod", "dmesg", "sysctl", "make"]
    }
  ];

  const commandExamples = [
    {
      command: "awk",
      description: "Pattern scanning and processing",
      example: "awk '{print $1, $3}' file.txt",
      note: "Prints first and third columns from file"
    },
    {
      command: "sed",
      description: "Stream editor for filtering and transforming text",
      example: "sed 's/old/new/g' file.txt",
      note: "Replace 'old' with 'new' globally in file"
    },
    {
      command: "find",
      description: "Search for files and directories",
      example: "find /home -name '*.log' -size +10M",
      note: "Find log files larger than 10MB in /home"
    },
    {
      command: "xargs",
      description: "Execute commands with input from stdin",
      example: "find . -name '*.tmp' | xargs rm",
      note: "Find and remove all .tmp files"
    },
    {
      command: "lvm",
      description: "Logical Volume Manager",
      example: "lvcreate -L 1G -n mylv vg01",
      note: "Create 1GB logical volume named mylv in vg01"
    },
    {
      command: "iptables",
      description: "Configure kernel firewall",
      example: "iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
      note: "Allow SSH connections on port 22"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-yellow-100 text-yellow-800";
      case "Expert": return "bg-orange-100 text-orange-800";
      case "Master": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Linux Mastery</h1>
              <p className="text-xl text-muted-foreground">Advanced Linux concepts and system administration</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Master advanced Linux topics including kernel management, system optimization, 
            advanced networking, security hardening, and complex automation scripts.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className={getLevelColor(topic.level)}>{topic.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription className="text-base">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {topic.commands.map((cmd, idx) => (
                      <code key={idx} className="px-2 py-1 bg-muted rounded text-sm font-mono">
                        {cmd}
                      </code>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Command Reference */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Advanced Command Reference</h2>
          <div className="overflow-x-auto">
            <table className="command-table">
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Description</th>
                  <th>Example</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {commandExamples.map((cmd, index) => (
                  <tr key={index}>
                    <td>
                      <code className="font-mono font-semibold text-primary">{cmd.command}</code>
                    </td>
                    <td>{cmd.description}</td>
                    <td>
                      <code className="font-mono text-sm bg-muted px-2 py-1 rounded">
                        {cmd.example}
                      </code>
                    </td>
                    <td className="text-sm text-muted-foreground">{cmd.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terminal Example */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Advanced Shell Script Example</h3>
          <div className="terminal">
            <div className="mb-2">
              <span className="terminal-prompt">#!/bin/bash</span>
            </div>
            <div className="mb-2">
              <span className="terminal-prompt"># </span>System monitoring and cleanup script
            </div>
            <div className="mb-2">
              <span className="text-[hsl(var(--terminal-text))]">
                LOG_FILE="/var/log/system_monitor.log"
              </span>
            </div>
            <div className="mb-2">
              <span className="text-[hsl(var(--terminal-text))]">
                THRESHOLD=80
              </span>
            </div>
            <div className="mb-4"></div>
            <div className="mb-2">
              <span className="terminal-prompt"># </span>Check disk usage
            </div>
            <div className="mb-2">
              <span className="text-[hsl(var(--terminal-text))]">
                {`DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')`}
              </span>
            </div>
            <div className="mb-4"></div>
            <div className="mb-2">
              <span className="text-yellow-400">if</span> <span className="text-[hsl(var(--terminal-text))]">{`[ $DISK_USAGE -gt $THRESHOLD ]`}; </span><span className="text-yellow-400">then</span>
            </div>
            <div className="mb-2 ml-4">
              <span className="text-[hsl(var(--terminal-text))]">
                {`echo "$(date): Disk usage is \${DISK_USAGE}%"`} {`>>`} $LOG_FILE
              </span>
            </div>
            <div className="mb-2 ml-4">
              <span className="text-[hsl(var(--terminal-text))]">
                find /tmp -type f -atime +7 -delete
              </span>
            </div>
            <div>
              <span className="text-yellow-400">fi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxMastery;