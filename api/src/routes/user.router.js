const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.put('/users/:id', UserController.update);



module.exports = router;