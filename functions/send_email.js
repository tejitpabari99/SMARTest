const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function(req, res) {
  const msg = {
    to: req.body.email,
    from: 'smartest@smartest-df9af.firebaseapp.com',
    subject: 'SMARTest Results',
    text: `HIV: ${req.body.hiv}\nSyphilis: ${req.body.syphilis}\nTest Date: ${req.body.date}\nID: ${req.body.id}\n(This ID can be used to verify the sender of the message)\n\nPLEASE DO NOT REPLY TO THIS MESSAGE. THIS IS A SEND ONLY NUMBER`,
    html: `<p>HIV ${req.body.hiv}</p> <p>Syphilis ${req.body.syphilis}</p> <p>Test Date: ${req.body.date}</p> <p>ID: ${req.body.id} (This ID can be used to verify the sender of the message)</p><p>PLEASE DO NOT REPLY TO THIS MESSAGE. THIS IS A SEND ONLY NUMBER</p>`,
  };
  sgMail.send(msg)
    .then(() => {
      return res.status(200).send('Mail Sent Successfully');
    })
    .catch((err) => {
      res.status(422).send({ error: err });
    });
}
