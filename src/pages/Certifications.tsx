import React from "react";
import { Link } from "react-router-dom";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";

export default function Certifications() {
  return (
    <div className="py-8 px-4">
      <FullscreenToggle />
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-6">📚 Certification Roadmap</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">🎯 Professional Validation</h2>
        <p className="text-sm">
          Professional certifications validate your knowledge and demonstrate commitment to the field. 
          Follow this roadmap to build credibility and advance your cybersecurity career.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Entry-Level Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">CompTIA Security+</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Prerequisites:</strong> None (Network+ recommended)</p>
              <p><strong>Focus:</strong> Security fundamentals, risk management</p>
              <p><strong>Study Time:</strong> 2-3 months</p>
              <p><strong>Cost:</strong> ~$370</p>
              <p><strong>Validity:</strong> 3 years with continuing education</p>
            </div>
            <div className="mt-3">
              <h4 className="font-medium mb-1">Key Topics:</h4>
              <ul className="text-xs space-y-1">
                <li>• Threats, attacks, and vulnerabilities</li>
                <li>• Architecture and design</li>
                <li>• Implementation</li>
                <li>• Operations and incident response</li>
                <li>• Governance, risk, and compliance</li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">(ISC)² SSCP</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Prerequisites:</strong> None (1 year experience recommended)</p>
              <p><strong>Focus:</strong> Hands-on security skills</p>
              <p><strong>Study Time:</strong> 3-4 months</p>
              <p><strong>Cost:</strong> ~$249</p>
              <p><strong>Validity:</strong> 3 years with continuing education</p>
            </div>
            <div className="mt-3">
              <h4 className="font-medium mb-1">Key Domains:</h4>
              <ul className="text-xs space-y-1">
                <li>• Access controls</li>
                <li>• Security operations and administration</li>
                <li>• Risk identification and mitigation</li>
                <li>• Incident response</li>
                <li>• Cryptography</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Linux/System Administration Certifications</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Linux Professional Institute (LPI)</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Certification</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Exams Required</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Focus Areas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">LPIC-1</td>
                <td className="border border-gray-300 px-4 py-2">Linux Administrator</td>
                <td className="border border-gray-300 px-4 py-2">101-500, 102-500</td>
                <td className="border border-gray-300 px-4 py-2">System admin fundamentals</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">LPIC-2</td>
                <td className="border border-gray-300 px-4 py-2">Linux Engineer</td>
                <td className="border border-gray-300 px-4 py-2">201-450, 202-450</td>
                <td className="border border-gray-300 px-4 py-2">Advanced administration</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">LPIC-3</td>
                <td className="border border-gray-300 px-4 py-2">Linux Enterprise Professional</td>
                <td className="border border-gray-300 px-4 py-2">300, 303, or 304</td>
                <td className="border border-gray-300 px-4 py-2">Specialization tracks</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Red Hat Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">RHCSA (Red Hat Certified System Administrator)</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Prerequisites:</strong> Basic Linux knowledge</li>
              <li><strong>Format:</strong> Performance-based exam</li>
              <li><strong>Duration:</strong> 3 hours</li>
              <li><strong>Study Time:</strong> 4-6 months</li>
              <li><strong>Cost:</strong> ~$400</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">RHCE (Red Hat Certified Engineer)</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Prerequisites:</strong> RHCSA certification</li>
              <li><strong>Format:</strong> Performance-based exam</li>
              <li><strong>Duration:</strong> 4 hours</li>
              <li><strong>Study Time:</strong> 6-8 months</li>
              <li><strong>Focus:</strong> Advanced system administration</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Cybersecurity Certifications</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Offensive Security</h3>
        <div className="bg-red-50 border rounded-lg p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">OSCP (Offensive Security Certified Professional)</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-2"><strong>Prerequisites:</strong> Solid Linux/Windows knowledge, basic penetration testing</p>
              <p className="text-sm mb-2"><strong>Format:</strong> 24-hour practical exam + report</p>
              <p className="text-sm mb-2"><strong>Study Time:</strong> 6-12 months</p>
              <p className="text-sm"><strong>Cost:</strong> ~$1,499 (includes lab access)</p>
            </div>
            <div>
              <h5 className="font-medium mb-1">Study Approach:</h5>
              <ol className="list-decimal ml-6 text-sm space-y-1">
                <li>PWK (Penetration Testing with Kali) course</li>
                <li>Lab environment practice (60+ machines)</li>
                <li>Buffer overflow mastery</li>
                <li>Report writing skills</li>
              </ol>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">SANS/GIAC Certifications</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Certification</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Focus Area</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Study Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">GSEC</td>
                <td className="border border-gray-300 px-4 py-2">Security Essentials</td>
                <td className="border border-gray-300 px-4 py-2">~$7,000+</td>
                <td className="border border-gray-300 px-4 py-2">4-6 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">GCIH</td>
                <td className="border border-gray-300 px-4 py-2">Incident Handling</td>
                <td className="border border-gray-300 px-4 py-2">~$7,000+</td>
                <td className="border border-gray-300 px-4 py-2">4-6 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">GPEN</td>
                <td className="border border-gray-300 px-4 py-2">Penetration Testing</td>
                <td className="border border-gray-300 px-4 py-2">~$7,000+</td>
                <td className="border border-gray-300 px-4 py-2">6-8 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">GIAC</td>
                <td className="border border-gray-300 px-4 py-2">Various specializations</td>
                <td className="border border-gray-300 px-4 py-2">~$7,000+</td>
                <td className="border border-gray-300 px-4 py-2">4-8 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Advanced Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">CISSP</h4>
            <p className="text-sm mb-2"><strong>Prerequisites:</strong> 5 years experience (reducible with education/certs)</p>
            <p className="text-sm mb-2"><strong>Focus:</strong> Security management and leadership</p>
            <p className="text-sm mb-2"><strong>Study Time:</strong> 6-8 months</p>
            <p className="text-sm"><strong>Cost:</strong> ~$749</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">CISM</h4>
            <p className="text-sm mb-2"><strong>Prerequisites:</strong> 5 years experience in information security</p>
            <p className="text-sm mb-2"><strong>Focus:</strong> Information security management</p>
            <p className="text-sm mb-2"><strong>Study Time:</strong> 4-6 months</p>
            <p className="text-sm"><strong>Cost:</strong> ~$760</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Certification Study Strategy</h2>
        
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <h3 className="text-xl font-medium mb-2">Phase 1: Foundation (Months 1-6)</h3>
            <ol className="list-decimal ml-6 space-y-1">
              <li><strong>Security+</strong> - Security fundamentals</li>
              <li><strong>RHCSA</strong> - Linux system administration</li>
              <li><strong>Hands-on labs</strong> - VirtualBox/VMware setup</li>
            </ol>
          </div>
          
          <div className="border-l-4 border-green-400 pl-4">
            <h3 className="text-xl font-medium mb-2">Phase 2: Specialization (Months 7-18)</h3>
            <ol className="list-decimal ml-6 space-y-1">
              <li><strong>OSCP</strong> - Penetration testing skills</li>
              <li><strong>GCIH</strong> - Incident response capabilities</li>
              <li><strong>Real-world projects</strong> - Portfolio development</li>
            </ol>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-xl font-medium mb-2">Phase 3: Leadership (Months 19-30)</h3>
            <ol className="list-decimal ml-6 space-y-1">
              <li><strong>CISSP</strong> - Security management</li>
              <li><strong>CISM</strong> - Information security management</li>
              <li><strong>Advanced specializations</strong> - Based on career path</li>
            </ol>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Career Development Path</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Experience Level</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Typical Positions</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Key Skills/Certifications</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Salary Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Entry Level (0-2 years)</td>
                <td className="border border-gray-300 px-4 py-2">SOC Analyst, Junior Pentester</td>
                <td className="border border-gray-300 px-4 py-2">Security+, basic Linux, networking</td>
                <td className="border border-gray-300 px-4 py-2">$40,000 - $65,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Mid-Level (2-5 years)</td>
                <td className="border border-gray-300 px-4 py-2">Security Analyst, Pentester</td>
                <td className="border border-gray-300 px-4 py-2">OSCP, GCIH, specialized tools</td>
                <td className="border border-gray-300 px-4 py-2">$65,000 - $95,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Senior Level (5-10 years)</td>
                <td className="border border-gray-300 px-4 py-2">Senior Security Engineer, Team Lead</td>
                <td className="border border-gray-300 px-4 py-2">Advanced certs, leadership, business</td>
                <td className="border border-gray-300 px-4 py-2">$95,000 - $140,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Expert Level (10+ years)</td>
                <td className="border border-gray-300 px-4 py-2">Security Manager, CISO, Consultant</td>
                <td className="border border-gray-300 px-4 py-2">CISSP, CISM, strategic thinking</td>
                <td className="border border-gray-300 px-4 py-2">$140,000 - $250,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practice Exercise: Certification Planning</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Create Your Certification Roadmap</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Assess your current skill level and experience</li>
            <li>Define your career goals (technical vs. management track)</li>
            <li>Select 2-3 certifications for the next 18 months</li>
            <li>Research training materials and costs</li>
            <li>Create a study schedule with realistic timelines</li>
            <li>Set up a home lab for hands-on practice</li>
            <li>Join study groups and online communities</li>
            <li>Schedule your first certification exam</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Tip:</strong> Start with Security+ as your foundation, then specialize based on your interests!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/labs" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Practical Labs
        </Link>
        <Link to="/challenges" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Final Challenges →
        </Link>
      </div>
    </div>
    </div>
  );
}
