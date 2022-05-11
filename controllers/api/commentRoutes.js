const router = express.Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
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