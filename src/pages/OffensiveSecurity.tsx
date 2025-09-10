import React from "react";
import { Link } from "react-router-dom";

export default function OffensiveSecurity() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🔒 Offensive Security (Ethical Hacking)</h1>
      
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">⚠️ Ethical Hacking Guidelines</h2>
        <ul className="space-y-1 text-sm">
          <li>• Only test systems you own or have explicit written permission to test</li>
          <li>• Follow responsible disclosure practices for vulnerabilities</li>
          <li>• Document everything for learning and reporting purposes</li>
          <li>• Use knowledge to improve security, not cause harm</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Reconnaissance Phase</h2>
        <p className="text-lg mb-4">
          Information gathering is the foundation of any security assessment. The more you know about your target, 
          the more effective your testing will be.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Passive Information Gathering</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Tool/Technique</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Example Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">whois</td>
                <td className="border border-gray-300 px-4 py-2">Domain registration info</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">whois example.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">dig</td>
                <td className="border border-gray-300 px-4 py-2">DNS enumeration</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">dig axfr @ns1.example.com example.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">theHarvester</td>
                <td className="border border-gray-300 px-4 py-2">Email/subdomain harvesting</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">theHarvester -d example.com -b google</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Shodan</td>
                <td className="border border-gray-300 px-4 py-2">Internet-connected devices</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">shodan search "Apache/2.4"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Google Dorking</td>
                <td className="border border-gray-300 px-4 py-2">Search engine reconnaissance</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">site:example.com filetype:pdf</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Active Scanning & Enumeration</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Tool</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Key Commands</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Nmap</td>
                <td className="border border-gray-300 px-4 py-2">Network discovery & port scanning</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">nmap -sS -sV -O target</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Gobuster</td>
                <td className="border border-gray-300 px-4 py-2">Directory/file enumeration</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">gobuster dir -u http://target -w wordlist.txt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Nikto</td>
                <td className="border border-gray-300 px-4 py-2">Web vulnerability scanner</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">nikto -h http://target</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">enum4linux</td>
                <td className="border border-gray-300 px-4 py-2">SMB enumeration</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">enum4linux -a target</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">SQLMap</td>
                <td className="border border-gray-300 px-4 py-2">SQL injection testing</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">sqlmap -u "http://target/page.php?id=1"</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Web Application Testing</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">OWASP Top 10 Vulnerabilities</h4>
            <ol className="list-decimal ml-6 space-y-1 text-sm">
              <li>Broken Access Control</li>
              <li>Cryptographic Failures</li>
              <li>Injection</li>
              <li>Insecure Design</li>
              <li>Security Misconfiguration</li>
              <li>Vulnerable Components</li>
              <li>Authentication Failures</li>
              <li>Software Integrity Failures</li>
              <li>Logging/Monitoring Failures</li>
              <li>Server-Side Request Forgery</li>
            </ol>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Common Attack Vectors</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>XSS:</strong> Cross-Site Scripting</li>
              <li><strong>CSRF:</strong> Cross-Site Request Forgery</li>
              <li><strong>SQLi:</strong> SQL Injection</li>
              <li><strong>XXE:</strong> XML External Entity</li>
              <li><strong>LFI/RFI:</strong> File Inclusion</li>
              <li><strong>Command Injection</strong></li>
              <li><strong>Path Traversal</strong></li>
              <li><strong>Deserialization Attacks</strong></li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Exploitation Frameworks</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">Metasploit Framework</h4>
          <div className="space-y-2 text-sm font-mono">
            <div>msfconsole                  # Start Metasploit</div>
            <div>search apache              # Search for exploits</div>
            <div>use exploit/path/to/exploit # Select exploit</div>
            <div>set RHOSTS target.ip       # Set target</div>
            <div>set LHOST attacker.ip      # Set listener</div>
            <div>exploit                    # Run exploit</div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Post-Exploitation</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Activity</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Common Commands</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Privilege Escalation</td>
                <td className="border border-gray-300 px-4 py-2">Gain higher access</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">sudo -l, find / -perm -4000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Persistence</td>
                <td className="border border-gray-300 px-4 py-2">Maintain access</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">crontab -e, ~/.bashrc</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Lateral Movement</td>
                <td className="border border-gray-300 px-4 py-2">Compromise other systems</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">ssh-keygen, psexec</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Data Exfiltration</td>
                <td className="border border-gray-300 px-4 py-2">Extract sensitive data</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">scp, base64, steganography</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practical Exercise: Vulnerability Assessment</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Ethical Hacking Lab Exercise</h4>
          <p className="text-sm mb-3 text-gray-600">Use Metasploitable 2 or DVWA for practice:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Set up vulnerable lab environment (Metasploitable 2)</li>
            <li>Perform reconnaissance: <code className="bg-gray-200 px-1 rounded">nmap -sS -sV lab.ip</code></li>
            <li>Identify services: <code className="bg-gray-200 px-1 rounded">nmap --script vuln lab.ip</code></li>
            <li>Web enumeration: <code className="bg-gray-200 px-1 rounded">gobuster dir -u http://lab.ip</code></li>
            <li>Test for SQL injection: <code className="bg-gray-200 px-1 rounded">sqlmap -u "http://lab.ip/dvwa/vulnerabilities/sqli/?id=1"</code></li>
            <li>Use Metasploit: <code className="bg-gray-200 px-1 rounded">search vsftpd</code></li>
            <li>Document all findings in a report</li>
            <li>Provide remediation recommendations</li>
          </ol>
          <p className="mt-4 text-sm text-red-600">
            ⚠️ <strong>Important:</strong> Only practice on systems you own or have explicit permission to test!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/networking" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Networking Mastery
        </Link>
        <Link to="/defensive-security" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Defensive Security →
        </Link>
      </div>
    </div>
  );
}
