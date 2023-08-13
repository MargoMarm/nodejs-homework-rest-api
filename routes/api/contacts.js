const express = require("express");

const ctrl = require("../../controllers/contacts");

const {isValidId} = require("../../midllewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id",isValidId, ctrl.getContactById);

router.post("/",  ctrl.addContact);

router.put("/:id", isValidId, ctrl.updateContact);

router.patch("/:id/favorite", isValidId, ctrl.updateFavorite);

router.delete("/:id",isValidId, ctrl.deleteContact);

module.exports = router;
