import React from "react";
import { Link } from "react-router-dom";

export default function EssentialCommands() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">📁 Essential Commands: The Core Toolkit</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">File Operations</h2>
        <p className="text-lg mb-4">
          Master these fundamental file operations to navigate and manipulate the Linux filesystem efficiently.
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Command</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Common Options</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">ls</td>
                <td className="border border-gray-300 px-4 py-2">List directory contents</td>
                <td className="border border-gray-300 px-4 py-2">-l, -a, -h, -R</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">ls -la /home</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">cd</td>
                <td className="border border-gray-300 px-4 py-2">Change directory</td>
                <td className="border border-gray-300 px-4 py-2">~, -, .., /</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">cd /var/log</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">pwd</td>
                <td className="border border-gray-300 px-4 py-2">Print working directory</td>
                <td className="border border-gray-300 px-4 py-2">-L, -P</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">pwd</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">mkdir</td>
                <td className="border border-gray-300 px-4 py-2">Create directories</td>
                <td className="border border-gray-300 px-4 py-2">-p, -m</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">mkdir -p /tmp/test/dir</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">rmdir</td>
                <td className="border border-gray-300 px-4 py-2">Remove empty directories</td>
                <td className="border border-gray-300 px-4 py-2">-p</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">rmdir /tmp/empty</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">cp</td>
                <td className="border border-gray-300 px-4 py-2">Copy files/directories</td>
                <td className="border border-gray-300 px-4 py-2">-r, -i, -v, -p</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">cp -r /source /dest</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">mv</td>
                <td className="border border-gray-300 px-4 py-2">Move/rename files</td>
                <td className="border border-gray-300 px-4 py-2">-i, -v</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">mv old.txt new.txt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">rm</td>
                <td className="border border-gray-300 px-4 py-2">Remove files/directories</td>
                <td className="border border-gray-300 px-4 py-2">-r, -f, -i</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">rm -rf /tmp/test</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">File Viewing & Editing</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Command</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">cat</td>
                <td className="border border-gray-300 px-4 py-2">Display file contents</td>
                <td className="border border-gray-300 px-4 py-2">Small files</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">cat /etc/passwd</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">less</td>
                <td className="border border-gray-300 px-4 py-2">Page through files</td>
                <td className="border border-gray-300 px-4 py-2">Large files</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">less /var/log/syslog</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">head</td>
                <td className="border border-gray-300 px-4 py-2">Show first lines</td>
                <td className="border border-gray-300 px-4 py-2">File beginnings</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">head -n 20 file.txt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">tail</td>
                <td className="border border-gray-300 px-4 py-2">Show last lines</td>
                <td className="border border-gray-300 px-4 py-2">Log monitoring</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">tail -f /var/log/apache2/access.log</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">nano</td>
                <td className="border border-gray-300 px-4 py-2">Simple text editor</td>
                <td className="border border-gray-300 px-4 py-2">Quick edits</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">nano config.txt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">vim</td>
                <td className="border border-gray-300 px-4 py-2">Advanced text editor</td>
                <td className="border border-gray-300 px-4 py-2">Power editing</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">vim script.sh</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Search & Find</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Command</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Options</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">find</td>
                <td className="border border-gray-300 px-4 py-2">Find files/directories</td>
                <td className="border border-gray-300 px-4 py-2">-name, -type, -size</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">find /home -name "*.txt"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">grep</td>
                <td className="border border-gray-300 px-4 py-2">Search text patterns</td>
                <td className="border border-gray-300 px-4 py-2">-i, -r, -n, -v</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">grep -r "error" /var/log/</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">locate</td>
                <td className="border border-gray-300 px-4 py-2">Fast file search</td>
                <td className="border border-gray-300 px-4 py-2">-i, -c</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">locate config.conf</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">which</td>
                <td className="border border-gray-300 px-4 py-2">Find command location</td>
                <td className="border border-gray-300 px-4 py-2">-a</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">which python3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">whereis</td>
                <td className="border border-gray-300 px-4 py-2">Find binary, source, manual</td>
                <td className="border border-gray-300 px-4 py-2">-b, -m, -s</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">whereis apache2</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practical Exercise: File Operations Mastery</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Complete File Management Challenge</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Create a directory structure: <code className="bg-gray-200 px-1 rounded">mkdir -p ~/practice/{`{documents,scripts,backups}`}</code></li>
            <li>Create sample files: <code className="bg-gray-200 px-1 rounded">touch ~/practice/documents/{`{report.txt,notes.md,data.csv}`}</code></li>
            <li>Add content to a file: <code className="bg-gray-200 px-1 rounded">echo "Hello Linux!" {`>`} ~/practice/documents/report.txt</code></li>
            <li>Copy files with structure: <code className="bg-gray-200 px-1 rounded">cp -r ~/practice/documents ~/practice/backups/</code></li>
            <li>Find all .txt files: <code className="bg-gray-200 px-1 rounded">find ~/practice -name "*.txt"</code></li>
            <li>Search for content: <code className="bg-gray-200 px-1 rounded">grep -r "Hello" ~/practice/</code></li>
            <li>View file details: <code className="bg-gray-200 px-1 rounded">ls -la ~/practice/documents/</code></li>
            <li>Clean up: <code className="bg-gray-200 px-1 rounded">rm -rf ~/practice/</code></li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Pro Tip:</strong> Use tab completion to save time and avoid typos!
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Command Combinations & Pipes</h3>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">Powerful Command Chaining</h4>
          <ul className="space-y-2">
            <li><code className="bg-gray-200 px-1 rounded">ls -la | grep "^d"</code> - List only directories</li>
            <li><code className="bg-gray-200 px-1 rounded">cat file.txt | sort | uniq</code> - Sort and remove duplicates</li>
            <li><code className="bg-gray-200 px-1 rounded">ps aux | grep apache</code> - Find Apache processes</li>
            <li><code className="bg-gray-200 px-1 rounded">find . -name "*.log" | xargs grep "error"</code> - Search errors in log files</li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/foundation" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Foundation Concepts
        </Link>
        <Link to="/networking" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Networking Mastery →
        </Link>
      </div>
    </div>
  );
}
