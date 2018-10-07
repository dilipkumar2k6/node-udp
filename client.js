const dgram = require('dgram');

const client = dgram.createSocket('udp4'); // or udp6

const PORT = 3333;
const HOST = '127.0.0.1';

// Send message to udp server
client.send('Node.js rocks', PORT, HOST, (err) => {
  if (err) {
    throw err;
  }

  console.log('UDP message is sent');
  client.close();
})
