const twilio = require('twilio');

const accountSID = 'AC9e64e9b19415137e9811e3f952a048ba';
const authToken = '95f9464ac2b7c4e21fd7a71c08ec6328';

module.exports = new twilio.Twilio(accountSID, authToken);
