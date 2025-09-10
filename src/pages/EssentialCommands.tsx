import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, Copy, BookOpen, Play } from "lucide-react";

const CommandSection = ({ title, commands, icon }: { title: string; commands: any[]; icon: React.ReactNode }) => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="bg-card rounded-lg border p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {commands.map((cmd, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-4 border border-border/40">
            <div className="flex items-center justify-between mb-2">
              <code className="text-primary font-mono text-lg font-semibold">{cmd.command}</code>
              <button
                onClick={() => copyToClipboard(cmd.command)}
                className="p-2 hover:bg-muted rounded transition-colors"
                title="Copy command"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-muted-foreground mb-3">{cmd.description}</p>
            
            {cmd.variants && (
              <div className="space-y-2 mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2">Common Variants:</h4>
                {cmd.variants.map((variant: any, vIndex: number) => (
                  <div key={vIndex} className="bg-background rounded border p-3">
                    <div className="flex items-center justify-between mb-1">
                      <code className="text-primary font-mono text-sm">{variant.cmd}</code>
                      <button
                        onClick={() => copyToClipboard(variant.cmd)}
                        className="p-1 hover:bg-muted rounded"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">{variant.desc}</p>
                  </div>
                ))}
              </div>
            )}
            
            {cmd.examples && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground mb-2">💡 Examples & Output:</h4>
                {cmd.examples.map((example: any, eIndex: number) => (
                  <div key={eIndex} className="bg-background rounded border">
                    <div className="bg-terminal text-terminal-foreground p-3 rounded-t border-b font-mono text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="w-4 h-4" />
                        <span className="text-terminal-foreground/80">$ {example.command}</span>
                      </div>
                      <pre className="text-terminal-foreground/90 whitespace-pre-wrap">{example.output}</pre>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-muted-foreground">{example.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function EssentialCommands() {
  const fileOperations = [
    {
      command: "ls",
      description: "List directory contents with various formatting options",
      variants: [
        { cmd: "ls", desc: "Basic file listing" },
        { cmd: "ls -a", desc: "Show hidden files (starting with .)" },
        { cmd: "ls -l", desc: "Detailed long format with permissions" },
        { cmd: "ls -lh", desc: "Human-readable file sizes (KB, MB, GB)" },
        { cmd: "ls -R", desc: "Recursive listing of subdirectories" },
        { cmd: "ls -t", desc: "Sort by modification time (newest first)" },
        { cmd: "ls -S", desc: "Sort by file size (largest first)" },
        { cmd: "ls -i", desc: "Show inode numbers" },
        { cmd: "ls -1", desc: "One file per line" },
        { cmd: "ls --color=auto", desc: "Colored output for different file types" },
        { cmd: "ls -ld */", desc: "List only directories" }
      ],
      examples: [
        {
          command: "ls -lah /home/user/Documents",
          output: `total 24K
drwxr-xr-x 3 user user 4.0K Oct 15 14:30 .
drwxr-xr-x 8 user user 4.0K Oct 15 10:20 ..
-rw-r--r-- 1 user user 1.2K Oct 15 14:25 document.txt
-rw-r--r-- 1 user user 2.5K Oct 14 16:45 report.pdf
drwxr-xr-x 2 user user 4.0K Oct 13 09:15 scripts`,
          explanation: "Shows detailed listing with human-readable sizes, including hidden files. First column shows permissions, then links, owner, group, size, date, and filename."
        }
      ]
    },
    {
      command: "cd",
      description: "Change directory navigation",
      variants: [
        { cmd: "cd", desc: "Go to home directory" },
        { cmd: "cd ..", desc: "Go up one directory level" },
        { cmd: "cd -", desc: "Switch to previous directory" },
        { cmd: "cd /path/to/folder", desc: "Go to specific absolute path" },
        { cmd: "cd ~/Documents", desc: "Go to Documents in home directory" },
        { cmd: "cd ../../../", desc: "Go up three levels" }
      ],
      examples: [
        {
          command: "pwd && cd /var/log && pwd && cd - && pwd",
          output: `/home/user
/var/log
/home/user`,
          explanation: "Shows current directory, changes to /var/log, shows new location, returns to previous directory with 'cd -'"
        }
      ]
    },
    {
      command: "cp",
      description: "Copy files and directories",
      variants: [
        { cmd: "cp file1 file2", desc: "Copy file to new name/location" },
        { cmd: "cp -i file1 file2", desc: "Interactive mode - confirm before overwrite" },
        { cmd: "cp -r folder/ newfolder/", desc: "Copy directories recursively" },
        { cmd: "cp -u file1 file2", desc: "Copy only if source is newer" },
        { cmd: "cp -v file1 file2", desc: "Verbose - show what's being copied" },
        { cmd: "cp -p file1 file2", desc: "Preserve timestamps and permissions" },
        { cmd: "cp *.txt backup/", desc: "Copy all .txt files to backup folder" }
      ],
      examples: [
        {
          command: "cp -rv /home/user/project /backup/",
          output: `'/home/user/project' -> '/backup/project'
'/home/user/project/main.py' -> '/backup/project/main.py'
'/home/user/project/config.ini' -> '/backup/project/config.ini'
'/home/user/project/data/' -> '/backup/project/data/'`,
          explanation: "Recursively copies the entire project directory to backup location, showing each file being copied"
        }
      ]
    }
  ];

  const fileViewing = [
    {
      command: "cat",
      description: "Display file contents",
      variants: [
        { cmd: "cat file", desc: "Display entire file content" },
        { cmd: "cat -n file", desc: "Display with line numbers" },
        { cmd: "cat -b file", desc: "Number only non-blank lines" },
        { cmd: "cat -s file", desc: "Squeeze multiple blank lines into one" },
        { cmd: "cat file1 file2", desc: "Concatenate multiple files" },
        { cmd: "cat > file", desc: "Create new file (Ctrl+D to save)" }
      ],
      examples: [
        {
          command: "cat -n /etc/passwd | head -5",
          output: `     1	root:x:0:0:root:/root:/bin/bash
     2	daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
     3	bin:x:2:2:bin:/bin:/usr/sbin/nologin
     4	sys:x:3:3:sys:/dev:/usr/sbin/nologin
     5	sync:x:4:65534:sync:/bin:/bin/sync`,
          explanation: "Shows first 5 lines of passwd file with line numbers. Each line contains user info: username:password:UID:GID:description:home:shell"
        }
      ]
    },
    {
      command: "grep",
      description: "Search text patterns in files",
      variants: [
        { cmd: "grep 'pattern' file", desc: "Search for pattern in file" },
        { cmd: "grep -i 'pattern' file", desc: "Case-insensitive search" },
        { cmd: "grep -r 'pattern' /path", desc: "Recursive search in directory" },
        { cmd: "grep -n 'pattern' file", desc: "Show line numbers" },
        { cmd: "grep -v 'pattern' file", desc: "Show lines NOT matching pattern" },
        { cmd: "grep -w 'word' file", desc: "Match whole words only" },
        { cmd: "grep -c 'pattern' file", desc: "Count matching lines" },
        { cmd: "grep --color=auto 'pattern' file", desc: "Highlight matches" }
      ],
      examples: [
        {
          command: "grep -rn 'error' /var/log/ | head -3",
          output: `/var/log/syslog:45:Oct 15 10:23:15 server kernel: [12345.678] USB disconnect error
/var/log/auth.log:12:Oct 15 09:15:22 server sshd[1234]: authentication error for user admin
/var/log/apache2/error.log:89:Oct 15 11:45:33 server apache2: PHP Fatal error on line 42`,
          explanation: "Recursively searches for 'error' in log files, showing filename:line_number:content for each match"
        }
      ]
    }
  ];

  const processManagement = [
    {
      command: "ps",
      description: "Display running processes",
      variants: [
        { cmd: "ps", desc: "Show processes for current user" },
        { cmd: "ps aux", desc: "Show all processes with detailed info" },
        { cmd: "ps -ef", desc: "Full format process list" },
        { cmd: "ps -u username", desc: "Show processes for specific user" },
        { cmd: "ps -C processname", desc: "Show specific process by name" },
        { cmd: "ps --forest", desc: "Show process tree" }
      ],
      examples: [
        {
          command: "ps aux | grep apache | head -3",
          output: `www-data 1234  0.1  2.3  123456  45678 ?  S  10:15  0:02 /usr/sbin/apache2 -k start
www-data 1235  0.0  1.8  98765   23456 ?  S  10:15  0:00 /usr/sbin/apache2 -k start
www-data 1236  0.0  1.9  87654   34567 ?  S  10:15  0:01 /usr/sbin/apache2 -k start`,
          explanation: "Shows Apache processes with USER, PID, CPU%, MEM%, VSZ, RSS, TTY, STAT, START, TIME, COMMAND columns"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          🐧 Complete Linux Command Reference
        </h1>
        <p className="text-lg text-muted-foreground">
          Master every variant, option, and use case with practical examples and real output
        </p>
      </div>

      <div className="bg-muted/30 rounded-lg p-6 mb-8 border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">📚 How to Use This Reference</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>📋 Copy Commands:</strong> Click the copy icon next to any command</p>
            <p><strong>🔍 Understand Output:</strong> Each example shows real terminal output</p>
          </div>
          <div className="space-y-2">
            <p><strong>⚡ Practice Safe:</strong> Test commands in a safe environment first</p>
            <p><strong>🎯 Start Simple:</strong> Begin with basic variants, then add options</p>
          </div>
        </div>
      </div>

      <CommandSection 
        title="📁 File Operations" 
        commands={fileOperations}
        icon={<Terminal className="w-6 h-6 text-primary" />}
      />

      <CommandSection 
        title="👀 File Viewing & Search" 
        commands={fileViewing}
        icon={<Play className="w-6 h-6 text-green-500" />}
      />

      <CommandSection 
        title="⚙️ Process Management" 
        commands={processManagement}
        icon={<Terminal className="w-6 h-6 text-blue-500" />}
      />

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-800">🏃‍♂️ Practice Lab: Command Mastery</h3>
        <div className="space-y-3 text-sm">
          <div className="bg-white rounded p-3 border border-yellow-200">
            <strong>1. File Management Challenge:</strong>
            <code className="block mt-1 text-xs bg-gray-100 p-2 rounded">
              mkdir -p ~/linux-practice/{`{basics,advanced,projects}`}<br/>
              cd ~/linux-practice/basics<br/>
              echo "Linux is awesome!" &gt; welcome.txt<br/>
              ls -lah<br/>
              cp welcome.txt ../advanced/<br/>
              find ~/linux-practice -name "*.txt"
            </code>
          </div>
          <div className="bg-white rounded p-3 border border-yellow-200">
            <strong>2. Process Exploration:</strong>
            <code className="block mt-1 text-xs bg-gray-100 p-2 rounded">
              ps aux | head -10<br/>
              ps --forest<br/>
              top -n 1 | head -15
            </code>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Link to="/foundation" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors">
          ← Foundation Concepts
        </Link>
        <Link to="/networking" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors">
          Networking Mastery →
        </Link>
      </div>
    </div>
  );
}
