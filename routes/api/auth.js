const express = require("express")

const ctrl = require("../../controllers/auth")

const {authenticate} = require("../../midllewares")

const router = express.Router();

router.post("/register", ctrl.register)

router.post("/login", ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

router.patch("/users", authenticate, ctrl.updateSubscription)

module.exports = router