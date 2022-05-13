const router = require("express").Router();
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
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  // const likes = Comment.findByPk(req.params.id, {});
  Comment.findByPk(req.params.id)
    .then((likes) => {
      
      console.log(likes)
      likes.increment("like", { by: 1 });
      res.status(200).end();

    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});


module.exports = router;
