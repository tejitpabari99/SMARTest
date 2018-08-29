const twilio = require('./twilio');

module.exports = (req, res) => {
    if(!req.body.phone) {
        return res.status(422).send(({ error: "You must give a phone number" }));
    }
    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    twilio.messages.create({
        body: `HIV: ${req.body.hiv}\nSyphilis: ${req.body.syphilis}\nTest Date: ${req.body.date}\nID: ${req.body.id}\n(This ID can be used to verify the sender of the message)\n\nPLEASE DO NOT REPLY TO THIS MESSAGE. THIS IS A SEND ONLY NUMBER`,
        to: phone,
        from: '+19738334612'
    })
      .then((response) => {
        return res.status(200).send("Message successfully sent!")
      })
      .catch((err) => {
        res.status(422).send({ error: err})
      })

}
