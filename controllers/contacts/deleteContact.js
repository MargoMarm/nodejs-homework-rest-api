const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndRemove({ _id: id, owner });
  if (!result) {
    throw HttpError(404, "not found");
  }
  res.status(200).json({ message: "contact has been successfully deleted" });
};

module.exports = deleteContact;
