import React from "react";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";
import { Link } from "react-router-dom";

export default function PracticalLabs() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-6">🏆 Practical Projects & Hands-On Labs</h1>
      
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">🎯 Learning Through Practice</h2>
        <p className="text-sm">
          Real-world experience is invaluable. These structured projects will help you apply your knowledge 
          and build a professional portfolio that demonstrates your cybersecurity skills.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Lab Environment Setup</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Virtual Laboratory Components</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Recommended Software</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Specifications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Hypervisor</strong></td>
                <td className="border border-gray-300 px-4 py-2">VM management</td>
                <td className="border border-gray-300 px-4 py-2">VMware Workstation, VirtualBox</td>
                <td className="border border-gray-300 px-4 py-2">16GB+ RAM, 500GB+ storage</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Attacking Machine</strong></td>
                <td className="border border-gray-300 px-4 py-2">Penetration testing</td>
                <td className="border border-gray-300 px-4 py-2">Kali Linux, Parrot Security OS</td>
                <td className="border border-gray-300 px-4 py-2">4GB RAM, 50GB storage</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Target Systems</strong></td>
                <td className="border border-gray-300 px-4 py-2">Practice targets</td>
                <td className="border border-gray-300 px-4 py-2">Metasploitable, DVWA, VulnHub VMs</td>
                <td className="border border-gray-300 px-4 py-2">Various configurations</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Network Simulation</strong></td>
                <td className="border border-gray-300 px-4 py-2">Realistic networking</td>
                <td className="border border-gray-300 px-4 py-2">GNS3, EVE-NG</td>
                <td className="border border-gray-300 px-4 py-2">Network device emulation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Vulnerable Applications</strong></td>
                <td className="border border-gray-300 px-4 py-2">Web app testing</td>
                <td className="border border-gray-300 px-4 py-2">WebGoat, bWAPP, DVWA</td>
                <td className="border border-gray-300 px-4 py-2">Application security</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Essential Lab VMs</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Vulnerable Systems for Practice</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Metasploitable 2:</strong> Linux vulnerable VM for network penetration testing</li>
              <li><strong>DVWA:</strong> Web application with OWASP Top 10 vulnerabilities</li>
              <li><strong>VulnHub VMs:</strong> Various scenarios for specific vulnerabilities</li>
              <li><strong>HackTheBox VMs:</strong> CTF-style challenges for real-world scenarios</li>
              <li><strong>TryHackMe Rooms:</strong> Guided learning with structured tutorials</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Defense & Analysis VMs</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Security Onion:</strong> Network security monitoring platform</li>
              <li><strong>SIFT Workstation:</strong> Digital forensics and incident response</li>
              <li><strong>REMnux:</strong> Malware analysis toolkit</li>
              <li><strong>Windows Server:</strong> Active Directory lab environment</li>
              <li><strong>pfSense:</strong> Firewall and router functionality</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Project 1: Complete Network Penetration Test</h2>
        <p className="text-lg mb-4">
          Conduct a full penetration test against a network of vulnerable systems using industry-standard methodology.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Lab Setup Requirements</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <ul className="space-y-1">
            <li>• Kali Linux (attacker machine)</li>
            <li>• Metasploitable 2 (target 1 - Linux)</li>
            <li>• Windows XP SP2 (target 2 - legacy Windows)</li>
            <li>• Windows Server 2008 (target 3 - domain controller)</li>
            <li>• pfSense firewall (network segmentation)</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Project Phases</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="text-lg font-medium mb-2">1. Information Gathering</h4>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <div># Network discovery</div>
              <div>nmap -sn 192.168.1.0/24</div>
              <div className="mt-2"># Port scanning</div>
              <div>nmap -sS -sV -O 192.168.1.0/24</div>
              <div className="mt-2"># Service enumeration</div>
              <div>nmap --script vuln 192.168.1.100-110</div>
            </div>
          </div>
          
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="text-lg font-medium mb-2">2. Vulnerability Assessment</h4>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <div># Web application scanning</div>
              <div>nikto -h http://192.168.1.100</div>
              <div className="mt-2"># SMB enumeration</div>
              <div>enum4linux 192.168.1.101</div>
              <div className="mt-2"># SSL/TLS testing</div>
              <div>sslscan 192.168.1.100:443</div>
            </div>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="text-lg font-medium mb-2">3. Exploitation</h4>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <div># Metasploit exploitation</div>
              <div>msfconsole</div>
              <div>use exploit/multi/samba/usermap_script</div>
              <div>set RHOSTS 192.168.1.100</div>
              <div>exploit</div>
            </div>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h4 className="text-lg font-medium mb-2">4. Post-Exploitation</h4>
            <div className="bg-gray-50 p-3 rounded font-mono text-sm">
              <div># Privilege escalation</div>
              <div>find / -perm -4000 2{`>`}/dev/null</div>
              <div className="mt-2"># Persistence</div>
              <div>crontab -e</div>
              <div className="mt-2"># Lateral movement</div>
              <div>ssh-keygen -t rsa</div>
              <div>ssh-copy-id user@192.168.1.101</div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Project 2: Web Application Security Assessment</h2>
        <p className="text-lg mb-4">
          Perform comprehensive security testing of web applications using OWASP methodology.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Target Applications</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Vulnerable Web Apps</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>DVWA:</strong> Damn Vulnerable Web Application</li>
              <li><strong>WebGoat:</strong> OWASP learning platform</li>
              <li><strong>Mutillidae II:</strong> PHP/MySQL web app</li>
              <li><strong>bWAPP:</strong> Buggy web application</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Testing Focus Areas</h4>
            <ul className="space-y-1 text-sm">
              <li>• SQL Injection vulnerabilities</li>
              <li>• Cross-Site Scripting (XSS)</li>
              <li>• Authentication bypass</li>
              <li>• File upload vulnerabilities</li>
              <li>• Business logic flaws</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Project 3: Incident Response Simulation</h2>
        <p className="text-lg mb-4">
          Simulate a security incident and practice incident response procedures using NIST framework.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Incident Scenario: APT Attack</h3>
        <div className="bg-red-50 border rounded-lg p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">Attack Timeline</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Day 1:</strong> Phishing email with malicious attachment</li>
            <li><strong>Day 2-3:</strong> Network reconnaissance and credential harvesting</li>
            <li><strong>Day 4-5:</strong> Lateral movement and privilege escalation</li>
            <li><strong>Day 6:</strong> Data exfiltration attempt</li>
          </ol>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practice Exercise: Complete Lab Setup</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Build Your Cybersecurity Lab</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Download and install VMware Workstation or VirtualBox</li>
            <li>Create isolated virtual network for lab environment</li>
            <li>Download Kali Linux and set up attacker machine</li>
            <li>Download Metasploitable 2 and configure as target</li>
            <li>Set up DVWA for web application testing</li>
            <li>Install Security Onion for network monitoring</li>
            <li>Configure pfSense firewall for network segmentation</li>
            <li>Document your lab network topology</li>
            <li>Practice basic penetration testing workflow</li>
            <li>Create incident response documentation templates</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Tip:</strong> Start with 2-3 VMs and gradually expand your lab as you gain experience!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/windows" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Windows Mastery
        </Link>
        <Link to="/certifications" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Certifications →
        </Link>
      </div>
    </div>
  );
}
