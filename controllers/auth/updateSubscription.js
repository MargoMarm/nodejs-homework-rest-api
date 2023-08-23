const User = require("../../models/users");
const schemas = require("../../schemas/auth");
const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res, next) => {
  const { error } = schemas.updateSubscriptionSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ subscription });
};

module.exports = updateSubscription;