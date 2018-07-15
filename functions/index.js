const functions = require('firebase-functions');
const sendMessage = require('./send_message');
const sendEmail = require('./send_email');

exports.sendMessage = functions.https.onRequest(sendMessage);
exports.sendEmail = functions.https.onRequest(sendEmail);
