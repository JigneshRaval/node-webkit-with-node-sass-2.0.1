node-webkit-with-node-sass-2.0.1
Node Webkit 0.12.0 Alpha 3 with node-sass 2.0.1

You can build your own node-sass 2.0.1 for NW 0.12.0 using following method, on Windows 7 64bit Machine.

My System Configuration:

<pre>
OS : Windows 7 Ultimate 64 bit
Node.js : 0.12.0
npm : 2.6.1
nw-gyp : 0.12.4
node-webkit : 0.12.0-alpha3
Visual Studio : 2013 Express
</pre>

Why shoud I build node-sass again?

1. If you are facing following error when trying to use node-sass in node-webkit: 
<pre>`libsass` bindings not found. Try reinstalling `node-sass`</pre>
2. You are using node-sass in node-webkit so it's executables are referencing diffrent location for binding.node in nw.
3. Using diffrent version of node.js or node-webkit for which node-sass precompiled binaries are not available.
4. It is working well with Node.js but not in Node-WEbkit

Steps to Recompile node-sass binaries according to your need.
I have followed below given steps for compiling it on Windows 7 64 bit
- Downloas Visual Studio Express 2013 Update 4 for windows Desktop, which works well with node-sass 2.0.x.
- Install Visual Studio Express on your system.
- Download Node-webkit from https://github.com/nwjs/nw.js
- Unzip Node-webkit at your desired location.
- put server.js and write some code to create server using Node Express or HTTP.
- using npm command in your project folder (where you have unzipped nw) install node-sass 2.0.1
like : npm install node-sass@2.0.1
