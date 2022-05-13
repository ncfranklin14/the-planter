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
  const likes = Comment.findByPk(req.params.id, {});
  Comment.findByPk(req.params.id)
    console.log(likes)
    .then((likes) => {
      likes.increment("like", { by: 1 });
      res.status(200).end();
    });
});

router.get("/:id", (req, res) => {
  Blog.findByPk(req.params.id, {})
    .then((dbBlog) => {
      res.json(dbBlog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
