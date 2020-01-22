const fetch = require("node-fetch");
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', function (data) {
  console.log('Data:', data);
 
  fetch("http://localhost/domaapie/api/measurement/create.php", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: data
  }).catch((err) => console.log(err))

});


