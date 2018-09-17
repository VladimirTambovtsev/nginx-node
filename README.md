# nginx-node
express &amp; nginx server setup

# Quick start


1. Install nginx 

### Ubuntu
<pre>
sudo apt-get update
sudo apt-get install nginx
sudo nginx -v
</pre>

### Mac OS
<pre>
brew install nginx
</pre>

2. Go to /etc/../nginx/ and replace <code>nginx.conf</code> by current file and add <code>sites/demo</code> folder

3. Turn on nginx
<pre>
sudo nginx
</pre>

4. In new tab start node server as a reverse proxy:
<pre>
cd sites/demo
yarn install
node index.js
</pre>

5. Go to http://192.168.0.66
