import React from "react";
import { Link } from "react-router-dom";

export default function WindowsMastery() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🪟 Windows Mastery</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">🪟 Enterprise Windows Environment</h2>
        <p className="text-sm">
          Master Windows administration, PowerShell automation, and enterprise security. 
          Essential skills for modern IT infrastructure and cybersecurity professionals.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Windows PowerShell Fundamentals</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Core PowerShell Commands</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Command</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-Process</td>
                <td className="border border-gray-300 px-4 py-2">List running processes</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-Process | Sort-Object CPU -Descending</td>
                <td className="border border-gray-300 px-4 py-2">Process list by CPU usage</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-Service</td>
                <td className="border border-gray-300 px-4 py-2">Service management</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">{`Get-Service | Where-Object {$_.Status -eq "Running"}`}</td>
                <td className="border border-gray-300 px-4 py-2">Running services only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-EventLog</td>
                <td className="border border-gray-300 px-4 py-2">Event log analysis</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-EventLog -LogName Security -Newest 10</td>
                <td className="border border-gray-300 px-4 py-2">Latest security events</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-WmiObject</td>
                <td className="border border-gray-300 px-4 py-2">System information</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-WmiObject Win32_ComputerSystem</td>
                <td className="border border-gray-300 px-4 py-2">Hardware details</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-NetAdapter</td>
                <td className="border border-gray-300 px-4 py-2">Network interfaces</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-NetAdapter | Select Name, Status, LinkSpeed</td>
                <td className="border border-gray-300 px-4 py-2">Network adapter info</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">Test-NetConnection</td>
                <td className="border border-gray-300 px-4 py-2">Network connectivity</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Test-NetConnection -ComputerName google.com -Port 443</td>
                <td className="border border-gray-300 px-4 py-2">HTTPS connectivity test</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Active Directory Administration</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Essential AD PowerShell Commands</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">User Management</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-white px-2 py-1 rounded">Get-ADUser -Filter *</code></div>
                <div><code className="bg-white px-2 py-1 rounded">New-ADUser -Name "John Doe" -UserPrincipalName john.doe@domain.com</code></div>
                <div><code className="bg-white px-2 py-1 rounded">Set-ADUser -Identity jdoe -Department "IT"</code></div>
                <div><code className="bg-white px-2 py-1 rounded">Remove-ADUser -Identity jdoe -Confirm:$false</code></div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Group Management</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-white px-2 py-1 rounded">Get-ADGroup -Filter *</code></div>
                <div><code className="bg-white px-2 py-1 rounded">New-ADGroup -Name "IT-Team" -GroupScope Global</code></div>
                <div><code className="bg-white px-2 py-1 rounded">Add-ADGroupMember -Identity "IT-Team" -Members jdoe</code></div>
                <div><code className="bg-white px-2 py-1 rounded">Get-ADGroupMember -Identity "Domain Admins"</code></div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Group Policy Management</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Task</th>
                <th className="border border-gray-300 px-4 py-2 text-left">PowerShell Command</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">List GPOs</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Get-GPO -All</td>
                <td className="border border-gray-300 px-4 py-2">View all Group Policy Objects</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Create GPO</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">New-GPO -Name "Security Policy"</td>
                <td className="border border-gray-300 px-4 py-2">Create new Group Policy</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Link GPO</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">New-GPLink -Name "Security Policy" -Target "OU=Computers,DC=domain,DC=com"</td>
                <td className="border border-gray-300 px-4 py-2">Apply policy to OU</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Force Update</td>
                <td className="border border-gray-300 px-4 py-2 font-mono">Invoke-GPUpdate -Force</td>
                <td className="border border-gray-300 px-4 py-2">Immediate policy refresh</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Windows Security Hardening</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Security Configuration</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Windows Defender</h4>
            <div className="space-y-1 text-sm">
              <div><code className="bg-gray-100 px-2 py-1 rounded">Set-MpPreference -DisableRealtimeMonitoring $false</code></div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">Update-MpSignature</code></div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">Start-MpScan -ScanType FullScan</code></div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">Get-MpThreatDetection</code></div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-medium mb-2">Windows Firewall</h4>
            <div className="space-y-1 text-sm">
              <div><code className="bg-gray-100 px-2 py-1 rounded">Get-NetFirewallProfile</code></div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True</code></div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">New-NetFirewallRule -DisplayName "Block Malware" -Direction Inbound -Action Block</code></div>
              <div><code className="bg-gray-100 px-2 py-1 rounded">{`Get-NetFirewallRule | Where {$_.Enabled -eq "True"}`}</code></div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">User Account Control (UAC)</h3>
        <div className="bg-yellow-50 border rounded-lg p-4 mb-6">
          <h4 className="text-lg font-medium mb-2">Registry-based UAC Configuration</h4>
          <div className="space-y-2 text-sm">
            <div><code className="bg-white px-2 py-1 rounded">reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\EnableLUA</code></div>
            <div><code className="bg-white px-2 py-1 rounded">reg add HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System /v ConsentPromptBehaviorAdmin /t REG_DWORD /d 2</code></div>
            <div><code className="bg-white px-2 py-1 rounded">reg add HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System /v PromptOnSecureDesktop /t REG_DWORD /d 1</code></div>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Windows Event Log Analysis</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Critical Security Event IDs</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Event ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Log Source</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">4624</td>
                <td className="border border-gray-300 px-4 py-2">Successful logon</td>
                <td className="border border-gray-300 px-4 py-2">Security</td>
                <td className="border border-gray-300 px-4 py-2">User authentication</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">4625</td>
                <td className="border border-gray-300 px-4 py-2">Failed logon attempt</td>
                <td className="border border-gray-300 px-4 py-2">Security</td>
                <td className="border border-gray-300 px-4 py-2">Potential brute force</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">4648</td>
                <td className="border border-gray-300 px-4 py-2">Explicit credentials used</td>
                <td className="border border-gray-300 px-4 py-2">Security</td>
                <td className="border border-gray-300 px-4 py-2">Lateral movement</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">4672</td>
                <td className="border border-gray-300 px-4 py-2">Admin privileges assigned</td>
                <td className="border border-gray-300 px-4 py-2">Security</td>
                <td className="border border-gray-300 px-4 py-2">Privilege escalation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">4688</td>
                <td className="border border-gray-300 px-4 py-2">Process creation</td>
                <td className="border border-gray-300 px-4 py-2">Security</td>
                <td className="border border-gray-300 px-4 py-2">Command execution</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">4720</td>
                <td className="border border-gray-300 px-4 py-2">User account created</td>
                <td className="border border-gray-300 px-4 py-2">Security</td>
                <td className="border border-gray-300 px-4 py-2">Account management</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">PowerShell Event Log Analysis</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="font-medium mb-2">Advanced Event Log Queries</h4>
          <div className="space-y-3">
            <div>
              <p className="text-sm mb-1"><strong>Failed Logon Analysis:</strong></p>
              <code className="block bg-white p-2 text-xs rounded">
                {`Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4625} | 
Group-Object -Property {$_.Properties[5].Value} | 
Sort-Object Count -Descending | Select-Object Name, Count`}
              </code>
            </div>
            <div>
              <p className="text-sm mb-1"><strong>Process Creation Monitoring:</strong></p>
              <code className="block bg-white p-2 text-xs rounded">
                {`Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4688} | 
Select-Object TimeCreated, @{Name='Process';Expression={$_.Properties[5].Value}}, 
@{Name='CommandLine';Expression={$_.Properties[8].Value}}`}
              </code>
            </div>
            <div>
              <p className="text-sm mb-1"><strong>Privilege Escalation Detection:</strong></p>
              <code className="block bg-white p-2 text-xs rounded">
                {`Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4672; StartTime=(Get-Date).AddDays(-1)} | 
Where-Object {$_.Properties[1].Value -notmatch 'SYSTEM'}`}
              </code>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">Windows Registry Forensics</h2>
        
        <h3 className="text-2xl font-semibold mb-3">Key Registry Locations for Security</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Registry Path</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Information</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Security Relevance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</td>
                <td className="border border-gray-300 px-4 py-2">Startup programs</td>
                <td className="border border-gray-300 px-4 py-2">Persistence mechanisms</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</td>
                <td className="border border-gray-300 px-4 py-2">User startup programs</td>
                <td className="border border-gray-300 px-4 py-2">User-level persistence</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">HKLM\\SYSTEM\\CurrentControlSet\\Services</td>
                <td className="border border-gray-300 px-4 py-2">System services</td>
                <td className="border border-gray-300 px-4 py-2">Malicious services</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon</td>
                <td className="border border-gray-300 px-4 py-2">Logon scripts</td>
                <td className="border border-gray-300 px-4 py-2">Logon hijacking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono">HKCU\\SOFTWARE\\Microsoft\\Internet Explorer\\TypedURLs</td>
                <td className="border border-gray-300 px-4 py-2">Browser history</td>
                <td className="border border-gray-300 px-4 py-2">User activity tracking</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3">Windows Enterprise Management Exercise</h3>
        <div className="bg-blue-50 border rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2">🏢 Enterprise Windows Security Assessment</h4>
          <p className="text-sm mb-3">Complete a comprehensive Windows security assessment:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Active Directory Audit:</strong> Review user accounts, groups, and permissions</li>
            <li><strong>Group Policy Analysis:</strong> Evaluate security policies and configurations</li>
            <li><strong>Event Log Review:</strong> Analyze security events for anomalies</li>
            <li><strong>Service Assessment:</strong> Inventory and secure Windows services</li>
            <li><strong>Registry Security:</strong> Check for persistence mechanisms and malware</li>
            <li><strong>Network Configuration:</strong> Review firewall rules and network settings</li>
            <li><strong>User Account Control:</strong> Validate UAC settings and policies</li>
            <li><strong>Antimalware Status:</strong> Verify Windows Defender configuration</li>
          </ol>
          <div className="mt-4 p-3 bg-white rounded">
            <p className="text-sm"><strong>PowerShell Security Script Template:</strong></p>
            <code className="block text-xs mt-2 p-2 bg-gray-100 rounded">
{`# Windows Security Assessment Script
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion
Get-LocalUser | Where-Object {$_.Enabled -eq $true}
Get-Service | Where-Object {$_.Status -eq "Running"} | Sort-Object Name
Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True" -and $_.Direction -eq "Inbound"}
Get-MpComputerStatus
Get-EventLog -LogName Security -Newest 50 | Group-Object EventID | Sort-Object Count -Descending`}
            </code>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            💡 <strong>Enterprise Tip:</strong> Automate Windows security assessments with PowerShell DSC and scheduled tasks!
          </p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/penetration-testing" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
          ← Previous: Penetration Testing
        </Link>
        <Link to="/practical-labs" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Next: Practical Labs →
        </Link>
      </div>
    </div>
  );
}
