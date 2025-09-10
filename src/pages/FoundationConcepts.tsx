import React from "react";
import { Link } from "react-router-dom";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";

export default function FoundationConcepts() {
  return (
    <div className="py-8 px-4">
      <FullscreenToggle />
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-6">🏗️ Foundation Concepts</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">File System Hierarchy</h2>
        <p className="text-lg mb-4">
          Understanding Linux's directory structure is crucial. Everything in Linux is a file, and files are organized in a hierarchical tree structure starting from the root (/).
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Directory</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/</td>
                <td className="border border-gray-300 px-4 py-2">Root directory - top of filesystem</td>
                <td className="border border-gray-300 px-4 py-2">Entry point to everything</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/home</td>
                <td className="border border-gray-300 px-4 py-2">User home directories</td>
                <td className="border border-gray-300 px-4 py-2">/home/john, /home/alice</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/etc</td>
                <td className="border border-gray-300 px-4 py-2">System configuration files</td>
                <td className="border border-gray-300 px-4 py-2">/etc/passwd, /etc/hosts</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/var</td>
                <td className="border border-gray-300 px-4 py-2">Variable data (logs, databases)</td>
                <td className="border border-gray-300 px-4 py-2">/var/log, /var/www</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/usr</td>
                <td className="border border-gray-300 px-4 py-2">User programs and data</td>
                <td className="border border-gray-300 px-4 py-2">/usr/bin, /usr/share</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/bin</td>
                <td className="border border-gray-300 px-4 py-2">Essential system binaries</td>
                <td className="border border-gray-300 px-4 py-2">ls, cp, mv, rm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">/tmp</td>
                <td className="border border-gray-300 px-4 py-2">Temporary files</td>
                <td className="border border-gray-300 px-4 py-2">Session data, temp downloads</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">File Types & Permissions</h3>
        <p className="mb-4">Linux has different file types, each serving specific purposes:</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">File Types</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>- (dash):</strong> Regular file</li>
              <li><strong>d:</strong> Directory</li>
              <li><strong>l:</strong> Symbolic link</li>
              <li><strong>c:</strong> Character device</li>
              <li><strong>b:</strong> Block device</li>
              <li><strong>p:</strong> Named pipe</li>
              <li><strong>s:</strong> Socket</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Permission Structure</h4>
            <div className="bg-gray-100 p-2 rounded font-mono text-sm mb-2">
              rwxrwxrwx
            </div>
            <ul className="space-y-1 text-sm">
              <li><strong>First 3:</strong> Owner permissions</li>
              <li><strong>Next 3:</strong> Group permissions</li>
              <li><strong>Last 3:</strong> Other permissions</li>
              <li><strong>r:</strong> Read (4)</li>
              <li><strong>w:</strong> Write (2)</li>
              <li><strong>x:</strong> Execute (1)</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Shell Concepts</h3>
        <p className="mb-4">The shell is your command-line interface to Linux. Understanding shell concepts is essential:</p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">Shell Basics</h4>
          <ul className="space-y-2">
            <li><strong>Prompt:</strong> Indicates shell is ready for commands ($ for users, # for root)</li>
            <li><strong>Command Structure:</strong> command [options] [arguments]</li>
            <li><strong>Environment Variables:</strong> $HOME, $PATH, $USER</li>
            <li><strong>Wildcards:</strong> * (any characters), ? (single character)</li>
            <li><strong>Pipes:</strong> | to chain commands together</li>
            <li><strong>Redirection:</strong> {`>`} (output), {`>>`} (append), {`<`} (input)</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Essential Keyboard Shortcuts</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Shortcut</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Ctrl + C</td>
                <td className="border border-gray-300 px-4 py-2">Interrupt/stop current command</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Ctrl + D</td>
                <td className="border border-gray-300 px-4 py-2">Exit shell or EOF</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Ctrl + L</td>
                <td className="border border-gray-300 px-4 py-2">Clear screen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Ctrl + A</td>
                <td className="border border-gray-300 px-4 py-2">Move to beginning of line</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Ctrl + E</td>
                <td className="border border-gray-300 px-4 py-2">Move to end of line</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Tab</td>
                <td className="border border-gray-300 px-4 py-2">Auto-complete commands/files</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">↑ / ↓</td>
                <td className="border border-gray-300 px-4 py-2">Navigate command history</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practice Exercise: Exploring the File System</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Hands-On Practice</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Navigate to root directory: <code className="bg-gray-200 px-1 rounded">cd /</code></li>
            <li>List all directories: <code className="bg-gray-200 px-1 rounded">ls -la</code></li>
            <li>Check your home directory: <code className="bg-gray-200 px-1 rounded">echo $HOME</code></li>
            <li>Navigate to /etc and list config files: <code className="bg-gray-200 px-1 rounded">cd /etc && ls</code></li>
            <li>Check file permissions: <code className="bg-gray-200 px-1 rounded">ls -l /etc/passwd</code></li>
            <li>View system information: <code className="bg-gray-200 px-1 rounded">cat /etc/os-release</code></li>
            <li>Return to home: <code className="bg-gray-200 px-1 rounded">cd ~</code></li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Tip:</strong> Use <code className="bg-gray-200 px-1 rounded">man command</code> to get help for any command!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/getting-started" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Getting Started
        </Link>
        <Link to="/commands" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Essential Commands →
        </Link>
      </div>
    </div>
    </div>
  );
}
