require('dotenv').config();

var user = process.env.USERNAME;
var password = process.env.PASSWORD;
var from_number = process.env.FROM_NUM;
var to_number = process.env.TO_NUM;

const data = JSON.stringify({
  "from": { "type": "whatsapp", "number": from_number },
  "to": { "type": "whatsapp", "number": to_number },
  "message": {
    "content": {
      "type": "text",
      "text": "Hi! Your lucky number is " + Math.floor(Math.random() * 100)
    }
  }
});

const https = require('https');

const options = {
  hostname: 'messages-sandbox.nexmo.com',
  port: 443,
  path: '/v0.1/messages',
  method: 'POST',
  authorization: {
    username: user,
    password: password
  },
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();