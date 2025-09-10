import React from "react";
import { Link } from "react-router-dom";

export default function DefensiveSecurity() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🛡️ Defensive Security (Blue Team)</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">🛡️ Blue Team Mission</h2>
        <p className="text-sm">
          Defensive security focuses on protecting, monitoring, and responding to cyber threats. 
          Master these skills to become an effective cybersecurity defender.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">System Hardening</h2>
        <p className="text-lg mb-4">
          System hardening involves securing systems by reducing their attack surface and 
          implementing security controls to prevent unauthorized access.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">Linux Hardening Checklist</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Command/Configuration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">User Accounts</td>
                <td className="border border-gray-300 px-4 py-2">Disable unused accounts</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">usermod -L username</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">SSH</td>
                <td className="border border-gray-300 px-4 py-2">Disable root login</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">PermitRootLogin no</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Firewall</td>
                <td className="border border-gray-300 px-4 py-2">Enable UFW/iptables</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">ufw enable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Updates</td>
                <td className="border border-gray-300 px-4 py-2">Enable automatic updates</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">unattended-upgrades</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Services</td>
                <td className="border border-gray-300 px-4 py-2">Disable unused services</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">systemctl disable service</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">File Permissions</td>
                <td className="border border-gray-300 px-4 py-2">Secure sensitive files</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">chmod 600 /etc/ssh/ssh_host_*</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Network Security</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Firewall Rules (iptables)</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>iptables -A INPUT -i lo -j ACCEPT</li>
              <li>iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</li>
              <li>iptables -A INPUT -p tcp --dport 22 -j ACCEPT</li>
              <li>iptables -A INPUT -p tcp --dport 80 -j ACCEPT</li>
              <li>iptables -A INPUT -j DROP</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Network Monitoring</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Wireshark:</strong> Packet analysis</li>
              <li><strong>tcpdump:</strong> Command-line capture</li>
              <li><strong>Nagios:</strong> Network monitoring</li>
              <li><strong>Zabbix:</strong> Infrastructure monitoring</li>
              <li><strong>PRTG:</strong> Network performance</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Security Information and Event Management (SIEM)</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">SIEM Platform</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Key Features</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ELK Stack</td>
                <td className="border border-gray-300 px-4 py-2">Open Source</td>
                <td className="border border-gray-300 px-4 py-2">Elasticsearch, Logstash, Kibana</td>
                <td className="border border-gray-300 px-4 py-2">Log analysis, visualization</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Splunk</td>
                <td className="border border-gray-300 px-4 py-2">Commercial</td>
                <td className="border border-gray-300 px-4 py-2">Machine data analysis</td>
                <td className="border border-gray-300 px-4 py-2">Enterprise SIEM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Security Onion</td>
                <td className="border border-gray-300 px-4 py-2">Open Source</td>
                <td className="border border-gray-300 px-4 py-2">IDS, NSM, Log management</td>
                <td className="border border-gray-300 px-4 py-2">Network security monitoring</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Wazuh</td>
                <td className="border border-gray-300 px-4 py-2">Open Source</td>
                <td className="border border-gray-300 px-4 py-2">HIDS, compliance, threat detection</td>
                <td className="border border-gray-300 px-4 py-2">Host-based monitoring</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Incident Response Framework</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">NIST Incident Response Lifecycle</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Preparation:</strong> Establish policies, procedures, and tools</li>
            <li><strong>Detection & Analysis:</strong> Identify and analyze security events</li>
            <li><strong>Containment, Eradication & Recovery:</strong> Stop spread, remove threat, restore systems</li>
            <li><strong>Post-Incident Activity:</strong> Lessons learned and process improvement</li>
          </ol>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Threat Hunting Techniques</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Hunting Method</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Hypothesis-driven</td>
                <td className="border border-gray-300 px-4 py-2">Test specific threat scenarios</td>
                <td className="border border-gray-300 px-4 py-2">SIEM queries, custom scripts</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">IOC-based</td>
                <td className="border border-gray-300 px-4 py-2">Search for known indicators</td>
                <td className="border border-gray-300 px-4 py-2">YARA rules, hash lookups</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Behavioral analysis</td>
                <td className="border border-gray-300 px-4 py-2">Identify anomalous activities</td>
                <td className="border border-gray-300 px-4 py-2">Machine learning, baselines</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">TTP-based</td>
                <td className="border border-gray-300 px-4 py-2">Hunt for tactics and techniques</td>
                <td className="border border-gray-300 px-4 py-2">MITRE ATT&CK framework</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practical Exercise: SOC Operations</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Blue Team Defense Lab</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Set up Security Onion or ELK Stack for log analysis</li>
            <li>Configure log forwarding: <code className="bg-gray-200 px-1 rounded">rsyslog, filebeat</code></li>
            <li>Create custom detection rules for suspicious activities</li>
            <li>Monitor network traffic: <code className="bg-gray-200 px-1 rounded">tcpdump -i eth0 -w capture.pcap</code></li>
            <li>Analyze logs for failed login attempts: <code className="bg-gray-200 px-1 rounded">grep "Failed password" /var/log/auth.log</code></li>
            <li>Set up intrusion detection: <code className="bg-gray-200 px-1 rounded">suricata -c /etc/suricata/suricata.yaml -i eth0</code></li>
            <li>Practice incident response workflow</li>
            <li>Create threat hunting dashboards in Kibana</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Tip:</strong> Practice with Security Onion VM for hands-on SIEM experience!
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Essential Blue Team Tools</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Detection</h4>
            <ul className="space-y-1 text-sm">
              <li>• Suricata (IDS/IPS)</li>
              <li>• Snort (Network IDS)</li>
              <li>• OSSEC (Host IDS)</li>
              <li>• Wazuh (SIEM)</li>
              <li>• Zeek (Network monitoring)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Analysis</h4>
            <ul className="space-y-1 text-sm">
              <li>• Wireshark (Packet analysis)</li>
              <li>• Volatility (Memory forensics)</li>
              <li>• Autopsy (Disk forensics)</li>
              <li>• YARA (Malware detection)</li>
              <li>• CyberChef (Data analysis)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Response</h4>
            <ul className="space-y-1 text-sm">
              <li>• TheHive (Case management)</li>
              <li>• MISP (Threat intelligence)</li>
              <li>• Cortex (Analysis engine)</li>
              <li>• GRR (Remote forensics)</li>
              <li>• Velociraptor (Endpoint monitoring)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/offensive-security" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Offensive Security
        </Link>
        <Link to="/pentesting" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Penetration Testing →
        </Link>
      </div>
    </div>
  );
}
