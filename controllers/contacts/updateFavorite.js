const Contact = require("../../models/contacts");
const schemas = require("../../schemas/contacts");
const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { error } = schemas.updateFavoriteSchema.validate(req.body);
  const { id } = req.params;
  const { _id: owner } = req.user;

  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing fields");
  }
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contact.findOneAndUpdate({ _id: id, owner }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;
