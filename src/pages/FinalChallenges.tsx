import React from "react";
import { Link } from "react-router-dom";

export default function FinalChallenges() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🎯 Final Mastery Challenges</h1>
      
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">🏆 Ultimate Skill Validation</h2>
        <p className="text-sm">
          Complete these comprehensive challenges that integrate all the skills you've learned. 
          These real-world scenarios will test your mastery and prepare you for professional cybersecurity roles.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Challenge 1: The Ultimate Penetration Test</h2>
        <p className="text-lg mb-4">
          Conduct a comprehensive penetration test of a fictional company "SecureCorp" with a complex infrastructure.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Target Environment</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Infrastructure Components</h4>
            <ul className="space-y-1 text-sm">
              <li>• 50-node network (Windows/Linux mix)</li>
              <li>• Web applications (internal and external)</li>
              <li>• Wireless network infrastructure</li>
              <li>• Cloud services (AWS/Azure)</li>
              <li>• Industrial control systems (SCADA)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Success Criteria</h4>
            <ul className="space-y-1 text-sm">
              <li>• Gain domain administrator access</li>
              <li>• Demonstrate data exfiltration capability</li>
              <li>• Compromise cloud infrastructure</li>
              <li>• Document all vulnerabilities with PoCs</li>
              <li>• Provide executive summary and technical report</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Assessment Timeline</h3>
        <div className="space-y-3 mb-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium">External Assessment (2 weeks)</h4>
            <p className="text-sm text-gray-600">OSINT gathering, external service enumeration, web application testing, wireless assessment</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="font-medium">Internal Assessment (2 weeks)</h4>
            <p className="text-sm text-gray-600">Network segmentation testing, privilege escalation, lateral movement, domain compromise</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-medium">Specialized Testing (1 week)</h4>
            <p className="text-sm text-gray-600">Cloud configuration review, SCADA security assessment, social engineering simulation</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Challenge 2: Build a Production SOC</h2>
        <p className="text-lg mb-4">
          Design and implement a fully functional Security Operations Center from the ground up.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">SOC Requirements</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Technology</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">SIEM Platform</td>
                <td className="border border-gray-300 px-4 py-2">ELK Stack or Splunk</td>
                <td className="border border-gray-300 px-4 py-2">Log aggregation and analysis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Network Monitoring</td>
                <td className="border border-gray-300 px-4 py-2">Security Onion</td>
                <td className="border border-gray-300 px-4 py-2">Network security monitoring</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Endpoint Protection</td>
                <td className="border border-gray-300 px-4 py-2">Wazuh/OSSEC</td>
                <td className="border border-gray-300 px-4 py-2">Host-based monitoring</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Vulnerability Management</td>
                <td className="border border-gray-300 px-4 py-2">OpenVAS/Nessus</td>
                <td className="border border-gray-300 px-4 py-2">Continuous vulnerability assessment</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Threat Intelligence</td>
                <td className="border border-gray-300 px-4 py-2">MISP, AlienVault OTX</td>
                <td className="border border-gray-300 px-4 py-2">IOC feeds and threat intelligence</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Challenge 3: Advanced Threat Hunting Campaign</h2>
        <p className="text-lg mb-4">
          Your organization has been targeted by an advanced persistent threat (APT) group. 
          Traditional security controls have failed to detect the intrusion.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Hunting Mission</h3>
        <div className="bg-red-50 border rounded-lg p-4 mb-6">
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Hypothesis Development:</strong> Research known APT TTPs and develop hunting hypotheses</li>
            <li><strong>Data Collection:</strong> Implement comprehensive logging and create behavioral baselines</li>
            <li><strong>Threat Discovery:</strong> Hunt for IOCs, identify lateral movement patterns, uncover persistence</li>
            <li><strong>Response & Recovery:</strong> Coordinate incident response and implement containment measures</li>
          </ol>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Challenge 4: Secure DevOps Pipeline</h2>
        <p className="text-lg mb-4">
          Implement security throughout the software development lifecycle with automated security testing and compliance validation.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">DevSecOps Requirements</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Infrastructure Security</h4>
            <ul className="space-y-1 text-sm">
              <li>• Terraform/Ansible security configurations</li>
              <li>• Container security (Docker/Kubernetes)</li>
              <li>• Cloud security automation</li>
              <li>• Infrastructure as Code security scanning</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Application Security</h4>
            <ul className="space-y-1 text-sm">
              <li>• Static Application Security Testing (SAST)</li>
              <li>• Dynamic Application Security Testing (DAST)</li>
              <li>• Interactive Application Security Testing (IAST)</li>
              <li>• Software Composition Analysis (SCA)</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Challenge 5: Digital Forensics Investigation</h2>
        <p className="text-lg mb-4">
          A major data breach has occurred. Conduct a complete digital forensics investigation 
          following proper legal and technical procedures.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Investigation Scope</h3>
        <div className="space-y-3 mb-6">
          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="font-medium">Initial Response</h4>
            <p className="text-sm text-gray-600">Evidence preservation, chain of custody documentation, preliminary assessment</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="font-medium">Evidence Collection</h4>
            <p className="text-sm text-gray-600">Disk imaging, memory acquisition, network packet capture, log collection</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="font-medium">Analysis & Reporting</h4>
            <p className="text-sm text-gray-600">Timeline reconstruction, malware analysis, network forensics, legal documentation</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Master Challenge Exercise</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Choose Your Path to Mastery</h4>
          <p className="text-sm mb-3">Select ONE challenge that aligns with your career goals and complete it over the next 3-6 months:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Offensive Track:</strong> Complete Challenge 1 (Ultimate Penetration Test)</li>
            <li><strong>Defensive Track:</strong> Complete Challenge 2 (Build Production SOC)</li>
            <li><strong>Hunting Track:</strong> Complete Challenge 3 (Advanced Threat Hunting)</li>
            <li><strong>DevSecOps Track:</strong> Complete Challenge 4 (Secure DevOps Pipeline)</li>
            <li><strong>Forensics Track:</strong> Complete Challenge 5 (Digital Forensics Investigation)</li>
          </ol>
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <p className="text-sm"><strong>Deliverables for each challenge:</strong></p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Complete technical documentation</li>
              <li>• Executive summary presentation</li>
              <li>• Implementation guide or playbook</li>
              <li>• Lessons learned and recommendations</li>
              <li>• Portfolio-ready case study</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Pro Tip:</strong> Document everything! These challenges will become the cornerstone of your professional portfolio.
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/certifications" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Certifications
        </Link>
        <Link to="/journey" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Your Journey →
        </Link>
      </div>
    </div>
  );
}
