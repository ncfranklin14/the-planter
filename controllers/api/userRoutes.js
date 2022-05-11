const express = require("express");
const router = express.Router();
const { User, Blog } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({})
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id,{})
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/logout", (req, res) => {
if(req.session.logged_in){
  req.session.destroy(()=> res.status(204).end())
}else{
  res.status(404).end()
}
});

//create user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username, 
    password: req.body.password
  })
    .then((newUser) => {
      
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;

        res.status(200).json(newUser);
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