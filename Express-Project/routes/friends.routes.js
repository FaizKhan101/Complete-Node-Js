const express = require("express")

const friendsController = require("../controllers/friends.controller");

const router = express.Router()


router.get("/", friendsController.getFriends);

router.get("/:friendId", friendsController.getFriend);

router.post("/", friendsController.postFriend);

module.exports = router
