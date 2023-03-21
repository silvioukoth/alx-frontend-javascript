0x01. ES6 Promises

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Install NodeJS 12.22.x
foo@pop-os:~$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
foo@pop-os:~$ sudo bash nodesource_setup.sh
foo@pop-os:~$ sudo apt install nodejs -y

Check version
foo@pop-os:~$ nodejs -v
v12.22.1
foo@pop-os:~$ npm -v
6.14.12

Install Jest, Babel, and ESLint
foo@pop-os:~$ npm install --save-dev jest
foo@pop-os:~$ npm install --save-dev babel-jest @babel/core @babel/preset-env
foo@pop-os:~$ npm install --save-dev eslint
