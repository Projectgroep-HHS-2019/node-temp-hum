# Listener Arduino

To run first make sure you have node.js installed and also install the required npm packages. 

## Required NPM packages

* **serialport**
    npm install serialport
* **parser-readline**
    npm install parser-readline
* **node-fetch**
    npm install parser-readline

## Set the COM Port to your own port
``` JavaScript
{
const port = new SerialPort(<YOUR COM NAME>, { baudRate: 9600 });
}
 ```

## Start project
    node index.js
