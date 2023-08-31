const User = require("../../models/users");
const schemas = require("../../schemas/auth");
const { BASE_URL } = process.env;

const { HttpError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { error } = schemas.emailSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "email not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    html: `<html><a target="_blank" href='${BASE_URL}/api/auth/verify/${user.verificationToken}'>Click to verify email</a></html>`,
  };
  await sendEmail(verifyEmail);

  res.json({ message: "Verification email was sent" });
};

module.exports = resendVerifyEmail;
