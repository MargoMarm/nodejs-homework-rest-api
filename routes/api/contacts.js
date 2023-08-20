const express = require("express");

const ctrl = require("../../controllers/contacts");

const {isValidId, authenticate} = require("../../midllewares");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, ctrl.addContact);

router.put("/:id", authenticate, isValidId, ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, ctrl.updateFavorite);

router.delete("/:id", authenticate, isValidId, ctrl.deleteContact);



module.exports = router;
