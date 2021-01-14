const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// GET user index
router.get("/", userController.user_index);

// // GET user profile
// router.get("/:id", userController.user_profile);

// // GET friends
// router.get("/friends", userController.get_friends);

// GET show all pending/received requests
// router.get("/requests", userController.requests_index);

// POST send friend request
router.post("/requests/:id", userController.send_request);

// PUT respond friend request
router.put("/requests/:id", userController.respond_request);

module.exports = router;
