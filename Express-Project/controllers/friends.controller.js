const friends = require("../models/friend.model")

exports.getFriends = (req, res, next) => {
  res.json(friends);
};

exports.getFriend = (req, res, next) => {
  const friendId = req.params.friendId;
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.json({
      error: "Friend dos'nt exist.",
    });
  }
};

exports.postFriend = (req, res, post) => {
    if (!req.body.name) {
      res.status(400).json({
        error: "Friend dos'nt found.",
      });
      return;
    }
    const newFriend = {
      id: friends.length,
      name: req.body.name,
    };
    friends.push(newFriend);
    res.json({
      message: "Friend added.",
    });
  }
