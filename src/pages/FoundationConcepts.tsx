import React from "react";
import { Link } from "react-router-dom";
import { FullscreenToggle } from "@/components/ui/fullscreen-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircle, Terminal, FileText, Settings, Users, Shield, Book, Lightbulb, Zap, Target, Folder, Database, Key } from "lucide-react";

export default function FoundationConcepts() {
  return (
    <div className="w-full py-8 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <FullscreenToggle />
      <div className="max-w-none">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Essential Learning Path
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🏗️ Foundation Concepts
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master the fundamental concepts that form the backbone of Linux systems. 
            Build your expertise step by step with interactive learning modules.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">🐧 Linux Basics</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">🔧 System Admin</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">💻 Command Line</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">🛡️ Security</Badge>
          </div>
        </div>

        {/* Learning Progress Tracker */}
        <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Your Learning Journey</CardTitle>
                <CardDescription className="text-lg">Track your progress through essential Linux concepts</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="font-medium">File System</p>
                <p className="text-sm text-gray-600">Complete</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Terminal className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="font-medium">Shell Basics</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Settings className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="font-medium">System Info</p>
                <p className="text-sm text-gray-600">Upcoming</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="font-medium">Security</p>
                <p className="text-sm text-gray-600">Upcoming</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabbed Content */}
        <Tabs defaultValue="filesystem" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 h-14 bg-white shadow-lg rounded-xl p-1">
            <TabsTrigger value="filesystem" className="flex items-center gap-2 text-sm font-medium">
              <Folder className="w-4 h-4" />
              File System
            </TabsTrigger>
            <TabsTrigger value="shell" className="flex items-center gap-2 text-sm font-medium">
              <Terminal className="w-4 h-4" />
              Shell & Environment
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2 text-sm font-medium">
              <Database className="w-4 h-4" />
              System Info
            </TabsTrigger>
            <TabsTrigger value="help" className="flex items-center gap-2 text-sm font-medium">
              <Book className="w-4 h-4" />
              Getting Help
            </TabsTrigger>
          </TabsList>

          <TabsContent value="filesystem" className="space-y-8">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Folder className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">File System Hierarchy</CardTitle>
                    <CardDescription className="text-lg">Understanding Linux's directory structure - Everything is a file!</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                  <AlertDescription className="text-green-800 font-medium">
                    💡 Pro Tip: Linux follows a hierarchical tree structure starting from root (/). Every file and directory has a specific purpose and location.
                  </AlertDescription>
                </Alert>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="p-1 bg-blue-100 rounded">📁</span>
                      Essential Directories
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <code className="font-mono text-blue-600 font-bold">/</code>
                        <span>Root directory - The top of everything</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <code className="font-mono text-blue-600 font-bold">/home</code>
                        <span>User home directories</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <code className="font-mono text-blue-600 font-bold">/etc</code>
                        <span>System configuration files</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <code className="font-mono text-blue-600 font-bold">/var</code>
                        <span>Variable data (logs, mail, etc.)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <code className="font-mono text-blue-600 font-bold">/usr</code>
                        <span>User programs and data</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="p-1 bg-purple-100 rounded">🔐</span>
                      File Permissions
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-center text-sm font-medium">
                        <div className="bg-red-100 text-red-800 p-2 rounded">Owner</div>
                        <div className="bg-yellow-100 text-yellow-800 p-2 rounded">Group</div>
                        <div className="bg-green-100 text-green-800 p-2 rounded">Others</div>
                      </div>
                      <div className="text-center">
                        <code className="text-lg font-mono bg-white px-3 py-1 rounded border">rwx rwx rwx</code>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-center text-gray-600">
                        <div>r = Read (4)<br/>w = Write (2)<br/>x = Execute (1)</div>
                        <div>Examples:<br/>755 = rwxr-xr-x<br/>644 = rw-r--r--</div>
                        <div>Common:<br/>777 = Full access<br/>600 = Owner only</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
                <td className="border border-gray-300 px-4 py-2">Entry point to everything</td>
          

          {/* Shell & Environment Tab */}
          <TabsContent value="shell" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Terminal className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Shell Types</CardTitle>
                      <CardDescription>Choose your command-line companion</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default" className="bg-blue-600">Most Popular</Badge>
                        <span className="font-bold">Bash</span>
                      </div>
                      <p className="text-sm text-gray-700">Default on most systems, great for beginners</p>
                    </div>
                    <div className="p-4 border border-purple-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">Advanced</Badge>
                        <span className="font-bold">Zsh</span>
                      </div>
                      <p className="text-sm text-gray-700">Enhanced features, auto-completion, themes</p>
                    </div>
                    <div className="p-4 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">Modern</Badge>
                        <span className="font-bold">Fish</span>
                      </div>
                      <p className="text-sm text-gray-700">User-friendly, syntax highlighting, smart suggestions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Key className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Environment Variables</CardTitle>
                      <CardDescription>System configuration through variables</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-purple-600 font-bold">$PATH</code>
                      <span className="text-sm">Where to find executable programs</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-purple-600 font-bold">$HOME</code>
                      <span className="text-sm">Your user home directory</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-purple-600 font-bold">$USER</code>
                      <span className="text-sm">Current username</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-purple-600 font-bold">$SHELL</code>
                      <span className="text-sm">Current shell program</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <p className="text-sm font-medium text-purple-800">Quick Commands:</p>
                    <code className="text-xs font-mono bg-white px-2 py-1 rounded mt-1 inline-block">echo $PATH</code>
                    <code className="text-xs font-mono bg-white px-2 py-1 rounded mt-1 ml-2 inline-block">env</code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Keyboard Shortcuts Card */}
            <Card className="border-2 border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Essential Keyboard Shortcuts</CardTitle>
                    <CardDescription>Master these shortcuts to boost your productivity</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                    <kbd className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-mono">Ctrl + C</kbd>
                    <p className="text-sm mt-2 text-red-700 font-medium">Stop Process</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                    <kbd className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">Ctrl + Z</kbd>
                    <p className="text-sm mt-2 text-blue-700 font-medium">Suspend Process</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                    <kbd className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">Ctrl + L</kbd>
                    <p className="text-sm mt-2 text-green-700 font-medium">Clear Screen</p>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
                    <kbd className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-mono">Tab</kbd>
                    <p className="text-sm mt-2 text-purple-700 font-medium">Auto-complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Info Tab */}
          <TabsContent value="system" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200">
                <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Database className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">System Information</CardTitle>
                      <CardDescription>Know your system inside and out</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-green-600 font-bold">uname -a</code>
                      <span className="text-sm text-gray-600">System details</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-green-600 font-bold">whoami</code>
                      <span className="text-sm text-gray-600">Current user</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-green-600 font-bold">uptime</code>
                      <span className="text-sm text-gray-600">System uptime</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-green-600 font-bold">df -h</code>
                      <span className="text-sm text-gray-600">Disk usage</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-green-600 font-bold">free -h</code>
                      <span className="text-sm text-gray-600">Memory usage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Settings className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Process Management</CardTitle>
                      <CardDescription>Monitor and control running programs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-orange-600 font-bold">ps aux</code>
                      <span className="text-sm text-gray-600">All processes</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-orange-600 font-bold">top</code>
                      <span className="text-sm text-gray-600">Live monitor</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-orange-600 font-bold">htop</code>
                      <span className="text-sm text-gray-600">Enhanced monitor</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <code className="font-mono text-orange-600 font-bold">jobs</code>
                      <span className="text-sm text-gray-600">Background jobs</span>
                    </div>
                  </div>
                  <Alert className="mt-4 border-orange-200 bg-orange-50">
                    <AlertDescription className="text-orange-800">
                      💡 Use <code className="bg-white px-1 rounded">killall</code> or <code className="bg-white px-1 rounded">kill PID</code> to stop processes
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Getting Help Tab */}
          <TabsContent value="help" className="space-y-8">
            <Card className="border-2 border-indigo-200">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Book className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Getting Help & Documentation</CardTitle>
                    <CardDescription className="text-lg">Never get stuck - Linux has built-in help everywhere!</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
                    <h3 className="font-bold text-lg mb-3 text-blue-800">📖 Manual Pages</h3>
                    <code className="bg-white px-3 py-2 rounded font-mono text-blue-600 block mb-2">man command</code>
                    <p className="text-sm text-blue-700">Complete documentation for any command</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
                    <h3 className="font-bold text-lg mb-3 text-green-800">⚡ Quick Help</h3>
                    <code className="bg-white px-3 py-2 rounded font-mono text-green-600 block mb-2">command --help</code>
                    <p className="text-sm text-green-700">Fast summary of command options</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl">
                    <h3 className="font-bold text-lg mb-3 text-purple-800">🔍 Find Commands</h3>
                    <code className="bg-white px-3 py-2 rounded font-mono text-purple-600 block mb-2">apropos keyword</code>
                    <p className="text-sm text-purple-700">Search for commands by function</p>
                  </div>
                </div>
                
                <Alert className="mt-8 border-indigo-200 bg-indigo-50">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                  <AlertDescription className="text-indigo-800">
                    <strong>Pro Tip:</strong> Start with <code className="bg-white px-1 rounded">man intro</code> for a general introduction to Linux manual pages!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Next Steps Section */}
        <Card className="mt-12 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">🎯 Ready for the Next Level?</h2>
            <p className="text-xl text-blue-700 mb-6">You've mastered the foundations! Time to dive into practical commands.</p>
            <Link to="/essential-commands">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg">
                Explore Essential Commands →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
