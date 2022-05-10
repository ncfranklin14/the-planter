const express = require("express");
const router = express.Router();
const {User,Blog} = require("../../models");

router.get("/", (req, res) => {
    Blog.findAll({})
      .then(dbBlogs => {
        res.json(dbBlogs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  //find one
  router.get("/:id", (req, res) => {
    Blog.findByPk(req.params.id,{})
      .then(dbBlog => {
        res.json(dbBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //create Blog
  router.post("/", (req, res) => {
    if(!req.session.user){
      return res.status(401).json({msg:"ya gotta login to create a blog post!"})
  }
    Blog.create({
      title:req.body.title,
      body:req.body.body,
      imageUrl:req.body.secure_url,
      UserId:req.session.user.id
    })
      .then(newBlog => {
        res.json(newBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //update Blog
  router.put("/:id", (req, res) => {
    Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedBlog => {
      res.json(updatedBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete a Blog
  router.delete("/:id", (req, res) => {
    Blog.destroy({
      where: {
        id: req.params.id
      }
    }).then(delBlog => {
      res.json(delBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  