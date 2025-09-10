import React from "react";
import { Link } from "react-router-dom";

export default function GettingStarted() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🚀 Getting Started</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">What is Linux?</h2>
        <p className="text-lg mb-4">
          Linux is a free, open-source operating system kernel that forms the foundation of countless distributions. 
          Born in 1991 by Linus Torvalds, Linux powers everything from smartphones (Android) to supercomputers, 
          web servers, and embedded systems.
        </p>
        
        <h3 className="text-2xl font-semibold mt-6 mb-3">Why Learn Linux?</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Industry Standard:</strong> 96% of the world's top 1 million servers run Linux</li>
          <li><strong>Cybersecurity Foundation:</strong> Essential for penetration testing and security operations</li>
          <li><strong>Career Opportunities:</strong> High-demand skill with excellent salary potential</li>
          <li><strong>Open Source:</strong> Free to use, modify, and distribute</li>
          <li><strong>Stability & Performance:</strong> Renowned for reliability and efficiency</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mb-3">Popular Linux Distributions</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">🎯 For Beginners</h4>
            <ul className="space-y-1">
              <li><strong>Ubuntu:</strong> User-friendly, great community support</li>
              <li><strong>Linux Mint:</strong> Windows-like interface</li>
              <li><strong>Elementary OS:</strong> macOS-inspired design</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">🔒 For Security Professionals</h4>
            <ul className="space-y-1">
              <li><strong>Kali Linux:</strong> Penetration testing tools</li>
              <li><strong>Parrot Security:</strong> Privacy-focused security OS</li>
              <li><strong>BlackArch:</strong> Penetration testing distribution</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Linux Architecture Overview</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <pre className="text-sm">
{`┌─────────────────────────────────────┐
│           User Applications         │
├─────────────────────────────────────┤
│              Shell                  │
├─────────────────────────────────────┤
│          System Libraries           │
├─────────────────────────────────────┤
│            Linux Kernel             │
├─────────────────────────────────────┤
│             Hardware                │
└─────────────────────────────────────┘`}
          </pre>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Setting Up Your Learning Environment</h3>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">Option 1: Virtual Machine (Recommended)</h4>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Download VirtualBox or VMware</li>
            <li>Download Ubuntu 22.04 LTS ISO</li>
            <li>Create VM with 4GB RAM, 25GB storage</li>
            <li>Install Ubuntu following the wizard</li>
          </ol>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">Option 2: Windows Subsystem for Linux (WSL)</h4>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Enable WSL in Windows Features</li>
            <li>Install Ubuntu from Microsoft Store</li>
            <li>Open Ubuntu terminal and update packages</li>
          </ol>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">First Steps Exercise</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Practice: Your First Linux Commands</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Open a terminal (Ctrl+Alt+T)</li>
            <li>Type <code className="bg-gray-200 px-1 rounded">whoami</code> to see your username</li>
            <li>Type <code className="bg-gray-200 px-1 rounded">pwd</code> to see your current directory</li>
            <li>Type <code className="bg-gray-200 px-1 rounded">ls</code> to list files in current directory</li>
            <li>Type <code className="bg-gray-200 px-1 rounded">date</code> to see current date and time</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Tip:</strong> Use the Tab key for auto-completion and Up arrow to repeat previous commands!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Back to Home
        </Link>
        <Link to="/foundation" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Foundation Concepts →
        </Link>
      </div>
    </div>
  );
}
