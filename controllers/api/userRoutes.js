const express = require("express");
const router = express.Router();
const { User, Blog } = require("../../models");

// router.get("/logout", (req, res) => {
//   req.session.destroy();
//   res.json({ msg: "logged out!" });
// });

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

router.post("/login",  (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((userData) => {
      
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword =  userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;