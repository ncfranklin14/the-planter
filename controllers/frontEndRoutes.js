const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");


router.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/profile");
  }
  res.render("login");
});

router.get("/", withAuth, async (req, res) => {
  try {
    // if (!req.session.user) {
    //   return res.redirect("/login");
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
        },
      ],
    });
    const blogList = blogData.map((blogList) => blogList.get({ plain: true }));
    console.log(blogList)

    // Pass serialized data and session flag into template
    res.render("gallery", {
      blogList,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    console.log(user);
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
