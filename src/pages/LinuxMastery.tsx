import React from "react";

export default function LinuxMastery() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Linux Mastery</h2>
      <p className="mb-4">Welcome to the Linux Mastery section! Here you'll learn essential Linux commands, shell scripting, system administration, and more. Each topic includes explanations, command tables, and hands-on exercises.</p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Getting Started with Linux</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>What is Linux?</li>
        <li>Linux distributions</li>
        <li>Basic Linux architecture</li>
      </ul>
      <h4 className="text-xl font-semibold mt-4 mb-2">Essential Commands</h4>
      <table className="table-auto border mb-4">
        <thead>
          <tr>
            <th className="border px-2 py-1">Command</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">ls</td>
            <td className="border px-2 py-1">List directory contents</td>
            <td className="border px-2 py-1">ls -l /home</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">cd</td>
            <td className="border px-2 py-1">Change directory</td>
            <td className="border px-2 py-1">cd /var/log</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">pwd</td>
            <td className="border px-2 py-1">Print working directory</td>
            <td className="border px-2 py-1">pwd</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">cp</td>
            <td className="border px-2 py-1">Copy files/directories</td>
            <td className="border px-2 py-1">cp file.txt /tmp/</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">mv</td>
            <td className="border px-2 py-1">Move/rename files</td>
            <td className="border px-2 py-1">mv old.txt new.txt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">rm</td>
            <td className="border px-2 py-1">Remove files/directories</td>
            <td className="border px-2 py-1">rm -rf /tmp/test</td>
          </tr>
        </tbody>
      </table>
      <h4 className="text-xl font-semibold mt-4 mb-2">Exercise: Practice Basic Commands</h4>
      <ol className="list-decimal ml-6 mb-4">
        <li>Open a terminal and navigate to your home directory.</li>
        <li>Create a new directory called <code>practice</code>.</li>
        <li>Inside <code>practice</code>, create a file named <code>hello.txt</code> and write "Hello, Linux!" into it.</li>
        <li>Copy <code>hello.txt</code> to <code>hello2.txt</code>.</li>
        <li>Rename <code>hello2.txt</code> to <code>greetings.txt</code>.</li>
        <li>Delete <code>greetings.txt</code>.</li>
      </ol>
      <p className="mt-6">Click "Next" to continue to Networking.</p>
    </div>
  );
}
