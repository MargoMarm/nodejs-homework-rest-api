const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find(
    { owner, ...(favorite !== undefined && { favorite }) },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "subscription email");
  res.status(200).json(result);
};

module.exports = getAll;