const router = require('express').Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// /api/comments/
//POST

router.post("/", withAuth, (req, res) => {
  console.log(req.body);
  Comment.create({
    ...req.body,
    user_id: req.session.user_id,
  })
    .then((commentData) => {
      
      res.json(commentData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router