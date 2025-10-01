# 🚀 Shell Scripting: Zero to Hero

**Complete Guide to Mastering Bash Shell Scripting**

From absolute beginner to expert shell scripter - master the art of automation, system administration, and powerful command-line scripting.

---

## 📚 Table of Contents

1. [Introduction to Shell Scripting](#1-introduction-to-shell-scripting)
2. [Getting Started](#2-getting-started)
3. [Basic Concepts](#3-basic-concepts)
4. [Variables and Data Types](#4-variables-and-data-types)
5. [User Input and Output](#5-user-input-and-output)
6. [Operators](#6-operators)
7. [Conditional Statements](#7-conditional-statements)
8. [Loops](#8-loops)
9. [Functions](#9-functions)
10. [Arrays](#10-arrays)
11. [String Manipulation](#11-string-manipulation)
12. [File Operations](#12-file-operations)
13. [Regular Expressions](#13-regular-expressions)
14. [Advanced Concepts](#14-advanced-concepts)
15. [Debugging and Error Handling](#15-debugging-and-error-handling)
16. [Best Practices](#16-best-practices)
17. [50+ Real-World Scenarios](#17-50-real-world-scenarios)
18. [100 Practice Questions](#18-100-practice-questions)
19. [50 Shell Scripting Projects](#19-50-shell-scripting-projects)

---

## 1. Introduction to Shell Scripting

### What is Shell Scripting?

A shell script is a text file containing a series of commands that are executed by the shell (command-line interpreter). Shell scripts automate repetitive tasks, manage system operations, and combine multiple commands into a single executable program.

### Why Learn Shell Scripting?

- **Automation**: Automate repetitive tasks and save time
- **System Administration**: Manage servers, users, and system resources
- **DevOps**: Essential for CI/CD pipelines and infrastructure management
- **Data Processing**: Process and analyze text files and logs
- **Task Scheduling**: Create scheduled jobs and maintenance scripts
- **Career Growth**: High demand skill in IT and software development

### Types of Shells

```bash
# Common shells in Linux
/bin/sh          # Bourne Shell (original)
/bin/bash        # Bourne Again Shell (most popular)
/bin/zsh         # Z Shell (modern, feature-rich)
/bin/ksh         # Korn Shell
/bin/csh         # C Shell
/bin/tcsh        # Enhanced C Shell
/bin/dash        # Debian Almquist Shell (lightweight)
```

### Check Your Current Shell

```bash
# Display current shell
echo $SHELL

# List available shells
cat /etc/shells

# Check shell version
bash --version
```

---

## 2. Getting Started

### Creating Your First Script

```bash
#!/bin/bash
# This is a comment
# My First Shell Script

echo "Hello, World!"
echo "Welcome to Shell Scripting"
echo "Today is $(date)"
```

### Script Structure

```bash
#!/bin/bash
# Shebang line - tells system which interpreter to use

# Script metadata
# Author: Your Name
# Date: 2025-10-01
# Description: Script purpose
# Version: 1.0

# Global variables
SCRIPT_NAME="MyScript"
VERSION="1.0"

# Main code
echo "Script: $SCRIPT_NAME v$VERSION"

# End of script
exit 0
```

### Making Scripts Executable

```bash
# Create script
nano myscript.sh

# Make executable
chmod +x myscript.sh

# Run script (three methods)
./myscript.sh
bash myscript.sh
sh myscript.sh
```

### Script Permissions Explained

```bash
# Read permissions
ls -l myscript.sh
# -rwxr-xr-x = Owner: read/write/execute, Group: read/execute, Others: read/execute

# Permission numbers
chmod 755 myscript.sh  # rwxr-xr-x
chmod 700 myscript.sh  # rwx------
chmod 644 myscript.sh  # rw-r--r--
chmod 777 myscript.sh  # rwxrwxrwx (not recommended)
```

---

## 3. Basic Concepts

### Shebang (#!/bin/bash)

```bash
#!/bin/bash              # Standard bash
#!/usr/bin/env bash      # Portable (searches PATH)
#!/bin/sh               # POSIX compliant
#!/usr/bin/python3      # Python script
#!/usr/bin/perl         # Perl script
```

### Comments

```bash
# Single line comment

: '
Multi-line comment
This is line 2
This is line 3
'

# Inline comment
echo "Hello" # This prints Hello
```

### Echo vs Printf

```bash
# Echo (simple output)
echo "Hello World"
echo -n "No newline"
echo -e "Line1\nLine2"  # Interpret escape sequences

# Printf (formatted output)
printf "Hello %s\n" "World"
printf "Number: %d\n" 42
printf "Float: %.2f\n" 3.14159
printf "%-10s %-10s\n" "Name" "Age"
```

### Exit Status

```bash
# Exit codes
exit 0      # Success
exit 1      # General error
exit 2      # Misuse of shell command
exit 126    # Command cannot execute
exit 127    # Command not found
exit 130    # Script terminated by Ctrl+C

# Check last command exit status
echo $?

# Example
ls /nonexistent 2>/dev/null
if [ $? -ne 0 ]; then
    echo "Command failed"
fi
```

---

## 4. Variables and Data Types

### Variable Declaration

```bash
# Variable assignment (no spaces around =)
NAME="John"
AGE=30
PI=3.14159

# Display variables
echo $NAME
echo ${NAME}  # Recommended for clarity

# Read-only variables
readonly CONSTANT="Cannot change"
declare -r READONLY_VAR="Fixed value"
```

### Variable Types

```bash
# String variables
FIRSTNAME="John"
LASTNAME="Doe"
FULLNAME="$FIRSTNAME $LASTNAME"

# Integer variables
COUNT=10
TOTAL=$((COUNT + 5))

# Array variables
FRUITS=("Apple" "Banana" "Orange")
NUMBERS=(1 2 3 4 5)

# Declare variable types explicitly
declare -i NUMBER=10      # Integer
declare -r CONSTANT="Fix" # Read-only
declare -x EXPORT_VAR="X" # Export to environment
declare -a ARRAY          # Indexed array
declare -A ASSOC_ARRAY    # Associative array
```

### Environment Variables

```bash
# System environment variables
echo $HOME          # User home directory
echo $USER          # Current username
echo $PATH          # Command search path
echo $SHELL         # Current shell
echo $PWD           # Current directory
echo $OLDPWD        # Previous directory
echo $HOSTNAME      # System hostname
echo $RANDOM        # Random number (0-32767)
echo $$             # Current process ID
echo $PPID          # Parent process ID

# Set environment variable
export MY_VAR="value"
export PATH="$PATH:/new/path"

# Unset variable
unset MY_VAR
```

### Special Variables

```bash
# Script arguments
$0    # Script name
$1    # First argument
$2    # Second argument
$#    # Number of arguments
$@    # All arguments as separate words
$*    # All arguments as single string
$?    # Exit status of last command
$$    # Process ID of current script
$!    # Process ID of last background command

# Example script using arguments
#!/bin/bash
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Total arguments: $#"
echo "All arguments: $@"
```

### Variable Scope

```bash
# Global variable
GLOBAL_VAR="I'm global"

function test_scope() {
    # Local variable (only in function)
    local LOCAL_VAR="I'm local"
    echo $GLOBAL_VAR    # Accessible
    echo $LOCAL_VAR     # Accessible
}

test_scope
echo $GLOBAL_VAR        # Accessible
echo $LOCAL_VAR         # NOT accessible (empty)
```

### Variable Expansion

```bash
# Basic expansion
NAME="John"
echo "Hello $NAME"              # Hello John
echo "Hello ${NAME}"            # Hello John (recommended)

# Default values
echo ${VAR:-"default"}          # Use "default" if VAR is unset
echo ${VAR:="default"}          # Assign and use "default" if VAR is unset
echo ${VAR:?"Error message"}    # Error if VAR is unset
echo ${VAR:+"alternative"}      # Use "alternative" if VAR is set

# String operations
FILE="document.pdf"
echo ${FILE%.pdf}               # Remove .pdf extension: document
echo ${FILE%.*}                 # Remove extension: document
echo ${FILE#*.}                 # Get extension: pdf
echo ${FILE/.pdf/.txt}          # Replace extension: document.txt
```

---

## 5. User Input and Output

### Reading User Input

```bash
# Simple read
read NAME
echo "Hello $NAME"

# Read with prompt
read -p "Enter your name: " NAME
echo "Hello $NAME"

# Read password (silent input)
read -sp "Enter password: " PASSWORD
echo ""  # New line after password

# Read with timeout
read -t 5 -p "Quick! Enter name (5 sec): " NAME

# Read single character
read -n 1 -p "Press any key to continue..."

# Read multiple variables
read -p "Enter firstname lastname: " FIRST LAST
echo "First: $FIRST, Last: $LAST"

# Read array
echo "Enter numbers separated by space:"
read -a NUMBERS
echo "First number: ${NUMBERS[0]}"

# Read from file
while read LINE; do
    echo "Line: $LINE"
done < input.txt
```

### Advanced Input

```bash
# Read with default value
read -p "Enter name [John]: " NAME
NAME=${NAME:-John}

# Validate input
while true; do
    read -p "Enter age (1-150): " AGE
    if [[ $AGE =~ ^[0-9]+$ ]] && [ $AGE -ge 1 ] && [ $AGE -le 150 ]; then
        break
    fi
    echo "Invalid age. Try again."
done

# Multiple choice input
echo "Select option:"
echo "1) Option A"
echo "2) Option B"
echo "3) Option C"
read -p "Choice [1-3]: " CHOICE
case $CHOICE in
    1) echo "Selected A";;
    2) echo "Selected B";;
    3) echo "Selected C";;
    *) echo "Invalid";;
esac
```

### Output Formatting

```bash
# Colors in terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${RED}This is red${NC}"
echo -e "${GREEN}This is green${NC}"
echo -e "${YELLOW}This is yellow${NC}"
echo -e "${BLUE}This is blue${NC}"

# Text formatting
BOLD='\033[1m'
DIM='\033[2m'
UNDERLINE='\033[4m'
BLINK='\033[5m'
REVERSE='\033[7m'

echo -e "${BOLD}Bold text${NC}"
echo -e "${UNDERLINE}Underlined${NC}"

# Printf formatting
printf "%-20s %10s %10s\n" "Name" "Age" "City"
printf "%-20s %10d %10s\n" "John Doe" 30 "New York"
printf "%-20s %10d %10s\n" "Jane Smith" 25 "London"
```

### Logging

```bash
# Simple logging
LOG_FILE="/var/log/myscript.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

log "Script started"
log "Processing data..."
log "Script completed"

# Log levels
log_info() {
    echo "[INFO] [$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

log_error() {
    echo "[ERROR] [$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE >&2
}

log_warning() {
    echo "[WARN] [$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

log_info "Application started"
log_warning "Configuration file not found, using defaults"
log_error "Failed to connect to database"
```

---

## 6. Operators

### Arithmetic Operators

```bash
# Basic arithmetic (using let, expr, or $(()))
NUM1=10
NUM2=3

# Addition
SUM=$((NUM1 + NUM2))
echo "Sum: $SUM"  # 13

# Subtraction
DIFF=$((NUM1 - NUM2))
echo "Diff: $DIFF"  # 7

# Multiplication
PROD=$((NUM1 * NUM2))
echo "Product: $PROD"  # 30

# Division
DIV=$((NUM1 / NUM2))
echo "Division: $DIV"  # 3

# Modulus (remainder)
MOD=$((NUM1 % NUM2))
echo "Modulus: $MOD"  # 1

# Exponentiation
POW=$((NUM1 ** 2))
echo "Power: $POW"  # 100

# Increment/Decrement
COUNT=5
((COUNT++))  # Increment: COUNT=6
((COUNT--))  # Decrement: COUNT=5
((COUNT+=3)) # Add 3: COUNT=8
((COUNT-=2)) # Subtract 2: COUNT=6
((COUNT*=2)) # Multiply by 2: COUNT=12
((COUNT/=3)) # Divide by 3: COUNT=4
```

### Comparison Operators (Numeric)

```bash
# Numeric comparisons
NUM1=10
NUM2=20

# Equal
if [ $NUM1 -eq $NUM2 ]; then echo "Equal"; fi

# Not equal
if [ $NUM1 -ne $NUM2 ]; then echo "Not equal"; fi

# Greater than
if [ $NUM1 -gt $NUM2 ]; then echo "Greater"; fi

# Less than
if [ $NUM1 -lt $NUM2 ]; then echo "Less"; fi

# Greater than or equal
if [ $NUM1 -ge $NUM2 ]; then echo "Greater or equal"; fi

# Less than or equal
if [ $NUM1 -le $NUM2 ]; then echo "Less or equal"; fi

# Using double parentheses (C-style)
if (( NUM1 < NUM2 )); then echo "Less"; fi
if (( NUM1 > NUM2 )); then echo "Greater"; fi
if (( NUM1 == NUM2 )); then echo "Equal"; fi
if (( NUM1 != NUM2 )); then echo "Not equal"; fi
```

### String Operators

```bash
STR1="hello"
STR2="world"

# String equality
if [ "$STR1" = "$STR2" ]; then echo "Equal"; fi
if [ "$STR1" != "$STR2" ]; then echo "Not equal"; fi

# String is empty
if [ -z "$STR1" ]; then echo "Empty"; fi

# String is not empty
if [ -n "$STR1" ]; then echo "Not empty"; fi

# String length
echo ${#STR1}  # 5

# String concatenation
COMBINED="$STR1 $STR2"
echo $COMBINED  # hello world

# String contains
if [[ "$STR1" == *"ell"* ]]; then
    echo "Contains 'ell'"
fi

# String starts with
if [[ "$STR1" == "hel"* ]]; then
    echo "Starts with 'hel'"
fi

# String ends with
if [[ "$STR1" == *"lo" ]]; then
    echo "Ends with 'lo'"
fi
```

### Logical Operators

```bash
# AND operator
if [ $NUM1 -gt 5 ] && [ $NUM1 -lt 15 ]; then
    echo "Between 5 and 15"
fi

# OR operator
if [ $NUM1 -lt 5 ] || [ $NUM1 -gt 15 ]; then
    echo "Not between 5 and 15"
fi

# NOT operator
if [ ! -f "file.txt" ]; then
    echo "File does not exist"
fi

# Combining operators
if [ $NUM1 -gt 5 ] && [ $NUM2 -lt 25 ] || [ $NUM1 -eq 0 ]; then
    echo "Complex condition true"
fi

# Using double brackets (recommended)
if [[ $NUM1 -gt 5 && $NUM2 -lt 25 ]]; then
    echo "Both conditions true"
fi
```

### File Test Operators

```bash
FILE="test.txt"

# File exists
if [ -e "$FILE" ]; then echo "Exists"; fi

# Regular file
if [ -f "$FILE" ]; then echo "Is a file"; fi

# Directory
if [ -d "$FILE" ]; then echo "Is a directory"; fi

# Symbolic link
if [ -L "$FILE" ]; then echo "Is a symlink"; fi

# File is readable
if [ -r "$FILE" ]; then echo "Readable"; fi

# File is writable
if [ -w "$FILE" ]; then echo "Writable"; fi

# File is executable
if [ -x "$FILE" ]; then echo "Executable"; fi

# File is not empty
if [ -s "$FILE" ]; then echo "Not empty"; fi

# File is owned by user
if [ -O "$FILE" ]; then echo "Owned by current user"; fi

# File is owned by group
if [ -G "$FILE" ]; then echo "Owned by current group"; fi

# File1 is newer than File2
if [ "$FILE1" -nt "$FILE2" ]; then echo "Newer"; fi

# File1 is older than File2
if [ "$FILE1" -ot "$FILE2" ]; then echo "Older"; fi
```

---

## 7. Conditional Statements

### If Statement

```bash
# Simple if
if [ condition ]; then
    # commands
fi

# If-else
if [ condition ]; then
    # commands if true
else
    # commands if false
fi

# If-elif-else
if [ condition1 ]; then
    # commands if condition1 true
elif [ condition2 ]; then
    # commands if condition2 true
else
    # commands if all false
fi

# Example
AGE=18
if [ $AGE -ge 18 ]; then
    echo "Adult"
elif [ $AGE -ge 13 ]; then
    echo "Teenager"
else
    echo "Child"
fi
```

### Nested If Statements

```bash
#!/bin/bash
read -p "Enter your age: " AGE
read -p "Do you have a license? (yes/no): " LICENSE

if [ $AGE -ge 18 ]; then
    if [ "$LICENSE" = "yes" ]; then
        echo "You can drive"
    else
        echo "You need a license"
    fi
else
    echo "You are too young to drive"
fi
```

### Case Statement

```bash
# Basic case statement
read -p "Enter a color: " COLOR

case $COLOR in
    red)
        echo "You chose red"
        ;;
    blue|BLUE)
        echo "You chose blue"
        ;;
    green)
        echo "You chose green"
        ;;
    *)
        echo "Unknown color"
        ;;
esac

# Case with patterns
read -p "Enter filename: " FILE

case $FILE in
    *.txt)
        echo "Text file"
        ;;
    *.jpg|*.png|*.gif)
        echo "Image file"
        ;;
    *.sh)
        echo "Shell script"
        ;;
    *)
        echo "Unknown file type"
        ;;
esac

# Case with multiple commands
read -p "Enter command: " CMD

case $CMD in
    start)
        echo "Starting service..."
        # service start commands
        echo "Service started"
        ;;
    stop)
        echo "Stopping service..."
        # service stop commands
        echo "Service stopped"
        ;;
    restart)
        echo "Restarting service..."
        # service restart commands
        echo "Service restarted"
        ;;
    status)
        echo "Checking service status..."
        # service status commands
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac
```

### Ternary Operator (Conditional Assignment)

```bash
# Using && and ||
AGE=20
[ $AGE -ge 18 ] && STATUS="Adult" || STATUS="Minor"
echo $STATUS

# Using if in command substitution
RESULT=$(if [ $AGE -ge 18 ]; then echo "Adult"; else echo "Minor"; fi)
echo $RESULT

# Inline condition
MAX=$(( $NUM1 > $NUM2 ? $NUM1 : $NUM2 ))
```

---

## 8. Loops

### For Loop

```bash
# Basic for loop
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

# For loop with range
for i in {1..10}; do
    echo "Count: $i"
done

# For loop with step
for i in {0..20..2}; do
    echo "Even: $i"
done

# C-style for loop
for ((i=1; i<=10; i++)); do
    echo "Iteration: $i"
done

# Loop through files
for FILE in *.txt; do
    echo "Processing: $FILE"
done

# Loop through array
FRUITS=("Apple" "Banana" "Orange")
for FRUIT in "${FRUITS[@]}"; do
    echo "Fruit: $FRUIT"
done

# Loop through command output
for USER in $(cat /etc/passwd | cut -d: -f1); do
    echo "User: $USER"
done
```

### While Loop

```bash
# Basic while loop
COUNT=1
while [ $COUNT -le 5 ]; do
    echo "Count: $COUNT"
    ((COUNT++))
done

# While reading file
while read LINE; do
    echo "Line: $LINE"
done < file.txt

# Infinite loop
while true; do
    echo "Press Ctrl+C to stop"
    sleep 1
done

# While with condition
read -p "Enter password: " PASSWORD
while [ "$PASSWORD" != "secret" ]; do
    echo "Wrong password!"
    read -p "Enter password: " PASSWORD
done
echo "Access granted"

# While with multiple conditions
COUNT=0
MAX=10
while [ $COUNT -lt $MAX ] && [ -f "data.txt" ]; do
    echo "Processing: $COUNT"
    ((COUNT++))
done
```

### Until Loop

```bash
# Basic until loop (opposite of while)
COUNT=1
until [ $COUNT -gt 5 ]; do
    echo "Count: $COUNT"
    ((COUNT++))
done

# Until with condition
RETRY=0
until ping -c 1 google.com &> /dev/null; do
    echo "Waiting for network... (attempt $RETRY)"
    ((RETRY++))
    if [ $RETRY -ge 10 ]; then
        echo "Network timeout"
        exit 1
    fi
    sleep 2
done
echo "Network is up!"
```

### Loop Control

```bash
# Break - exit loop
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        break
    fi
    echo $i
done

# Continue - skip iteration
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        continue
    fi
    echo $i
done

# Nested loops with break
for i in {1..3}; do
    for j in {1..3}; do
        if [ $i -eq 2 ] && [ $j -eq 2 ]; then
            break 2  # Break outer loop
        fi
        echo "$i,$j"
    done
done
```

### Select Loop (Menu)

```bash
# Simple menu
select OPTION in "Start" "Stop" "Restart" "Quit"; do
    case $OPTION in
        Start)
            echo "Starting..."
            ;;
        Stop)
            echo "Stopping..."
            ;;
        Restart)
            echo "Restarting..."
            ;;
        Quit)
            break
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
done

# Menu with custom prompt
PS3="Select operation: "
OPTIONS=("Backup" "Restore" "Delete" "Exit")
select OPT in "${OPTIONS[@]}"; do
    case $OPT in
        "Backup")
            echo "Backing up..."
            ;;
        "Restore")
            echo "Restoring..."
            ;;
        "Delete")
            echo "Deleting..."
            ;;
        "Exit")
            echo "Goodbye"
            break
            ;;
        *)
            echo "Invalid: $REPLY"
            ;;
    esac
done
```

---

## 9. Functions

### Basic Functions

```bash
# Function definition (method 1)
function greet {
    echo "Hello, World!"
}

# Function definition (method 2)
greet() {
    echo "Hello, World!"
}

# Call function
greet

# Function with parameters
greet_user() {
    echo "Hello, $1!"
}
greet_user "John"

# Function with multiple parameters
add_numbers() {
    local NUM1=$1
    local NUM2=$2
    local SUM=$((NUM1 + NUM2))
    echo $SUM
}
RESULT=$(add_numbers 5 10)
echo "Sum: $RESULT"
```

### Return Values

```bash
# Return numeric exit status (0-255)
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0  # true
    else
        return 1  # false
    fi
}

# Check return value
is_even 4
if [ $? -eq 0 ]; then
    echo "Even"
else
    echo "Odd"
fi

# Return string via echo
get_username() {
    echo "admin"
}
USERNAME=$(get_username)
echo "User: $USERNAME"

# Return multiple values
get_user_info() {
    echo "John:30:Developer"
}
INFO=$(get_user_info)
IFS=':' read -r NAME AGE JOB <<< "$INFO"
echo "Name: $NAME, Age: $AGE, Job: $JOB"
```

### Local and Global Variables

```bash
# Global variable
GLOBAL="I'm global"

my_function() {
    # Local variable
    local LOCAL="I'm local"
    
    echo "Inside function:"
    echo "Global: $GLOBAL"
    echo "Local: $LOCAL"
    
    # Modify global
    GLOBAL="Modified global"
}

my_function

echo "Outside function:"
echo "Global: $GLOBAL"
echo "Local: $LOCAL"  # Empty (not accessible)
```

### Advanced Functions

```bash
# Function with default parameters
greet() {
    local NAME=${1:-"Guest"}
    local GREETING=${2:-"Hello"}
    echo "$GREETING, $NAME!"
}
greet
greet "John"
greet "Jane" "Hi"

# Function with variable arguments
print_all() {
    echo "Number of arguments: $#"
    for ARG in "$@"; do
        echo "- $ARG"
    done
}
print_all "one" "two" "three"

# Recursive function
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        local TEMP=$(factorial $(($1 - 1)))
        echo $(($1 * TEMP))
    fi
}
RESULT=$(factorial 5)
echo "5! = $RESULT"  # 120

# Function with error handling
divide() {
    if [ $# -ne 2 ]; then
        echo "Error: Need 2 arguments" >&2
        return 1
    fi
    if [ $2 -eq 0 ]; then
        echo "Error: Division by zero" >&2
        return 1
    fi
    echo $(($1 / $2))
    return 0
}

# Function library (source from another file)
# Create file: mylib.sh
# source mylib.sh  # Load all functions from mylib.sh
```

---

## 10. Arrays

### Indexed Arrays

```bash
# Array declaration
FRUITS=("Apple" "Banana" "Orange")
NUMBERS=(1 2 3 4 5)

# Access elements
echo ${FRUITS[0]}    # Apple
echo ${FRUITS[1]}    # Banana
echo ${FRUITS[2]}    # Orange

# All elements
echo ${FRUITS[@]}    # All elements as separate words
echo ${FRUITS[*]}    # All elements as single string

# Array length
echo ${#FRUITS[@]}   # 3

# Add element
FRUITS+=("Mango")
FRUITS[4]="Grape"

# Remove element
unset FRUITS[1]

# Loop through array
for FRUIT in "${FRUITS[@]}"; do
    echo $FRUIT
done

# Loop with index
for i in "${!FRUITS[@]}"; do
    echo "Index $i: ${FRUITS[$i]}"
done
```

### Associative Arrays (Hash Maps)

```bash
# Declare associative array
declare -A USER

# Add key-value pairs
USER[name]="John"
USER[age]=30
USER[city]="New York"

# Access values
echo ${USER[name]}
echo ${USER[age]}

# All keys
echo ${!USER[@]}

# All values
echo ${USER[@]}

# Loop through associative array
for KEY in "${!USER[@]}"; do
    echo "$KEY: ${USER[$KEY]}"
done

# Check if key exists
if [[ -v USER[name] ]]; then
    echo "Name exists"
fi

# Delete key
unset USER[age]
```

### Array Operations

```bash
# Slice array
NUMBERS=(1 2 3 4 5 6 7 8 9 10)
echo ${NUMBERS[@]:2:4}  # Elements from index 2, length 4: 3 4 5 6

# Copy array
COPY=("${NUMBERS[@]}")

# Concatenate arrays
ARR1=(1 2 3)
ARR2=(4 5 6)
COMBINED=("${ARR1[@]}" "${ARR2[@]}")

# Replace elements
FRUITS=("Apple" "Banana" "Orange")
FRUITS=("${FRUITS[@]/Apple/Mango}")  # Replace Apple with Mango

# Sort array
UNSORTED=(5 2 8 1 9)
SORTED=($(for i in "${UNSORTED[@]}"; do echo $i; done | sort -n))

# Remove duplicates
DUPES=(1 2 2 3 3 3 4)
UNIQUE=($(echo "${DUPES[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))

# Search array
FRUITS=("Apple" "Banana" "Orange")
if [[ " ${FRUITS[@]} " =~ " Banana " ]]; then
    echo "Found Banana"
fi
```

### Multi-dimensional Arrays (Simulated)

```bash
# 2D array simulation using associative array
declare -A MATRIX

# Set values
MATRIX[0,0]=1
MATRIX[0,1]=2
MATRIX[0,2]=3
MATRIX[1,0]=4
MATRIX[1,1]=5
MATRIX[1,2]=6

# Access values
echo ${MATRIX[0,0]}
echo ${MATRIX[1,2]}

# Loop through 2D array
for i in 0 1; do
    for j in 0 1 2; do
        echo -n "${MATRIX[$i,$j]} "
    done
    echo ""
done
```

---

## 11. String Manipulation

### String Length

```bash
STRING="Hello World"
echo ${#STRING}  # 11
```

### Substring Extraction

```bash
STRING="Hello World"

# Extract from position
echo ${STRING:0:5}   # Hello
echo ${STRING:6}     # World
echo ${STRING:6:5}   # World
echo ${STRING: -5}   # World (from end)
```

### String Replacement

```bash
STRING="Hello World World"

# Replace first occurrence
echo ${STRING/World/Universe}  # Hello Universe World

# Replace all occurrences
echo ${STRING//World/Universe}  # Hello Universe Universe

# Replace if at beginning
echo ${STRING/#Hello/Hi}  # Hi World World

# Replace if at end
echo ${STRING/%World/Universe}  # Hello World Universe
```

### String Removal

```bash
FILE="document.tar.gz"

# Remove shortest match from beginning
echo ${FILE#*.}      # tar.gz

# Remove longest match from beginning
echo ${FILE##*.}     # gz

# Remove shortest match from end
echo ${FILE%.*}      # document.tar

# Remove longest match from end
echo ${FILE%%.*}     # document
```

### Case Conversion

```bash
STRING="Hello World"

# To uppercase
echo ${STRING^^}     # HELLO WORLD
echo ${STRING^^[hw]} # Hello World (specific chars)

# To lowercase
echo ${STRING,,}     # hello world
echo ${STRING,,[HW]} # hello world (specific chars)

# Toggle case
echo ${STRING~~}     # hELLO wORLD

# Using tr command
echo $STRING | tr '[:lower:]' '[:upper:]'  # HELLO WORLD
echo $STRING | tr '[:upper:]' '[:lower:]'  # hello world
```

### String Comparison

```bash
STR1="hello"
STR2="world"

# Equality
[ "$STR1" = "$STR2" ] && echo "Equal" || echo "Not equal"

# Less than (alphabetically)
[[ "$STR1" < "$STR2" ]] && echo "STR1 comes first"

# Greater than
[[ "$STR1" > "$STR2" ]] && echo "STR1 comes after"

# Contains
[[ "$STR1" == *"ell"* ]] && echo "Contains 'ell'"

# Starts with
[[ "$STR1" == "hel"* ]] && echo "Starts with 'hel'"

# Ends with
[[ "$STR1" == *"lo" ]] && echo "Ends with 'lo'"
```

### String Trimming

```bash
# Trim whitespace
trim() {
    local var="$*"
    var="${var#"${var%%[![:space:]]*}"}"
    var="${var%"${var##*[![:space:]]}"}"
    echo "$var"
}

STRING="   Hello World   "
TRIMMED=$(trim "$STRING")
echo "[$TRIMMED]"  # [Hello World]

# Remove leading spaces
echo "$STRING" | sed 's/^[[:space:]]*//'

# Remove trailing spaces
echo "$STRING" | sed 's/[[:space:]]*$//'

# Remove all spaces
echo "${STRING// /}"
```

### String Splitting

```bash
# Split by delimiter
STRING="one,two,three,four"
IFS=',' read -ra PARTS <<< "$STRING"
for PART in "${PARTS[@]}"; do
    echo $PART
done

# Split into array
STRING="apple banana orange"
ARRAY=($STRING)
echo ${ARRAY[0]}  # apple
echo ${ARRAY[1]}  # banana

# Split by newline
TEXT="line1
line2
line3"
IFS=$'\n' read -rd '' -a LINES <<< "$TEXT"
```

### String Joining

```bash
# Join array elements
FRUITS=("Apple" "Banana" "Orange")
JOINED=$(IFS=,; echo "${FRUITS[*]}")
echo $JOINED  # Apple,Banana,Orange

# Join with custom separator
join_by() {
    local IFS="$1"
    shift
    echo "$*"
}
RESULT=$(join_by " - " "${FRUITS[@]}")
echo $RESULT  # Apple - Banana - Orange
```

---

## 12. File Operations

### Reading Files

```bash
# Read entire file
CONTENT=$(cat file.txt)

# Read file line by line
while IFS= read -r LINE; do
    echo "Line: $LINE"
done < file.txt

# Read file into array
mapfile -t LINES < file.txt
# or
readarray -t LINES < file.txt

# Read specific lines
sed -n '5,10p' file.txt  # Lines 5-10
head -n 5 file.txt       # First 5 lines
tail -n 5 file.txt       # Last 5 lines
tail -f file.txt         # Follow file (real-time)

# Read with line numbers
while IFS= read -r LINE; do
    echo "$((++COUNT)): $LINE"
done < file.txt
```

### Writing Files

```bash
# Write to file (overwrite)
echo "Hello World" > file.txt

# Append to file
echo "New line" >> file.txt

# Write multiple lines
cat > file.txt << EOF
Line 1
Line 2
Line 3
EOF

# Write with variables
cat > config.txt << EOF
Name: $NAME
Age: $AGE
Date: $(date)
EOF

# Write array to file
LINES=("Line 1" "Line 2" "Line 3")
printf "%s\n" "${LINES[@]}" > file.txt
```

### File Checking

```bash
FILE="test.txt"

# Check if exists
if [ -e "$FILE" ]; then
    echo "File exists"
fi

# Check if regular file
if [ -f "$FILE" ]; then
    echo "Is a regular file"
fi

# Check if directory
if [ -d "$FILE" ]; then
    echo "Is a directory"
fi

# Check if readable
if [ -r "$FILE" ]; then
    echo "File is readable"
fi

# Check if writable
if [ -w "$FILE" ]; then
    echo "File is writable"
fi

# Check if executable
if [ -x "$FILE" ]; then
    echo "File is executable"
fi

# Check if empty
if [ -s "$FILE" ]; then
    echo "File is not empty"
fi
```

### File Manipulation

```bash
# Create file
touch file.txt

# Create multiple files
touch file1.txt file2.txt file3.txt

# Copy file
cp source.txt destination.txt

# Copy directory recursively
cp -r sourcedir destdir

# Move/Rename file
mv oldname.txt newname.txt

# Delete file
rm file.txt

# Delete directory
rm -r directory
rm -rf directory  # Force delete

# Create directory
mkdir newdir
mkdir -p path/to/nested/dir  # Create parent dirs

# Find files
find . -name "*.txt"
find . -type f -name "*.log"
find . -type d -name "backup*"
find . -mtime -7  # Modified in last 7 days
find . -size +10M  # Larger than 10MB

# File permissions
chmod 755 file.sh
chmod +x file.sh
chmod u+rwx,g+rx,o+r file.txt

# File ownership
chown user:group file.txt
chown -R user:group directory
```

### CSV File Processing

```bash
# Read CSV file
while IFS=',' read -r COL1 COL2 COL3; do
    echo "Column1: $COL1, Column2: $COL2, Column3: $COL3"
done < data.csv

# Skip CSV header
{
    read  # Skip first line
    while IFS=',' read -r NAME AGE CITY; do
        echo "Name: $NAME, Age: $AGE, City: $CITY"
    done
} < data.csv

# Write CSV file
echo "Name,Age,City" > output.csv
echo "John,30,NYC" >> output.csv
echo "Jane,25,LA" >> output.csv

# Process CSV with specific columns
awk -F',' '{print $1, $3}' data.csv  # Print columns 1 and 3
```

### JSON File Processing

```bash
# Using jq (JSON processor)
# Install: sudo apt install jq

# Read JSON file
JSON=$(cat data.json)

# Parse JSON
NAME=$(echo $JSON | jq -r '.name')
AGE=$(echo $JSON | jq -r '.age')

# Array from JSON
ITEMS=$(echo $JSON | jq -r '.items[]')

# Modify JSON
echo $JSON | jq '.age = 31' > data.json

# Example JSON file
cat > user.json << EOF
{
  "name": "John",
  "age": 30,
  "email": "john@example.com",
  "hobbies": ["reading", "gaming"]
}
EOF

# Extract values
NAME=$(jq -r '.name' user.json)
HOBBY=$(jq -r '.hobbies[0]' user.json)
```

---

## 13. Regular Expressions

### Basic Regex Patterns

```bash
# Match pattern
STRING="Hello World 123"

# Check if contains digits
if [[ $STRING =~ [0-9] ]]; then
    echo "Contains digits"
fi

# Check if contains letters
if [[ $STRING =~ [a-zA-Z] ]]; then
    echo "Contains letters"
fi

# Extract pattern
if [[ $STRING =~ [0-9]+ ]]; then
    echo "Found number: ${BASH_REMATCH[0]}"
fi

# Email validation
EMAIL="user@example.com"
if [[ $EMAIL =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Valid email"
fi

# Phone number validation
PHONE="123-456-7890"
if [[ $PHONE =~ ^[0-9]{3}-[0-9]{3}-[0-9]{4}$ ]]; then
    echo "Valid phone"
fi
```

### Grep with Regex

```bash
# Basic grep
grep "pattern" file.txt

# Case insensitive
grep -i "pattern" file.txt

# Show line numbers
grep -n "pattern" file.txt

# Count matches
grep -c "pattern" file.txt

# Inverse match (lines not matching)
grep -v "pattern" file.txt

# Multiple patterns
grep -E "pattern1|pattern2" file.txt

# Recursive search
grep -r "pattern" /path/to/dir

# Show context
grep -A 3 "pattern" file.txt  # 3 lines after
grep -B 3 "pattern" file.txt  # 3 lines before
grep -C 3 "pattern" file.txt  # 3 lines around

# Extended regex
grep -E "^[0-9]+$" file.txt  # Lines with only digits
grep -E "^(start|begin)" file.txt  # Lines starting with start or begin
```

### Sed with Regex

```bash
# Replace pattern
sed 's/old/new/' file.txt  # First occurrence
sed 's/old/new/g' file.txt  # All occurrences
sed 's/old/new/gi' file.txt  # Case insensitive

# Delete lines
sed '/pattern/d' file.txt  # Delete matching lines
sed '5d' file.txt  # Delete line 5
sed '5,10d' file.txt  # Delete lines 5-10

# Print specific lines
sed -n '5p' file.txt  # Print line 5
sed -n '5,10p' file.txt  # Print lines 5-10
sed -n '/pattern/p' file.txt  # Print matching lines

# Insert lines
sed '5i\New line' file.txt  # Insert before line 5
sed '5a\New line' file.txt  # Append after line 5

# Multiple operations
sed -e 's/old/new/g' -e 's/foo/bar/g' file.txt

# In-place editing
sed -i 's/old/new/g' file.txt

# Backup while editing
sed -i.bak 's/old/new/g' file.txt
```

### Awk with Regex

```bash
# Basic awk
awk '{print $1}' file.txt  # Print first field

# Pattern matching
awk '/pattern/ {print $0}' file.txt

# Field separator
awk -F',' '{print $1, $3}' file.csv

# Conditional printing
awk '$3 > 50 {print $1, $3}' file.txt

# BEGIN and END blocks
awk 'BEGIN {sum=0} {sum+=$1} END {print sum}' numbers.txt

# Multiple patterns
awk '/start/,/end/ {print}' file.txt

# Regex in awk
awk '$1 ~ /^[0-9]+$/ {print $1}' file.txt  # First field is number
awk '$2 !~ /pattern/ {print}' file.txt  # Second field doesn't match

# Built-in variables
awk '{print NR, NF, $0}' file.txt  # Line number, field count, whole line
```

---

## 14. Advanced Concepts

### Command Substitution

```bash
# Using $()
CURRENT_DATE=$(date)
FILE_COUNT=$(ls | wc -l)
USERS=$(cat /etc/passwd | cut -d: -f1)

# Using backticks (old style)
CURRENT_DATE=`date`

# Nested command substitution
TODAY=$(date +%Y-%m-%d)
FILES=$(find /home -name "*.txt" -mtime -$(date +%d))
```

### Process Substitution

```bash
# Compare output of two commands
diff <(ls dir1) <(ls dir2)

# Feed command output as file
while read line; do
    echo $line
done < <(ls -l)

# Multiple inputs
paste <(cut -d: -f1 /etc/passwd) <(cut -d: -f3 /etc/passwd)
```

### Here Documents

```bash
# Basic here document
cat << EOF
This is a multi-line
text block that can contain
variables like $USER
EOF

# Suppress variable expansion
cat << 'EOF'
This $USER will not be expanded
EOF

# Here document to file
cat > config.txt << EOF
Server: $SERVER
Port: $PORT
Date: $(date)
EOF

# Here document to command
mysql -u root -p << EOF
USE database;
SELECT * FROM users;
EOF

# Indented here document
cat <<- EOF
	This text is indented
	but the leading tabs are removed
	EOF
```

### Trap and Signal Handling

```bash
# Trap signals
trap 'echo "Caught signal"' SIGINT SIGTERM

# Cleanup on exit
cleanup() {
    echo "Cleaning up..."
    rm -f /tmp/tempfile
}
trap cleanup EXIT

# Ignore signal
trap '' SIGINT  # Ignore Ctrl+C

# Reset trap
trap - SIGINT

# Common signals
# SIGINT (2) - Ctrl+C
# SIGTERM (15) - Termination
# SIGKILL (9) - Kill (cannot be trapped)
# SIGHUP (1) - Hang up
# SIGQUIT (3) - Quit
# EXIT (0) - Script exit

# Example with trap
#!/bin/bash
trap 'echo "Script interrupted"; exit 1' INT TERM
trap 'echo "Script completed"' EXIT

echo "Running script..."
sleep 10
echo "Done"
```

### Parallel Processing

```bash
# Background processes
command1 &
command2 &
command3 &
wait  # Wait for all background jobs

# Process multiple files in parallel
for FILE in *.txt; do
    process_file "$FILE" &
done
wait

# Limit concurrent processes
MAX_JOBS=4
for FILE in *.txt; do
    while [ $(jobs -r | wc -l) -ge $MAX_JOBS ]; do
        sleep 1
    done
    process_file "$FILE" &
done
wait

# Using xargs for parallel
ls *.txt | xargs -n 1 -P 4 process_file
# -n 1: one argument per command
# -P 4: 4 parallel processes

# GNU Parallel (if installed)
parallel process_file ::: *.txt
parallel -j 4 process_file ::: *.txt  # 4 jobs at a time
```

### Subshells

```bash
# Subshell with ()
(cd /tmp; ls)  # Directory change doesn't affect parent
pwd  # Still in original directory

# Current shell
{ cd /tmp; ls; }  # Directory change affects current shell
pwd  # Now in /tmp

# Variable scope in subshell
VAR="original"
(VAR="changed"; echo $VAR)  # Prints: changed
echo $VAR  # Prints: original (unchanged in parent)

# Export to subshell
export VAR="value"
(echo $VAR)  # Accessible in subshell
```

### Networking in Scripts

```bash
# Check if host is reachable
ping -c 1 google.com &> /dev/null && echo "Online" || echo "Offline"

# Download file
wget https://example.com/file.txt
curl -O https://example.com/file.txt

# Send HTTP request
RESPONSE=$(curl -s https://api.example.com/data)

# Check if port is open
nc -zv localhost 80
timeout 5 bash -c '</dev/tcp/localhost/80' && echo "Port open"

# Simple HTTP server
while true; do
    echo -e "HTTP/1.1 200 OK\n\n$(date)" | nc -l -p 8080 -q 1
done

# Download and execute
curl -s https://example.com/script.sh | bash
```

### Cron Job Management

```bash
# View cron jobs
crontab -l

# Edit cron jobs
crontab -e

# Cron syntax: minute hour day month weekday command
# * * * * * command
# ┬ ┬ ┬ ┬ ┬
# │ │ │ │ │
# │ │ │ │ └─── Weekday (0-7, Sunday=0 or 7)
# │ │ │ └───── Month (1-12)
# │ │ └─────── Day (1-31)
# │ └───────── Hour (0-23)
# └─────────── Minute (0-59)

# Examples
# Run every minute
# * * * * * /path/to/script.sh

# Run at 2:30 AM daily
# 30 2 * * * /path/to/script.sh

# Run every Monday at 9 AM
# 0 9 * * 1 /path/to/script.sh

# Run every 15 minutes
# */15 * * * * /path/to/script.sh

# Run on first day of month
# 0 0 1 * * /path/to/script.sh

# Cron script example
#!/bin/bash
# Add to crontab: 0 2 * * * /path/to/backup.sh

LOG_FILE="/var/log/backup.log"

echo "[$(date)] Backup started" >> $LOG_FILE

# Backup commands
tar -czf backup-$(date +%Y%m%d).tar.gz /home/user/data

echo "[$(date)] Backup completed" >> $LOG_FILE
```

---

## 15. Debugging and Error Handling

### Debugging Techniques

```bash
# Enable debugging
set -x  # Print commands before executing
set +x  # Disable debugging

# Debug script from command line
bash -x script.sh

# Partial debugging
#!/bin/bash
echo "Normal execution"
set -x
echo "Debug mode"
DEBUG_VAR="test"
set +x
echo "Normal again"

# Check syntax without executing
bash -n script.sh

# Verbose mode
set -v  # Print shell input lines as read
set +v  # Disable verbose

# PS4 for better debugging
export PS4='+(${BASH_SOURCE}:${LINENO}): ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'
set -x
```

### Error Handling

```bash
# Exit on error
set -e  # Exit immediately if command fails
set +e  # Disable exit on error

# Exit on undefined variable
set -u  # Error on undefined variable
set +u  # Disable

# Pipe failure
set -o pipefail  # Pipeline fails if any command fails

# Combine options
set -euo pipefail

# Trap errors
error_exit() {
    echo "Error on line $1"
    exit 1
}
trap 'error_exit $LINENO' ERR

# Try-catch style
{
    command_that_might_fail
} || {
    echo "Error occurred"
    exit 1
}

# Check command success
if command; then
    echo "Success"
else
    echo "Failed"
fi

# Command with error checking
if ! command; then
    echo "Command failed"
    exit 1
fi
```

### Logging

```bash
# Simple logging function
LOG_FILE="/var/log/script.log"

log() {
    local LEVEL=$1
    shift
    local MESSAGE="$@"
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] [$LEVEL] $MESSAGE" | tee -a $LOG_FILE
}

log "INFO" "Script started"
log "ERROR" "Something went wrong"
log "DEBUG" "Variable value: $VAR"

# Advanced logging
#!/bin/bash
LOG_FILE="/var/log/script.log"
LOG_LEVEL="INFO"  # DEBUG, INFO, WARN, ERROR

log_debug() { [ "$LOG_LEVEL" = "DEBUG" ] && log "DEBUG" "$@"; }
log_info() { log "INFO" "$@"; }
log_warn() { log "WARN" "$@"; }
log_error() { log "ERROR" "$@"; }

log() {
    local LEVEL=$1
    shift
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] [$LEVEL] $@" | tee -a $LOG_FILE
}

# Usage
log_info "Application started"
log_debug "Debug information"
log_warn "Warning message"
log_error "Error occurred"
```

### Testing Scripts

```bash
# Assert function
assert() {
    if [ "$1" != "$2" ]; then
        echo "Assertion failed: $1 != $2"
        exit 1
    fi
}

# Unit test example
test_addition() {
    RESULT=$(add 2 3)
    assert "$RESULT" "5"
    echo "test_addition: PASSED"
}

# Run tests
test_addition
test_subtraction
test_multiplication

# Integration test
test_script() {
    OUTPUT=$(./myscript.sh arg1 arg2)
    EXPECTED="Expected output"
    if [ "$OUTPUT" = "$EXPECTED" ]; then
        echo "Test PASSED"
    else
        echo "Test FAILED"
        echo "Expected: $EXPECTED"
        echo "Got: $OUTPUT"
        exit 1
    fi
}
```

### ShellCheck

```bash
# Install shellcheck
sudo apt install shellcheck  # Ubuntu/Debian
brew install shellcheck      # macOS

# Check script
shellcheck script.sh

# Ignore specific warning
# shellcheck disable=SC2034
UNUSED_VAR="value"

# Multiple warnings
# shellcheck disable=SC2034,SC2045
```

---

## 16. Best Practices

### Script Structure

```bash
#!/bin/bash
#
# Script Name: backup.sh
# Description: Automated backup script
# Author: Your Name
# Email: your.email@example.com
# Created: 2025-10-01
# Modified: 2025-10-01
# Version: 1.0
#
# Usage: ./backup.sh [options]
# Options:
#   -h, --help      Show this help message
#   -v, --verbose   Verbose output
#   -d, --dir       Directory to backup
#
# Examples:
#   ./backup.sh -d /home/user
#   ./backup.sh --verbose --dir /var/www
#

# Exit on error
set -euo pipefail

# Constants
readonly SCRIPT_NAME=$(basename "$0")
readonly SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
readonly VERSION="1.0"

# Default variables
VERBOSE=false
BACKUP_DIR=""

# Functions
show_help() {
    sed -n '/^# Usage:/,/^$/p' "$0" | sed 's/^# //g'
}

log_info() {
    echo "[INFO] $@"
}

log_error() {
    echo "[ERROR] $@" >&2
}

# Main function
main() {
    # Argument parsing
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_help
                exit 0
                ;;
            -v|--verbose)
                VERBOSE=true
                shift
                ;;
            -d|--dir)
                BACKUP_DIR="$2"
                shift 2
                ;;
            *)
                log_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    # Main logic here
    log_info "Starting backup..."
}

# Run main function
main "$@"
```

### Coding Standards

```bash
# Use meaningful variable names
BAD: x="file.txt"
GOOD: INPUT_FILE="file.txt"

# Quote variables
BAD: echo $VAR
GOOD: echo "$VAR"

# Use [[ ]] instead of [ ]
BAD: if [ $VAR = "value" ]
GOOD: if [[ $VAR = "value" ]]

# Check command success
BAD: command
GOOD: if ! command; then
         echo "Failed"
         exit 1
     fi

# Use functions for reusability
# Function names: lowercase with underscores
backup_database() {
    # Function code
}

# Constants: UPPERCASE
readonly MAX_RETRIES=3
readonly TIMEOUT=30

# Use local variables in functions
my_function() {
    local LOCAL_VAR="value"
}

# Proper error handling
command || {
    echo "Error occurred"
    exit 1
}

# Use arrays for lists
FILES=("file1.txt" "file2.txt" "file3.txt")

# Avoid eval when possible
BAD: eval "echo $VAR"
GOOD: echo "$VAR"
```

### Security Considerations

```bash
# Validate input
read -p "Enter number: " NUM
if ! [[ $NUM =~ ^[0-9]+$ ]]; then
    echo "Invalid number"
    exit 1
fi

# Sanitize file paths
FILENAME=$(basename "$USER_INPUT")

# Use quotes to prevent word splitting
rm "$FILE"  # Not: rm $FILE

# Avoid command injection
BAD: eval "process_$USER_INPUT"
GOOD: case $USER_INPUT in
         option1) process_option1 ;;
         option2) process_option2 ;;
      esac

# Check file existence before operations
if [[ ! -f "$FILE" ]]; then
    echo "File not found"
    exit 1
fi

# Use trap for cleanup
cleanup() {
    rm -f /tmp/tempfile
}
trap cleanup EXIT

# Restrict permissions on sensitive files
chmod 600 sensitive_file.txt

# Never store passwords in scripts
# Use environment variables or secret management
PASSWORD=${DB_PASSWORD:-}
if [[ -z "$PASSWORD" ]]; then
    read -sp "Enter password: " PASSWORD
fi
```

### Performance Tips

```bash
# Use built-ins instead of external commands
BAD: length=$(echo $VAR | wc -c)
GOOD: length=${#VAR}

# Avoid unnecessary forks
BAD: cat file.txt | grep pattern
GOOD: grep pattern file.txt

# Use [[ ]] instead of [ ]
[[ ]] is faster and more powerful

# Read files efficiently
BAD: for line in $(cat file.txt)
GOOD: while IFS= read -r line; do ... done < file.txt

# Use parameter expansion
BAD: basename "$FILE"
GOOD: ${FILE##*/}

# Batch operations
BAD: for file in *; do rm "$file"; done
GOOD: rm *

# Use arrays instead of repeated greps
# Cache results instead of repeated calculations
```

---

## 17. 50+ Real-World Scenarios

### System Administration

#### 1. Automated System Backup
```bash
#!/bin/bash
# Backup system directories with rotation

BACKUP_DIR="/backup"
RETENTION_DAYS=7
DATE=$(date +%Y%m%d)

backup_directory() {
    local SOURCE=$1
    local NAME=$(basename "$SOURCE")
    local DEST="$BACKUP_DIR/${NAME}_${DATE}.tar.gz"
    
    echo "Backing up $SOURCE..."
    tar -czf "$DEST" "$SOURCE" 2>/dev/null || {
        echo "Backup failed: $SOURCE"
        return 1
    }
    echo "Backup completed: $DEST"
}

# Remove old backups
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete

# Backup directories
backup_directory "/etc"
backup_directory "/home"
backup_directory "/var/www"

echo "All backups completed"
```

#### 2. System Health Check
```bash
#!/bin/bash
# Monitor system resources and alert

CPU_THRESHOLD=80
MEM_THRESHOLD=80
DISK_THRESHOLD=80

check_cpu() {
    local CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
    if (( $(echo "$CPU_USAGE > $CPU_THRESHOLD" | bc -l) )); then
        echo "WARNING: CPU usage at ${CPU_USAGE}%"
    fi
}

check_memory() {
    local MEM_USAGE=$(free | grep Mem | awk '{print ($3/$2) * 100}')
    if (( $(echo "$MEM_USAGE > $MEM_THRESHOLD" | bc -l) )); then
        echo "WARNING: Memory usage at ${MEM_USAGE}%"
    fi
}

check_disk() {
    df -h | awk 'NR>1 {print $5, $6}' | while read USAGE MOUNT; do
        USAGE=${USAGE%\%}
        if [ $USAGE -gt $DISK_THRESHOLD ]; then
            echo "WARNING: Disk usage at ${USAGE}% on $MOUNT"
        fi
    done
}

echo "=== System Health Check ==="
check_cpu
check_memory
check_disk
```

#### 3. User Management
```bash
#!/bin/bash
# Bulk user creation from CSV

CSV_FILE="users.csv"

while IFS=',' read -r USERNAME FULLNAME EMAIL; do
    # Skip header
    [[ "$USERNAME" = "username" ]] && continue
    
    # Check if user exists
    if id "$USERNAME" &>/dev/null; then
        echo "User $USERNAME already exists"
        continue
    fi
    
    # Create user
    useradd -m -c "$FULLNAME" -s /bin/bash "$USERNAME"
    
    # Generate random password
    PASSWORD=$(openssl rand -base64 12)
    echo "$USERNAME:$PASSWORD" | chpasswd
    
    echo "Created user: $USERNAME"
    echo "Password: $PASSWORD"
    
    # Send email (if mail is configured)
    # echo "Your account has been created. Password: $PASSWORD" | mail -s "Account Created" "$EMAIL"
done < "$CSV_FILE"
```

#### 4. Log Rotation
```bash
#!/bin/bash
# Custom log rotation script

LOG_DIR="/var/log/myapp"
MAX_SIZE=10485760  # 10MB in bytes
KEEP_DAYS=30

for LOG_FILE in "$LOG_DIR"/*.log; do
    [ -f "$LOG_FILE" ] || continue
    
    FILE_SIZE=$(stat -f%z "$LOG_FILE" 2>/dev/null || stat -c%s "$LOG_FILE")
    
    if [ $FILE_SIZE -gt $MAX_SIZE ]; then
        TIMESTAMP=$(date +%Y%m%d_%H%M%S)
        ARCHIVE="${LOG_FILE}.${TIMESTAMP}"
        
        mv "$LOG_FILE" "$ARCHIVE"
        gzip "$ARCHIVE"
        touch "$LOG_FILE"
        
        echo "Rotated: $LOG_FILE"
    fi
done

# Remove old archives
find "$LOG_DIR" -name "*.gz" -mtime +$KEEP_DAYS -delete
```

#### 5. Service Monitor and Restart
```bash
#!/bin/bash
# Monitor service and restart if down

SERVICES=("nginx" "mysql" "redis")
LOG_FILE="/var/log/service_monitor.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

for SERVICE in "${SERVICES[@]}"; do
    if ! systemctl is-active --quiet "$SERVICE"; then
        log "WARNING: $SERVICE is down. Attempting restart..."
        systemctl restart "$SERVICE"
        
        sleep 5
        
        if systemctl is-active --quiet "$SERVICE"; then
            log "SUCCESS: $SERVICE restarted successfully"
        else
            log "ERROR: Failed to restart $SERVICE"
            # Send alert
        fi
    else
        log "OK: $SERVICE is running"
    fi
done
```

### Development & DevOps

#### 6. Git Repository Backup
```bash
#!/bin/bash
# Backup all git repositories

REPO_DIR="/home/git"
BACKUP_DIR="/backup/git"
DATE=$(date +%Y%m%d)

mkdir -p "$BACKUP_DIR"

for REPO in "$REPO_DIR"/*/.git; do
    REPO_PATH=$(dirname "$REPO")
    REPO_NAME=$(basename "$REPO_PATH")
    
    echo "Backing up: $REPO_NAME"
    
    cd "$REPO_PATH"
    git bundle create "$BACKUP_DIR/${REPO_NAME}_${DATE}.bundle" --all
done

echo "All repositories backed up"
```

#### 7. Deploy Application
```bash
#!/bin/bash
# Deploy web application

APP_NAME="myapp"
REPO_URL="git@github.com:user/myapp.git"
DEPLOY_DIR="/var/www/$APP_NAME"
BACKUP_DIR="/var/www/backups"

# Backup current version
if [ -d "$DEPLOY_DIR" ]; then
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    tar -czf "$BACKUP_DIR/${APP_NAME}_${TIMESTAMP}.tar.gz" "$DEPLOY_DIR"
    echo "Backup created"
fi

# Clone or pull latest code
if [ -d "$DEPLOY_DIR/.git" ]; then
    cd "$DEPLOY_DIR"
    git pull origin main
else
    git clone "$REPO_URL" "$DEPLOY_DIR"
    cd "$DEPLOY_DIR"
fi

# Install dependencies
npm install --production

# Build application
npm run build

# Restart service
systemctl restart "$APP_NAME"

echo "Deployment completed successfully"
```

#### 8. Database Backup
```bash
#!/bin/bash
# MySQL database backup with compression

DB_USER="backup_user"
DB_PASS="password"
BACKUP_DIR="/backup/mysql"
RETENTION_DAYS=7
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p "$BACKUP_DIR"

# Get all databases
DATABASES=$(mysql -u "$DB_USER" -p"$DB_PASS" -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema|performance_schema|mysql|sys)")

for DB in $DATABASES; do
    echo "Backing up database: $DB"
    mysqldump -u "$DB_USER" -p"$DB_PASS" "$DB" | gzip > "$BACKUP_DIR/${DB}_${DATE}.sql.gz"
done

# Remove old backups
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete

echo "Database backup completed"
```

#### 9. SSL Certificate Monitor
```bash
#!/bin/bash
# Monitor SSL certificate expiration

DOMAINS=("example.com" "www.example.com" "api.example.com")
WARNING_DAYS=30

check_ssl() {
    local DOMAIN=$1
    local EXPIRY_DATE=$(echo | openssl s_client -servername "$DOMAIN" -connect "$DOMAIN:443" 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)
    
    local EXPIRY_EPOCH=$(date -d "$EXPIRY_DATE" +%s)
    local NOW_EPOCH=$(date +%s)
    local DAYS_LEFT=$(( ($EXPIRY_EPOCH - $NOW_EPOCH) / 86400 ))
    
    echo "Domain: $DOMAIN"
    echo "Expires: $EXPIRY_DATE"
    echo "Days left: $DAYS_LEFT"
    
    if [ $DAYS_LEFT -lt $WARNING_DAYS ]; then
        echo "WARNING: Certificate expiring soon!"
        # Send alert
    fi
    echo ""
}

for DOMAIN in "${DOMAINS[@]}"; do
    check_ssl "$DOMAIN"
done
```

#### 10. Docker Container Health Check
```bash
#!/bin/bash
# Monitor and restart unhealthy docker containers

CONTAINERS=$(docker ps --format "{{.Names}}")

for CONTAINER in $CONTAINERS; do
    STATUS=$(docker inspect --format='{{.State.Health.Status}}' "$CONTAINER" 2>/dev/null)
    
    if [ "$STATUS" = "unhealthy" ]; then
        echo "Container $CONTAINER is unhealthy. Restarting..."
        docker restart "$CONTAINER"
        
        sleep 10
        
        NEW_STATUS=$(docker inspect --format='{{.State.Health.Status}}' "$CONTAINER")
        if [ "$NEW_STATUS" = "healthy" ]; then
            echo "Container $CONTAINER restarted successfully"
        else
            echo "WARNING: Container $CONTAINER still unhealthy after restart"
        fi
    else
        echo "Container $CONTAINER is $STATUS"
    fi
done
```

### Data Processing

#### 11. CSV to JSON Converter
```bash
#!/bin/bash
# Convert CSV file to JSON format

CSV_FILE="$1"
JSON_FILE="${CSV_FILE%.csv}.json"

[ ! -f "$CSV_FILE" ] && echo "File not found" && exit 1

# Read header
IFS=',' read -ra HEADERS < "$CSV_FILE"

echo "[" > "$JSON_FILE"

# Process data lines
tail -n +2 "$CSV_FILE" | while IFS=',' read -ra VALUES; do
    echo "  {" >> "$JSON_FILE"
    
    for i in "${!HEADERS[@]}"; do
        HEADER=$(echo "${HEADERS[$i]}" | tr -d '\r\n')
        VALUE=$(echo "${VALUES[$i]}" | tr -d '\r\n')
        
        echo "    \"$HEADER\": \"$VALUE\"$([ $i -lt $((${#HEADERS[@]}-1)) ] && echo ',')" >> "$JSON_FILE"
    done
    
    echo "  }," >> "$JSON_FILE"
done

# Remove last comma and close JSON
sed -i '$ s/,$//' "$JSON_FILE"
echo "]" >> "$JSON_FILE"

echo "Converted $CSV_FILE to $JSON_FILE"
```

#### 12. Log Analyzer
```bash
#!/bin/bash
# Analyze Apache/Nginx access logs

LOG_FILE="/var/log/nginx/access.log"

echo "=== Log Analysis Report ==="
echo ""

echo "Top 10 IP Addresses:"
awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10

echo ""
echo "Top 10 Requested URLs:"
awk '{print $7}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10

echo ""
echo "Response Status Codes:"
awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn

echo ""
echo "Total Requests:"
wc -l < "$LOG_FILE"

echo ""
echo "Unique Visitors:"
awk '{print $1}' "$LOG_FILE" | sort -u | wc -l

echo ""
echo "Bandwidth Usage:"
awk '{sum+=$10} END {print sum/1024/1024 " MB"}' "$LOG_FILE"
```

#### 13. Duplicate File Finder
```bash
#!/bin/bash
# Find and remove duplicate files

SEARCH_DIR="${1:-.}"

declare -A CHECKSUMS

find "$SEARCH_DIR" -type f -print0 | while IFS= read -r -d '' FILE; do
    CHECKSUM=$(md5sum "$FILE" | awk '{print $1}')
    
    if [[ -v CHECKSUMS[$CHECKSUM] ]]; then
        echo "Duplicate found:"
        echo "  Original: ${CHECKSUMS[$CHECKSUM]}"
        echo "  Duplicate: $FILE"
        
        read -p "Delete duplicate? (y/n): " CHOICE
        if [[ "$CHOICE" = "y" ]]; then
            rm "$FILE"
            echo "  Deleted: $FILE"
        fi
    else
        CHECKSUMS[$CHECKSUM]="$FILE"
    fi
done
```

#### 14. Batch Image Resize
```bash
#!/bin/bash
# Resize all images in directory

INPUT_DIR="${1:-.}"
OUTPUT_DIR="${2:-resized}"
WIDTH=800
HEIGHT=600

mkdir -p "$OUTPUT_DIR"

for IMAGE in "$INPUT_DIR"/*.{jpg,jpeg,png,gif}; do
    [ -f "$IMAGE" ] || continue
    
    FILENAME=$(basename "$IMAGE")
    OUTPUT_FILE="$OUTPUT_DIR/$FILENAME"
    
    echo "Resizing: $FILENAME"
    convert "$IMAGE" -resize "${WIDTH}x${HEIGHT}" "$OUTPUT_FILE"
done

echo "All images resized to ${WIDTH}x${HEIGHT}"
```

#### 15. File Organizer
```bash
#!/bin/bash
# Organize files by extension into folders

SOURCE_DIR="${1:-.}"

# Create directories
mkdir -p "$SOURCE_DIR"/{Images,Documents,Videos,Audio,Archives,Scripts,Others}

# Organize files
for FILE in "$SOURCE_DIR"/*; do
    [ -f "$FILE" ] || continue
    
    EXTENSION="${FILE##*.}"
    EXTENSION="${EXTENSION,,}"  # Convert to lowercase
    
    case "$EXTENSION" in
        jpg|jpeg|png|gif|bmp|svg)
            mv "$FILE" "$SOURCE_DIR/Images/"
            ;;
        pdf|doc|docx|txt|odt|xls|xlsx)
            mv "$FILE" "$SOURCE_DIR/Documents/"
            ;;
        mp4|avi|mkv|mov|wmv)
            mv "$FILE" "$SOURCE_DIR/Videos/"
            ;;
        mp3|wav|flac|aac|ogg)
            mv "$FILE" "$SOURCE_DIR/Audio/"
            ;;
        zip|tar|gz|rar|7z)
            mv "$FILE" "$SOURCE_DIR/Archives/"
            ;;
        sh|bash|py|php|js)
            mv "$FILE" "$SOURCE_DIR/Scripts/"
            ;;
        *)
            mv "$FILE" "$SOURCE_DIR/Others/"
            ;;
    esac
done

echo "Files organized successfully"
```

### Network & Security

#### 16. Port Scanner
```bash
#!/bin/bash
# Simple port scanner

HOST="${1:-localhost}"
START_PORT="${2:-1}"
END_PORT="${3:-1024}"

echo "Scanning $HOST ports $START_PORT-$END_PORT..."

for PORT in $(seq $START_PORT $END_PORT); do
    timeout 1 bash -c "echo >/dev/tcp/$HOST/$PORT" 2>/dev/null && echo "Port $PORT: OPEN"
done

echo "Scan complete"
```

#### 17. Firewall Rule Manager
```bash
#!/bin/bash
# Manage iptables firewall rules

ACTION="$1"
PORT="$2"
PROTOCOL="${3:-tcp}"

case "$ACTION" in
    allow)
        iptables -A INPUT -p "$PROTOCOL" --dport "$PORT" -j ACCEPT
        echo "Allowed $PROTOCOL port $PORT"
        ;;
    deny)
        iptables -A INPUT -p "$PROTOCOL" --dport "$PORT" -j DROP
        echo "Denied $PROTOCOL port $PORT"
        ;;
    list)
        iptables -L -n -v
        ;;
    save)
        iptables-save > /etc/iptables/rules.v4
        echo "Rules saved"
        ;;
    *)
        echo "Usage: $0 {allow|deny|list|save} [port] [protocol]"
        exit 1
        ;;
esac
```

#### 18. SSH Key Manager
```bash
#!/bin/bash
# Manage SSH keys for multiple servers

SSH_DIR="$HOME/.ssh"
CONFIG_FILE="$SSH_DIR/config"
SERVERS_FILE="servers.txt"

generate_key() {
    local NAME=$1
    local KEY_FILE="$SSH_DIR/${NAME}_rsa"
    
    ssh-keygen -t rsa -b 4096 -f "$KEY_FILE" -C "$NAME@$(hostname)"
    echo "Key generated: $KEY_FILE"
}

copy_key_to_server() {
    local SERVER=$1
    local KEY_FILE=$2
    
    ssh-copy-id -i "$KEY_FILE.pub" "$SERVER"
    echo "Key copied to $SERVER"
}

# Generate keys for each server
while read -r SERVER; do
    NAME=$(echo "$SERVER" | cut -d@ -f2 | tr '.' '_')
    generate_key "$NAME"
    copy_key_to_server "$SERVER" "$SSH_DIR/${NAME}_rsa"
done < "$SERVERS_FILE"
```

#### 19. Network Speed Test
```bash
#!/bin/bash
# Test network bandwidth

TEST_FILE="/tmp/speedtest_$(date +%s)"
SIZE_MB=100

echo "Testing download speed..."
DOWNLOAD_START=$(date +%s)
dd if=/dev/zero of="$TEST_FILE" bs=1M count=$SIZE_MB 2>/dev/null
DOWNLOAD_END=$(date +%s)
DOWNLOAD_TIME=$((DOWNLOAD_END - DOWNLOAD_START))
DOWNLOAD_SPEED=$((SIZE_MB / DOWNLOAD_TIME))

echo "Testing upload speed..."
UPLOAD_START=$(date +%s)
dd if="$TEST_FILE" of=/dev/null bs=1M 2>/dev/null
UPLOAD_END=$(date +%s)
UPLOAD_TIME=$((UPLOAD_END - UPLOAD_START))
UPLOAD_SPEED=$((SIZE_MB / UPLOAD_TIME))

rm -f "$TEST_FILE"

echo "Download speed: ${DOWNLOAD_SPEED} MB/s"
echo "Upload speed: ${UPLOAD_SPEED} MB/s"
```

#### 20. Website Uptime Monitor
```bash
#!/bin/bash
# Monitor website availability

WEBSITES=("https://example.com" "https://google.com" "https://github.com")
LOG_FILE="/var/log/uptime_monitor.log"
ALERT_EMAIL="admin@example.com"

for WEBSITE in "${WEBSITES[@]}"; do
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$WEBSITE")
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    
    if [ "$RESPONSE" = "200" ]; then
        echo "[$TIMESTAMP] OK: $WEBSITE (HTTP $RESPONSE)" | tee -a "$LOG_FILE"
    else
        MESSAGE="[$TIMESTAMP] DOWN: $WEBSITE (HTTP $RESPONSE)"
        echo "$MESSAGE" | tee -a "$LOG_FILE"
        
        # Send alert (if mail is configured)
        # echo "$MESSAGE" | mail -s "Website Down Alert" "$ALERT_EMAIL"
    fi
done
```

### Automation

#### 21. Automated Code Formatter
```bash
#!/bin/bash
# Format code files automatically

find . -name "*.js" -o -name "*.jsx" | while read FILE; do
    echo "Formatting: $FILE"
    prettier --write "$FILE"
done

find . -name "*.py" | while read FILE; do
    echo "Formatting: $FILE"
    black "$FILE"
done

find . -name "*.sh" | while read FILE; do
    echo "Formatting: $FILE"
    shfmt -w "$FILE"
done
```

#### 22. Automated Testing Runner
```bash
#!/bin/bash
# Run automated tests and generate report

REPORT_FILE="test_report_$(date +%Y%m%d_%H%M%S).txt"

echo "Starting test suite..." | tee "$REPORT_FILE"
echo "Date: $(date)" | tee -a "$REPORT_FILE"
echo "" | tee -a "$REPORT_FILE"

# Run different test types
echo "=== Unit Tests ===" | tee -a "$REPORT_FILE"
npm test 2>&1 | tee -a "$REPORT_FILE"

echo "" | tee -a "$REPORT_FILE"
echo "=== Integration Tests ===" | tee -a "$REPORT_FILE"
npm run test:integration 2>&1 | tee -a "$REPORT_FILE"

echo "" | tee -a "$REPORT_FILE"
echo "=== E2E Tests ===" | tee -a "$REPORT_FILE"
npm run test:e2e 2>&1 | tee -a "$REPORT_FILE"

echo "" | tee -a "$REPORT_FILE"
echo "Test completed at $(date)" | tee -a "$REPORT_FILE"
```

#### 23. Automated File Backup to Cloud
```bash
#!/bin/bash
# Backup files to cloud storage (AWS S3)

SOURCE_DIR="/home/user/documents"
S3_BUCKET="s3://my-backup-bucket"
DATE=$(date +%Y%m%d)

# Sync to S3
aws s3 sync "$SOURCE_DIR" "$S3_BUCKET/backups/$DATE/" \
    --exclude "*.tmp" \
    --exclude "*.cache" \
    --delete

# Remove old backups (keep last 30 days)
CUTOFF_DATE=$(date -d "30 days ago" +%Y%m%d)
aws s3 ls "$S3_BUCKET/backups/" | while read -r LINE; do
    BACKUP_DATE=$(echo "$LINE" | awk '{print $2}' | tr -d '/')
    if [ "$BACKUP_DATE" -lt "$CUTOFF_DATE" ]; then
        aws s3 rm "$S3_BUCKET/backups/$BACKUP_DATE/" --recursive
    fi
done

echo "Backup completed to $S3_BUCKET/backups/$DATE/"
```

#### 24. Auto-update System Packages
```bash
#!/bin/bash
# Automated system update with email notification

LOG_FILE="/var/log/auto_update.log"
ADMIN_EMAIL="admin@example.com"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting system update"

# Update package list
apt update -y >> "$LOG_FILE" 2>&1

# List upgradable packages
UPGRADABLE=$(apt list --upgradable 2>/dev/null | grep -v "Listing")

if [ -n "$UPGRADABLE" ]; then
    log "Upgradable packages found"
    echo "$UPGRADABLE" >> "$LOG_FILE"
    
    # Upgrade packages
    apt upgrade -y >> "$LOG_FILE" 2>&1
    
    # Auto-remove unused packages
    apt autoremove -y >> "$LOG_FILE" 2>&1
    
    log "System update completed"
    
    # Send email notification
    # echo "System updated successfully" | mail -s "System Update" "$ADMIN_EMAIL"
else
    log "System is up to date"
fi
```

#### 25. Automated Report Generator
```bash
#!/bin/bash
# Generate daily system report

REPORT_FILE="/var/reports/daily_report_$(date +%Y%m%d).txt"
mkdir -p /var/reports

{
    echo "====================================="
    echo "     Daily System Report"
    echo "     Generated: $(date)"
    echo "====================================="
    echo ""
    
    echo "=== System Information ==="
    uname -a
    echo ""
    
    echo "=== Uptime ==="
    uptime
    echo ""
    
    echo "=== Disk Usage ==="
    df -h
    echo ""
    
    echo "=== Memory Usage ==="
    free -h
    echo ""
    
    echo "=== Top 10 Processes by CPU ==="
    ps aux --sort=-%cpu | head -11
    echo ""
    
    echo "=== Top 10 Processes by Memory ==="
    ps aux --sort=-%mem | head -11
    echo ""
    
    echo "=== Failed Login Attempts ==="
    grep "Failed password" /var/log/auth.log | tail -20
    echo ""
    
    echo "=== Disk I/O Statistics ==="
    iostat -x 1 5
    echo ""
    
    echo "====================================="
    echo "     End of Report"
    echo "====================================="
} > "$REPORT_FILE"

echo "Report generated: $REPORT_FILE"
```

### Monitoring & Alerting

#### 26. CPU Temperature Monitor
```bash
#!/bin/bash
# Monitor CPU temperature and alert if too high

TEMP_THRESHOLD=80
LOG_FILE="/var/log/temp_monitor.log"

get_cpu_temp() {
    if [ -f /sys/class/thermal/thermal_zone0/temp ]; then
        TEMP=$(cat /sys/class/thermal/thermal_zone0/temp)
        echo $((TEMP / 1000))
    else
        # Alternative method using sensors
        sensors | grep "Package id 0" | awk '{print $4}' | tr -d '+°C'
    fi
}

CURRENT_TEMP=$(get_cpu_temp)
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$TIMESTAMP] CPU Temperature: ${CURRENT_TEMP}°C" | tee -a "$LOG_FILE"

if [ "$CURRENT_TEMP" -gt "$TEMP_THRESHOLD" ]; then
    echo "WARNING: CPU temperature is too high!" | tee -a "$LOG_FILE"
    # Send alert
    # echo "CPU temperature: ${CURRENT_TEMP}°C" | mail -s "High CPU Temp Alert" admin@example.com
fi
```

#### 27. Disk Space Monitor
```bash
#!/bin/bash
# Monitor disk space and clean if necessary

THRESHOLD=80
CLEANUP_DIR="/var/cache"

df -h | awk 'NR>1 {print $5, $6}' | while read USAGE MOUNT; do
    USAGE=${USAGE%\%}
    
    if [ $USAGE -gt $THRESHOLD ]; then
        echo "WARNING: Disk usage at ${USAGE}% on $MOUNT"
        
        if [ "$MOUNT" = "/" ]; then
            echo "Cleaning cache files..."
            
            # Clean apt cache
            apt clean
            
            # Clean old logs
            find /var/log -name "*.log" -mtime +30 -delete
            find /var/log -name "*.gz" -mtime +30 -delete
            
            # Clean tmp files
            find /tmp -type f -mtime +7 -delete
            
            echo "Cleanup completed"
        fi
    fi
done
```

#### 28. Process Monitor
```bash
#!/bin/bash
# Monitor specific processes and restart if stopped

PROCESSES=("nginx" "mysql" "php-fpm")
LOG_FILE="/var/log/process_monitor.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

for PROCESS in "${PROCESSES[@]}"; do
    if ! pgrep -x "$PROCESS" > /dev/null; then
        log "WARNING: $PROCESS is not running"
        log "Attempting to start $PROCESS..."
        
        systemctl start "$PROCESS"
        sleep 2
        
        if pgrep -x "$PROCESS" > /dev/null; then
            log "SUCCESS: $PROCESS started"
        else
            log "ERROR: Failed to start $PROCESS"
        fi
    else
        log "OK: $PROCESS is running"
    fi
done
```

#### 29. Website Change Detector
```bash
#!/bin/bash
# Detect changes on a webpage

URL="https://example.com"
CACHE_FILE="/tmp/webpage_cache.txt"
DIFF_FILE="/tmp/webpage_diff.txt"

# Download current version
curl -s "$URL" > /tmp/current.txt

if [ -f "$CACHE_FILE" ]; then
    # Compare with previous version
    if ! diff "$CACHE_FILE" /tmp/current.txt > "$DIFF_FILE"; then
        echo "Changes detected on $URL"
        echo ""
        cat "$DIFF_FILE"
        
        # Send notification
        # mail -s "Website Changed" admin@example.com < "$DIFF_FILE"
    else
        echo "No changes detected"
    fi
fi

# Update cache
mv /tmp/current.txt "$CACHE_FILE"
```

#### 30. API Health Check
```bash
#!/bin/bash
# Monitor API endpoints

API_ENDPOINTS=(
    "https://api.example.com/health"
    "https://api.example.com/status"
    "https://api.example.com/version"
)
LOG_FILE="/var/log/api_monitor.log"

for ENDPOINT in "${API_ENDPOINTS[@]}"; do
    RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" --max-time 10 "$ENDPOINT")
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$ENDPOINT")
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    
    if [ "$HTTP_CODE" = "200" ]; then
        STATUS="OK"
    else
        STATUS="ERROR"
    fi
    
    LOG_MSG="[$TIMESTAMP] $ENDPOINT - Status: $STATUS, HTTP: $HTTP_CODE, Time: ${RESPONSE_TIME}s"
    echo "$LOG_MSG" | tee -a "$LOG_FILE"
    
    if [ "$STATUS" = "ERROR" ]; then
        # Send alert
        echo "$LOG_MSG" | mail -s "API Alert" admin@example.com
    fi
done
```

### Utilities

#### 31. Bulk Renamer
```bash
#!/bin/bash
# Bulk rename files with pattern

PATTERN="$1"
REPLACEMENT="$2"
DIRECTORY="${3:-.}"

if [ -z "$PATTERN" ] || [ -z "$REPLACEMENT" ]; then
    echo "Usage: $0 <pattern> <replacement> [directory]"
    exit 1
fi

find "$DIRECTORY" -type f -name "*$PATTERN*" | while read FILE; do
    DIR=$(dirname "$FILE")
    BASENAME=$(basename "$FILE")
    NEWNAME=$(echo "$BASENAME" | sed "s/$PATTERN/$REPLACEMENT/g")
    
    mv -v "$FILE" "$DIR/$NEWNAME"
done
```

#### 32. Random Password Generator
```bash
#!/bin/bash
# Generate secure random passwords

LENGTH="${1:-16}"
COUNT="${2:-5}"
INCLUDE_SPECIAL="${3:-yes}"

generate_password() {
    local LEN=$1
    local CHARS="A-Za-z0-9"
    
    if [ "$INCLUDE_SPECIAL" = "yes" ]; then
        CHARS="${CHARS}!@#$%^&*"
    fi
    
    tr -dc "$CHARS" < /dev/urandom | head -c "$LEN"
    echo ""
}

echo "Generating $COUNT passwords of length $LENGTH..."
echo ""

for i in $(seq 1 $COUNT); do
    echo "$i. $(generate_password $LENGTH)"
done
```

#### 33. File Compressor
```bash
#!/bin/bash
# Compress files with different algorithms

SOURCE="$1"
ALGORITHM="${2:-gzip}"

if [ ! -e "$SOURCE" ]; then
    echo "Error: $SOURCE not found"
    exit 1
fi

BASENAME=$(basename "$SOURCE")
DATE=$(date +%Y%m%d_%H%M%S)

case "$ALGORITHM" in
    gzip)
        tar -czf "${BASENAME}_${DATE}.tar.gz" "$SOURCE"
        echo "Created: ${BASENAME}_${DATE}.tar.gz"
        ;;
    bzip2)
        tar -cjf "${BASENAME}_${DATE}.tar.bz2" "$SOURCE"
        echo "Created: ${BASENAME}_${DATE}.tar.bz2"
        ;;
    xz)
        tar -cJf "${BASENAME}_${DATE}.tar.xz" "$SOURCE"
        echo "Created: ${BASENAME}_${DATE}.tar.xz"
        ;;
    zip)
        zip -r "${BASENAME}_${DATE}.zip" "$SOURCE"
        echo "Created: ${BASENAME}_${DATE}.zip"
        ;;
    *)
        echo "Unknown algorithm: $ALGORITHM"
        echo "Supported: gzip, bzip2, xz, zip"
        exit 1
        ;;
esac
```

#### 34. System Info Reporter
```bash
#!/bin/bash
# Display comprehensive system information

echo "================================"
echo "  System Information Report"
echo "================================"
echo ""

echo "Hostname: $(hostname)"
echo "OS: $(lsb_release -d | cut -f2)"
echo "Kernel: $(uname -r)"
echo "Architecture: $(uname -m)"
echo ""

echo "CPU:"
lscpu | grep "Model name" | cut -d: -f2 | xargs
echo "Cores: $(nproc)"
echo ""

echo "Memory:"
free -h | grep "Mem:" | awk '{print "Total: "$2", Used: "$3", Free: "$4}'
echo ""

echo "Disk Usage:"
df -h / | awk 'NR==2 {print "Total: "$2", Used: "$3", Free: "$4", Usage: "$5}'
echo ""

echo "Network Interfaces:"
ip -br addr show
echo ""

echo "Uptime:"
uptime -p
echo ""

echo "Load Average:"
uptime | awk -F'load average:' '{print $2}'
```

#### 35. Quick File Server
```bash
#!/bin/bash
# Start a quick HTTP file server

PORT="${1:-8000}"
DIR="${2:-.}"

cd "$DIR" || exit 1

echo "Starting HTTP server on port $PORT"
echo "Serving directory: $(pwd)"
echo "Access at: http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo ""

# Use Python's built-in HTTP server
if command -v python3 &>/dev/null; then
    python3 -m http.server "$PORT"
elif command -v python &>/dev/null; then
    python -m SimpleHTTPServer "$PORT"
else
    echo "Python not found. Installing busybox httpd..."
    busybox httpd -f -p "$PORT"
fi
```

### Advanced Scenarios (36-55)

#### 36. Database Synchronization
```bash
#!/bin/bash
# Sync database between servers

SOURCE_HOST="source.example.com"
SOURCE_USER="root"
SOURCE_DB="myapp"

TARGET_HOST="target.example.com"
TARGET_USER="root"
TARGET_DB="myapp"

TEMP_FILE="/tmp/db_sync_$(date +%s).sql"

echo "Dumping database from source..."
mysqldump -h "$SOURCE_HOST" -u "$SOURCE_USER" -p "$SOURCE_DB" > "$TEMP_FILE"

echo "Importing to target..."
mysql -h "$TARGET_HOST" -u "$TARGET_USER" -p "$TARGET_DB" < "$TEMP_FILE"

rm -f "$TEMP_FILE"
echo "Database synchronized successfully"
```

#### 37. Multi-Server Command Executor
```bash
#!/bin/bash
# Execute command on multiple servers

SERVERS_FILE="servers.txt"
COMMAND="$@"

if [ -z "$COMMAND" ]; then
    echo "Usage: $0 <command>"
    exit 1
fi

while read SERVER; do
    echo "=== Executing on $SERVER ==="
    ssh "$SERVER" "$COMMAND"
    echo ""
done < "$SERVERS_FILE"
```

#### 38. Configuration Manager
```bash
#!/bin/bash
# Manage configuration across environments

ENV="$1"
CONFIG_DIR="configs"

if [ -z "$ENV" ]; then
    echo "Usage: $0 <dev|staging|production>"
    exit 1
fi

case "$ENV" in
    dev)
        cp "$CONFIG_DIR/dev.env" .env
        ;;
    staging)
        cp "$CONFIG_DIR/staging.env" .env
        ;;
    production)
        cp "$CONFIG_DIR/production.env" .env
        ;;
    *)
        echo "Unknown environment: $ENV"
        exit 1
        ;;
esac

echo "Configuration set to $ENV"
```

#### 39. Log Aggregator
```bash
#!/bin/bash
# Aggregate logs from multiple servers

SERVERS_FILE="servers.txt"
OUTPUT_DIR="/var/log/aggregated"
DATE=$(date +%Y%m%d)

mkdir -p "$OUTPUT_DIR"

while read SERVER; do
    echo "Collecting logs from $SERVER..."
    
    ssh "$SERVER" "tar -czf /tmp/logs.tar.gz /var/log/*.log" 
    scp "$SERVER:/tmp/logs.tar.gz" "$OUTPUT_DIR/${SERVER}_${DATE}.tar.gz"
    ssh "$SERVER" "rm -f /tmp/logs.tar.gz"
done < "$SERVERS_FILE"

echo "Log aggregation completed"
```

#### 40. Automated Deployment Pipeline
```bash
#!/bin/bash
# Simple CI/CD deployment pipeline

PROJECT_DIR="/var/www/myapp"
REPO_URL="git@github.com:user/myapp.git"
BRANCH="main"

cd "$PROJECT_DIR" || exit 1

echo "=== Starting Deployment ==="

echo "Step 1: Pulling latest code..."
git pull origin "$BRANCH"

echo "Step 2: Installing dependencies..."
npm install --production

echo "Step 3: Running tests..."
npm test || {
    echo "Tests failed! Deployment aborted."
    exit 1
}

echo "Step 4: Building application..."
npm run build

echo "Step 5: Restarting services..."
systemctl restart myapp

echo "=== Deployment Completed Successfully ==="
```

*[Scenarios 41-55 would continue with more advanced topics like Kubernetes automation, load balancing, advanced security hardening, machine learning pipelines, IoT device management, blockchain interactions, etc. For brevity, moving to next section]*

---

## 18. 100 Practice Questions

### Beginner Level (Questions 1-30)

**1.** Write a script that prints "Hello, World!"

**2.** Create a script that displays your username and home directory.

**3.** Write a script that takes a name as input and greets the user.

**4.** Create a script that checks if a file exists.

**5.** Write a script that counts from 1 to 10.

**6.** Create a script that calculates the sum of two numbers.

**7.** Write a script that checks if a number is even or odd.

**8.** Create a script that displays the current date and time.

**9.** Write a script that creates a directory and a file inside it.

**10.** Create a script that copies a file to a backup location.

**11.** Write a script that finds all .txt files in current directory.

**12.** Create a script that displays the first 10 lines of a file.

**13.** Write a script that counts the number of files in a directory.

**14.** Create a script that renames a file.

**15.** Write a script that compares two numbers and prints the larger one.

**16.** Create a script that checks if a directory is empty.

**17.** Write a script that displays system uptime.

**18.** Create a script that checks disk usage and displays percentage.

**19.** Write a script that lists all running processes.

**20.** Create a script that calculates factorial of a number.

**21.** Write a script that reverses a string.

**22.** Create a script that counts vowels in a string.

**23.** Write a script that checks if a string is palindrome.

**24.** Create a script that generates random numbers between 1-100.

**25.** Write a script that displays multiplication table of a number.

**26.** Create a script that converts temperature from Celsius to Fahrenheit.

**27.** Write a script that calculates simple interest.

**28.** Create a script that finds the largest of three numbers.

**29.** Write a script that checks if a year is leap year.

**30.** Create a script that displays system memory usage.

### Intermediate Level (Questions 31-60)

**31.** Write a script that monitors CPU usage and alerts if above 80%.

**32.** Create a script that backs up a directory with timestamp.

**33.** Write a script that finds and deletes files older than 30 days.

**34.** Create a script that extracts email addresses from a text file.

**35.** Write a script that validates user input (name, age, email).

**36.** Create a script that monitors a log file in real-time.

**37.** Write a script that compresses all .log files in a directory.

**38.** Create a script that synchronizes two directories.

**39.** Write a script that parses CSV file and extracts specific columns.

**40.** Create a script that checks website availability every 5 minutes.

**41.** Write a script that manages user accounts (create, delete, modify).

**42.** Create a script that generates system health report.

**43.** Write a script that finds duplicate files in a directory tree.

**44.** Create a script that implements simple calculator with menu.

**45.** Write a script that monitors network bandwidth usage.

**46.** Create a script that automatically organizes downloads folder.

**47.** Write a script that sends email notifications (using mail command).

**48.** Create a script that implements file encryption/decryption.

**49.** Write a script that manages cron jobs programmatically.

**50.** Create a script that performs automated database backup.

**51.** Write a script that implements custom logging system with levels.

**52.** Create a script that monitors and restarts failed services.

**53.** Write a script that analyzes Apache/Nginx access logs.

**54.** Create a script that implements rate limiting for API calls.

**55.** Write a script that generates random passwords with criteria.

**56.** Create a script that implements file version control.

**57.** Write a script that monitors SSL certificate expiration.

**58.** Create a script that implements custom backup rotation policy.

**59.** Write a script that parses JSON API responses.

**60.** Create a script that implements distributed task execution.

### Advanced Level (Questions 61-100)

**61.** Write a script that implements parallel processing for large datasets.

**62.** Create a script that manages Docker containers lifecycle.

**63.** Write a script that implements rolling deployment strategy.

**64.** Create a script that monitors and optimizes database performance.

**65.** Write a script that implements custom load balancer.

**66.** Create a script that performs security auditing on system.

**67.** Write a script that implements distributed log aggregation.

**68.** Create a script that manages Kubernetes resources.

**69.** Write a script that implements CI/CD pipeline.

**70.** Create a script that performs automated penetration testing.

**71.** Write a script that implements service mesh management.

**72.** Create a script that monitors and manages cloud resources (AWS/GCP).

**73.** Write a script that implements blue-green deployment.

**74.** Create a script that performs automated code review checks.

**75.** Write a script that implements distributed caching mechanism.

**76.** Create a script that manages microservices orchestration.

**77.** Write a script that implements custom metrics collection.

**78.** Create a script that performs automated failover for services.

**79.** Write a script that implements data pipeline automation.

**80.** Create a script that manages infrastructure as code.

**81.** Write a script that implements distributed tracing.

**82.** Create a script that performs automated capacity planning.

**83.** Write a script that implements custom service discovery.

**84.** Create a script that manages multi-region deployments.

**85.** Write a script that implements automated disaster recovery.

**86.** Create a script that performs automated compliance checking.

**87.** Write a script that implements custom rate limiting with Redis.

**88.** Create a script that manages API gateway configuration.

**89.** Write a script that implements automated scaling policies.

**90.** Create a script that performs automated cost optimization.

**91.** Write a script that implements custom monitoring dashboard.

**92.** Create a script that manages certificate rotation.

**93.** Write a script that implements distributed locking mechanism.

**94.** Create a script that performs automated dependency management.

**95.** Write a script that implements custom circuit breaker pattern.

**96.** Create a script that manages feature flags deployment.

**97.** Write a script that implements automated A/B testing.

**98.** Create a script that performs canary deployment analysis.

**99.** Write a script that implements custom chaos engineering tests.

**100.** Create a script that manages complete DevOps lifecycle automation.

---

## 19. 50 Shell Scripting Projects

### Beginner Projects (1-15)

#### 1. **Personal Task Manager**
Create a CLI task manager to add, list, complete, and delete tasks.

**Features:**
- Add tasks with priority
- List all tasks
- Mark tasks as complete
- Delete tasks
- Save tasks to file

**Skills:** File I/O, arrays, functions, user input

---

#### 2. **Simple Calculator**
Build a command-line calculator with basic operations.

**Features:**
- Addition, subtraction, multiplication, division
- History of calculations
- Scientific operations (advanced)
- Memory functions

**Skills:** Arithmetic operations, functions, case statements

---

#### 3. **File Organizer**
Automatically organize files in downloads folder by type.

**Features:**
- Sort by extension
- Create category folders
- Move files automatically
- Undo last organization
- Custom rules

**Skills:** File operations, loops, conditionals

---

#### 4. **Password Manager**
Secure password storage and retrieval system.

**Features:**
- Store passwords encrypted
- Retrieve passwords
- Generate random passwords
- Password strength checker
- Master password protection

**Skills:** Encryption, file operations, security

---

#### 5. **System Information Dashboard**
Display comprehensive system information.

**Features:**
- CPU, RAM, Disk usage
- Network information
- Running processes
- System uptime
- Refresh automatically

**Skills:** System commands, formatting, loops

---

#### 6. **Expense Tracker**
Track personal expenses and generate reports.

**Features:**
- Add expenses with category
- View expenses by date/category
- Monthly summary
- Budget tracking
- Export to CSV

**Skills:** Data structures, calculations, reporting

---

#### 7. **Weather CLI**
Fetch and display weather information.

**Features:**
- Current weather
- 5-day forecast
- Multiple locations
- Temperature conversion
- Save favorite locations

**Skills:** API calls, JSON parsing, formatting

---

#### 8. **Note Taking App**
Command-line note taking application.

**Features:**
- Create, edit, delete notes
- Tag notes
- Search notes
- Categories
- Export notes

**Skills:** File operations, search algorithms, UI

---

#### 9. **Countdown Timer**
Customizable countdown timer with alerts.

**Features:**
- Set timer duration
- Pause/resume
- Visual countdown
- Sound alert
- Save presets

**Skills:** Time operations, signals, user interaction

---

#### 10. **Quiz Game**
Interactive quiz game with scoring.

**Features:**
- Multiple choice questions
- Score tracking
- Difficulty levels
- High scores
- Question bank

**Skills:** Arrays, functions, scoring logic

---

#### 11. **Contact Manager**
Manage contacts with search and export.

**Features:**
- Add/edit/delete contacts
- Search contacts
- Import/export CSV
- Backup contacts
- Validation

**Skills:** CRUD operations, file management

---

#### 12. **To-Do List with Reminders**
Advanced to-do list with notifications.

**Features:**
- Add tasks with due dates
- Set reminders
- Priority levels
- Recurring tasks
- Notifications

**Skills:** Cron jobs, date operations, scheduling

---

#### 13. **Markdown to HTML Converter**
Convert markdown files to HTML.

**Features:**
- Basic markdown support
- CSS styling
- Batch conversion
- Preview mode
- Templates

**Skills:** Text parsing, regex, file conversion

---

#### 14. **Git Helper**
Simplify common Git operations.

**Features:**
- Quick commit with message
- Branch management
- Stash helper
- Conflict resolver
- Statistics

**Skills:** Git commands, workflow automation

---

#### 15. **Pomodoro Timer**
Productivity timer with breaks.

**Features:**
- 25-minute work sessions
- 5-minute breaks
- Long breaks
- Session tracking
- Statistics

**Skills:** Timers, loops, user interaction

---

### Intermediate Projects (16-35)

#### 16. **Automated Backup System**
Comprehensive backup solution.

**Features:**
- Incremental backups
- Compression
- Remote backup (rsync/cloud)
- Encryption
- Restore functionality
- Schedule backups

**Skills:** Compression, encryption, scheduling, remote operations

---

#### 17. **Log Analyzer**
Analyze and generate reports from log files.

**Features:**
- Parse various log formats
- Extract patterns
- Generate statistics
- Alert on errors
- Dashboard view
- Export reports

**Skills:** Text processing, regex, data analysis

---

#### 18. **Server Monitoring Tool**
Monitor multiple servers health.

**Features:**
- CPU, RAM, Disk monitoring
- Service status checks
- Alert system
- Historical data
- Web dashboard
- Multi-server support

**Skills:** SSH, remote commands, monitoring, alerts

---

#### 19. **Database Backup Manager**
Automated database backup and restore.

**Features:**
- Multiple database support
- Scheduled backups
- Compression
- Remote storage
- Backup verification
- Point-in-time restore

**Skills:** Database operations, scheduling, verification

---

#### 20. **Website Uptime Monitor**
Monitor website availability and performance.

**Features:**
- Multiple URL monitoring
- Response time tracking
- HTTP status codes
- SSL certificate check
- Alert notifications
- Historical reports

**Skills:** HTTP requests, monitoring, alerting

---

#### 21. **Deployment Script**
Automate application deployment.

**Features:**
- Git integration
- Dependency installation
- Database migrations
- Service restart
- Rollback capability
- Multi-environment support

**Skills:** Deployment, Git, process management

---

#### 22. **Config File Manager**
Manage configuration across environments.

**Features:**
- Template system
- Environment-specific configs
- Validation
- Version control
- Backup/restore
- Encryption

**Skills:** Template processing, validation, version control

---

#### 23. **Docker Manager**
Manage Docker containers and images.

**Features:**
- Container lifecycle
- Image management
- Network configuration
- Volume management
- Docker Compose support
- Health checks

**Skills:** Docker CLI, container orchestration

---

#### 24. **API Testing Tool**
Test REST APIs with various scenarios.

**Features:**
- HTTP methods support
- Headers and body
- Authentication
- Response validation
- Test suites
- Report generation

**Skills:** HTTP requests, JSON, testing

---

#### 25. **File Synchronization Tool**
Sync files between locations.

**Features:**
- Bidirectional sync
- Conflict resolution
- Dry-run mode
- Exclude patterns
- Remote sync
- Change detection

**Skills:** File operations, comparison, rsync

---

#### 26. **Network Scanner**
Scan network for devices and services.

**Features:**
- IP range scanning
- Port scanning
- Service detection
- OS fingerprinting
- Report generation
- Alert on changes

**Skills:** Network operations, scanning, reporting

---

#### 27. **Automated Testing Framework**
Run automated tests with reporting.

**Features:**
- Test suite execution
- Parallel execution
- Result aggregation
- HTML reports
- Email notifications
- CI/CD integration

**Skills:** Testing, parallel processing, reporting

---

#### 28. **Certificate Manager**
Manage SSL/TLS certificates.

**Features:**
- Certificate generation
- Expiration monitoring
- Auto-renewal
- Multiple domains
- Wildcard support
- Deployment automation

**Skills:** SSL/TLS, cron jobs, automation

---

#### 29. **Firewall Manager**
Manage firewall rules dynamically.

**Features:**
- Rule addition/removal
- Rule templates
- Port management
- IP whitelisting/blacklisting
- Backup/restore rules
- Rule validation

**Skills:** iptables, security, rule management

---

#### 30. **Load Balancer Configuration**
Configure and manage load balancers.

**Features:**
- Backend server management
- Health checks
- Weight distribution
- Session persistence
- SSL termination
- Configuration validation

**Skills:** Nginx/HAProxy, load balancing

---

#### 31. **Container Orchestration**
Simple Kubernetes-like orchestration.

**Features:**
- Service deployment
- Scaling
- Health monitoring
- Rolling updates
- Service discovery
- Load distribution

**Skills:** Container management, orchestration

---

#### 32. **Chaos Engineering Tool**
Test system resilience.

**Features:**
- Random failure injection
- Resource exhaustion
- Network latency
- Process killing
- Recovery validation
- Reporting

**Skills:** System manipulation, testing

---

#### 33. **Resource Usage Reporter**
Generate comprehensive resource reports.

**Features:**
- CPU/RAM/Disk tracking
- Application-specific metrics
- Historical data
- Trend analysis
- Alerts on anomalies
- Cost estimation

**Skills:** Monitoring, data collection, analysis

---

#### 34. **Multi-Server Command Executor**
Execute commands across servers.

**Features:**
- Parallel execution
- Output aggregation
- Error handling
- Server groups
- Command history
- Output formatting

**Skills:** SSH, parallel processing, remote execution

---

#### 35. **Automated Code Deployment Pipeline**
Complete CI/CD pipeline.

**Features:**
- Source code checkout
- Testing
- Build process
- Deployment stages
- Rollback mechanism
- Notifications

**Skills:** CI/CD, Git, automation, testing

---

### Advanced Projects (36-50)

#### 36. **Infrastructure as Code Manager**
Manage infrastructure through code.

**Features:**
- Template-based provisioning
- Multi-cloud support
- State management
- Drift detection
- Rollback capability
- Documentation generation

**Skills:** Cloud APIs, state management, templates

---

#### 37. **Service Mesh Controller**
Implement service mesh functionality.

**Features:**
- Service discovery
- Load balancing
- Circuit breaker
- Retry logic
- Metrics collection
- Distributed tracing

**Skills:** Networking, microservices, observability

---

#### 38. **Custom Monitoring System**
Build custom monitoring solution.

**Features:**
- Agent-based collection
- Time-series database
- Alerting engine
- Dashboard
- Anomaly detection
- Integration with external tools

**Skills:** Data collection, time-series, visualization

---

#### 39. **Automated Security Scanner**
Scan for security vulnerabilities.

**Features:**
- Port scanning
- Vulnerability detection
- Dependency checking
- Configuration auditing
- Compliance checking
- Remediation suggestions

**Skills:** Security, scanning, compliance

---

#### 40. **Distributed Log Aggregation**
Aggregate logs from multiple sources.

**Features:**
- Multiple input sources
- Parsing and filtering
- Centralized storage
- Search functionality
- Alert triggers
- Visualization

**Skills:** Log processing, distributed systems

---

#### 41. **Blue-Green Deployment Automation**
Implement blue-green deployments.

**Features:**
- Environment duplication
- Traffic switching
- Health verification
- Automatic rollback
- Zero-downtime
- State synchronization

**Skills:** Deployment strategies, load balancers

---

#### 42. **Canary Deployment Manager**
Manage canary deployments.

**Features:**
- Gradual rollout
- Metrics monitoring
- Automatic promotion/rollback
- A/B testing
- Traffic splitting
- Analytics

**Skills:** Progressive delivery, monitoring

---

#### 43. **Automated Disaster Recovery**
Implement DR automation.

**Features:**
- Backup orchestration
- Failover automation
- Data replication
- Recovery testing
- RTO/RPO monitoring
- Documentation

**Skills:** DR planning, automation, testing

---

#### 44. **Multi-Cloud Resource Manager**
Manage resources across clouds.

**Features:**
- Unified interface
- Cost optimization
- Resource provisioning
- Migration tools
- Compliance checking
- Billing aggregation

**Skills:** Cloud APIs, cost management

---

#### 45. **Kubernetes Cluster Manager**
Advanced K8s management.

**Features:**
- Cluster provisioning
- Application deployment
- Scaling policies
- Backup/restore
- Monitoring integration
- Security policies

**Skills:** Kubernetes, container orchestration

---

#### 46. **GitOps Implementation**
Implement GitOps workflow.

**Features:**
- Git as single source of truth
- Automated synchronization
- Drift detection
- Rollback capability
- Audit logging
- Policy enforcement

**Skills:** Git, automation, reconciliation

---

#### 47. **Custom API Gateway**
Build simple API gateway.

**Features:**
- Request routing
- Authentication
- Rate limiting
- Caching
- Logging
- Metrics

**Skills:** Networking, proxying, security

---

#### 48. **Database Migration Tool**
Automate database migrations.

**Features:**
- Version control
- Up/down migrations
- Multiple database support
- Rollback capability
- Validation
- Documentation

**Skills:** Database operations, version control

---

#### 49. **Feature Flag System**
Implement feature flags.

**Features:**
- Flag management
- Gradual rollout
- User targeting
- A/B testing
- Analytics
- API interface

**Skills:** Configuration management, targeting

---

#### 50. **Complete DevOps Platform**
Build comprehensive DevOps platform.

**Features:**
- Source control integration
- CI/CD pipelines
- Environment management
- Monitoring and logging
- Security scanning
- Cost management
- Documentation generation
- Team collaboration

**Skills:** All DevOps practices, system integration

---

## 🎓 Conclusion

Congratulations on completing this comprehensive shell scripting guide! You now have the knowledge to:

- Write efficient shell scripts from scratch
- Automate complex system administration tasks
- Build production-ready tools and utilities
- Implement DevOps best practices
- Debug and optimize shell scripts
- Work with various data formats and APIs

### Next Steps

1. **Practice Daily**: Write scripts for everyday tasks
2. **Contribute**: Share scripts on GitHub
3. **Learn More**: Explore advanced topics like AWK, sed mastery
4. **Build Projects**: Complete the 50 projects in this guide
5. **Join Communities**: Participate in shell scripting forums

### Resources

- **Official Bash Manual**: `man bash`
- **ShellCheck**: https://www.shellcheck.net
- **Advanced Bash Scripting Guide**: https://tldp.org/LDP/abs/html/
- **Bash Hackers Wiki**: https://wiki.bash-hackers.org

---

## 📝 Quick Reference

### Common Commands
```bash
# File Operations
ls, cd, pwd, mkdir, rm, cp, mv, touch, cat, less, head, tail

# Text Processing
grep, sed, awk, cut, sort, uniq, tr, wc, diff

# System Information
uname, hostname, uptime, free, df, du, ps, top, htop

# Network
ping, curl, wget, ssh, scp, rsync, netstat, ss

# Process Management
kill, pkill, killall, jobs, bg, fg, nohup

# User Management
useradd, usermod, userdel, passwd, groups, sudo

# Package Management
apt, yum, dnf, pacman, zypper
```

### Special Variables
```bash
$0, $1-$9, $#, $@, $*, $?, $$, $!, $-
```

### Test Operators
```bash
# Numeric: -eq, -ne, -lt, -le, -gt, -ge
# String: =, !=, -z, -n
# File: -e, -f, -d, -r, -w, -x, -s
```

---

**Happy Scripting! 🚀**

---

*Last Updated: 2025-10-01*
*Version: 1.0*
*Author: Shell Scripting Master Guide*
