import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Server, Users, HardDrive, Copy, Terminal } from "lucide-react";

const AdminCommandSection = ({ title, commands, icon, bgColor }: { 
  title: string; 
  commands: any[]; 
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
                <h4 className="font-semibold text-sm text-foreground mb-3">🔧 All Variants & Options:</h4>
                <div className="grid gap-2">
                  {cmd.variants.map((variant: any, vIndex: number) => (
                    <div key={vIndex} className="bg-background rounded border p-3 hover:bg-muted/20 transition-colors">
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
                      {variant.danger && (
                        <div className="mt-1 text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                          ⚠️ {variant.danger}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {cmd.examples && (
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-foreground mb-2">💡 Real Examples & Output:</h4>
                {cmd.examples.map((example: any, eIndex: number) => (
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
              <div className="mt-4 bg-blue-50/50 rounded p-3 border border-blue-200">
                <h4 className="font-semibold text-sm text-blue-800 mb-2">🎯 Common Use Cases:</h4>
                <ul className="text-sm space-y-1">
                  {cmd.useCases.map((useCase: string, ucIndex: number) => (
                    <li key={ucIndex} className="text-blue-700">• {useCase}</li>
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

export default function SystemAdministration() {
  const userManagement = [
    {
      command: "useradd",
      description: "Add new user accounts to the system",
      variants: [
        { cmd: "useradd username", desc: "Create basic user account" },
        { cmd: "useradd -m username", desc: "Create user with home directory" },
        { cmd: "useradd -s /bin/bash username", desc: "Set specific shell" },
        { cmd: "useradd -g group username", desc: "Add user to specific primary group" },
        { cmd: "useradd -G groups username", desc: "Add user to secondary groups" },
        { cmd: "useradd -d /custom/home username", desc: "Set custom home directory" },
        { cmd: "useradd -e 2024-12-31 username", desc: "Set account expiration date" },
        { cmd: "useradd -c 'Full Name' username", desc: "Add user description/comment" },
        { cmd: "useradd -r systemuser", desc: "Create system account (no home, no login)" }
      ],
      examples: [
        {
          command: "useradd -m -s /bin/bash -c 'John Developer' -G sudo,docker john",
          output: `# User created successfully
# Check with: id john
uid=1001(john) gid=1001(john) groups=1001(john),27(sudo),999(docker)`,
          explanation: "Creates user 'john' with home directory, bash shell, description, and adds to sudo and docker groups"
        }
      ],
      useCases: [
        "Setting up developer accounts with specific group memberships",
        "Creating service accounts for applications",
        "Bulk user creation with scripts",
        "Setting up temporary accounts with expiration dates"
      ]
    },
    {
      command: "usermod",
      description: "Modify existing user accounts",
      variants: [
        { cmd: "usermod -a -G group username", desc: "Add user to additional group" },
        { cmd: "usermod -g newgroup username", desc: "Change primary group" },
        { cmd: "usermod -s /bin/zsh username", desc: "Change user shell" },
        { cmd: "usermod -d /new/home username", desc: "Change home directory" },
        { cmd: "usermod -l newname oldname", desc: "Change username" },
        { cmd: "usermod -L username", desc: "Lock user account" },
        { cmd: "usermod -U username", desc: "Unlock user account" },
        { cmd: "usermod -e 2024-12-31 username", desc: "Set account expiration" },
        { cmd: "usermod -c 'New Comment' username", desc: "Update user description" }
      ],
      examples: [
        {
          command: "usermod -a -G wheel,developers alice && groups alice",
          output: `alice : alice wheel developers`,
          explanation: "Adds alice to wheel and developers groups while keeping existing group memberships"
        }
      ]
    },
    {
      command: "passwd",
      description: "Change user passwords and password policies",
      variants: [
        { cmd: "passwd", desc: "Change current user password" },
        { cmd: "passwd username", desc: "Change specific user password (root only)" },
        { cmd: "passwd -l username", desc: "Lock user password" },
        { cmd: "passwd -u username", desc: "Unlock user password" },
        { cmd: "passwd -d username", desc: "Delete user password (dangerous)", danger: "User can login without password!" },
        { cmd: "passwd -e username", desc: "Force password change on next login" },
        { cmd: "passwd -n 7 username", desc: "Set minimum password age (7 days)" },
        { cmd: "passwd -x 90 username", desc: "Set maximum password age (90 days)" },
        { cmd: "passwd -w 14 username", desc: "Set password warning period (14 days)" }
      ],
      examples: [
        {
          command: "passwd -S alice",
          output: `alice PS 2024-01-15 7 90 14 -1 (Password set, SHA512 crypt.)`,
          explanation: "Shows password status: username, status, last change, min age, max age, warning period, inactivity period"
        }
      ]
    }
  ];

  const processManagement = [
    {
      command: "systemctl",
      description: "Control systemd services and system state",
      variants: [
        { cmd: "systemctl status service", desc: "Show service status and recent logs" },
        { cmd: "systemctl start service", desc: "Start a service" },
        { cmd: "systemctl stop service", desc: "Stop a service" },
        { cmd: "systemctl restart service", desc: "Restart a service" },
        { cmd: "systemctl reload service", desc: "Reload service configuration" },
        { cmd: "systemctl enable service", desc: "Enable service to start at boot" },
        { cmd: "systemctl disable service", desc: "Disable service from starting at boot" },
        { cmd: "systemctl is-active service", desc: "Check if service is running" },
        { cmd: "systemctl is-enabled service", desc: "Check if service is enabled" },
        { cmd: "systemctl list-units --type=service", desc: "List all services" },
        { cmd: "systemctl daemon-reload", desc: "Reload systemd configuration" },
        { cmd: "systemctl mask service", desc: "Completely disable service", danger: "Service cannot be started manually or automatically" }
      ],
      examples: [
        {
          command: "systemctl status nginx.service",
          output: `● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2024-01-15 10:30:15 UTC; 2h 15min ago
     Docs: man:nginx(8)
  Process: 1234 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
  Process: 1235 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
 Main PID: 1236 (nginx)
    Tasks: 3 (limit: 4915)
   Memory: 6.2M
   CGroup: /system.slice/nginx.service
           ├─1236 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           ├─1237 nginx: worker process
           └─1238 nginx: worker process`,
          explanation: "Shows complete service status including load state, active state, PID, memory usage, and process tree"
        }
      ],
      useCases: [
        "Managing web servers (Apache, Nginx)",
        "Controlling database services (MySQL, PostgreSQL)",
        "Managing container services (Docker)",
        "Automating service startup/shutdown scripts"
      ]
    },
    {
      command: "crontab",
      description: "Schedule and manage automated tasks",
      variants: [
        { cmd: "crontab -l", desc: "List current user's cron jobs" },
        { cmd: "crontab -e", desc: "Edit current user's cron jobs" },
        { cmd: "crontab -r", desc: "Remove all cron jobs for current user", danger: "Deletes ALL cron jobs without confirmation!" },
        { cmd: "crontab -u username -l", desc: "List specific user's cron jobs (root only)" },
        { cmd: "crontab -u username -e", desc: "Edit specific user's cron jobs (root only)" },
        { cmd: "crontab file", desc: "Install cron jobs from file" }
      ],
      examples: [
        {
          command: "crontab -l",
          output: `# Example cron jobs
# m h  dom mon dow   command
0 2 * * * /usr/local/bin/backup.sh
30 6 * * 1-5 /home/user/scripts/weekday-task.sh
0 */4 * * * /usr/bin/curl -s https://example.com/health-check
@reboot /home/user/startup-script.sh`,
          explanation: "Shows scheduled tasks: daily backup at 2 AM, weekday task at 6:30 AM, health check every 4 hours, startup script"
        },
        {
          command: "echo '0 3 * * 0 /usr/local/bin/weekly-maintenance.sh' | crontab",
          output: `# Cron job installed successfully
# Runs weekly maintenance every Sunday at 3 AM`,
          explanation: "Installs a new cron job using pipe. Format: minute hour day-of-month month day-of-week command"
        }
      ],
      useCases: [
        "Automated backups and system maintenance",
        "Log rotation and cleanup tasks",
        "Health checks and monitoring",
        "Data synchronization between systems"
      ]
    }
  ];

  const diskManagement = [
    {
      command: "df",
      description: "Display filesystem disk space usage",
      variants: [
        { cmd: "df", desc: "Show disk usage in blocks" },
        { cmd: "df -h", desc: "Human-readable format (KB, MB, GB)" },
        { cmd: "df -T", desc: "Show filesystem type" },
        { cmd: "df -i", desc: "Show inode usage instead of block usage" },
        { cmd: "df -a", desc: "Include pseudo, duplicate, inaccessible filesystems" },
        { cmd: "df -x tmpfs", desc: "Exclude specific filesystem type" },
        { cmd: "df --total", desc: "Show grand total at the end" },
        { cmd: "df /path", desc: "Show usage for specific path only" }
      ],
      examples: [
        {
          command: "df -hT",
          output: `Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/sda1      ext4       20G  8.5G   11G  45% /
/dev/sda2      ext4      100G   67G   28G  71% /home
tmpfs          tmpfs     2.0G     0  2.0G   0% /dev/shm
/dev/sdb1      ext4      500G  234G  241G  50% /data
/dev/sdc1      xfs       1.0T  456G  568G  45% /backup`,
          explanation: "Shows filesystem type, total size, used space, available space, usage percentage, and mount point"
        }
      ],
      useCases: [
        "Monitoring disk space before deployments",
        "Identifying full filesystems causing issues",
        "Planning storage capacity",
        "Troubleshooting disk space problems"
      ]
    },
    {
      command: "du",
      description: "Display directory space usage",
      variants: [
        { cmd: "du", desc: "Show size of current directory and subdirectories" },
        { cmd: "du -h", desc: "Human-readable format" },
        { cmd: "du -s", desc: "Show only total (summary)" },
        { cmd: "du -a", desc: "Show sizes for all files, not just directories" },
        { cmd: "du -c", desc: "Show grand total" },
        { cmd: "du --max-depth=1", desc: "Limit directory depth" },
        { cmd: "du -x", desc: "Stay on same filesystem" },
        { cmd: "du --time", desc: "Show last modification time" },
        { cmd: "du --exclude='pattern'", desc: "Exclude files/dirs matching pattern" }
      ],
      examples: [
        {
          command: "du -sh /var/log/* | sort -hr | head -5",
          output: `2.1G	/var/log/journal
456M	/var/log/apache2
234M	/var/log/syslog
89M	/var/log/auth.log
67M	/var/log/mysql`,
          explanation: "Shows top 5 largest directories in /var/log, sorted by size in human-readable format"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🛡️ System Administration Mastery
        </h1>
        <p className="text-lg text-muted-foreground">
          Complete reference for managing users, processes, services, and system resources
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-lg p-6 mb-8 border border-blue-200/50">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-900">⚠️ Administrator Safety Guidelines</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>🔒 Test First:</strong> Always test commands in a safe environment</p>
            <p><strong>📋 Backup:</strong> Create backups before making system changes</p>
          </div>
          <div className="space-y-2">
            <p><strong>📝 Document:</strong> Keep records of system modifications</p>
            <p><strong>🚨 Red Flags:</strong> Commands marked with danger warnings need extra caution</p>
          </div>
        </div>
      </div>

      <AdminCommandSection 
        title="👥 User & Account Management" 
        commands={userManagement}
        icon={<Users className="w-6 h-6 text-blue-600" />}
        bgColor="bg-blue-50/30"
      />

      <AdminCommandSection 
        title="⚙️ Process & Service Management" 
        commands={processManagement}
        icon={<Server className="w-6 h-6 text-green-600" />}
        bgColor="bg-green-50/30"
      />

      <AdminCommandSection 
        title="💾 Disk & Storage Management" 
        commands={diskManagement}
        icon={<HardDrive className="w-6 h-6 text-purple-600" />}
        bgColor="bg-purple-50/30"
      />

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-amber-800">🎯 Real-World Admin Scenarios</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Server Setup Checklist:</h4>
            <code className="block text-xs bg-amber-50 p-3 rounded border text-amber-900 leading-relaxed">
              # Create admin user<br/>
              useradd -m -s /bin/bash -G sudo admin<br/>
              passwd admin<br/><br/>
              # Setup automatic updates<br/>
              systemctl enable unattended-upgrades<br/>
              systemctl start unattended-upgrades<br/><br/>
              # Monitor disk space<br/>
              echo "0 6 * * * df -h | mail -s 'Disk Usage' admin@domain.com" | crontab
            </code>
          </div>
          <div className="bg-white rounded p-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Troubleshooting Kit:</h4>
            <code className="block text-xs bg-amber-50 p-3 rounded border text-amber-900 leading-relaxed">
              # Check system health<br/>
              systemctl --failed<br/>
              df -h<br/>
              free -h<br/>
              top -n 1<br/><br/>
              # Find resource hogs<br/>
              du -sh /* | sort -hr | head -5<br/>
              ps aux --sort=-%cpu | head -10
            </code>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Link to="/essential" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors">
          ← Essential Commands
        </Link>
        <Link to="/networking" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors">
          Networking Mastery →
        </Link>
      </div>
    </div>
  );
}