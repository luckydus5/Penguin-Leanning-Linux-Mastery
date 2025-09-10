import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wifi, Globe, Shield, Copy, Terminal, Activity } from "lucide-react";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";

interface CommandVariant {
  cmd: string;
  desc: string;
  security?: string;
}

interface CommandExample {
  command: string;
  output: string;
  explanation: string;
}

interface NetworkCommand {
  command: string;
  description: string;
  variants?: CommandVariant[];
  examples?: CommandExample[];
  useCases?: string[];
}

const NetworkCommandSection = ({ title, commands, icon, bgColor }: { 
  title: string; 
  commands: NetworkCommand[]; 
  icon: React.ReactNode;
  bgColor: string;
}) => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className={`${bgColor} rounded-lg border p-6 mb-8`}>
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      
      <div className="space-y-6">
        {commands.map((cmd, index) => (
          <div key={index} className="bg-background/50 rounded-lg p-5 border border-border/40">
            <div className="flex items-center justify-between mb-3">
              <code className="text-primary font-mono text-lg font-semibold">{cmd.command}</code>
              <button
                onClick={() => copyToClipboard(cmd.command)}
                className="p-2 hover:bg-muted rounded transition-colors"
                title="Copy command"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-muted-foreground mb-4">{cmd.description}</p>
            
            {cmd.variants && (
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-3">🌐 Network Command Variants:</h4>
                <div className="grid gap-2">
                  {cmd.variants.map((variant: CommandVariant, vIndex: number) => (
                    <div key={vIndex} className="bg-background rounded border p-3 hover:bg-muted/20 transition-colors group">
                      <div className="flex items-center justify-between mb-1">
                        <code className="text-primary font-mono text-sm font-medium">{variant.cmd}</code>
                        <button
                          onClick={() => copyToClipboard(variant.cmd)}
                          className="p-1 hover:bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">{variant.desc}</p>
                      {variant.security && (
                        <div className="mt-1 text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          {variant.security}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {cmd.examples && (
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-foreground mb-2">📡 Real Network Examples:</h4>
                {cmd.examples.map((example: CommandExample, eIndex: number) => (
                  <div key={eIndex} className="bg-background rounded border overflow-hidden">
                    <div className="bg-terminal text-terminal-foreground p-4 border-b font-mono text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="w-4 h-4" />
                        <span className="text-terminal-foreground/80">$ {example.command}</span>
                      </div>
                      <pre className="text-terminal-foreground/90 whitespace-pre-wrap text-xs leading-relaxed">{example.output}</pre>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground">{example.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cmd.useCases && (
              <div className="mt-4 bg-cyan-50/50 rounded p-3 border border-cyan-200">
                <h4 className="font-semibold text-sm text-cyan-800 mb-2">🎯 Network Use Cases:</h4>
                <ul className="text-sm space-y-1">
                  {cmd.useCases.map((useCase: string, ucIndex: number) => (
                    <li key={ucIndex} className="text-cyan-700">• {useCase}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function NetworkingCommands() {
  const connectivityTools = [
    {
      command: "ping",
      description: "Test network connectivity and measure round-trip time",
      variants: [
        { cmd: "ping host", desc: "Basic connectivity test (stops with Ctrl+C)" },
        { cmd: "ping -c 4 host", desc: "Send exactly 4 packets then stop" },
        { cmd: "ping -i 2 host", desc: "Set interval between packets (2 seconds)" },
        { cmd: "ping -s 1000 host", desc: "Set packet size (1000 bytes)" },
        { cmd: "ping -t 64 host", desc: "Set TTL (Time To Live)" },
        { cmd: "ping -f host", desc: "Flood ping (requires root)", security: "Use carefully - can overwhelm networks" },
        { cmd: "ping -q host", desc: "Quiet mode - only show summary" },
        { cmd: "ping -v host", desc: "Verbose output with detailed information" },
        { cmd: "ping -4 host", desc: "Force IPv4" },
        { cmd: "ping -6 host", desc: "Force IPv6" }
      ],
      examples: [
        {
          command: "ping -c 4 google.com",
          output: `PING google.com (142.250.191.14) 56(84) bytes of data.
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.14): icmp_seq=1 ttl=115 time=12.4 ms
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.14): icmp_seq=2 ttl=115 time=11.8 ms
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.14): icmp_seq=3 ttl=115 time=13.2 ms
64 bytes from lga25s62-in-f14.1e100.net (142.250.191.14): icmp_seq=4 ttl=115 time=12.9 ms

--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss
round-trip min/avg/max/mdev = 11.834/12.575/13.202/0.531 ms`,
          explanation: "Shows successful connectivity to Google with latency around 12ms. TTL=115 indicates packets passed through multiple routers."
        }
      ],
      useCases: [
        "Basic network connectivity troubleshooting",
        "Measuring network latency for performance analysis",
        "Testing if a server/service is reachable",
        "Network path testing with TTL manipulation"
      ]
    },
    {
      command: "traceroute",
      description: "Trace the network path packets take to reach a destination",
      variants: [
        { cmd: "traceroute host", desc: "Basic route tracing" },
        { cmd: "traceroute -n host", desc: "Show IP addresses only (faster)" },
        { cmd: "traceroute -m 15 host", desc: "Set maximum hops (default 30)" },
        { cmd: "traceroute -q 1 host", desc: "Send only 1 probe per hop (faster)" },
        { cmd: "traceroute -p 80 host", desc: "Use specific port (80 for HTTP)" },
        { cmd: "traceroute -I host", desc: "Use ICMP instead of UDP" },
        { cmd: "traceroute -T host", desc: "Use TCP SYN for tracing" },
        { cmd: "traceroute -4 host", desc: "Force IPv4" },
        { cmd: "traceroute -6 host", desc: "Force IPv6" }
      ],
      examples: [
        {
          command: "traceroute -n google.com",
          output: `traceroute to google.com (142.250.191.14), 30 hops max, 60 byte packets
 1  192.168.1.1  1.234 ms  1.567 ms  1.890 ms
 2  10.0.0.1  8.123 ms  8.456 ms  8.789 ms
 3  203.0.113.1  15.234 ms  15.567 ms  15.890 ms
 4  198.51.100.1  22.123 ms  22.456 ms  22.789 ms
 5  142.250.191.14  28.234 ms  28.567 ms  28.890 ms`,
          explanation: "Shows network path: local router (192.168.1.1), ISP gateway (10.0.0.1), ISP backbone, Google's network, and finally the destination server"
        }
      ],
      useCases: [
        "Diagnosing network routing problems",
        "Identifying slow network segments",
        "Understanding network topology",
        "Troubleshooting packet loss locations"
      ]
    },
    {
      command: "curl",
      description: "Transfer data to/from servers using various protocols",
      variants: [
        { cmd: "curl url", desc: "Basic HTTP GET request" },
        { cmd: "curl -I url", desc: "Show only HTTP headers" },
        { cmd: "curl -X POST url", desc: "Send POST request" },
        { cmd: "curl -d 'data' url", desc: "Send data with POST" },
        { cmd: "curl -H 'Header: Value' url", desc: "Add custom header" },
        { cmd: "curl -u user:pass url", desc: "HTTP authentication" },
        { cmd: "curl -k url", desc: "Ignore SSL certificate errors" },
        { cmd: "curl -L url", desc: "Follow redirects" },
        { cmd: "curl -o file url", desc: "Save output to file" },
        { cmd: "curl -v url", desc: "Verbose output (shows full HTTP exchange)" },
        { cmd: "curl -s url", desc: "Silent mode (no progress bar)" },
        { cmd: "curl --connect-timeout 10 url", desc: "Set connection timeout" }
      ],
      examples: [
        {
          command: "curl -I https://httpbin.org/status/200",
          output: `HTTP/2 200 
date: Mon, 15 Jan 2024 14:30:00 GMT
content-type: text/html; charset=utf-8
content-length: 0
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true`,
          explanation: "Shows HTTP response headers for a successful request. Status 200 means OK, includes server info and security headers."
        },
        {
          command: "curl -X POST -H 'Content-Type: application/json' -d '{\"name\":\"test\"}' https://httpbin.org/post",
          output: `{
  "args": {},
  "data": "{\\"name\\":\\"test\\"}",
  "files": {},
  "form": {},
  "headers": {
    "Content-Type": "application/json",
    "Host": "httpbin.org"
  },
  "json": {
    "name": "test"
  },
  "url": "https://httpbin.org/post"
}`,
          explanation: "Demonstrates JSON POST request. Server echoes back the request details, confirming data was sent correctly."
        }
      ],
      useCases: [
        "API testing and development",
        "Website monitoring and health checks",
        "File downloads and uploads",
        "HTTP debugging and troubleshooting"
      ]
    }
  ];

  const networkAnalysis = [
    {
      command: "netstat",
      description: "Display network connections, routing tables, and interface statistics",
      variants: [
        { cmd: "netstat", desc: "Show active connections" },
        { cmd: "netstat -a", desc: "Show all connections and listening ports" },
        { cmd: "netstat -t", desc: "Show only TCP connections" },
        { cmd: "netstat -u", desc: "Show only UDP connections" },
        { cmd: "netstat -l", desc: "Show only listening ports" },
        { cmd: "netstat -n", desc: "Show numerical addresses (no DNS resolution)" },
        { cmd: "netstat -p", desc: "Show process ID and name" },
        { cmd: "netstat -r", desc: "Show routing table" },
        { cmd: "netstat -i", desc: "Show network interface statistics" },
        { cmd: "netstat -s", desc: "Show protocol statistics" },
        { cmd: "netstat -c", desc: "Continuous display (refreshes every second)" }
      ],
      examples: [
        {
          command: "netstat -tulpn",
          output: `Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1234/sshd
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN      5678/mysqld
tcp6       0      0 :::80                   :::*                    LISTEN      9012/apache2
udp        0      0 0.0.0.0:53              0.0.0.0:*                           3456/systemd-resolve`,
          explanation: "Shows listening services: SSH on port 22, MySQL on 3306 (localhost only), Apache on port 80 (all interfaces), DNS resolver on port 53"
        }
      ],
      useCases: [
        "Finding which process is using a specific port",
        "Checking for unauthorized open ports",
        "Monitoring active network connections",
        "Troubleshooting network service issues"
      ]
    },
    {
      command: "ss",
      description: "Modern replacement for netstat with better performance",
      variants: [
        { cmd: "ss", desc: "Show established connections" },
        { cmd: "ss -a", desc: "Show all connections" },
        { cmd: "ss -l", desc: "Show listening ports only" },
        { cmd: "ss -t", desc: "Show TCP connections" },
        { cmd: "ss -u", desc: "Show UDP connections" },
        { cmd: "ss -n", desc: "Don't resolve hostnames" },
        { cmd: "ss -p", desc: "Show process information" },
        { cmd: "ss -s", desc: "Show socket statistics summary" },
        { cmd: "ss -4", desc: "Show IPv4 connections only" },
        { cmd: "ss -6", desc: "Show IPv6 connections only" },
        { cmd: "ss state established", desc: "Show only established connections" },
        { cmd: "ss sport :80", desc: "Show connections on source port 80" }
      ],
      examples: [
        {
          command: "ss -tulpn",
          output: `Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process
tcp   LISTEN 0      128          0.0.0.0:22         0.0.0.0:*     users:(("sshd",pid=1234,fd=3))
tcp   LISTEN 0      80     127.0.0.1:3306         0.0.0.0:*     users:(("mysqld",pid=5678,fd=21))
tcp   LISTEN 0      511              *:80               *:*     users:(("apache2",pid=9012,fd=4))
udp   UNCONN 0      0            0.0.0.0:53         0.0.0.0:*     users:(("systemd-resolve",pid=3456,fd=12))`,
          explanation: "Similar to netstat but faster and with cleaner output. Shows the same services but with more detailed process information."
        }
      ]
    },
    {
      command: "nmap",
      description: "Network exploration and security auditing tool",
      variants: [
        { cmd: "nmap target", desc: "Basic port scan" },
        { cmd: "nmap -sV target", desc: "Service version detection" },
        { cmd: "nmap -sS target", desc: "SYN scan (stealth scan)" },
        { cmd: "nmap -sU target", desc: "UDP scan" },
        { cmd: "nmap -A target", desc: "Aggressive scan (OS, version, scripts)" },
        { cmd: "nmap -p 80,443 target", desc: "Scan specific ports" },
        { cmd: "nmap -p- target", desc: "Scan all 65535 ports" },
        { cmd: "nmap -sn 192.168.1.0/24", desc: "Ping scan (discover hosts)" },
        { cmd: "nmap --script vuln target", desc: "Run vulnerability scripts", security: "Use only on networks you own" },
        { cmd: "nmap -O target", desc: "OS detection" },
        { cmd: "nmap -T4 target", desc: "Faster timing template" }
      ],
      examples: [
        {
          command: "nmap -sV scanme.nmap.org",
          output: `Starting Nmap 7.80 ( https://nmap.org ) at 2024-01-15 14:30 UTC
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.070s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE    VERSION
22/tcp   open  ssh        OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13
80/tcp   open  http       Apache httpd 2.4.7
443/tcp  open  https      Apache httpd 2.4.7
9929/tcp open  nping-echo Nping echo

Service detection performed. Please report any incorrect results at https://nmap.org/submit/`,
          explanation: "Shows open ports and running services. SSH on 22, web servers on 80/443, and a custom nping service on 9929."
        }
      ],
      useCases: [
        "Network security assessments",
        "Discovering devices on a network",
        "Checking firewall effectiveness",
        "Service inventory and monitoring"
      ]
    }
  ];

  const networkConfig = [
    {
      command: "ip",
      description: "Configure and display network interfaces, routes, and tunnels",
      variants: [
        { cmd: "ip a", desc: "Show all network interfaces" },
        { cmd: "ip addr show", desc: "Detailed interface information" },
        { cmd: "ip link show", desc: "Show network devices" },
        { cmd: "ip route show", desc: "Display routing table" },
        { cmd: "ip route add default via 192.168.1.1", desc: "Add default route" },
        { cmd: "ip addr add 192.168.1.100/24 dev eth0", desc: "Add IP address to interface" },
        { cmd: "ip link set eth0 up", desc: "Bring interface up" },
        { cmd: "ip link set eth0 down", desc: "Bring interface down" },
        { cmd: "ip neighbor show", desc: "Show ARP table" },
        { cmd: "ip rule show", desc: "Show routing policy rules" }
      ],
      examples: [
        {
          command: "ip a",
          output: `1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 08:00:27:12:34:56 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
    inet6 fe80::a00:27ff:fe12:3456/64 scope link`,
          explanation: "Shows loopback interface (lo) and ethernet interface (eth0) with MAC address, IPv4 (192.168.1.100), and IPv6 addresses"
        }
      ],
      useCases: [
        "Network interface configuration",
        "Routing table management",
        "Network troubleshooting",
        "Virtual network setup"
      ]
    }
  ];

  return (
    <div className="py-8 px-4">
      <FullscreenToggle />
      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            🌐 Complete Network Command Arsenal
          </h1>
        <p className="text-lg text-muted-foreground">
          Master network troubleshooting, monitoring, and configuration with comprehensive examples
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-lg p-6 mb-8 border border-cyan-200/50">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-cyan-600" />
          <h3 className="text-xl font-semibold text-cyan-900">🔒 Network Security Best Practices</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>🎯 Ethical Use:</strong> Only scan networks you own or have permission to test</p>
            <p><strong>📝 Documentation:</strong> Keep logs of network changes and tests</p>
          </div>
          <div className="space-y-2">
            <p><strong>🚨 Rate Limiting:</strong> Use appropriate timing to avoid overwhelming networks</p>
            <p><strong>🔍 Monitoring:</strong> Regular network monitoring helps detect issues early</p>
          </div>
          <div className="space-y-2">
            <p><strong>🛡️ Firewalls:</strong> Understand firewall rules before network troubleshooting</p>
            <p><strong>📊 Baselines:</strong> Establish normal network behavior for comparison</p>
          </div>
        </div>
      </div>

      <NetworkCommandSection 
        title="📡 Connectivity & Testing Tools" 
        commands={connectivityTools}
        icon={<Activity className="w-6 h-6 text-green-600" />}
        bgColor="bg-green-50/30"
      />

      <NetworkCommandSection 
        title="🔍 Network Analysis & Monitoring" 
        commands={networkAnalysis}
        icon={<Globe className="w-6 h-6 text-blue-600" />}
        bgColor="bg-blue-50/30"
      />

      <NetworkCommandSection 
        title="⚙️ Network Configuration" 
        commands={networkConfig}
        icon={<Wifi className="w-6 h-6 text-purple-600" />}
        bgColor="bg-purple-50/30"
      />

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-emerald-800">🛠️ Network Troubleshooting Workflow</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4 border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-2">🚨 When Network is Down:</h4>
            <code className="block text-xs bg-emerald-50 p-3 rounded border text-emerald-900 leading-relaxed">
              # 1. Check local connectivity<br/>
              ping 127.0.0.1<br/>
              ip a<br/><br/>
              # 2. Check gateway<br/>
              ping 192.168.1.1<br/>
              ip route show<br/><br/>
              # 3. Check external connectivity<br/>
              ping 8.8.8.8<br/>
              ping google.com<br/><br/>
              # 4. Check DNS<br/>
              nslookup google.com
            </code>
          </div>
          <div className="bg-white rounded p-4 border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-2">🔍 Performance Investigation:</h4>
            <code className="block text-xs bg-emerald-50 p-3 rounded border text-emerald-900 leading-relaxed">
              # Check active connections<br/>
              ss -tulpn<br/>
              netstat -i<br/><br/>
              # Trace network path<br/>
              traceroute google.com<br/>
              mtr google.com<br/><br/>
              # Monitor traffic<br/>
              iftop<br/>
              nethogs<br/><br/>
              # Check for issues<br/>
              dmesg | grep -i network
            </code>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Link to="/system-admin" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors">
          ← System Administration
        </Link>
        <Link to="/security" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors">
          Security & Hardening →
        </Link>
      </div>
    </div>
    </div>
  );
}