const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');
require('dotenv').config();

const sendMessage = require('./send_message');
const sendEmail = require('./send_email');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smartest-df9af.firebaseio.com"
});

exports.sendMessage = functions.https.onRequest(sendMessage);
exports.sendEmail = functions.https.onRequest(sendEmail);
