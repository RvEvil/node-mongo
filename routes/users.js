const express = require("express")
const router = express.Router()
const User = require("../models/user")
const controller = require("../controllers/userController")

router.get("/", controller.getallUser)

router.get("/:id", controller.getUser)

router.post("/", controller.addUser)

router.patch("/:id", controller.updateUser)

router.delete("/:id", controller.removeUser)

module.exports = router
