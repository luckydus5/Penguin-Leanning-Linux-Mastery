# 🐧 Linux Mastery & Cybersecurity: The Complete Guide

> *From Zero to Hero: Your ultimate companion for mastering Linux, Windows, Offensive Security, Defensive Security, and Ethical Hacking*

---

## 🎯 Learning Roadmap

**Phase 1: Foundations** → **Phase 2: Networking** → **Phase 3: Offensive Security** → **Phase 4: Defensive Security** → **Phase 5: Penetration Testing**

---

## 📚 Table of Contents

### � [Phase 1: Foundations - OS Mastery](#phase-1-foundations---os-mastery)
- [🐧 Linux Fundamentals](#-linux-fundamentals)
  - [File Management](#file-management)
  - [User & Permissions](#user--permissions)
  - [Process Management](#process-management)
  - [Package Management](#package-management)
  - [Shell Scripting](#shell-scripting)
- [🪟 Windows Fundamentals](#-windows-fundamentals)
  - [Command Prompt (CMD)](#command-prompt-cmd)
  - [PowerShell](#powershell)
  - [Registry Management](#registry-management)
  - [Services & Event Logs](#services--event-logs)

### 🌐 [Phase 2: Networking Knowledge](#phase-2-networking-knowledge)
- [TCP/IP Fundamentals](#tcpip-fundamentals)
- [Network Protocols](#network-protocols)
- [Network Tools & Analysis](#network-tools--analysis)
- [Network Configuration](#network-configuration)

### ⚔️ [Phase 3: Offensive Security (Red Team)](#phase-3-offensive-security-red-team)
- [Reconnaissance & Information Gathering](#reconnaissance--information-gathering)
- [Vulnerability Discovery](#vulnerability-discovery)
- [Exploitation Techniques](#exploitation-techniques)
- [Post-Exploitation](#post-exploitation)
- [Web Application Security](#web-application-security)
- [Password Attacks](#password-attacks)

### �️ [Phase 4: Defensive Security (Blue Team)](#phase-4-defensive-security-blue-team)
- [System Hardening](#system-hardening)
- [Firewall Management](#firewall-management)
- [Intrusion Detection Systems](#intrusion-detection-systems)
- [Log Monitoring & Analysis](#log-monitoring--analysis)
- [Incident Response](#incident-response)
- [Threat Modeling](#threat-modeling)

### 🎯 [Phase 5: Penetration Testing & Ethical Hacking](#phase-5-penetration-testing--ethical-hacking)
- [Penetration Testing Methodologies](#penetration-testing-methodologies)
- [Professional Tools & Frameworks](#professional-tools--frameworks)
- [Reporting & Documentation](#reporting--documentation)
- [Legal & Ethical Considerations](#legal--ethical-considerations)

### � [Advanced Topics](#advanced-topics)
- [Digital Forensics](#digital-forensics)
- [Malware Analysis](#malware-analysis)
- [Cloud Security](#cloud-security)
- [DevSecOps](#devsecops)

### 🎯 [Hands-On Labs & Projects](#hands-on-labs--projects)
- [Lab Environment Setup](#lab-environment-setup)
- [Server Administration](#server-administration)
- [Security Challenges](#security-challenges)
- [Automation Scripts](#automation-scripts)

### 📖 [Resources & References](#resources--references)
- [Essential Reading](#essential-reading)
- [Online Platforms](#online-platforms)
- [Certification Paths](#certification-paths)
- [Community Resources](#community-resources)

---

## Getting Started

### What is Linux?

Linux is a free, open-source operating system kernel created by Linus Torvalds in 1991. It forms the foundation of numerous distributions (distros) that power everything from smartphones to supercomputers.

**Key Characteristics:**
- **Open Source**: Source code is freely available
- **Multi-user**: Multiple users can work simultaneously
- **Multi-tasking**: Runs multiple processes concurrently
- **Portable**: Runs on various hardware architectures
- **Secure**: Robust permission system and security features

### Linux Distributions

| Distribution | Use Case | Package Manager | Notable Features |
|--------------|----------|-----------------|------------------|
| **Ubuntu** | Desktop, Server | APT | User-friendly, LTS releases |
| **Debian** | Server, Stability | APT | Rock-solid stability |
| **CentOS/RHEL** | Enterprise | YUM/DNF | Enterprise support |
| **Fedora** | Development | DNF | Cutting-edge features |
| **Arch Linux** | Advanced Users | Pacman | Rolling release, customizable |
| **Kali Linux** | Security Testing | APT | Pre-installed security tools |
| **Alpine** | Containers | APK | Lightweight, security-focused |

### Installation Guide

**Pre-Installation Checklist:**
1. **Backup Data**: Always backup important files
2. **Hardware Compatibility**: Check Linux compatibility
3. **Partitioning Plan**: Decide on disk layout
4. **Internet Connection**: For package downloads

**Installation Methods:**
- **Dual Boot**: Keep existing OS alongside Linux
- **Virtual Machine**: Run Linux inside current OS
- **Live USB**: Try Linux without installation
- **Full Installation**: Replace existing OS

---

## Foundation Concepts

### Filesystem Hierarchy

Linux follows the Filesystem Hierarchy Standard (FHS):

```
/                    # Root directory
├── bin/            # Essential user binaries
├── boot/           # Boot loader files
├── dev/            # Device files
├── etc/            # System configuration
├── home/           # User home directories
├── lib/            # Shared libraries
├── media/          # Removable media mount points
├── mnt/            # Temporary mount points
├── opt/            # Optional software
├── proc/           # Process information
├── root/           # Root user home
├── sbin/           # System binaries
├── srv/            # Service data
├── sys/            # System information
├── tmp/            # Temporary files
├── usr/            # User programs
└── var/            # Variable data
```

**Key Directories Explained:**

| Directory | Purpose | Examples |
|-----------|---------|----------|
| `/bin` | Essential commands | ls, cp, mv, rm |
| `/etc` | Configuration files | /etc/passwd, /etc/hosts |
| `/home` | User directories | /home/username |
| `/var` | Variable data | logs, databases, websites |
| `/usr` | User programs | applications, libraries |
| `/tmp` | Temporary files | session data, temp downloads |

### Terminal Basics

**Understanding the Shell:**
- **Shell**: Command-line interpreter (bash, zsh, fish)
- **Terminal**: Interface to interact with shell
- **Command Prompt**: Shows current user and directory

**Prompt Anatomy:**
```bash
username@hostname:~/current/directory$ command
```

**Special Characters:**
| Character | Meaning | Example |
|-----------|---------|---------|
| `~` | Home directory | `cd ~` |
| `.` | Current directory | `cp file.txt .` |
| `..` | Parent directory | `cd ..` |
| `/` | Root directory | `cd /` |
| `*` | Wildcard (any characters) | `ls *.txt` |
| `?` | Single character wildcard | `ls file?.txt` |
| `|` | Pipe output | `ls | grep txt` |
| `>` | Redirect output | `echo "hello" > file.txt` |
| `>>` | Append output | `echo "world" >> file.txt` |

---

## Essential Commands

### Navigation Commands

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `pwd` | Print working directory | `pwd` | Shows current location |
| `ls` | List directory contents | `ls -la` | `-l` detailed, `-a` hidden files |
| `cd` | Change directory | `cd /home/user` | Use `cd -` for previous dir |
| `find` | Search for files/directories | `find /home -name "*.txt"` | Powerful search tool |
| `locate` | Quick file search | `locate filename` | Uses database, run `updatedb` first |
| `which` | Find command location | `which python` | Shows path to executable |
| `tree` | Display directory structure | `tree -L 2` | Install with package manager |

**Advanced Navigation:**
```bash
# Quick directory switching
cd ~                 # Go to home directory
cd -                 # Go to previous directory
cd ../..             # Go up two levels
cd /path/to/dir      # Absolute path
cd relative/path     # Relative path

# Directory stack
pushd /new/directory # Push current dir to stack, change to new
popd                 # Pop directory from stack and change to it
dirs                 # Show directory stack
```

### File & Directory Operations

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `mkdir` | Create directory | `mkdir -p dir1/dir2/dir3` | `-p` creates parent dirs |
| `rmdir` | Remove empty directory | `rmdir emptydir` | Only works on empty directories |
| `rm` | Remove files/directories | `rm -rf directory/` | `-r` recursive, `-f` force |
| `cp` | Copy files/directories | `cp -r source/ dest/` | `-r` for directories |
| `mv` | Move/rename files | `mv oldname newname` | Also used for renaming |
| `ln` | Create links | `ln -s target linkname` | `-s` for symbolic links |
| `chmod` | Change permissions | `chmod 755 script.sh` | Numeric or symbolic mode |
| `chown` | Change ownership | `chown user:group file` | Change owner and group |
| `touch` | Create empty file/update timestamp | `touch newfile.txt` | Creates file if doesn't exist |

**File Operations Examples:**
```bash
# Create multiple directories
mkdir -p project/{src,docs,tests}/{python,javascript}

# Copy with progress and preservation
cp -av source/ destination/    # -a archive mode, -v verbose

# Safe remove with confirmation
rm -i important_file.txt       # Interactive mode

# Create symbolic link
ln -s /path/to/original /path/to/link

# Change permissions for multiple files
chmod 644 *.txt               # Read/write for owner, read for others
chmod +x script.sh            # Add execute permission
```

### Text Processing

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `cat` | Display file contents | `cat file.txt` | Shows entire file |
| `less` | View file page by page | `less largefile.txt` | Use arrow keys, 'q' to quit |
| `head` | Show first lines | `head -n 10 file.txt` | Default is 10 lines |
| `tail` | Show last lines | `tail -f /var/log/syslog` | `-f` follows file changes |
| `grep` | Search text patterns | `grep "error" logfile.txt` | Powerful pattern matching |
| `sed` | Stream editor | `sed 's/old/new/g' file.txt` | Replace text |
| `awk` | Text processing | `awk '{print $1}' file.txt` | Print first column |
| `sort` | Sort lines | `sort -n numbers.txt` | `-n` numeric sort |
| `uniq` | Remove duplicates | `sort file.txt | uniq` | Often used with sort |
| `wc` | Word/line/byte count | `wc -l file.txt` | Count lines |

**Text Processing Examples:**
```bash
# Search with context
grep -A 3 -B 3 "error" logfile.txt    # 3 lines after and before

# Case-insensitive search
grep -i "ERROR" logfile.txt

# Search in multiple files
grep -r "function" src/               # Recursive search

# Advanced sed usage
sed -i 's/old_text/new_text/g' *.txt  # In-place replacement

# AWK for data extraction
awk -F: '{print $1,$3}' /etc/passwd   # Print username and UID

# Count unique lines
sort file.txt | uniq -c | sort -nr    # Count and sort by frequency
```

### Searching & Finding

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `find` | Search filesystem | `find / -name "*.conf" -type f` | Most versatile search |
| `locate` | Fast file search | `locate -i filename` | Uses database |
| `whereis` | Locate binary, source, manual | `whereis gcc` | Finds related files |
| `grep` | Search file contents | `grep -r "pattern" directory/` | Text pattern search |
| `ag` | Silver searcher | `ag "pattern" --ignore="*.log"` | Fast grep alternative |
| `ripgrep` | Ultra-fast search | `rg "pattern" --type py` | Modern grep replacement |

**Find Command Examples:**
```bash
# Find by name
find /home -name "*.txt" -type f

# Find by size
find /var -size +100M -type f          # Files larger than 100MB

# Find by modification time
find /tmp -mtime -7                     # Modified in last 7 days
find /home -atime +30                   # Accessed more than 30 days ago

# Find and execute
find /var/log -name "*.log" -exec gzip {} \;  # Compress all log files

# Find with multiple conditions
find /usr -name "*.so" -size +1M -exec ls -lh {} \;

# Find empty files and directories
find /tmp -empty -type f -delete        # Delete empty files
```

---

## Users & Permissions

### User Management

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `whoami` | Current user | `whoami` | Shows current username |
| `id` | User/group IDs | `id username` | Shows UID, GID, groups |
| `users` | Logged in users | `users` | Simple list |
| `who` | Detailed user info | `who -u` | Shows login time, terminal |
| `w` | User activity | `w` | Shows what users are doing |
| `last` | Login history | `last -n 10` | Last 10 logins |
| `useradd` | Add user | `useradd -m -s /bin/bash newuser` | `-m` creates home dir |
| `usermod` | Modify user | `usermod -aG sudo username` | Add to group |
| `userdel` | Delete user | `userdel -r username` | `-r` removes home dir |
| `passwd` | Change password | `passwd username` | Interactive password change |

**User Management Examples:**
```bash
# Create user with home directory and bash shell
sudo useradd -m -s /bin/bash john
sudo passwd john

# Add user to multiple groups
sudo usermod -aG sudo,docker,www-data john

# Lock/unlock user account
sudo usermod -L john                    # Lock account
sudo usermod -U john                    # Unlock account

# Change user information
sudo chfn john                          # Change full name, phone, etc.

# Set user expiration
sudo usermod -e 2024-12-31 john        # Account expires on date
```

### Group Management

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `groups` | Show user groups | `groups username` | Lists group membership |
| `groupadd` | Add group | `groupadd developers` | Create new group |
| `groupmod` | Modify group | `groupmod -n newname oldname` | Rename group |
| `groupdel` | Delete group | `groupdel groupname` | Remove group |
| `gpasswd` | Group password/membership | `gpasswd -a user group` | Add user to group |
| `newgrp` | Switch primary group | `newgrp developers` | Temporary group switch |

### File Permissions (rwx)

**Permission Structure:**
```
-rwxrwxrwx
│││││││││└── Other execute
││││││││└─── Other write  
│││││││└──── Other read
││││││└───── Group execute
│││││└────── Group write
││││└─────── Group read
│││└──────── Owner execute
││└───────── Owner write
│└────────── Owner read
└─────────── File type (- file, d directory, l link)
```

**Numeric Permissions:**
| Value | Binary | Permissions | Description |
|-------|--------|-------------|-------------|
| 0 | 000 | --- | No permissions |
| 1 | 001 | --x | Execute only |
| 2 | 010 | -w- | Write only |
| 3 | 011 | -wx | Write and execute |
| 4 | 100 | r-- | Read only |
| 5 | 101 | r-x | Read and execute |
| 6 | 110 | rw- | Read and write |
| 7 | 111 | rwx | All permissions |

**Common Permission Sets:**
| Permissions | Numeric | Use Case |
|-------------|---------|----------|
| rwxrwxrwx | 777 | Full access (avoid on shared systems) |
| rwxr-xr-x | 755 | Executable files, directories |
| rw-rw-rw- | 666 | Data files (no execute needed) |
| rw-r--r-- | 644 | Configuration files, documents |
| rwx------ | 700 | Private directories |
| rw------- | 600 | Private files (passwords, keys) |

**Permission Commands:**
```bash
# Symbolic mode
chmod u+x script.sh                    # Add execute for owner
chmod g-w file.txt                     # Remove write for group
chmod o=r file.txt                     # Set other to read only
chmod a+x script.sh                    # Add execute for all

# Numeric mode
chmod 755 /usr/local/bin/myscript      # Executable script
chmod 644 /etc/myconfig.conf           # Config file
chmod 600 ~/.ssh/id_rsa                # Private SSH key

# Recursive permissions
chmod -R 755 /var/www/html             # Set directory permissions
find /var/www -type f -exec chmod 644 {} \;  # Files only
find /var/www -type d -exec chmod 755 {} \;  # Directories only
```

### sudo & Privileges

**Understanding sudo:**
- **Purpose**: Execute commands as another user (usually root)
- **Configuration**: `/etc/sudoers` file
- **Security**: Logs all sudo usage

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `sudo` | Execute as root | `sudo apt update` | Requires password |
| `sudo -u` | Execute as specific user | `sudo -u www-data ls /var/www` | Run as different user |
| `sudo -i` | Interactive root shell | `sudo -i` | Full root environment |
| `sudo -s` | Shell as root | `sudo -s` | Keep current environment |
| `visudo` | Edit sudoers file | `sudo visudo` | Safe sudoers editing |
| `sudo -l` | List permissions | `sudo -l` | Show allowed commands |

**Sudoers Configuration:**
```bash
# Basic syntax: user host=(runas) commands
john    ALL=(ALL:ALL) ALL              # Full sudo access
jane    ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx  # Specific command without password
%admin  ALL=(ALL) ALL                  # Group permissions (% prefix)

# Command aliases
Cmnd_Alias SERVICES = /bin/systemctl, /sbin/service
%operators ALL=(ALL) NOPASSWD: SERVICES

# Host aliases for multiple servers
Host_Alias WEBSERVERS = 192.168.1.10, 192.168.1.11
john WEBSERVERS=(ALL) ALL
```

---

## Process Management

### Understanding Processes

**Process Hierarchy:**
- **PID**: Process ID (unique identifier)
- **PPID**: Parent Process ID
- **PGID**: Process Group ID
- **SID**: Session ID

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `ps` | Show processes | `ps aux` | Snapshot of current processes |
| `pstree` | Process tree | `pstree -p` | Shows parent-child relationships |
| `top` | Real-time processes | `top` | Interactive process viewer |
| `htop` | Enhanced top | `htop` | Better interface (install separately) |
| `jobs` | Active jobs | `jobs -l` | Shows background jobs |
| `pgrep` | Find process by name | `pgrep firefox` | Returns PIDs |
| `pkill` | Kill by name | `pkill firefox` | Kill processes by name |

**Process States:**
| State | Code | Description |
|-------|------|-------------|
| Running | R | Currently executing |
| Sleeping | S | Waiting for event |
| Uninterruptible Sleep | D | Waiting for I/O |
| Zombie | Z | Finished but not cleaned up |
| Stopped | T | Suspended by signal |

### Background/Foreground Jobs

**Job Control:**
```bash
# Start job in background
command &                              # Run in background
nohup command &                        # Survive terminal closure

# Job control during execution
Ctrl+Z                                 # Suspend current job
bg                                     # Continue in background
fg                                     # Bring to foreground
jobs                                   # List active jobs

# Specific job control
bg %1                                  # Background job 1
fg %2                                  # Foreground job 2
kill %1                                # Kill job 1

# Disown jobs (remove from job table)
disown %1                              # Disown specific job
disown -a                              # Disown all jobs
```

### Signals & Process Control

**Common Signals:**
| Signal | Number | Description | Usage |
|--------|--------|-------------|-------|
| SIGHUP | 1 | Hangup | Reload configuration |
| SIGINT | 2 | Interrupt | Ctrl+C |
| SIGQUIT | 3 | Quit | Ctrl+\ |
| SIGKILL | 9 | Kill | Force termination |
| SIGTERM | 15 | Terminate | Graceful shutdown |
| SIGSTOP | 19 | Stop | Suspend process |
| SIGCONT | 18 | Continue | Resume process |

**Signal Commands:**
```bash
# Send signals
kill -TERM 1234                       # Graceful termination
kill -KILL 1234                       # Force kill
kill -HUP 1234                        # Reload configuration

# Kill by name
killall firefox                       # Kill all firefox processes
pkill -f "python script.py"           # Kill by command line

# Process priority
nice -n 10 command                     # Start with lower priority
renice -n 5 -p 1234                   # Change priority of running process
```

### Process Monitoring

**System Resource Monitoring:**
```bash
# CPU and memory usage
top -p 1234                           # Monitor specific process
htop -p 1234,5678                     # Monitor multiple processes

# Detailed process information
ps -o pid,ppid,cmd,pcpu,pmem 1234     # Custom output format
ps -eo pid,cmd,etime                  # All processes with runtime

# Process resource usage
pidstat -p 1234 1                     # Per-process statistics
iotop                                 # I/O usage by process
```

---

## System Monitoring

### Resource Monitoring

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `free` | Memory usage | `free -h` | Shows RAM and swap |
| `df` | Disk space | `df -h` | Human-readable sizes |
| `du` | Directory usage | `du -sh /var/*` | Disk usage by directory |
| `iostat` | I/O statistics | `iostat -x 1` | Extended stats every second |
| `vmstat` | Virtual memory stats | `vmstat 1` | System performance |
| `sar` | System activity | `sar -u 1 5` | CPU usage 5 times |
| `uptime` | System uptime | `uptime` | Load averages |
| `lscpu` | CPU information | `lscpu` | Detailed CPU info |
| `lsblk` | Block devices | `lsblk -f` | Shows filesystems |

**Memory Monitoring:**
```bash
# Memory breakdown
free -h                               # Human-readable memory info
cat /proc/meminfo                     # Detailed memory information
pmap 1234                            # Memory map of specific process

# Top memory consumers
ps aux --sort=-%mem | head            # Sort by memory usage
smem -tk                             # Shared memory reporting (install smem)
```

**Disk Monitoring:**
```bash
# Disk space analysis
df -h                                 # Filesystem usage
df -i                                 # Inode usage
du -sh /var/log/*                    # Log directory sizes
ncdu /                               # Interactive disk usage (install ncdu)

# Find large files
find / -type f -size +100M -exec ls -lh {} \; 2>/dev/null
find /var -name "*.log" -size +10M
```

### Log Management

**System Logs Location:**
- `/var/log/syslog` - General system messages
- `/var/log/auth.log` - Authentication events
- `/var/log/kern.log` - Kernel messages
- `/var/log/cron.log` - Cron job output
- `/var/log/mail.log` - Mail server logs
- `/var/log/apache2/` - Apache web server logs
- `/var/log/nginx/` - Nginx web server logs

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `journalctl` | Systemd logs | `journalctl -u nginx` | Service-specific logs |
| `dmesg` | Kernel messages | `dmesg | tail` | Boot and hardware messages |
| `logger` | Write to log | `logger "Custom message"` | Add entries to syslog |
| `logrotate` | Rotate logs | `logrotate /etc/logrotate.conf` | Manage log file sizes |
| `rsyslog` | System logging | `systemctl status rsyslog` | Log daemon |

**Log Analysis Examples:**
```bash
# Recent system events
journalctl --since "1 hour ago"
journalctl --since "2024-01-01" --until "2024-01-02"

# Service logs
journalctl -u ssh.service -f           # Follow SSH service logs
journalctl -u nginx.service --since today

# System boot analysis
journalctl -b                         # Current boot logs
journalctl --list-boots               # Available boot logs
journalctl -b -1                      # Previous boot

# Priority filtering
journalctl -p err                     # Error level and above
journalctl -p warning..info           # Warning to info range

# Disk usage by logs
journalctl --disk-usage
journalctl --vacuum-time=7d           # Keep only 7 days
journalctl --vacuum-size=500M         # Keep only 500MB
```

### Performance Tools

**System Performance Analysis:**
```bash
# CPU monitoring
top                                   # Real-time CPU usage
htop                                  # Enhanced process viewer
iotop                                 # I/O monitoring
atop                                  # Advanced system monitor

# Network monitoring
iftop                                 # Network bandwidth by host
nethogs                              # Network usage by process
ss -tuln                             # Socket statistics
netstat -tuln                        # Network connections

# Disk I/O
iotop -ao                            # I/O by process (accumulated)
iostat -x 1                          # Extended I/O statistics
```

**Performance Benchmarking:**
```bash
# CPU benchmark
stress --cpu 4 --timeout 60s         # CPU stress test
sysbench cpu run                     # CPU benchmark

# Memory benchmark
stress --vm 2 --vm-bytes 1G --timeout 60s
mbw 1000                             # Memory bandwidth benchmark

# Disk benchmark
dd if=/dev/zero of=testfile bs=1G count=1 oflag=direct
hdparm -tT /dev/sda                  # Disk read performance
```

---

## Networking

### Network Configuration

**Network Interface Management:**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `ip` | Modern network tool | `ip addr show` | Replaces ifconfig |
| `ifconfig` | Legacy interface config | `ifconfig eth0` | Still widely used |
| `iwconfig` | Wireless configuration | `iwconfig wlan0` | Wireless interfaces |
| `nmcli` | NetworkManager CLI | `nmcli dev status` | Desktop network management |
| `hostnamectl` | Hostname management | `hostnamectl set-hostname newname` | Set system hostname |

**IP Address Management:**
```bash
# View network interfaces
ip addr show                          # All interfaces
ip addr show eth0                     # Specific interface
ip link show                          # Link layer information

# Configure IP addresses
sudo ip addr add 192.168.1.100/24 dev eth0     # Add IP address
sudo ip addr del 192.168.1.100/24 dev eth0     # Remove IP address
sudo ip link set eth0 up             # Bring interface up
sudo ip link set eth0 down           # Bring interface down

# Routing
ip route show                         # Show routing table
sudo ip route add 192.168.2.0/24 via 192.168.1.1  # Add route
sudo ip route del 192.168.2.0/24     # Delete route
```

**DNS Configuration:**
```bash
# DNS resolution
nslookup google.com                   # DNS lookup
dig google.com                        # Detailed DNS query
dig @8.8.8.8 google.com              # Query specific DNS server
host google.com                       # Simple DNS lookup

# DNS configuration files
/etc/hosts                            # Local hostname resolution
/etc/resolv.conf                      # DNS server configuration
/etc/nsswitch.conf                    # Name resolution order
```

### Network Diagnostics

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `ping` | Test connectivity | `ping -c 4 google.com` | ICMP echo requests |
| `traceroute` | Trace route | `traceroute google.com` | Path to destination |
| `mtr` | Network diagnostic | `mtr google.com` | Combines ping and traceroute |
| `nmap` | Network scanner | `nmap -sS 192.168.1.0/24` | Port scanning |
| `nc` | Netcat utility | `nc -zv google.com 80` | Port testing |
| `telnet` | Remote connection | `telnet google.com 80` | Test service connectivity |

**Network Troubleshooting:**
```bash
# Connectivity testing
ping -c 10 -i 0.2 192.168.1.1        # 10 pings, 0.2s interval
ping6 -c 4 ipv6.google.com           # IPv6 ping

# Path analysis
traceroute -n google.com              # Numeric output (faster)
mtr --report --report-cycles 10 google.com  # Statistical report

# Port scanning
nmap -sT -p 80,443,22 target.com     # TCP connect scan
nmap -sU -p 53,67,68 target.com      # UDP scan
nmap -A target.com                   # Aggressive scan (OS detection)

# Service testing
nc -zv target.com 80                 # Test if port 80 is open
echo "GET / HTTP/1.0\r\n\r\n" | nc target.com 80  # HTTP request
```

### Remote Access (SSH)

**SSH Basics:**
```bash
# Basic connection
ssh user@hostname                     # Connect to remote host
ssh -p 2222 user@hostname            # Custom port
ssh -i ~/.ssh/private_key user@hostname  # Use specific key

# SSH key management
ssh-keygen -t rsa -b 4096 -C "email@example.com"  # Generate key pair
ssh-copy-id user@hostname            # Copy public key to remote
ssh-add ~/.ssh/private_key           # Add key to SSH agent

# SSH configuration
~/.ssh/config                        # Client configuration
/etc/ssh/sshd_config                 # Server configuration
```

**SSH Configuration Example:**
```bash
# ~/.ssh/config
Host webserver
    HostName 192.168.1.100
    User admin
    Port 2222
    IdentityFile ~/.ssh/webserver_key
    ForwardAgent yes

Host *.company.com
    User john
    ForwardX11 yes
    Compression yes
```

**Advanced SSH Usage:**
```bash
# Port forwarding
ssh -L 8080:localhost:80 user@server    # Local port forwarding
ssh -R 8080:localhost:80 user@server    # Remote port forwarding
ssh -D 1080 user@server                 # Dynamic port forwarding (SOCKS)

# File transfer over SSH
scp file.txt user@server:/path/         # Copy file to remote
scp -r directory/ user@server:/path/    # Copy directory
rsync -avz /local/path/ user@server:/remote/path/  # Sync directories

# SSH tunneling
ssh -N -L 3306:database:3306 user@jumphost  # Database tunnel through jumphost
```

### File Transfer

| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `scp` | Secure copy | `scp file.txt user@host:/path/` | SSH-based file transfer |
| `rsync` | Sync directories | `rsync -avz src/ dest/` | Efficient sync with compression |
| `wget` | Download files | `wget -c http://example.com/file.zip` | Resume downloads with -c |
| `curl` | Transfer data | `curl -O http://example.com/file.zip` | More versatile than wget |
| `sftp` | Secure FTP | `sftp user@hostname` | Interactive file transfer |

**File Transfer Examples:**
```bash
# SCP usage
scp -r /local/directory user@server:/remote/path/  # Recursive copy
scp -P 2222 file.txt user@server:/path/            # Custom SSH port
scp user@server1:/path/file.txt user@server2:/path/  # Server to server

# Rsync advanced usage
rsync -avz --progress src/ user@server:dest/       # With progress bar
rsync -avz --delete src/ dest/                     # Delete extraneous files
rsync -avz --exclude="*.tmp" src/ dest/            # Exclude patterns
rsync -avz -e "ssh -p 2222" src/ user@server:dest/  # Custom SSH port

# Wget advanced usage
wget -r -np -k http://example.com/directory/       # Recursive download
wget --limit-rate=200k http://example.com/large.zip  # Limit bandwidth
wget -c --timeout=30 http://example.com/file.zip   # Resume with timeout

# Curl advanced usage
curl -L -o file.zip http://example.com/redirect     # Follow redirects
curl -u username:password ftp://ftp.example.com/file.txt  # FTP with auth
curl -X POST -d "data" http://api.example.com/endpoint    # POST data
```

---

## File Management & Compression

### Archive & Compression

**Tar (Tape Archive):**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `tar -c` | Create archive | `tar -czf archive.tar.gz files/` | `-z` for gzip compression |
| `tar -x` | Extract archive | `tar -xzf archive.tar.gz` | Extract with decompression |
| `tar -t` | List contents | `tar -tzf archive.tar.gz` | View without extracting |
| `tar -r` | Append to archive | `tar -rf archive.tar newfile` | Add files to existing archive |

**Compression Tools:**
| Tool | Command | Compression | Speed | Notes |
|------|---------|-------------|-------|-------|
| gzip | `gzip file.txt` | Good | Fast | Creates .gz files |
| bzip2 | `bzip2 file.txt` | Better | Slower | Creates .bz2 files |
| xz | `xz file.txt` | Best | Slowest | Creates .xz files |
| zip | `zip archive.zip files/*` | Good | Fast | Cross-platform |
| 7z | `7z a archive.7z files/` | Excellent | Medium | Best compression |

**Archive Examples:**
```bash
# Create archives
tar -czf backup.tar.gz /home/user/documents/      # Gzip compressed
tar -cjf backup.tar.bz2 /home/user/documents/     # Bzip2 compressed
tar -cJf backup.tar.xz /home/user/documents/      # XZ compressed

# Extract archives
tar -xzf backup.tar.gz -C /restore/location/      # Extract to specific directory
tar -xjf backup.tar.bz2 --strip-components=1      # Remove leading directory
unzip archive.zip -d /destination/                # Extract ZIP file

# Archive with exclusions
tar -czf backup.tar.gz --exclude="*.tmp" --exclude="*.log" /home/user/

# Split large archives
tar -czf - /large/directory/ | split -b 1G - backup.tar.gz.  # Split into 1GB parts
cat backup.tar.gz.* | tar -xzf -                  # Reconstruct and extract

# Encrypted archives
tar -czf - /secret/files/ | gpg -c > backup.tar.gz.gpg     # Encrypt with GPG
gpg -d backup.tar.gz.gpg | tar -xzf -             # Decrypt and extract
```

### Mounting & Filesystems

**Mount Management:**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `mount` | Mount filesystem | `mount /dev/sdb1 /mnt/usb` | Attach filesystem |
| `umount` | Unmount filesystem | `umount /mnt/usb` | Detach filesystem |
| `lsblk` | List block devices | `lsblk -f` | Shows filesystems |
| `fdisk` | Disk partitioning | `fdisk -l` | List partitions |
| `mkfs` | Create filesystem | `mkfs.ext4 /dev/sdb1` | Format partition |
| `fsck` | Check filesystem | `fsck /dev/sdb1` | Repair filesystem |

**Filesystem Operations:**
```bash
# View mounted filesystems
mount | grep -E "^/dev"               # Show mounted devices
df -hT                                # Filesystem types and usage
findmnt                               # Tree view of mounts

# Mount operations
sudo mount -t ext4 /dev/sdb1 /mnt/external     # Mount with filesystem type
sudo mount -o ro /dev/sdb1 /mnt/readonly       # Read-only mount
sudo mount -o loop image.iso /mnt/cdrom        # Mount ISO image

# Permanent mounts (/etc/fstab)
# Device        Mount Point    FS Type    Options           Dump Pass
/dev/sdb1      /mnt/storage   ext4       defaults,noatime  0    2
UUID=abc123... /home          ext4       defaults          0    2

# USB/External device handling
udisksctl mount -b /dev/sdb1           # User-space mount
udisksctl unmount -b /dev/sdb1         # User-space unmount
```

**Filesystem Creation and Repair:**
```bash
# Create filesystems
sudo mkfs.ext4 -L "Storage" /dev/sdb1  # Create ext4 with label
sudo mkfs.xfs -f /dev/sdb1             # Create XFS filesystem
sudo mkfs.ntfs -Q /dev/sdb1            # Quick NTFS format

# Filesystem checking and repair
sudo fsck -f /dev/sdb1                 # Force check
sudo fsck.ext4 -p /dev/sdb1            # Automatic repair
sudo xfs_repair /dev/sdb1              # XFS repair

# Filesystem information
sudo tune2fs -l /dev/sdb1              # Ext filesystem info
sudo xfs_info /dev/sdb1                # XFS filesystem info
```

### Backup Strategies

**Backup Methods:**

1. **Full Backup**: Complete copy of all data
2. **Incremental Backup**: Only changes since last backup
3. **Differential Backup**: Changes since last full backup
4. **Snapshot Backup**: Point-in-time filesystem snapshot

**Backup Tools:**
```bash
# Rsync-based backups
rsync -avH --delete /home/ /backup/home/           # Mirror backup
rsync -avH --link-dest=/backup/2024-01-01/ /home/ /backup/2024-01-02/  # Hardlink backup

# DD for disk cloning
sudo dd if=/dev/sda of=/backup/disk.img bs=1M status=progress  # Clone entire disk
sudo dd if=/dev/sda1 of=/backup/partition.img bs=1M           # Clone partition

# System backup script example
#!/bin/bash
DATE=$(date +%Y-%m-%d)
BACKUP_DIR="/backup/$DATE"
SOURCE_DIRS="/home /etc /var/log"

mkdir -p "$BACKUP_DIR"
for dir in $SOURCE_DIRS; do
    rsync -avH "$dir/" "$BACKUP_DIR$(basename $dir)/"
done
tar -czf "$BACKUP_DIR.tar.gz" "$BACKUP_DIR"
rm -rf "$BACKUP_DIR"
```

---

## Shell Scripting

### Bash Fundamentals

**Script Structure:**
```bash
#!/bin/bash
# Shebang line - specifies interpreter

# Script metadata
# Description: Example script demonstrating bash basics
# Author: Your Name
# Date: 2024-01-01
# Version: 1.0

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Your script content here
echo "Hello, World!"
```

**Basic Syntax:**
```bash
# Comments
# This is a comment
: '
This is a
multi-line comment
'

# Variables
name="John"                    # String variable
age=30                         # Integer variable
readonly PI=3.14159           # Read-only variable
unset name                    # Remove variable

# Command substitution
current_date=$(date)          # Modern syntax
current_date=`date`           # Legacy syntax (avoid)

# Arrays
fruits=("apple" "banana" "orange")
echo ${fruits[0]}             # First element
echo ${fruits[@]}             # All elements
echo ${#fruits[@]}            # Array length
```

### Variables & Parameters

**Variable Types and Manipulation:**
```bash
# String operations
string="Hello World"
echo ${#string}               # Length
echo ${string:0:5}            # Substring (Hello)
echo ${string/World/Bash}     # Replace first occurrence
echo ${string//l/L}           # Replace all occurrences
echo ${string^^}              # Convert to uppercase
echo ${string,,}              # Convert to lowercase

# Parameter expansion
file="/path/to/file.txt"
echo ${file%.*}               # Remove extension: /path/to/file
echo ${file##*/}              # Get filename: file.txt
echo ${file%/*}               # Get directory: /path/to

# Default values
echo ${VAR:-default}          # Use default if VAR is unset
echo ${VAR:=default}          # Set VAR to default if unset
echo ${VAR:?"VAR is required"}  # Error if VAR is unset

# Special parameters
echo $0                       # Script name
echo $1 $2 $3                # First three arguments
echo $#                      # Number of arguments
echo $@                      # All arguments as separate words
echo $*                      # All arguments as single word
echo $?                      # Exit status of last command
echo $$                      # Process ID of script
```

**Environment Variables:**
```bash
# Important environment variables
echo $HOME                    # User home directory
echo $PATH                    # Executable search path
echo $PWD                     # Current working directory
echo $USER                    # Current username
echo $SHELL                   # Current shell

# Setting environment variables
export MY_VAR="value"         # Available to child processes
MY_VAR="value"               # Local to current shell

# Reading from files
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt
```

### Control Structures

**Conditional Statements:**
```bash
# If statements
if [ "$age" -gt 18 ]; then
    echo "Adult"
elif [ "$age" -eq 18 ]; then
    echo "Just turned adult"
else
    echo "Minor"
fi

# Test operators
[ -f file.txt ]               # File exists and is regular file
[ -d directory ]              # Directory exists
[ -r file.txt ]               # File is readable
[ -w file.txt ]               # File is writable
[ -x script.sh ]              # File is executable
[ -s file.txt ]               # File exists and is not empty

[ "$a" = "$b" ]               # String equality
[ "$a" != "$b" ]              # String inequality
[ -z "$string" ]              # String is empty
[ -n "$string" ]              # String is not empty

[ "$num1" -eq "$num2" ]       # Numeric equality
[ "$num1" -ne "$num2" ]       # Numeric inequality
[ "$num1" -lt "$num2" ]       # Less than
[ "$num1" -le "$num2" ]       # Less than or equal
[ "$num1" -gt "$num2" ]       # Greater than
[ "$num1" -ge "$num2" ]       # Greater than or equal

# Modern test syntax
if [[ "$string" =~ ^[0-9]+$ ]]; then
    echo "String contains only digits"
fi

# Case statements
case "$input" in
    start|begin)
        echo "Starting..."
        ;;
    stop|end)
        echo "Stopping..."
        ;;
    restart)
        echo "Restarting..."
        ;;
    *)
        echo "Unknown command: $input"
        ;;
esac
```

**Loops:**
```bash
# For loops
for i in {1..10}; do
    echo "Number: $i"
done

for file in *.txt; do
    echo "Processing: $file"
done

for ((i=1; i<=10; i++)); do
    echo "Counter: $i"
done

# While loops
counter=1
while [ $counter -le 10 ]; do
    echo "Counter: $counter"
    ((counter++))
done

# Until loops
counter=1
until [ $counter -gt 10 ]; do
    echo "Counter: $counter"
    ((counter++))
done

# Reading file line by line
while IFS= read -r line; do
    echo "Processing: $line"
done < input.txt
```

### Functions & Libraries

**Function Definition:**
```bash
# Basic function
greet() {
    echo "Hello, $1!"
}

# Function with local variables
calculate_area() {
    local length=$1
    local width=$2
    local area=$((length * width))
    echo $area
}

# Function with return value
is_valid_email() {
    local email=$1
    if [[ "$email" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
        return 0  # Success
    else
        return 1  # Failure
    fi
}

# Using functions
greet "World"
area=$(calculate_area 10 5)
echo "Area: $area"

if is_valid_email "user@example.com"; then
    echo "Valid email"
else
    echo "Invalid email"
fi
```

**Script Libraries:**
```bash
# logger.sh - Logging library
log_info() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $*"
}

log_error() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $*" >&2
}

log_debug() {
    if [ "$DEBUG" = "1" ]; then
        echo "[$(date +'%Y-%m-%d %H:%M:%S')] DEBUG: $*"
    fi
}

# config.sh - Configuration management
load_config() {
    local config_file=${1:-config.conf}
    if [ -f "$config_file" ]; then
        source "$config_file"
        log_info "Configuration loaded from $config_file"
    else
        log_error "Configuration file not found: $config_file"
        return 1
    fi
}

# main.sh - Main script
#!/bin/bash
source ./logger.sh
source ./config.sh

load_config
log_info "Script started"
```

### Cron Jobs & Automation

**Cron Syntax:**
```
# Minute Hour Day Month DayOfWeek Command
# (0-59) (0-23) (1-31) (1-12) (0-7, 0=Sunday)

# Examples:
0 2 * * *           # Daily at 2 AM
*/15 * * * *        # Every 15 minutes
0 0 1 * *           # First day of every month
0 9-17 * * 1-5      # Every hour from 9 AM to 5 PM, Monday to Friday
0 0 * * 0           # Every Sunday at midnight
```

**Cron Management:**
```bash
# View cron jobs
crontab -l                    # List current user's cron jobs
sudo crontab -l -u username   # List another user's cron jobs

# Edit cron jobs
crontab -e                    # Edit current user's cron jobs
sudo crontab -e -u username   # Edit another user's cron jobs

# Remove all cron jobs
crontab -r                    # Remove all cron jobs for current user

# System-wide cron
/etc/crontab                  # System cron table
/etc/cron.d/                  # Additional cron files
/etc/cron.daily/              # Daily scripts
/etc/cron.weekly/             # Weekly scripts
/etc/cron.monthly/            # Monthly scripts
```

**Automation Examples:**
```bash
# Backup script (backup.sh)
#!/bin/bash
BACKUP_DIR="/backup/$(date +%Y-%m-%d)"
SOURCE_DIRS="/home /etc"

mkdir -p "$BACKUP_DIR"
for dir in $SOURCE_DIRS; do
    tar -czf "$BACKUP_DIR/$(basename $dir).tar.gz" "$dir"
done

# System monitoring script (monitor.sh)
#!/bin/bash
THRESHOLD=80
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')

if [ "$DISK_USAGE" -gt "$THRESHOLD" ]; then
    echo "Disk usage is ${DISK_USAGE}% - exceeds threshold" | mail -s "Disk Alert" admin@example.com
fi

# Log rotation script (rotate_logs.sh)
#!/bin/bash
LOG_DIR="/var/log/myapp"
DAYS_TO_KEEP=30

find "$LOG_DIR" -name "*.log" -type f -mtime +$DAYS_TO_KEEP -delete
find "$LOG_DIR" -name "*.log" -type f -exec gzip {} \;
```

---

## Package & Software Management

### Debian/Ubuntu (APT)

**APT Package Management:**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `apt update` | Update package lists | `sudo apt update` | Always run before upgrade |
| `apt upgrade` | Upgrade packages | `sudo apt upgrade` | Upgrades installed packages |
| `apt install` | Install packages | `sudo apt install nginx` | Install new packages |
| `apt remove` | Remove packages | `sudo apt remove nginx` | Keep configuration files |
| `apt purge` | Remove completely | `sudo apt purge nginx` | Remove package and config |
| `apt search` | Search packages | `apt search web server` | Find packages by keyword |
| `apt show` | Package information | `apt show nginx` | Detailed package info |
| `apt list` | List packages | `apt list --installed` | Show installed packages |

**Advanced APT Usage:**
```bash
# Package information
apt-cache policy nginx        # Show available versions
apt-cache depends nginx       # Show dependencies
apt-cache rdepends nginx      # Show reverse dependencies

# Hold packages (prevent upgrades)
sudo apt-mark hold nginx      # Hold package at current version
sudo apt-mark unhold nginx    # Remove hold
apt-mark showhold             # Show held packages

# Source packages
apt source nginx              # Download source code
sudo apt build-dep nginx      # Install build dependencies

# Repository management
sudo add-apt-repository ppa:nginx/stable    # Add PPA
sudo add-apt-repository --remove ppa:nginx/stable  # Remove PPA

# Alternative sources.list management
/etc/apt/sources.list         # Main repository configuration
/etc/apt/sources.list.d/      # Additional repository files

# Package priorities and pinning
/etc/apt/preferences.d/       # Package pinning configuration
```

### RHEL/CentOS (YUM/DNF)

**YUM/DNF Package Management:**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `dnf update` | Update packages | `sudo dnf update` | DNF is newer than YUM |
| `dnf install` | Install packages | `sudo dnf install nginx` | Install new packages |
| `dnf remove` | Remove packages | `sudo dnf remove nginx` | Uninstall packages |
| `dnf search` | Search packages | `dnf search web server` | Find packages |
| `dnf info` | Package information | `dnf info nginx` | Detailed package info |
| `dnf list` | List packages | `dnf list installed` | Show installed packages |
| `dnf history` | Transaction history | `dnf history` | Show package operations |

**Advanced DNF Usage:**
```bash
# Repository management
sudo dnf config-manager --add-repo https://example.com/repo  # Add repository
sudo dnf config-manager --disable repo-name     # Disable repository
sudo dnf config-manager --enable repo-name      # Enable repository

# Package groups
dnf grouplist                 # List available groups
sudo dnf groupinstall "Development Tools"       # Install package group
sudo dnf groupremove "Development Tools"        # Remove package group

# Module streams (RHEL 8+)
dnf module list               # List available modules
sudo dnf module install nginx:1.18             # Install specific module stream
sudo dnf module reset nginx  # Reset module stream

# Clean up
sudo dnf clean all           # Clean package cache
sudo dnf autoremove          # Remove orphaned packages
```

**RPM Package Management:**
```bash
# RPM queries
rpm -qa                       # List all installed packages
rpm -qi package_name          # Package information
rpm -ql package_name          # List package files
rpm -qf /path/to/file         # Find package owning file

# RPM installation
sudo rpm -ivh package.rpm     # Install package
sudo rpm -Uvh package.rpm     # Upgrade package
sudo rpm -e package_name      # Remove package

# RPM verification
rpm -Va                       # Verify all packages
rpm -V package_name           # Verify specific package
```

### Universal Packages

**Snap Packages:**
```bash
# Snap management
sudo snap install package_name           # Install snap
sudo snap remove package_name            # Remove snap
snap list                                # List installed snaps
snap find keyword                        # Search for snaps
snap info package_name                   # Package information

# Snap channels
sudo snap install package_name --channel=beta    # Install from beta channel
sudo snap refresh package_name --channel=stable  # Switch to stable channel

# Snap permissions
snap connections                         # Show interface connections
sudo snap connect package_name:interface # Connect interface
sudo snap disconnect package_name:interface # Disconnect interface
```

**Flatpak Packages:**
```bash
# Flatpak management
flatpak install flathub org.package.Name        # Install from Flathub
flatpak uninstall org.package.Name              # Remove application
flatpak list                                    # List installed applications
flatpak search keyword                          # Search applications

# Repository management
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak remote-list                             # List repositories
flatpak update                                  # Update all applications

# Runtime management
flatpak list --runtime                          # List installed runtimes
flatpak uninstall --unused                      # Remove unused runtimes
```

**AppImage:**
```bash
# AppImage usage
chmod +x application.AppImage            # Make executable
./application.AppImage                   # Run application

# AppImage integration
# Install AppImageLauncher for desktop integration
sudo apt install appimagelauncher       # Ubuntu/Debian
```

### Source Compilation

**Building from Source:**
```bash
# Typical build process
./configure --prefix=/usr/local          # Configure build
make                                     # Compile source code
sudo make install                        # Install compiled program
sudo make uninstall                      # Uninstall (if supported)

# Alternative build systems
cmake .                                  # CMake configuration
make                                     # Build with make

meson build                              # Meson configuration
ninja -C build                           # Build with ninja

# Build dependencies (Debian/Ubuntu)
sudo apt build-dep package_name          # Install build dependencies
sudo apt install build-essential         # Essential build tools

# Build dependencies (RHEL/CentOS)
sudo dnf groupinstall "Development Tools"       # Development tools
sudo dnf builddep package_name           # Install build dependencies
```

---

## System Services

### Systemd Management

**Service Control:**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `systemctl start` | Start service | `sudo systemctl start nginx` | Start immediately |
| `systemctl stop` | Stop service | `sudo systemctl stop nginx` | Stop immediately |
| `systemctl restart` | Restart service | `sudo systemctl restart nginx` | Stop then start |
| `systemctl reload` | Reload config | `sudo systemctl reload nginx` | Reload without restart |
| `systemctl status` | Service status | `systemctl status nginx` | Show detailed status |
| `systemctl enable` | Enable at boot | `sudo systemctl enable nginx` | Start automatically |
| `systemctl disable` | Disable at boot | `sudo systemctl disable nginx` | Don't start at boot |
| `systemctl is-active` | Check if running | `systemctl is-active nginx` | Returns active/inactive |
| `systemctl is-enabled` | Check if enabled | `systemctl is-enabled nginx` | Returns enabled/disabled |

**System Control:**
```bash
# System state management
sudo systemctl reboot            # Restart system
sudo systemctl poweroff          # Shutdown system
sudo systemctl suspend           # Suspend system
sudo systemctl hibernate        # Hibernate system

# Service discovery
systemctl list-units            # List all units
systemctl list-units --type=service    # List only services
systemctl list-units --state=failed    # List failed units
systemctl list-unit-files       # List all unit files

# Service dependencies
systemctl list-dependencies nginx      # Show service dependencies
systemctl list-dependencies --reverse nginx  # Show what depends on service
```

### Service Configuration

**Systemd Unit File Structure:**
```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Application
Documentation=https://example.com/docs
After=network.target
Wants=network-online.target
Requires=postgresql.service

[Service]
Type=simple
User=myapp
Group=myapp
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/bin/myapp --config /etc/myapp/config.yaml
ExecReload=/bin/kill -HUP $MAINPID
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

**Service Types:**
| Type | Description | Use Case |
|------|-------------|----------|
| `simple` | Default, exec continues running | Long-running daemons |
| `forking` | Process forks and parent exits | Traditional daemons |
| `oneshot` | Process runs and exits | Scripts, setup tasks |
| `notify` | Service notifies systemd when ready | Modern applications |
| `idle` | Waits for other jobs to finish | Low priority services |

**Service Management Examples:**
```bash
# Create custom service
sudo tee /etc/systemd/system/myapp.service > /dev/null << EOF
[Unit]
Description=My Custom Application
After=network.target

[Service]
Type=simple
User=www-data
ExecStart=/usr/local/bin/myapp
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd and enable service
sudo systemctl daemon-reload
sudo systemctl enable myapp.service
sudo systemctl start myapp.service

# Monitor service logs
journalctl -u myapp.service -f       # Follow logs
journalctl -u myapp.service --since "1 hour ago"  # Recent logs
```

### Runlevels & Targets

**Systemd Targets (Runlevels):**
| Target | Runlevel | Description |
|--------|----------|-------------|
| `poweroff.target` | 0 | System shutdown |
| `rescue.target` | 1 | Single-user mode |
| `multi-user.target` | 3 | Multi-user, no GUI |
| `graphical.target` | 5 | Multi-user with GUI |
| `reboot.target` | 6 | System restart |

**Target Management:**
```bash
# View current target
systemctl get-default            # Show default target
systemctl list-units --type=target  # List active targets

# Change targets
sudo systemctl set-default multi-user.target   # Set default target
sudo systemctl isolate rescue.target           # Switch to rescue mode
sudo systemctl isolate graphical.target        # Switch to GUI mode

# Target dependencies
systemctl list-dependencies graphical.target   # Show target dependencies
systemctl show multi-user.target              # Detailed target information
```

**Creating Custom Targets:**
```ini
# /etc/systemd/system/myproject.target
[Unit]
Description=My Project Services
Requires=multi-user.target
After=multi-user.target
AllowIsolate=yes

[Install]
WantedBy=multi-user.target
```

---

## DevOps Essentials

### Containerization (Docker)

**Docker Basics:**
| Command | Description | Example | Notes |
|---------|-------------|---------|-------|
| `docker run` | Run container | `docker run -d nginx` | `-d` for detached mode |
| `docker ps` | List containers | `docker ps -a` | `-a` shows all containers |
| `docker images` | List images | `docker images` | Show local images |
| `docker pull` | Download image | `docker pull ubuntu:20.04` | Pull specific tag |
| `docker build` | Build image | `docker build -t myapp .` | Build from Dockerfile |
| `docker exec` | Execute in container | `docker exec -it container bash` | Interactive shell |
| `docker logs` | View logs | `docker logs container` | Show container output |
| `docker stop` | Stop container | `docker stop container` | Graceful shutdown |
| `docker rm` | Remove container | `docker rm container` | Delete container |
| `docker rmi` | Remove image | `docker rmi image` | Delete image |

**Dockerfile Example:**
```dockerfile
# Multi-stage build example
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine AS runtime
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
```

**Docker Compose:**
```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
      - redis
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

**Container Management:**
```bash
# Docker container operations
docker run -d --name myapp -p 8080:80 -v /host/path:/container/path nginx
docker exec -it myapp /bin/bash
docker cp file.txt myapp:/tmp/
docker stats myapp                     # Resource usage

# Docker networking
docker network create mynetwork        # Create network
docker run --network mynetwork myapp   # Connect to network
docker network ls                      # List networks

# Docker volumes
docker volume create myvolume          # Create volume
docker run -v myvolume:/data myapp     # Use volume
docker volume ls                       # List volumes

# Docker system management
docker system prune                    # Clean up unused resources
docker system df                       # Show disk usage
```

### Orchestration (Kubernetes)

**Kubernetes Core Concepts:**
- **Pod**: Smallest deployable unit
- **Service**: Network access to pods
- **Deployment**: Manages pod replicas
- **Namespace**: Virtual clusters
- **ConfigMap**: Configuration data
- **Secret**: Sensitive data

**Basic Kubernetes Commands:**
```bash
# Cluster information
kubectl cluster-info                   # Cluster details
kubectl get nodes                      # List cluster nodes
kubectl describe node node-name       # Node details

# Pod management
kubectl get pods                       # List pods
kubectl get pods -n namespace          # Pods in specific namespace
kubectl describe pod pod-name          # Pod details
kubectl logs pod-name                  # Pod logs
kubectl exec -it pod-name -- bash     # Execute in pod

# Deployment management
kubectl create deployment nginx --image=nginx:1.20
kubectl get deployments
kubectl scale deployment nginx --replicas=3
kubectl rollout status deployment nginx
kubectl rollout undo deployment nginx

# Service management
kubectl expose deployment nginx --port=80 --type=LoadBalancer
kubectl get services
kubectl describe service nginx
```

**Kubernetes YAML Examples:**
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"

---
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

### CI/CD Pipelines

**GitHub Actions Example:**
```yaml
# .github/workflows/deploy.yml
name: Deploy Application

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
        cache: 'npm'
    - run: npm ci
    - run: npm test
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to server
      run: |
        echo "$DEPLOY_KEY" > deploy_key
        chmod 600 deploy_key
        ssh -i deploy_key user@server "cd /app && git pull && docker-compose up -d"
      env:
        DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
```

**GitLab CI Example:**
```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

variables:
  DOCKER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA

test:
  stage: test
  image: node:16
  script:
    - npm ci
    - npm test
  coverage: '/Coverage: \d+\.\d+%/'

build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t $DOCKER_IMAGE .
    - docker push $DOCKER_IMAGE
  only:
    - main

deploy:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache openssh-client
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
  script:
    - ssh user@server "docker pull $DOCKER_IMAGE && docker-compose up -d"
  only:
    - main
  environment:
    name: production
    url: https://myapp.com
```

### Configuration Management

**Ansible Basics:**
```yaml
# inventory.yml
all:
  children:
    webservers:
      hosts:
        web1.example.com:
        web2.example.com:
    databases:
      hosts:
        db1.example.com:
      vars:
        mysql_port: 3306

# playbook.yml
---
- name: Configure web servers
  hosts: webservers
  become: yes
  vars:
    nginx_version: 1.20
  tasks:
    - name: Install nginx
      package:
        name: nginx
        state: present
    
    - name: Start nginx service
      service:
        name: nginx
        state: started
        enabled: yes
    
    - name: Copy nginx configuration
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
      notify: restart nginx
  
  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted
```

**Terraform Example:**
```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "web" {
  count         = var.instance_count
  ami           = var.ami_id
  instance_type = var.instance_type
  
  vpc_security_group_ids = [aws_security_group.web.id]
  
  tags = {
    Name = "web-server-${count.index + 1}"
    Environment = var.environment
  }
}

resource "aws_security_group" "web" {
  name        = "web-sg"
  description = "Security group for web servers"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.admin_cidr]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# variables.tf
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "instance_count" {
  description = "Number of instances"
  type        = number
  default     = 2
}
```

---

## Cybersecurity & Ethical Hacking

### Security Fundamentals

**Security Principles:**
1. **CIA Triad**:
   - **Confidentiality**: Information access control
   - **Integrity**: Data accuracy and completeness
   - **Availability**: System and data accessibility

2. **Defense in Depth**: Multiple security layers
3. **Principle of Least Privilege**: Minimal access rights
4. **Zero Trust**: Never trust, always verify

**Common Vulnerabilities:**
- **OWASP Top 10**: Web application vulnerabilities
- **CVE Database**: Common vulnerabilities and exposures
- **Buffer Overflows**: Memory corruption attacks
- **SQL Injection**: Database query manipulation
- **Cross-Site Scripting (XSS)**: Client-side code injection
- **Cross-Site Request Forgery (CSRF)**: Unauthorized actions

### Reconnaissance Tools

**Network Discovery:**
| Tool | Purpose | Example | Notes |
|------|---------|---------|-------|
| `nmap` | Network/port scanning | `nmap -sS -O target.com` | Most versatile scanner |
| `masscan` | High-speed port scanner | `masscan -p1-65535 192.168.1.0/24` | Extremely fast |
| `zmap` | Internet-wide scanning | `zmap -p 80 -o results.txt` | Single port, many hosts |
| `netdiscover` | Network discovery | `netdiscover -r 192.168.1.0/24` | ARP-based discovery |

**Information Gathering:**
```bash
# Nmap comprehensive scanning
nmap -sS -sV -sC -O -A target.com    # Aggressive scan
nmap --script vuln target.com        # Vulnerability scripts
nmap --script=http-enum target.com   # HTTP enumeration
nmap --script=dns-brute target.com   # DNS brute forcing

# DNS reconnaissance
dig target.com ANY                   # All DNS records
dig @8.8.8.8 target.com axfr        # Zone transfer attempt
fierce -dns target.com               # DNS subdomain scanner
dnsrecon -d target.com -t std        # DNS enumeration

# Web application reconnaissance
whatweb target.com                   # Web technology identification
nikto -h target.com                  # Web vulnerability scanner
dirb http://target.com wordlist.txt  # Directory brute forcing
gobuster dir -u http://target.com -w /usr/share/wordlists/common.txt

# OSINT (Open Source Intelligence)
whois target.com                     # Domain information
theHarvester -d target.com -b google # Email harvesting
shodan search "apache 2.4.1"        # Shodan search engine
```

### Vulnerability Assessment

**Vulnerability Scanners:**
| Tool | Type | Purpose | Notes |
|------|------|---------|-------|
| `nessus` | Commercial | Comprehensive vulnerability scanning | Industry standard |
| `openvas` | Open source | Network vulnerability scanner | Free alternative |
| `nuclei` | Open source | Fast vulnerability scanner | Template-based |
| `nikto` | Open source | Web server scanner | HTTP-focused |

**Web Application Testing:**
```bash
# OWASP ZAP (Web Application Security Scanner)
zaproxy                              # GUI interface
zap-baseline.py -t http://target.com # Baseline scan
zap-full-scan.py -t http://target.com # Full scan

# Burp Suite (Professional web app testing)
# GUI-based tool for intercepting and manipulating web traffic

# SQLmap (SQL injection testing)
sqlmap -u "http://target.com/page.php?id=1" --dbs    # Database enumeration
sqlmap -u "http://target.com/page.php?id=1" --dump   # Data extraction

# XSS testing
# Manual testing with payloads:
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
```

### Penetration Testing

**Exploitation Frameworks:**
```bash
# Metasploit Framework
msfconsole                           # Start Metasploit console
search ms17-010                      # Search for exploits
use exploit/windows/smb/ms17_010_eternalblue  # Select exploit
set RHOSTS target_ip                 # Set target
set PAYLOAD windows/x64/meterpreter/reverse_tcp  # Set payload
exploit                              # Run exploit

# Post-exploitation with Meterpreter
sysinfo                              # System information
getuid                               # Current user
ps                                   # Running processes
migrate 1234                         # Migrate to process
hashdump                             # Extract password hashes
```

**Network Exploitation:**
```bash
# Exploit tools
searchsploit apache 2.4.1           # Search exploit database
exploit-db                           # Local exploit database

# Buffer overflow testing
python -c "print 'A' * 1000"        # Generate overflow string
gdb program                          # Debug program
pattern_create.rb -l 1000            # Create unique pattern
pattern_offset.rb -q 0x41414141      # Find offset

# Network sniffing
tcpdump -i eth0 -w capture.pcap      # Capture packets
wireshark                            # GUI packet analyzer
ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100//  # ARP poisoning
```

### Digital Forensics

**Evidence Collection:**
```bash
# Disk imaging
dd if=/dev/sda of=/evidence/disk.img bs=1M status=progress  # Raw copy
dc3dd if=/dev/sda of=/evidence/disk.img hash=md5            # Forensic copy
ewfacquire /dev/sda                  # Expert Witness Format

# Memory acquisition
LiME (Linux Memory Extractor)        # Acquire RAM
volatility -f memory.dump imageinfo  # Analyze memory dump

# File system analysis
autopsy                              # GUI forensic tool
sleuthkit tools:
  fls -r disk.img                    # List files
  icat disk.img 1234 > recovered.txt # Extract file by inode
  mmls disk.img                      # Show partitions
```

**Log Analysis:**
```bash
# System log analysis
last                                 # Login history
lastb                                # Failed login attempts
journalctl --since "2024-01-01"     # Systemd logs
grep "Failed password" /var/log/auth.log  # Failed SSH attempts

# Web log analysis
awk '{print $1}' /var/log/apache2/access.log | sort | uniq -c | sort -nr
grep "404" /var/log/nginx/access.log
goaccess /var/log/apache2/access.log --log-format=COMBINED -o report.html
```

---

## System Hardening

### Firewall Configuration

**iptables (Traditional Linux Firewall):**
```bash
# Basic iptables rules
# Allow loopback
iptables -A INPUT -i lo -j ACCEPT

# Allow established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow SSH
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Drop everything else
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Save rules
iptables-save > /etc/iptables/rules.v4

# Advanced rules
# Rate limiting SSH
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 4 -j DROP

# Block specific IPs
iptables -A INPUT -s 192.168.1.100 -j DROP

# Port forwarding
iptables -t nat -A PREROUTING -p tcp --dport 8080 -j REDIRECT --to-port 80
```

**UFW (Uncomplicated Firewall):**
```bash
# UFW basic usage
sudo ufw enable                      # Enable firewall
sudo ufw default deny incoming       # Default deny incoming
sudo ufw default allow outgoing      # Default allow outgoing

# Allow services
sudo ufw allow ssh                   # Allow SSH (port 22)
sudo ufw allow 80/tcp               # Allow HTTP
sudo ufw allow 'Nginx Full'         # Allow Nginx profile

# Specific rules
sudo ufw allow from 192.168.1.0/24  # Allow from subnet
sudo ufw deny from 192.168.1.100    # Block specific IP
sudo ufw allow out 53                # Allow DNS outgoing

# View rules
sudo ufw status verbose              # Show detailed status
sudo ufw status numbered             # Show rule numbers
sudo ufw delete 2                    # Delete rule by number
```

**firewalld (RHEL/CentOS):**
```bash
# Firewalld management
sudo firewall-cmd --state            # Check status
sudo firewall-cmd --get-default-zone # Show default zone
sudo firewall-cmd --list-all         # List all rules

# Zone management
sudo firewall-cmd --get-zones        # List available zones
sudo firewall-cmd --zone=public --add-service=http --permanent
sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent
sudo firewall-cmd --reload           # Apply changes

# Rich rules
sudo firewall-cmd --add-rich-rule='rule family="ipv4" source address="192.168.1.0/24" accept' --permanent
```

### Access Control

**SSH Hardening:**
```bash
# /etc/ssh/sshd_config security settings
Protocol 2                           # Use SSH protocol 2 only
Port 2222                            # Change default port
PermitRootLogin no                    # Disable root login
PasswordAuthentication no            # Use key-based auth only
PubkeyAuthentication yes             # Enable key authentication
MaxAuthTries 3                       # Limit authentication attempts
ClientAliveInterval 300              # Timeout idle connections
ClientAliveCountMax 2                # Max idle connection checks
AllowUsers username                  # Limit users who can SSH
DenyUsers baduser                    # Explicitly deny users

# SSH key management
ssh-keygen -t ed25519 -C "user@host" # Generate secure key
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@host  # Copy public key

# SSH with additional security
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no user@host  # Testing
ssh -o PasswordAuthentication=no user@host    # Force key authentication
```

**User Account Security:**
```bash
# Password policies
# /etc/security/pwquality.conf
minlen = 12                          # Minimum password length
dcredit = -1                         # Require digits
ucredit = -1                         # Require uppercase
lcredit = -1                         # Require lowercase
ocredit = -1                         # Require special characters

# Account lockout
# /etc/security/faillock.conf
deny = 5                             # Lock after 5 failed attempts
unlock_time = 900                    # Unlock after 15 minutes

# Sudo security
# /etc/sudoers
Defaults timestamp_timeout=15        # Sudo timeout
Defaults requiretty                  # Require TTY for sudo
Defaults log_input,log_output        # Log sudo commands
```

### Intrusion Detection

**Fail2Ban Configuration:**
```bash
# Install and configure Fail2Ban
sudo apt install fail2ban            # Install (Debian/Ubuntu)

# /etc/fail2ban/jail.local
[DEFAULT]
bantime = 3600                       # Ban for 1 hour
findtime = 600                       # Find failures in 10 minutes
maxretry = 3                         # Max 3 attempts
backend = systemd                    # Use systemd backend

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
logpath = /var/log/nginx/error.log
maxretry = 3

# Fail2Ban management
sudo fail2ban-client status          # Show jails
sudo fail2ban-client status sshd     # Show SSH jail status
sudo fail2ban-client unban 192.168.1.100  # Unban IP
```

**AIDE (Advanced Intrusion Detection Environment):**
```bash
# Install and configure AIDE
sudo apt install aide                # Install AIDE

# Initialize database
sudo aide --init                     # Create initial database
sudo mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db

# Check for changes
sudo aide --check                    # Check for file changes
sudo aide --update                   # Update database

# /etc/aide/aide.conf configuration
/bin p+i+n+u+g+s+b+m+c+md5+sha1     # Monitor /bin directory
/etc p+i+n+u+g+s+b+m+c+md5+sha1     # Monitor /etc directory
!/var/log                            # Exclude log directory
```

### Security Auditing

**System Security Auditing:**
```bash
# Lynis security auditing
sudo lynis audit system              # Comprehensive security audit
sudo lynis show profiles             # Show audit profiles
sudo lynis show tests                # Show available tests

# CIS-CAT (Center for Internet Security)
# Commercial tool for CIS benchmark compliance

# OpenSCAP security compliance
sudo apt install libopenscap8        # Install OpenSCAP
oscap info /usr/share/xml/scap/ssg/content/ssg-ubuntu1804-ds.xml  # Show profiles
sudo oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_standard --results results.xml /usr/share/xml/scap/ssg/content/ssg-ubuntu1804-ds.xml
```

**Log Monitoring:**
```bash
# Logwatch configuration
sudo apt install logwatch            # Install Logwatch
sudo logwatch --detail high --service ssh --range yesterday  # SSH log summary

# OSSEC HIDS (Host Intrusion Detection System)
# Real-time log analysis and intrusion detection

# ELK Stack (Elasticsearch, Logstash, Kibana)
# Centralized logging and analysis platform
```

---

## Advanced Topics

### Kernel & Modules

**Kernel Information:**
```bash
# Kernel version and information
uname -r                             # Kernel version
uname -a                             # All system information
cat /proc/version                    # Detailed kernel version
hostnamectl                          # System information including kernel

# Kernel configuration
cat /proc/config.gz | gunzip         # Current kernel config (if available)
cat /boot/config-$(uname -r)        # Kernel config file

# Kernel parameters
cat /proc/cmdline                    # Boot parameters
sysctl -a                           # All kernel parameters
sysctl kernel.hostname              # Specific parameter
sudo sysctl -w net.ipv4.ip_forward=1  # Set parameter temporarily

# Permanent kernel parameters
# /etc/sysctl.conf
net.ipv4.ip_forward=1               # Enable IP forwarding
vm.swappiness=10                     # Reduce swap usage
fs.file-max=65536                   # Increase file limit
```

**Module Management:**
```bash
# List modules
lsmod                               # Currently loaded modules
modinfo module_name                 # Module information
find /lib/modules/$(uname -r) -name "*.ko"  # All available modules

# Load/unload modules
sudo modprobe module_name           # Load module
sudo modprobe -r module_name        # Unload module
sudo insmod /path/to/module.ko      # Insert module directly
sudo rmmod module_name              # Remove module

# Module configuration
/etc/modules                        # Modules to load at boot
/etc/modprobe.conf                  # Module parameters
/etc/modprobe.d/                    # Additional module configs

# Module blacklisting
# /etc/modprobe.d/blacklist.conf
blacklist module_name               # Prevent module from loading
```

### System Calls

**System Call Tracing:**
```bash
# strace - trace system calls
strace ls                           # Trace ls command
strace -o output.txt command        # Save trace to file
strace -p 1234                      # Trace running process
strace -e open ls                   # Trace only open syscalls
strace -c ls                        # Summary of syscall counts

# ltrace - trace library calls
ltrace ls                           # Trace library calls
ltrace -p 1234                      # Trace running process

# System call monitoring
sudo perf record -g command         # Record performance data
sudo perf report                    # Analyze performance data
```

**Process Debugging:**
```bash
# GDB debugging
gdb program                         # Start GDB
gdb -p 1234                        # Attach to running process
(gdb) run                          # Run program
(gdb) bt                           # Backtrace
(gdb) info registers               # Show registers
(gdb) x/10i $pc                    # Disassemble

# Core dump analysis
ulimit -c unlimited                # Enable core dumps
gdb program core                   # Analyze core dump
```

### Memory Management

**Memory Information:**
```bash
# Memory statistics
cat /proc/meminfo                   # Detailed memory information
cat /proc/buddyinfo                # Memory fragmentation
cat /proc/slabinfo                 # Kernel slab allocator
cat /proc/vmstat                   # Virtual memory statistics

# Process memory
cat /proc/PID/maps                 # Process memory mapping
cat /proc/PID/smaps                # Detailed memory mapping
cat /proc/PID/status               # Process status including memory

# Memory debugging
valgrind --leak-check=full program # Memory leak detection
```

**Virtual Memory Tuning:**
```bash
# VM parameters
echo 10 > /proc/sys/vm/swappiness  # Reduce swap usage
echo 1 > /proc/sys/vm/overcommit_memory  # Always overcommit
echo 100 > /proc/sys/vm/dirty_ratio  # Dirty page ratio

# Huge pages
echo 1024 > /proc/sys/vm/nr_hugepages  # Set huge pages
mount -t hugetlbfs none /mnt/hugepages  # Mount huge pages filesystem
```

### Custom Compilation

**Kernel Compilation:**
```bash
# Download kernel source
wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.15.tar.xz
tar -xf linux-5.15.tar.xz
cd linux-5.15

# Configure kernel
make menuconfig                     # Interactive configuration
make oldconfig                     # Use existing config
cp /boot/config-$(uname -r) .config  # Use current kernel config

# Compile kernel
make -j$(nproc)                     # Compile using all CPU cores
make modules                        # Compile modules
sudo make modules_install           # Install modules
sudo make install                   # Install kernel

# Update bootloader
sudo update-grub                    # Ubuntu/Debian
sudo grub2-mkconfig -o /boot/grub2/grub.cfg  # RHEL/CentOS
```

**Software Compilation Optimization:**
```bash
# GCC optimization flags
export CFLAGS="-O3 -march=native -mtune=native"
export CXXFLAGS="$CFLAGS"

# Configure and build
./configure --prefix=/usr/local --enable-optimizations
make -j$(nproc) CFLAGS="$CFLAGS"
sudo make install

# Profile-guided optimization
./configure --enable-pgo
make profile-opt
```

---

## Practical Projects

### Lab Environment Setup

**Virtual Lab with VirtualBox/VMware:**
```bash
# VirtualBox management
VBoxManage list vms                 # List virtual machines
VBoxManage startvm "VM Name"        # Start VM
VBoxManage controlvm "VM Name" poweroff  # Power off VM

# Create test environment
VBoxManage createvm --name "TestLab" --register
VBoxManage modifyvm "TestLab" --memory 2048 --cpus 2
VBoxManage createhd --filename TestLab.vdi --size 20000
VBoxManage storagectl "TestLab" --name "SATA Controller" --add sata
VBoxManage storageattach "TestLab" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium TestLab.vdi
```

**Docker Lab Environment:**
```yaml
# docker-compose.yml for security lab
version: '3.8'
services:
  kali:
    image: kalilinux/kali-rolling
    container_name: kali-lab
    stdin_open: true
    tty: true
    volumes:
      - ./shared:/shared
    networks:
      - lab-network

  ubuntu-target:
    image: ubuntu:20.04
    container_name: ubuntu-target
    stdin_open: true
    tty: true
    volumes:
      - ./shared:/shared
    networks:
      - lab-network

  vulnerable-app:
    image: vulnerables/web-dvwa
    container_name: dvwa
    ports:
      - "8080:80"
    networks:
      - lab-network

networks:
  lab-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

### Server Administration

**Web Server Setup (LEMP Stack):**
```bash
#!/bin/bash
# LEMP Stack Installation Script

# Update system
sudo apt update && sudo apt upgrade -y

# Install Nginx
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Install MySQL
sudo apt install mysql-server -y
sudo mysql_secure_installation

# Install PHP
sudo apt install php-fpm php-mysql php-curl php-gd php-mbstring php-xml php-zip -y

# Configure Nginx for PHP
sudo tee /etc/nginx/sites-available/default > /dev/null << 'EOF'
server {
    listen 80 default_server;
    root /var/www/html;
    index index.php index.html;
    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }
}
EOF

# Test PHP
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php

# Restart services
sudo systemctl restart nginx
sudo systemctl restart php8.1-fpm

echo "LEMP stack installed successfully!"
echo "Visit http://your-server-ip/info.php to test PHP"
```

**Database Administration:**
```bash
# MySQL/MariaDB administration
sudo mysql -u root -p
CREATE DATABASE myapp;
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON myapp.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

# PostgreSQL administration
sudo -u postgres createdb myapp
sudo -u postgres createuser appuser
sudo -u postgres psql -c "ALTER USER appuser PASSWORD 'strong_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE myapp TO appuser;"

# Database backup scripts
#!/bin/bash
# MySQL backup
mysqldump -u root -p myapp > backup_$(date +%Y%m%d).sql

# PostgreSQL backup
pg_dump -U appuser myapp > backup_$(date +%Y%m%d).sql

# Automated backup with compression and rotation
tar -czf backup_$(date +%Y%m%d).tar.gz backup_$(date +%Y%m%d).sql
find /backup -name "backup_*.tar.gz" -mtime +7 -delete
```

### Security Challenges

**Vulnerable Application Setup:**
```bash
# DVWA (Damn Vulnerable Web Application)
docker run -d -p 8080:80 vulnerables/web-dvwa

# Metasploitable (Vulnerable Linux)
# Download from Rapid7 website
# Run in isolated network environment

# WebGoat (OWASP Web Security Training)
docker run -d -p 8081:8080 webgoat/goatandwolf

# VulnHub VMs
# Download various vulnerable VMs from vulnhub.com
```

**Security Testing Checklist:**
```bash
#!/bin/bash
# Security assessment script

echo "=== Security Assessment Started ==="

# Network scan
nmap -sS -sV -O $TARGET_IP > nmap_results.txt

# Web application scan
nikto -h http://$TARGET_IP > nikto_results.txt

# SSL/TLS assessment
sslscan $TARGET_IP:443 > ssl_results.txt

# Check for common vulnerabilities
# SQL injection test
sqlmap -u "http://$TARGET_IP/vulnerable.php?id=1" --batch

# XSS testing
echo "Testing for XSS vulnerabilities..."
curl -X POST -d "input=<script>alert('XSS')</script>" http://$TARGET_IP/form.php

echo "=== Security Assessment Completed ==="
echo "Review the generated report files for vulnerabilities"
```

### Automation Scripts

**System Maintenance Script:**
```bash
#!/bin/bash
# Comprehensive system maintenance script

LOG_FILE="/var/log/system_maintenance.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

log_message() {
    echo "[$DATE] $1" | tee -a $LOG_FILE
}

log_message "Starting system maintenance"

# Update package lists
log_message "Updating package lists..."
apt update

# Upgrade packages
log_message "Upgrading packages..."
apt upgrade -y

# Clean package cache
log_message "Cleaning package cache..."
apt autoremove -y
apt autoclean

# Update locate database
log_message "Updating locate database..."
updatedb

# Clean temporary files
log_message "Cleaning temporary files..."
find /tmp -type f -atime +7 -delete
find /var/tmp -type f -atime +7 -delete

# Rotate logs
log_message "Rotating logs..."
logrotate /etc/logrotate.conf

# Check disk space
log_message "Checking disk space..."
df -h | grep -E '^/dev/' | awk '{if($5+0 > 80) print "Warning: " $1 " is " $5 " full"}'

# Check system load
log_message "Current system load:"
uptime

# Memory usage
log_message "Memory usage:"
free -h

log_message "System maintenance completed"
```

**Backup Automation Script:**
```bash
#!/bin/bash
# Automated backup script with rotation

BACKUP_SOURCE="/home /etc /var/log"
BACKUP_DEST="/backup"
RETENTION_DAYS=30
COMPRESSION="gzip"
EXCLUDE_FILE="/etc/backup_exclude.txt"

# Create exclude file if it doesn't exist
cat > $EXCLUDE_FILE << EOF
*.tmp
*.cache
*.log
/var/log/journal
EOF

# Create backup
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DEST/backup_$DATE.tar.gz"

echo "Starting backup to $BACKUP_FILE"

tar --exclude-from=$EXCLUDE_FILE \
    --create \
    --gzip \
    --file="$BACKUP_FILE" \
    $BACKUP_SOURCE

if [ $? -eq 0 ]; then
    echo "Backup completed successfully"
    
    # Calculate backup size
    SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
    echo "Backup size: $SIZE"
    
    # Remove old backups
    find $BACKUP_DEST -name "backup_*.tar.gz" -mtime +$RETENTION_DAYS -delete
    echo "Old backups removed (older than $RETENTION_DAYS days)"
    
    # Send notification (optional)
    # mail -s "Backup Completed" admin@example.com < /dev/null
else
    echo "Backup failed!"
    exit 1
fi
```

---

## Resources & References

### Essential Reading

**Books:**
1. **"The Linux Command Line"** by William Shotts
   - Excellent introduction to command line usage
   - Covers shell scripting fundamentals

2. **"Linux System Administration"** by Tom Adelstein
   - Comprehensive system administration guide
   - Real-world scenarios and solutions

3. **"The Art of Unix Programming"** by Eric S. Raymond
   - Philosophy and design principles
   - Historical context and best practices

4. **"Linux Security Cookbook"** by Daniel J. Barrett
   - Practical security recipes
   - Step-by-step security implementations

5. **"Docker Deep Dive"** by Nigel Poulton
   - Container technology mastery
   - Production deployment strategies

**Documentation:**
- **Linux Documentation Project**: tldp.org
- **Arch Linux Wiki**: wiki.archlinux.org (excellent for all distributions)
- **Red Hat Documentation**: access.redhat.com/documentation
- **Ubuntu Documentation**: help.ubuntu.com
- **Debian Administrator's Handbook**: debian-handbook.info

### Online Platforms

**Learning Platforms:**
1. **Linux Journey** (linuxjourney.com)
   - Interactive Linux learning
   - Beginner to advanced topics
   - Hands-on exercises

2. **OverTheWire** (overthewire.org)
   - Security-focused challenges
   - Wargames for skill development
   - Progressive difficulty levels

3. **Hack The Box** (hackthebox.eu)
   - Penetration testing labs
   - Real-world scenarios
   - Community-driven learning

4. **TryHackMe** (tryhackme.com)
   - Beginner-friendly security training
   - Guided learning paths
   - Interactive virtual machines

5. **Linux Academy/A Cloud Guru**
   - Comprehensive Linux courses
   - Cloud platform integration
   - Hands-on labs

**Practice Environments:**
- **Katacoda**: Interactive Linux scenarios
- **Play with Docker**: Browser-based Docker playground
- **Vagrant**: Reproducible development environments
- **VulnHub**: Vulnerable VMs for practice

### Certification Paths

**Linux Professional Institute (LPI):**
- **LPIC-1**: Linux Administrator (101-102)
- **LPIC-2**: Linux Engineer (201-202)
- **LPIC-3**: Linux Enterprise Professional (300, 303, 304)

**Red Hat Certifications:**
- **RHCSA**: Red Hat Certified System Administrator
- **RHCE**: Red Hat Certified Engineer
- **RHCA**: Red Hat Certified Architect

**CompTIA:**
- **Linux+**: Vendor-neutral Linux certification
- **Security+**: Foundation security knowledge
- **PenTest+**: Penetration testing skills

**Offensive Security:**
- **OSCP**: Offensive Security Certified Professional
- **OSCE**: Offensive Security Certified Expert
- **OSEE**: Offensive Security Exploitation Expert

### Community Resources

**Forums and Communities:**
- **r/linux** (Reddit): Active Linux community
- **Linux Questions**: Comprehensive Q&A platform
- **Stack Overflow**: Programming and command-line help
- **Ask Ubuntu**: Ubuntu-specific questions
- **CentOS Forums**: RHEL/CentOS community

**IRC Channels:**
- **#linux** on Freenode: General Linux discussion
- **#ubuntu** on Freenode: Ubuntu support
- **#debian** on OFTC: Debian support
- **#centos** on Freenode: CentOS support

**Professional Networks:**
- **LinkedIn Linux Groups**: Professional networking
- **Local Linux User Groups (LUGs)**: Face-to-face meetups
- **DevOps/SRE Meetups**: Practical application discussions

**Blogs and News:**
- **Linux.com**: Linux news and tutorials
- **DistroWatch**: Distribution news and reviews
- **Phoronix**: Linux hardware and performance news
- **It's FOSS**: Beginner-friendly Linux content

---

## Quick Reference Cards

### Essential Command Cheat Sheet

```bash
# File Operations
ls -la                  # Detailed file listing
cp -r source/ dest/     # Copy directory recursively
mv oldname newname      # Move/rename files
rm -rf directory/       # Remove directory forcefully
find / -name "filename" # Find files by name
grep "pattern" file     # Search text in files

# Permissions
chmod 755 file          # Set permissions (rwxr-xr-x)
chown user:group file   # Change ownership
sudo command            # Execute as root

# Process Management
ps aux                  # List all processes
top                     # Real-time process viewer
kill -9 PID            # Force kill process
jobs                    # List background jobs
nohup command &         # Run in background

# Network
ping host               # Test connectivity
ssh user@host          # Remote connection
scp file user@host:/path # Secure file copy
netstat -tuln          # Network connections

# System Info
df -h                   # Disk space usage
free -h                 # Memory usage
uname -a               # System information
lscpu                  # CPU information
```

### Security Quick Reference

```bash
# Firewall
sudo ufw enable         # Enable UFW firewall
sudo ufw allow ssh      # Allow SSH
sudo ufw status         # Check firewall status

# User Management
sudo useradd -m username    # Add user with home directory
sudo usermod -aG sudo user  # Add user to sudo group
sudo passwd username        # Change user password

# File Security
find / -perm 777 2>/dev/null           # Find world-writable files
find / -type f -perm -4000 2>/dev/null # Find SUID files
lsof -i                                # List open network connections

# Log Analysis
tail -f /var/log/auth.log    # Monitor authentication logs
grep "Failed password" /var/log/auth.log  # Find failed logins
last                         # Show login history
```

---

This comprehensive Linux Mastery guide covers everything from basic commands to advanced cybersecurity techniques. Use it as your reference companion throughout your Linux journey, whether you're a beginner learning the basics or an experienced professional diving into DevOps and security.

Remember: **Practice makes perfect**. Set up virtual machines, experiment with commands, break things (safely), and learn from the experience. The Linux community is vast and helpful – don't hesitate to ask questions and contribute back to the community as you grow your skills.

**Happy Learning! 🐧**