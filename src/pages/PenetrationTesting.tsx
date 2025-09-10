import React from "react";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";
import { Link } from "react-router-dom";

export default function PenetrationTesting() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-6">🎯 Penetration Testing Methodology</h1>
      
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">🎯 Systematic Security Testing</h2>
        <p className="text-sm">
          Penetration testing follows a structured methodology to systematically identify, exploit, 
          and report security vulnerabilities. Master this approach to conduct professional security assessments.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">PTES (Penetration Testing Execution Standard)</h2>
        
        <h3 className="text-2xl font-semibold mb-3">The Seven Phases of Penetration Testing</h3>
        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="text-lg font-medium mb-2">1. Pre-engagement Interactions</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Scope definition and rules of engagement</li>
              <li>• Legal documentation and contracts</li>
              <li>• Emergency contact procedures</li>
              <li>• Timeline and deliverables agreement</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="text-lg font-medium mb-2">2. Intelligence Gathering</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• OSINT collection and analysis</li>
              <li>• Social media reconnaissance</li>
              <li>• DNS enumeration and subdomain discovery</li>
              <li>• Email harvesting and personnel identification</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="text-lg font-medium mb-2">3. Threat Modeling</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Asset identification and classification</li>
              <li>• Attack vector analysis</li>
              <li>• Business impact assessment</li>
              <li>• Threat actor simulation</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h4 className="text-lg font-medium mb-2">4. Vulnerability Analysis</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Network and service discovery</li>
              <li>• Vulnerability scanning and verification</li>
              <li>• Web application security testing</li>
              <li>• Wireless network assessment</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="text-lg font-medium mb-2">5. Exploitation</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Proof-of-concept development</li>
              <li>• Privilege escalation techniques</li>
              <li>• Persistence mechanism implementation</li>
              <li>• Lateral movement and network traversal</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-indigo-400 pl-4">
            <h4 className="text-lg font-medium mb-2">6. Post Exploitation</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Data exfiltration simulation</li>
              <li>• System and network compromise assessment</li>
              <li>• Business impact demonstration</li>
              <li>• Evidence collection and documentation</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-gray-400 pl-4">
            <h4 className="text-lg font-medium mb-2">7. Reporting</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Executive summary for leadership</li>
              <li>• Technical findings and evidence</li>
              <li>• Risk assessment and prioritization</li>
              <li>• Remediation recommendations</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Essential Penetration Testing Tools</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Phase</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tool</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Example Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Reconnaissance</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">theHarvester</td>
                <td className="border border-gray-300 px-4 py-2">Email harvesting</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">theHarvester -d target.com -b google</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Scanning</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Nmap</td>
                <td className="border border-gray-300 px-4 py-2">Network discovery</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">nmap -sS -sV -O target</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Enumeration</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Gobuster</td>
                <td className="border border-gray-300 px-4 py-2">Directory enumeration</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">gobuster dir -u http://target -w wordlist.txt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Vulnerability Assessment</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Nikto</td>
                <td className="border border-gray-300 px-4 py-2">Web vulnerability scanning</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">nikto -h http://target</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Exploitation</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Metasploit</td>
                <td className="border border-gray-300 px-4 py-2">Exploit framework</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">msfconsole</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Post-Exploitation</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Meterpreter</td>
                <td className="border border-gray-300 px-4 py-2">Remote access and control</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">sessions -i 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Web Application Testing (OWASP Testing Guide)</h2>
        
        <h3 className="text-2xl font-semibold mb-3">OWASP Top 10 Testing Approach</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Input Validation Testing</h4>
            <ul className="space-y-1 text-sm">
              <li>• SQL Injection (SQLi)</li>
              <li>• Cross-Site Scripting (XSS)</li>
              <li>• Command Injection</li>
              <li>• LDAP Injection</li>
              <li>• XML External Entity (XXE)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Authentication Testing</h4>
            <ul className="space-y-1 text-sm">
              <li>• Weak password policies</li>
              <li>• Brute force attacks</li>
              <li>• Session management flaws</li>
              <li>• Multi-factor authentication bypass</li>
              <li>• Account lockout mechanisms</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Network Penetration Testing</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Systematic Network Assessment</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">External Testing</h4>
              <ol className="list-decimal ml-6 text-sm space-y-1">
                <li>Network discovery and port scanning</li>
                <li>Service enumeration and banner grabbing</li>
                <li>Vulnerability identification</li>
                <li>Exploitation and privilege escalation</li>
                <li>Internal network discovery</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-2">Internal Testing</h4>
              <ol className="list-decimal ml-6 text-sm space-y-1">
                <li>Network segmentation analysis</li>
                <li>Active Directory enumeration</li>
                <li>Lateral movement techniques</li>
                <li>Privilege escalation paths</li>
                <li>Data exfiltration simulation</li>
              </ol>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Social Engineering Assessment</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Human Factor Testing</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Technique</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tools</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Phishing</td>
                <td className="border border-gray-300 px-4 py-2">Email-based attacks</td>
                <td className="border border-gray-300 px-4 py-2">GoPhish, King Phisher</td>
                <td className="border border-gray-300 px-4 py-2">Click rate, credential harvest</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Vishing</td>
                <td className="border border-gray-300 px-4 py-2">Voice-based social engineering</td>
                <td className="border border-gray-300 px-4 py-2">SpoofCard, VoIP systems</td>
                <td className="border border-gray-300 px-4 py-2">Information disclosure rate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Physical</td>
                <td className="border border-gray-300 px-4 py-2">On-site security testing</td>
                <td className="border border-gray-300 px-4 py-2">Lock picks, RFID cloners</td>
                <td className="border border-gray-300 px-4 py-2">Facility access success</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">USB Drops</td>
                <td className="border border-gray-300 px-4 py-2">Malicious USB deployment</td>
                <td className="border border-gray-300 px-4 py-2">Rubber Ducky, Malduino</td>
                <td className="border border-gray-300 px-4 py-2">Device insertion rate</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Professional Penetration Testing Exercise</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Complete Penetration Test Simulation</h4>
          <p className="text-sm mb-3">Conduct a full penetration test following professional methodology:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Scope Definition:</strong> Define target environment and rules of engagement</li>
            <li><strong>Reconnaissance:</strong> Gather intelligence using OSINT techniques</li>
            <li><strong>Scanning:</strong> Identify live systems and open services</li>
            <li><strong>Enumeration:</strong> Extract detailed information about services</li>
            <li><strong>Vulnerability Assessment:</strong> Identify and validate security weaknesses</li>
            <li><strong>Exploitation:</strong> Develop and execute proof-of-concept attacks</li>
            <li><strong>Post-Exploitation:</strong> Demonstrate business impact and data access</li>
            <li><strong>Documentation:</strong> Create professional penetration testing report</li>
          </ol>
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <p className="text-sm"><strong>Report Deliverables:</strong></p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Executive summary with business impact</li>
              <li>• Technical findings with proof-of-concept</li>
              <li>• Risk ratings and prioritization matrix</li>
              <li>• Detailed remediation recommendations</li>
              <li>• Appendix with tool outputs and screenshots</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Professional Tip:</strong> Always follow a structured methodology and document everything for repeatable results!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/defensive-security" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Defensive Security
        </Link>
        <Link to="/windows" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Windows Mastery →
        </Link>
      </div>
    </div>
  );
}
