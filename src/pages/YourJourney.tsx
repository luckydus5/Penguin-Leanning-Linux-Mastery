import React from "react";
import { Link } from "react-router-dom";

export default function YourJourney() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🚀 Your Journey Forward</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">🎉 Congratulations!</h2>
        <p className="text-lg">
          You've completed one of the most comprehensive Linux and cybersecurity guides available. 
          But remember: this is just the beginning of your journey in the ever-evolving world of cybersecurity.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Continuous Learning Mindset</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Technology Evolution</h3>
        <p className="mb-4">
          The cybersecurity landscape changes rapidly. New threats emerge daily, tools evolve, 
          and attack techniques become more sophisticated. Stay current by:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">📚 Continuous Education</h4>
            <ul className="space-y-1 text-sm">
              <li>• Follow security researchers on Twitter/LinkedIn</li>
              <li>• Read security blogs and publications</li>
              <li>• Subscribe to threat intelligence feeds</li>
              <li>• Take online courses and webinars</li>
              <li>• Listen to cybersecurity podcasts</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">🏆 Hands-On Practice</h4>
            <ul className="space-y-1 text-sm">
              <li>• Participate in CTF competitions</li>
              <li>• Contribute to open source security projects</li>
              <li>• Practice on HackTheBox, TryHackMe</li>
              <li>• Build and break your own lab environments</li>
              <li>• Attend DefCon, BSides, security meetups</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Building Your Professional Network</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Community Engagement</h3>
        <div className="bg-blue-50 border rounded-lg p-4 mb-6">
          <ul className="space-y-2">
            <li><strong>Local Meetups:</strong> Join OWASP chapters, 2600 meetings, security user groups</li>
            <li><strong>Online Forums:</strong> Participate in Reddit r/netsec, Discord servers, Stack Overflow</li>
            <li><strong>Knowledge Sharing:</strong> Write blog posts, create tutorials, answer questions</li>
            <li><strong>Mentorship:</strong> Find mentors and mentor newcomers to the field</li>
            <li><strong>Speaking:</strong> Present at conferences, meetups, and workshops</li>
          </ul>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Ethical Responsibility</h2>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">⚖️ With Great Power Comes Great Responsibility</h3>
          <p className="mb-3">As a cybersecurity professional, you must always:</p>
          <ul className="space-y-1 text-sm">
            <li>• Obtain proper authorization before testing any systems</li>
            <li>• Follow responsible disclosure practices for vulnerabilities</li>
            <li>• Respect privacy and confidentiality at all times</li>
            <li>• Use your skills to protect and defend, never to harm</li>
            <li>• Advocate for better security practices in your organization</li>
            <li>• Educate others about cybersecurity risks and best practices</li>
          </ul>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Career Advancement</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Professional Development Strategy</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="text-lg font-medium mb-2">Technical Skills</h4>
            <ul className="text-sm space-y-1">
              <li>• Pursue relevant certifications for your career path</li>
              <li>• Master multiple programming languages (Python, PowerShell, Bash)</li>
              <li>• Develop expertise in cloud platforms (AWS, Azure, GCP)</li>
              <li>• Stay updated with emerging technologies (AI/ML, IoT security)</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="text-lg font-medium mb-2">Soft Skills</h4>
            <ul className="text-sm space-y-1">
              <li>• Develop strong communication and presentation skills</li>
              <li>• Learn business acumen and risk management</li>
              <li>• Practice leadership and team management</li>
              <li>• Understand compliance and regulatory requirements</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="text-lg font-medium mb-2">Portfolio Building</h4>
            <ul className="text-sm space-y-1">
              <li>• Document your projects and achievements</li>
              <li>• Create case studies from your work</li>
              <li>• Contribute to the security community</li>
              <li>• Seek challenging projects and responsibilities</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Career Paths in Cybersecurity</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Specialization</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Focus Areas</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Key Skills</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Career Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Red Team</strong></td>
                <td className="border border-gray-300 px-4 py-2">Offensive security, penetration testing</td>
                <td className="border border-gray-300 px-4 py-2">OSCP, exploit development, social engineering</td>
                <td className="border border-gray-300 px-4 py-2">Senior Pentester → Red Team Lead → Security Consultant</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Blue Team</strong></td>
                <td className="border border-gray-300 px-4 py-2">Defense, monitoring, incident response</td>
                <td className="border border-gray-300 px-4 py-2">SIEM, forensics, threat hunting</td>
                <td className="border border-gray-300 px-4 py-2">SOC Analyst → Security Engineer → SOC Manager</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>GRC</strong></td>
                <td className="border border-gray-300 px-4 py-2">Governance, risk, compliance</td>
                <td className="border border-gray-300 px-4 py-2">CISSP, CISA, risk assessment</td>
                <td className="border border-gray-300 px-4 py-2">GRC Analyst → Risk Manager → CISO</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Cloud Security</strong></td>
                <td className="border border-gray-300 px-4 py-2">Cloud architecture, DevSecOps</td>
                <td className="border border-gray-300 px-4 py-2">AWS/Azure certs, container security</td>
                <td className="border border-gray-300 px-4 py-2">Cloud Security Engineer → Architect → CISO</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Giving Back to the Community</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Knowledge Sharing</h3>
        <div className="bg-green-50 border rounded-lg p-4 mb-6">
          <p className="mb-3">As you grow in your career, remember to give back to the community that supported your learning:</p>
          <ul className="space-y-2">
            <li><strong>📝 Write:</strong> Blog posts about your experiences, tutorials, and lessons learned</li>
            <li><strong>🛠️ Create:</strong> Tools, scripts, and resources for the community</li>
            <li><strong>💻 Contribute:</strong> To open source security projects and frameworks</li>
            <li><strong>👨‍🏫 Teach:</strong> Mentor newcomers, speak at events, create training content</li>
            <li><strong>🤝 Volunteer:</strong> For cybersecurity education initiatives and nonprofits</li>
          </ul>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Essential Resources for Continued Learning</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">📖 Must-Read Publications</h4>
            <ul className="space-y-1 text-sm">
              <li>• Krebs on Security</li>
              <li>• Schneier on Security</li>
              <li>• Dark Reading</li>
              <li>• Threatpost</li>
              <li>• The Hacker News</li>
              <li>• SANS NewsBites</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">🎧 Top Podcasts</h4>
            <ul className="space-y-1 text-sm">
              <li>• Security Now</li>
              <li>• Darknet Diaries</li>
              <li>• Malicious Life</li>
              <li>• CyberWire Daily</li>
              <li>• SANS StormCast</li>
              <li>• Risky Business</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">🏆 Practice Platforms</h4>
            <ul className="space-y-1 text-sm">
              <li>• HackTheBox</li>
              <li>• TryHackMe</li>
              <li>• VulnHub</li>
              <li>• OverTheWire</li>
              <li>• PicoCTF</li>
              <li>• CyberDefenders</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-3">🌟 Your Mission Awaits</h3>
          <p className="text-lg mb-4">
            The cybersecurity community needs passionate, ethical professionals who are committed to protecting our digital world. 
            You now have the knowledge and skills to make a real difference.
          </p>
          <p className="text-xl font-semibold text-blue-600 mb-2">Go forth and secure the future! 🐧🛡️</p>
          <p className="text-sm italic text-gray-600">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border rounded-lg">
          <h4 className="text-lg font-medium mb-2">📝 Final Challenge: Your Learning Commitment</h4>
          <p className="text-sm mb-3">Complete this personal learning contract:</p>
          <ol className="list-decimal ml-6 space-y-2 text-sm">
            <li>I commit to continuous learning and staying updated with cybersecurity trends</li>
            <li>I will practice ethical hacking principles and responsible disclosure</li>
            <li>I will contribute to the cybersecurity community through knowledge sharing</li>
            <li>I will mentor others and help grow the next generation of security professionals</li>
            <li>I will use my skills to protect and defend digital assets and privacy</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Remember:</strong> This guide is a living document. Technology evolves, threats change, 
            and new techniques emerge. Keep learning, stay curious, and always practice ethical behavior!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/challenges" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Final Challenges
        </Link>
        <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}
