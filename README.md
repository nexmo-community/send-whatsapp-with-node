# Send a WhatsApp Message with Node

This file sends a test WhatsApp message using Node and the Vonage Developer Messaging sandbox. To use it, first go to your [Vonage Developer](https://dashboard.nexmo.com/) dashboard and configure your [WhatsApp sandbox](https://dashboard.nexmo.com/messages/sandbox).

Clone the repository to a new directory on your machine and:

1. Run `npm install` to add support for a `.env` file
2. Create a new `.env` file and populate it with your credentials:
   ```text
   USERNAME="12ab3456"
   PASSWORD="123AbcdefghIJklM"
   FROM_NUM="14151234567"
   TO_NUM="441234567890"
   ```
   Your username and password are your Vonage API key and secret. You can copy the from number from the cURL command at the bottom of the sandbox page, and the to number is the device number you've whitelisted.
3. Run `node app.js` to send a test message