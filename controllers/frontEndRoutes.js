const { response } = require("express");
const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/profile");
  }
  res.render("login");
});

router.get("/gallery", (req, res) => {
  try {
  // if (!req.session.user) {
  //   return res.redirect("/login");
  // }
  Blog.findAll()
  .then(Blogdata => {
    const blogList = Blogdata.map(data => {
      data.get({ plain: true });
    })
    res.render("gallery",{blogList});
  
  })
}catch(err) {console.log("Error")}
  
});

router.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
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

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ msg: "logged out!" });
});

//create user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;

        res.status(200).json(userData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/login", async (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then(async (userData) => {
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }

      const validPassword = await userData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
