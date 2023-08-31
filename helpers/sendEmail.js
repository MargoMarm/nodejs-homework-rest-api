const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const { MAILGUN_APIKEY, MAILGUN_DOMAIN } = process.env;

const sendEmail = async (data) => {
  const mg = mailgun.client({
    username: "margomalik96@gmail.com",
    key: MAILGUN_APIKEY,
  });

  mg.messages
    .create(MAILGUN_DOMAIN, {
      from: "Mailgun Sandbox <margomalik96@gmail.com>",
      to: [data.to],
      subject: "Verify your email",
      text: "Verify your email",
      html: data.html,
    })
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
};

module.exports = sendEmail;
