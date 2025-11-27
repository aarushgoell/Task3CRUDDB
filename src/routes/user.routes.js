const express = require("express");
const { getUsers, createUser, deleteUser, updateUser } = require("../controllers/user.controller");
const { authMiddle } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/fetch", getUsers);
router.post("/", authMiddle, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router
