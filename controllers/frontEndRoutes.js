const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/profile");
  }
  res.render("login");
});

router.get("/", withAuth, (req, res) => {
  // try {
  // if (!req.session.user) {
  //   return res.redirect("/login");
  // }
  // Blog.findAll()
  // .then(Blogdata => {
  //   const blogList = Blogdata.map(data => {
  //     data.get({ plain: true });
  //   })
  res.render("gallery", {
    logged_in: req.session.logged_in,
    // blogList
  });

  // })
  // }catch(err) {console.log("Error")}
});

router.get("/profile", withAuth, (req, res) => {
  User.findByPk(req.session.user.id, {
    include: [Blog],
  }).then((userData) => {
    console.log(userData);
    const hbsData = userData.get({ plain: true });
    console.log("=======");
    console.log(hbsData);
    hbsData.loggedIn = req.session.user ? true : false;
    res.render("profile", hbsData);
  });
});



module.exports = router;
