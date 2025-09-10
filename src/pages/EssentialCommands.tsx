import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, Copy, BookOpen, Play } from "lucide-react";

interface CommandVariant {
  cmd: string;
  desc: string;
  danger?: string;
}

interface CommandExample {
  command: string;
  output: string;
  explanation: string;
}

interface Command {
  command: string;
  description: string;
  variants?: CommandVariant[];
  examples?: CommandExample[];
}

interface CommandSectionProps {
  title: string;
  commands: Command[];
  icon: React.ReactNode;
}

const CommandSection = ({ title, commands, icon }: CommandSectionProps) => {
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
                {cmd.variants.map((variant: CommandVariant, vIndex: number) => (
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
                {cmd.examples.map((example: CommandExample, eIndex: number) => (
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
    },
    {
      command: "top",
      description: "Real-time process and system monitor",
      variants: [
        { cmd: "top", desc: "Interactive process viewer" },
        { cmd: "top -u username", desc: "Show processes for specific user" },
        { cmd: "top -p PID", desc: "Monitor specific process by PID" },
        { cmd: "top -n 1", desc: "Run once and exit (non-interactive)" },
        { cmd: "htop", desc: "Enhanced interactive process viewer" }
      ],
      examples: [
        {
          command: "top -n 1 | head -15",
          output: `top - 14:25:30 up 5 days,  2:15,  3 users,  load average: 0.15, 0.25, 0.20
Tasks: 245 total,   1 running, 243 sleeping,   1 stopped,   0 zombie
%Cpu(s):  2.3 us,  0.8 sy,  0.0 ni, 96.7 id,  0.2 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   7854.2 total,   2456.8 free,   2134.5 used,   3262.9 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   5234.7 avail Mem

   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
  1234 user      20   0 1234567  98765  45678 S   5.2   1.2   2:34.56 firefox
  5678 root      20   0  123456  23456  12345 S   2.1   0.3   0:45.23 systemd`,
          explanation: "Shows system load, memory usage, and top processes by CPU usage. Press 'q' to quit, 'M' to sort by memory"
        }
      ]
    },
    {
      command: "kill",
      description: "Terminate processes by PID or name",
      variants: [
        { cmd: "kill PID", desc: "Send TERM signal to process" },
        { cmd: "kill -9 PID", desc: "Force kill with SIGKILL signal" },
        { cmd: "kill -15 PID", desc: "Graceful termination with SIGTERM" },
        { cmd: "killall processname", desc: "Kill all processes by name" },
        { cmd: "pkill pattern", desc: "Kill processes matching pattern" },
        { cmd: "pgrep pattern", desc: "Find process IDs matching pattern" }
      ],
      examples: [
        {
          command: "pgrep firefox && kill $(pgrep firefox)",
          output: `1234
5678
[1]+  Terminated              firefox`,
          explanation: "First finds Firefox process IDs, then terminates them. Use kill -9 for force termination if needed"
        }
      ]
    }
  ];

  const navigationCommands = [
    {
      command: "pwd",
      description: "Print current working directory",
      variants: [
        { cmd: "pwd", desc: "Show current absolute path" },
        { cmd: "pwd -L", desc: "Show logical path (follow symlinks)" },
        { cmd: "pwd -P", desc: "Show physical path (resolve symlinks)" }
      ],
      examples: [
        {
          command: "cd /usr/local/bin && pwd && cd ~ && pwd",
          output: `/usr/local/bin
/home/user`,
          explanation: "Shows how pwd displays the current directory after navigation. Essential for scripts and orientation"
        }
      ]
    },
    {
      command: "find",
      description: "Search for files and directories with powerful criteria",
      variants: [
        { cmd: "find /path -name 'pattern'", desc: "Find by filename pattern" },
        { cmd: "find /path -type f", desc: "Find only files (-type d for directories)" },
        { cmd: "find /path -size +10M", desc: "Find files larger than 10MB" },
        { cmd: "find /path -mtime -7", desc: "Find files modified in last 7 days" },
        { cmd: "find /path -perm 755", desc: "Find files with specific permissions" },
        { cmd: "find /path -user username", desc: "Find files owned by user" },
        { cmd: "find /path -exec command {} \\;", desc: "Execute command on found files" }
      ],
      examples: [
        {
          command: "find /var/log -name '*.log' -size +1M -mtime -1",
          output: `/var/log/syslog
/var/log/apache2/access.log
/var/log/kern.log`,
          explanation: "Finds log files larger than 1MB modified in the last day. Powerful for system administration and cleanup"
        }
      ]
    },
    {
      command: "which",
      description: "Locate executable commands in PATH",
      variants: [
        { cmd: "which command", desc: "Show path to executable" },
        { cmd: "which -a command", desc: "Show all matches in PATH" },
        { cmd: "whereis command", desc: "Show binary, source, and manual locations" },
        { cmd: "type command", desc: "Show command type and location" }
      ],
      examples: [
        {
          command: "which python3 && whereis python3",
          output: `/usr/bin/python3
python3: /usr/bin/python3 /usr/lib/python3 /usr/share/man/man1/python3.1.gz`,
          explanation: "which shows executable path, whereis shows additional files like documentation and libraries"
        }
      ]
    }
  ];

  const fileOperationsAdvanced = [
    {
      command: "mkdir",
      description: "Create directories with various options",
      variants: [
        { cmd: "mkdir dirname", desc: "Create single directory" },
        { cmd: "mkdir -p path/to/deep/dir", desc: "Create parent directories as needed" },
        { cmd: "mkdir -m 755 dirname", desc: "Create with specific permissions" },
        { cmd: "mkdir dir1 dir2 dir3", desc: "Create multiple directories" }
      ],
      examples: [
        {
          command: "mkdir -p ~/projects/{web,mobile,desktop}/{src,docs,tests}",
          output: `# Creates organized project structure:
~/projects/web/src/
~/projects/web/docs/
~/projects/web/tests/
~/projects/mobile/src/
~/projects/mobile/docs/
~/projects/mobile/tests/
~/projects/desktop/src/
~/projects/desktop/docs/
~/projects/desktop/tests/`,
          explanation: "Brace expansion creates complex directory structures in one command. -p creates all parent directories"
        }
      ]
    },
    {
      command: "rm",
      description: "Remove files and directories (use with caution!)",
      variants: [
        { cmd: "rm file", desc: "Remove single file" },
        { cmd: "rm -i file", desc: "Interactive removal (ask for confirmation)" },
        { cmd: "rm -r directory/", desc: "Remove directory recursively" },
        { cmd: "rm -rf directory/", desc: "Force recursive removal (dangerous!)" },
        { cmd: "rm *.tmp", desc: "Remove files matching pattern" },
        { cmd: "rmdir dirname", desc: "Remove empty directory only" }
      ],
      examples: [
        {
          command: "ls -la temp/ && rm -rf temp/ && ls -la temp/",
          output: `total 12
drwxr-xr-x 3 user user 4096 Oct 15 14:30 .
drwxr-xr-x 8 user user 4096 Oct 15 14:30 ..
-rw-r--r-- 1 user user  123 Oct 15 14:25 test.txt
drwxr-xr-x 2 user user 4096 Oct 15 14:20 subdir
ls: cannot access 'temp/': No such file or directory`,
          explanation: "Shows directory before removal, removes it completely, then confirms deletion. rm -rf is powerful but dangerous!"
        }
      ]
    },
    {
      command: "mv",
      description: "Move and rename files and directories",
      variants: [
        { cmd: "mv oldname newname", desc: "Rename file or directory" },
        { cmd: "mv file /path/to/destination/", desc: "Move file to different location" },
        { cmd: "mv -i file destination", desc: "Interactive move (ask before overwrite)" },
        { cmd: "mv -u file destination", desc: "Move only if source is newer" },
        { cmd: "mv *.txt backup/", desc: "Move multiple files matching pattern" }
      ],
      examples: [
        {
          command: "mv project_old.txt project_v2.txt && mv project_v2.txt ~/Documents/",
          output: `# First renames the file, then moves it to Documents
# No output means success in Unix philosophy`,
          explanation: "First command renames file, second moves it. mv serves dual purpose of renaming and relocating"
        }
      ]
    },
    {
      command: "touch",
      description: "Create files and update timestamps",
      variants: [
        { cmd: "touch filename", desc: "Create empty file or update timestamp" },
        { cmd: "touch -c filename", desc: "Don't create file if it doesn't exist" },
        { cmd: "touch -t 202510151430 file", desc: "Set specific timestamp (YYYYMMDDhhmm)" },
        { cmd: "touch file1 file2 file3", desc: "Create multiple files" }
      ],
      examples: [
        {
          command: "touch test.txt && ls -l test.txt && sleep 2 && touch test.txt && ls -l test.txt",
          output: `-rw-r--r-- 1 user user 0 Oct 15 14:30 test.txt
-rw-r--r-- 1 user user 0 Oct 15 14:30 test.txt`,
          explanation: "Creates file, shows timestamp, waits 2 seconds, updates timestamp. Useful for triggering make builds"
        }
      ]
    },
    {
      command: "ln",
      description: "Create links between files",
      variants: [
        { cmd: "ln -s target linkname", desc: "Create symbolic (soft) link" },
        { cmd: "ln target linkname", desc: "Create hard link" },
        { cmd: "ln -sf target linkname", desc: "Force create symlink, overwrite if exists" },
        { cmd: "readlink linkname", desc: "Show what symbolic link points to" }
      ],
      examples: [
        {
          command: "echo 'Hello World' > original.txt && ln -s original.txt link.txt && cat link.txt && readlink link.txt",
          output: `Hello World
original.txt`,
          explanation: "Creates file, makes symbolic link, reads through link, shows link target. Symlinks are shortcuts to files"
        }
      ]
    }
  ];

  const textProcessing = [
    {
      command: "head",
      description: "Display first lines of files",
      variants: [
        { cmd: "head file", desc: "Show first 10 lines (default)" },
        { cmd: "head -n 20 file", desc: "Show first 20 lines" },
        { cmd: "head -c 100 file", desc: "Show first 100 characters" },
        { cmd: "head -n -5 file", desc: "Show all but last 5 lines" }
      ],
      examples: [
        {
          command: "head -n 5 /etc/passwd",
          output: `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync`,
          explanation: "Shows first 5 lines of system user file. Perfect for previewing large files"
        }
      ]
    },
    {
      command: "tail",
      description: "Display last lines of files and follow updates",
      variants: [
        { cmd: "tail file", desc: "Show last 10 lines (default)" },
        { cmd: "tail -n 20 file", desc: "Show last 20 lines" },
        { cmd: "tail -f file", desc: "Follow file updates in real-time" },
        { cmd: "tail -F file", desc: "Follow with retry (if file is recreated)" },
        { cmd: "tail -n +10 file", desc: "Show from line 10 to end" }
      ],
      examples: [
        {
          command: "tail -f /var/log/syslog | head -3",
          output: `Oct 15 14:30:15 server systemd[1]: Started Session 123 of user john.
Oct 15 14:30:20 server kernel: [12345.678] USB device connected
Oct 15 14:30:25 server sshd[9876]: Accepted password for admin from 192.168.1.100`,
          explanation: "Follows system log in real-time. Essential for monitoring live system activity and debugging"
        }
      ]
    },
    {
      command: "less",
      description: "View file contents with pagination and search",
      variants: [
        { cmd: "less file", desc: "View file with pagination" },
        { cmd: "less +G file", desc: "Start at end of file" },
        { cmd: "less +/pattern file", desc: "Start at first match of pattern" },
        { cmd: "less -N file", desc: "Show line numbers" },
        { cmd: "less -S file", desc: "Don't wrap long lines" }
      ],
      examples: [
        {
          command: "less /var/log/syslog",
          output: `# Interactive commands within less:
# / - search forward
# ? - search backward  
# n - next search result
# N - previous search result
# G - go to end
# g - go to beginning
# q - quit
# Space - next page
# b - previous page`,
          explanation: "Opens file in interactive viewer. Use arrow keys, Page Up/Down, or commands above to navigate"
        }
      ]
    },
    {
      command: "sed",
      description: "Stream editor for filtering and transforming text",
      variants: [
        { cmd: "sed 's/old/new/' file", desc: "Replace first occurrence on each line" },
        { cmd: "sed 's/old/new/g' file", desc: "Replace all occurrences globally" },
        { cmd: "sed -i 's/old/new/g' file", desc: "Edit file in-place" },
        { cmd: "sed '1,5d' file", desc: "Delete lines 1-5" },
        { cmd: "sed -n '10,20p' file", desc: "Print only lines 10-20" }
      ],
      examples: [
        {
          command: "echo 'Hello World Hello Universe' | sed 's/Hello/Hi/g'",
          output: `Hi World Hi Universe`,
          explanation: "Replaces all occurrences of 'Hello' with 'Hi'. sed is powerful for text manipulation in scripts"
        }
      ]
    },
    {
      command: "awk",
      description: "Pattern scanning and processing language",
      variants: [
        { cmd: "awk '{print $1}' file", desc: "Print first column" },
        { cmd: "awk '{print $1, $3}' file", desc: "Print first and third columns" },
        { cmd: "awk '/pattern/ {print}' file", desc: "Print lines matching pattern" },
        { cmd: "awk '{sum+=$1} END {print sum}' file", desc: "Sum first column" },
        { cmd: "awk -F: '{print $1}' file", desc: "Use colon as field separator" }
      ],
      examples: [
        {
          command: "ps aux | awk '{print $1, $11}' | head -5",
          output: `USER COMMAND
root /sbin/init
root [kthreadd]
root [rcu_gp]
root [rcu_par_gp]`,
          explanation: "Extracts user and command columns from ps output. awk is excellent for processing structured text"
        }
      ]
    }
  ];

  const usersPermissions = [
    {
      command: "chmod",
      description: "Change file and directory permissions",
      variants: [
        { cmd: "chmod 755 file", desc: "Set permissions using octal notation" },
        { cmd: "chmod +x file", desc: "Add execute permission for all" },
        { cmd: "chmod u+w file", desc: "Add write permission for user (owner)" },
        { cmd: "chmod g-r file", desc: "Remove read permission for group" },
        { cmd: "chmod o=r file", desc: "Set other permissions to read only" },
        { cmd: "chmod -R 644 directory/", desc: "Recursively set permissions" }
      ],
      examples: [
        {
          command: "ls -l script.sh && chmod +x script.sh && ls -l script.sh",
          output: `-rw-r--r-- 1 user user 156 Oct 15 14:30 script.sh
-rwxr-xr-x 1 user user 156 Oct 15 14:30 script.sh`,
          explanation: "Shows file before and after making it executable. First field shows permissions: rwx = read/write/execute"
        }
      ]
    },
    {
      command: "chown",
      description: "Change file ownership and group",
      variants: [
        { cmd: "chown user file", desc: "Change owner to user" },
        { cmd: "chown user:group file", desc: "Change owner and group" },
        { cmd: "chown :group file", desc: "Change group only" },
        { cmd: "chown -R user:group directory/", desc: "Recursively change ownership" },
        { cmd: "chgrp group file", desc: "Change group only (alternative)" }
      ],
      examples: [
        {
          command: "sudo chown www-data:www-data /var/www/html/index.php && ls -l /var/www/html/index.php",
          output: `-rw-r--r-- 1 www-data www-data 2048 Oct 15 14:30 /var/www/html/index.php`,
          explanation: "Changes web file ownership to web server user/group. Critical for web application security"
        }
      ]
    },
    {
      command: "sudo",
      description: "Execute commands with elevated privileges",
      variants: [
        { cmd: "sudo command", desc: "Run command as root" },
        { cmd: "sudo -u user command", desc: "Run command as specific user" },
        { cmd: "sudo -i", desc: "Start interactive root shell" },
        { cmd: "sudo -l", desc: "List allowed commands for current user" },
        { cmd: "sudo !!  ", desc: "Re-run last command with sudo" }
      ],
      examples: [
        {
          command: "apt update",
          output: `Reading package lists... Done
E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)`,
          explanation: "Shows error without sudo. System operations require elevated privileges for security"
        },
        {
          command: "sudo apt update",
          output: `[sudo] password for user: 
Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease
Reading package lists... Done
Building dependency tree... Done`,
          explanation: "Same command with sudo works. Always use sudo for system administration tasks"
        }
      ]
    }
  ];

  const packageManagement = [
    {
      command: "apt",
      description: "Advanced Package Tool for Debian/Ubuntu systems",
      variants: [
        { cmd: "sudo apt update", desc: "Update package list from repositories" },
        { cmd: "sudo apt upgrade", desc: "Upgrade all installed packages" },
        { cmd: "sudo apt install package", desc: "Install new package" },
        { cmd: "sudo apt remove package", desc: "Remove package (keep config)" },
        { cmd: "sudo apt purge package", desc: "Remove package and config files" },
        { cmd: "apt search keyword", desc: "Search for packages" },
        { cmd: "apt show package", desc: "Show package information" },
        { cmd: "apt list --installed", desc: "List installed packages" }
      ],
      examples: [
        {
          command: "sudo apt install curl && curl --version",
          output: `Reading package lists... Done
Building dependency tree... Done
The following NEW packages will be installed:
  curl
Processing triggers for man-db (2.10.2-1) ...
curl 7.81.0 (x86_64-pc-linux-gnu)`,
          explanation: "Installs curl package and verifies installation. apt handles dependencies automatically"
        }
      ]
    }
  ];

  const systemMonitoring = [
    {
      command: "df",
      description: "Display filesystem disk space usage",
      variants: [
        { cmd: "df", desc: "Show disk usage in blocks" },
        { cmd: "df -h", desc: "Human-readable format (GB, MB, KB)" },
        { cmd: "df -T", desc: "Show filesystem type" },
        { cmd: "df -i", desc: "Show inode usage instead of blocks" },
        { cmd: "df /path", desc: "Show usage for specific path" }
      ],
      examples: [
        {
          command: "df -h",
          output: `Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        20G  12G  7.2G  63% /
/dev/sda2       100G  45G   50G  48% /home
tmpfs           2.0G     0  2.0G   0% /dev/shm`,
          explanation: "Shows disk usage in human-readable format. Monitor Use% to prevent disk full issues"
        }
      ]
    },
    {
      command: "free",
      description: "Display memory usage information",
      variants: [
        { cmd: "free", desc: "Show memory usage in KB" },
        { cmd: "free -h", desc: "Human-readable format" },
        { cmd: "free -m", desc: "Show in MB" },
        { cmd: "free -g", desc: "Show in GB" },
        { cmd: "free -s 5", desc: "Continuous display every 5 seconds" }
      ],
      examples: [
        {
          command: "free -h",
          output: `               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.1Gi       2.4Gi       164Mi       3.2Gi       5.2Gi
Swap:          2.0Gi          0B       2.0Gi`,
          explanation: "Shows total, used, and available memory. 'available' is more accurate than 'free' for usable memory"
        }
      ]
    },
    {
      command: "uname",
      description: "Display system information",
      variants: [
        { cmd: "uname", desc: "Show kernel name" },
        { cmd: "uname -a", desc: "Show all system information" },
        { cmd: "uname -r", desc: "Show kernel release" },
        { cmd: "uname -m", desc: "Show machine architecture" },
        { cmd: "uname -o", desc: "Show operating system" }
      ],
      examples: [
        {
          command: "uname -a",
          output: `Linux server 5.15.0-78-generic #85-Ubuntu SMP Fri Jul 7 15:25:09 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux`,
          explanation: "Shows kernel name, hostname, kernel release, version, machine type, processor, hardware platform, OS"
        }
      ]
    }
  ];

  const networkCommands = [
    {
      command: "ping",
      description: "Test network connectivity",
      variants: [
        { cmd: "ping host", desc: "Continuous ping (Ctrl+C to stop)" },
        { cmd: "ping -c 4 host", desc: "Send only 4 packets" },
        { cmd: "ping -i 2 host", desc: "Wait 2 seconds between packets" },
        { cmd: "ping -s 1000 host", desc: "Send packets of 1000 bytes" },
        { cmd: "ping6 host", desc: "Use IPv6" }
      ],
      examples: [
        {
          command: "ping -c 3 google.com",
          output: `PING google.com (142.250.185.78) 56(84) bytes of data.
64 bytes from google.com (142.250.185.78): icmp_seq=1 ttl=117 time=15.2 ms
64 bytes from google.com (142.250.185.78): icmp_seq=2 ttl=117 time=14.8 ms
64 bytes from google.com (142.250.185.78): icmp_seq=3 ttl=117 time=15.1 ms

--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
round-trip min/avg/max/mdev = 14.813/15.033/15.187/0.191 ms`,
          explanation: "Tests connectivity to Google. Shows response time, packet loss. Essential for network troubleshooting"
        }
      ]
    },
    {
      command: "wget",
      description: "Download files from web (non-interactive)",
      variants: [
        { cmd: "wget URL", desc: "Download file to current directory" },
        { cmd: "wget -O filename URL", desc: "Save with specific filename" },
        { cmd: "wget -c URL", desc: "Continue partial download" },
        { cmd: "wget -r URL", desc: "Recursive download (entire site)" },
        { cmd: "wget --progress=bar URL", desc: "Show progress bar" }
      ],
      examples: [
        {
          command: "wget -O example.html https://example.com",
          output: `--2023-10-15 14:30:15--  https://example.com/
Resolving example.com (example.com)... 93.184.216.34
Connecting to example.com (example.com)|93.184.216.34|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1256 (1.2K) [text/html]
Saving to: 'example.html'

example.html        100%[===================>]   1.23K  --.-KB/s    in 0s`,
          explanation: "Downloads webpage and saves as example.html. Shows connection details and download progress"
        }
      ]
    },
    {
      command: "curl",
      description: "Transfer data from/to servers (versatile web tool)",
      variants: [
        { cmd: "curl URL", desc: "Display response to stdout" },
        { cmd: "curl -o file URL", desc: "Save response to file" },
        { cmd: "curl -I URL", desc: "Show headers only (HEAD request)" },
        { cmd: "curl -X POST URL", desc: "Send POST request" },
        { cmd: "curl -d 'data' URL", desc: "Send data in POST body" },
        { cmd: "curl -H 'Header: value' URL", desc: "Add custom header" }
      ],
      examples: [
        {
          command: "curl -I https://github.com",
          output: `HTTP/2 200 
server: GitHub.com
date: Sun, 15 Oct 2023 14:30:15 GMT
content-type: text/html; charset=utf-8
vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame
cache-control: max-age=0, private, must-revalidate`,
          explanation: "Shows HTTP headers only. Useful for checking server responses, content types, and debugging APIs"
        }
      ]
    }
  ];

  const archiveCommands = [
    {
      command: "tar",
      description: "Archive and compress files/directories",
      variants: [
        { cmd: "tar -czf archive.tar.gz files/", desc: "Create compressed archive" },
        { cmd: "tar -xzf archive.tar.gz", desc: "Extract compressed archive" },
        { cmd: "tar -tzf archive.tar.gz", desc: "List contents without extracting" },
        { cmd: "tar -czf backup.tar.gz --exclude='*.tmp' dir/", desc: "Archive excluding patterns" },
        { cmd: "tar -xzf archive.tar.gz -C /target/dir", desc: "Extract to specific directory" }
      ],
      examples: [
        {
          command: "tar -czf project_backup.tar.gz project/ && ls -lh project_backup.tar.gz",
          output: `tar: project/node_modules: file changed as we read it
-rw-r--r-- 1 user user 2.4M Oct 15 14:30 project_backup.tar.gz`,
          explanation: "Creates compressed backup of project directory. Warning about node_modules is normal for active files"
        }
      ]
    },
    {
      command: "zip",
      description: "Create and extract ZIP archives",
      variants: [
        { cmd: "zip archive.zip files", desc: "Create ZIP archive" },
        { cmd: "zip -r archive.zip directory/", desc: "Recursively zip directory" },
        { cmd: "unzip archive.zip", desc: "Extract ZIP archive" },
        { cmd: "unzip -l archive.zip", desc: "List contents without extracting" },
        { cmd: "unzip archive.zip -d /target/dir", desc: "Extract to specific directory" }
      ],
      examples: [
        {
          command: "zip -r documents.zip Documents/ && unzip -l documents.zip | head -10",
          output: `  adding: Documents/ (stored 0%)
  adding: Documents/report.pdf (deflated 8%)
  adding: Documents/notes.txt (deflated 45%)
Archive:  documents.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  2023-10-15 14:25   Documents/
    25680  2023-10-15 14:20   Documents/report.pdf
     1847  2023-10-15 14:15   Documents/notes.txt`,
          explanation: "Creates ZIP archive of Documents folder, then lists contents showing compression ratios"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          🐧 Complete Linux Command Mastery
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Master every essential Linux command with comprehensive examples, variants, and real-world use cases. 
          From basic navigation to advanced system administration - your complete reference guide.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">350+ Commands</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Real Examples</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Interactive Labs</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Progressive Learning</span>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-6 mb-8 border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">📚 How to Master These Commands</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <strong>📋 Copy & Practice</strong>
            </div>
            <p className="text-muted-foreground ml-8">Click copy icons to get commands, then practice in your terminal</p>
            
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <strong>🔍 Understand Output</strong>
            </div>
            <p className="text-muted-foreground ml-8">Each example shows real terminal output with explanations</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <strong>⚡ Start Simple</strong>
            </div>
            <p className="text-muted-foreground ml-8">Begin with basic variants, then progress to advanced options</p>
            
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
              <strong>🏃‍♂️ Use Practice Labs</strong>
            </div>
            <p className="text-muted-foreground ml-8">Complete progressive labs to build muscle memory</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
              <strong>🎯 Daily Practice</strong>
            </div>
            <p className="text-muted-foreground ml-8">Use commands daily to build long-term retention</p>
            
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
              <strong>🔒 Safety First</strong>
            </div>
            <p className="text-muted-foreground ml-8">Test destructive commands in safe environments first</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">⚠️</span>
            <strong className="text-yellow-800">Safety Warning</strong>
          </div>
          <p className="text-sm text-yellow-700">
            Commands marked with 🚨 can be destructive. Always backup important data and test in non-production environments first.
            Use <code className="bg-yellow-100 px-1 rounded">sudo</code> commands carefully - they have system-wide impact.
          </p>
        </div>
      </div>

      <CommandSection 
        title="🧭 Navigation & Exploration" 
        commands={navigationCommands}
        icon={<Terminal className="w-6 h-6 text-purple-500" />}
      />

      <CommandSection 
        title="📁 File Operations" 
        commands={fileOperations}
        icon={<Terminal className="w-6 h-6 text-primary" />}
      />

      <CommandSection 
        title="� Advanced File Operations" 
        commands={fileOperationsAdvanced}
        icon={<Terminal className="w-6 h-6 text-blue-600" />}
      />

      <CommandSection 
        title="�👀 File Viewing & Search" 
        commands={fileViewing}
        icon={<Play className="w-6 h-6 text-green-500" />}
      />

      <CommandSection 
        title="✏️ Text Processing & Analysis" 
        commands={textProcessing}
        icon={<Terminal className="w-6 h-6 text-orange-500" />}
      />

      <CommandSection 
        title="👥 Users & Permissions" 
        commands={usersPermissions}
        icon={<Terminal className="w-6 h-6 text-red-500" />}
      />

      <CommandSection 
        title="⚙️ Process Management" 
        commands={processManagement}
        icon={<Terminal className="w-6 h-6 text-blue-500" />}
      />

      <CommandSection 
        title="📦 Package Management" 
        commands={packageManagement}
        icon={<Terminal className="w-6 h-6 text-indigo-500" />}
      />

      <CommandSection 
        title="📊 System Monitoring" 
        commands={systemMonitoring}
        icon={<Terminal className="w-6 h-6 text-cyan-500" />}
      />

      <CommandSection 
        title="🌐 Network Commands" 
        commands={networkCommands}
        icon={<Terminal className="w-6 h-6 text-teal-500" />}
      />

      <CommandSection 
        title="🗜️ Archive & Compression" 
        commands={archiveCommands}
        icon={<Terminal className="w-6 h-6 text-amber-500" />}
      />

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-800">🏃‍♂️ Practice Labs: Progressive Command Mastery</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border border-yellow-200">
              <h4 className="font-semibold text-green-700 mb-2">🟢 Beginner Lab: File System Basics</h4>
              <code className="block text-xs bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`# Navigation and file creation
pwd
mkdir -p ~/linux-lab/{basics,advanced,projects}
cd ~/linux-lab/basics
touch file1.txt file2.txt
echo "Hello Linux!" > welcome.txt
ls -lah
pwd`}
              </code>
            </div>

            <div className="bg-white rounded p-4 border border-yellow-200">
              <h4 className="font-semibold text-blue-700 mb-2">🔵 Intermediate Lab: Text Processing</h4>
              <code className="block text-xs bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`# Create sample data and process it
echo -e "Alice,25,Engineer\\nBob,30,Designer\\nCharlie,35,Manager" > employees.txt
cat employees.txt
grep "Engineer" employees.txt
awk -F',' '{print $1, $2}' employees.txt
head -2 employees.txt
tail -1 employees.txt`}
              </code>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded p-4 border border-yellow-200">
              <h4 className="font-semibold text-orange-700 mb-2">🟠 Advanced Lab: System Administration</h4>
              <code className="block text-xs bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`# System monitoring and process management
ps aux | head -10
top -n 1 | head -15
df -h
free -h
find /var/log -name "*.log" -size +1M 2>/dev/null | head -5
sudo apt update && sudo apt list --upgradable`}
              </code>
            </div>

            <div className="bg-white rounded p-4 border border-yellow-200">
              <h4 className="font-semibold text-red-700 mb-2">🔴 Expert Lab: Security & Permissions</h4>
              <code className="block text-xs bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`# Security and permissions
ls -l /etc/passwd
sudo find / -perm -4000 2>/dev/null | head -10
chmod 755 script.sh
sudo chown $USER:$USER file.txt
sudo lsof -i :80
sudo netstat -tlnp | grep :22`}
              </code>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">🎯 Daily Practice Challenge</h4>
          <p className="text-sm text-blue-700 mb-2">Master these essential commands by using them daily:</p>
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div>
              <strong>Morning:</strong> Check system status
              <code className="block bg-white p-2 rounded mt-1">df -h && free -h && uptime</code>
            </div>
            <div>
              <strong>Midday:</strong> File management
              <code className="block bg-white p-2 rounded mt-1">find ~ -name "*.tmp" -delete</code>
            </div>
            <div>
              <strong>Evening:</strong> Log analysis
              <code className="block bg-white p-2 rounded mt-1">tail -f /var/log/syslog</code>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gradient-to-r from-slate-50 to-slate-100 border rounded-lg p-6 mb-8">
        <div>
          <Link to="/foundation" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors inline-flex items-center gap-2">
            <span>←</span> Foundation Concepts
          </Link>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-full px-4 py-2 shadow-sm border">
            <span className="text-sm font-medium text-muted-foreground">Progress:</span>
            <span className="text-sm font-bold text-primary ml-1">Essential Commands Mastered!</span>
          </div>
        </div>
        
        <div>
          <Link to="/networking" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors inline-flex items-center gap-2">
            Networking Mastery <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
