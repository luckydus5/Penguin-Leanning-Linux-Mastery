import React from "react";
import { Link } from "react-router-dom";

export default function NetworkingMastery() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🌐 Networking Mastery</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">TCP/IP Fundamentals</h2>
        <p className="text-lg mb-4">
          Understanding networking is crucial for system administration and cybersecurity. 
          Master these concepts to troubleshoot network issues and conduct security assessments.
        </p>
        
        <h3 className="text-2xl font-semibold mb-3">OSI Model Layers</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Layer</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Function</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">7</td>
                <td className="border border-gray-300 px-4 py-2">Application</td>
                <td className="border border-gray-300 px-4 py-2">User interface</td>
                <td className="border border-gray-300 px-4 py-2">HTTP, SMTP, SSH</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">Presentation</td>
                <td className="border border-gray-300 px-4 py-2">Data formatting</td>
                <td className="border border-gray-300 px-4 py-2">SSL/TLS, ASCII</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">Session</td>
                <td className="border border-gray-300 px-4 py-2">Session management</td>
                <td className="border border-gray-300 px-4 py-2">NetBIOS, RPC</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">Transport</td>
                <td className="border border-gray-300 px-4 py-2">End-to-end delivery</td>
                <td className="border border-gray-300 px-4 py-2">TCP, UDP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Network</td>
                <td className="border border-gray-300 px-4 py-2">Routing</td>
                <td className="border border-gray-300 px-4 py-2">IP, ICMP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Data Link</td>
                <td className="border border-gray-300 px-4 py-2">Frame delivery</td>
                <td className="border border-gray-300 px-4 py-2">Ethernet, WiFi</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Physical</td>
                <td className="border border-gray-300 px-4 py-2">Physical transmission</td>
                <td className="border border-gray-300 px-4 py-2">Cables, radio waves</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Essential Networking Commands</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Command</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Key Options</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">ping</td>
                <td className="border border-gray-300 px-4 py-2">Test connectivity</td>
                <td className="border border-gray-300 px-4 py-2">-c, -i, -s</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">ping -c 4 google.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">netstat</td>
                <td className="border border-gray-300 px-4 py-2">Network connections</td>
                <td className="border border-gray-300 px-4 py-2">-tuln, -p</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">netstat -tuln</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">ss</td>
                <td className="border border-gray-300 px-4 py-2">Socket statistics</td>
                <td className="border border-gray-300 px-4 py-2">-tuln, -p</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">ss -tuln</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">nmap</td>
                <td className="border border-gray-300 px-4 py-2">Network scanning</td>
                <td className="border border-gray-300 px-4 py-2">-sS, -sV, -O</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">nmap -sS 192.168.1.0/24</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">tcpdump</td>
                <td className="border border-gray-300 px-4 py-2">Packet capture</td>
                <td className="border border-gray-300 px-4 py-2">-i, -w, -r</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">tcpdump -i eth0 port 80</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">dig</td>
                <td className="border border-gray-300 px-4 py-2">DNS lookup</td>
                <td className="border border-gray-300 px-4 py-2">@server, MX, NS</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">dig @8.8.8.8 google.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">traceroute</td>
                <td className="border border-gray-300 px-4 py-2">Route tracing</td>
                <td className="border border-gray-300 px-4 py-2">-n, -m</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">traceroute google.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Network Configuration</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Interface Configuration</h4>
            <ul className="space-y-1 text-sm font-mono">
              <li>ip addr show</li>
              <li>ip link set eth0 up</li>
              <li>ip addr add 192.168.1.100/24 dev eth0</li>
              <li>ip route add default via 192.168.1.1</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-xl font-medium mb-2">Persistent Configuration</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>/etc/network/interfaces</strong> (Debian)</li>
              <li><strong>/etc/sysconfig/network-scripts/</strong> (RHEL)</li>
              <li><strong>nmcli</strong> (NetworkManager)</li>
              <li><strong>systemd-networkd</strong> (Modern systems)</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Security Scanning Techniques</h3>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">⚠️ Ethical Use Only</h4>
          <p className="text-sm mb-2">Only use these techniques on networks you own or have explicit permission to test.</p>
          <ul className="space-y-1 text-sm">
            <li><strong>Host Discovery:</strong> <code className="bg-gray-200 px-1 rounded">nmap -sn 192.168.1.0/24</code></li>
            <li><strong>Port Scanning:</strong> <code className="bg-gray-200 px-1 rounded">nmap -sS -p 1-1000 target</code></li>
            <li><strong>Service Detection:</strong> <code className="bg-gray-200 px-1 rounded">nmap -sV -p 22,80,443 target</code></li>
            <li><strong>OS Detection:</strong> <code className="bg-gray-200 px-1 rounded">nmap -O target</code></li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Practical Exercise: Network Discovery</h3>
        <div className="bg-yellow-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">📝 Network Analysis Challenge</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Check your network interface: <code className="bg-gray-200 px-1 rounded">ip addr show</code></li>
            <li>Test internet connectivity: <code className="bg-gray-200 px-1 rounded">ping -c 4 8.8.8.8</code></li>
            <li>Check routing table: <code className="bg-gray-200 px-1 rounded">ip route show</code></li>
            <li>Discover local network: <code className="bg-gray-200 px-1 rounded">nmap -sn 192.168.1.0/24</code></li>
            <li>Check open ports on localhost: <code className="bg-gray-200 px-1 rounded">nmap localhost</code></li>
            <li>Monitor network connections: <code className="bg-gray-200 px-1 rounded">ss -tuln</code></li>
            <li>Trace route to destination: <code className="bg-gray-200 px-1 rounded">traceroute google.com</code></li>
            <li>DNS lookup test: <code className="bg-gray-200 px-1 rounded">dig google.com</code></li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Security Note:</strong> Only scan networks you own or have permission to test!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/commands" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Essential Commands
        </Link>
        <Link to="/offensive-security" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Offensive Security →
        </Link>
      </div>
    </div>
  );
}
