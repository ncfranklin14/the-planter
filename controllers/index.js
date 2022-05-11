const express =require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
const frontEnd = require("./frontEndRoutes");
// const galleryRoutes = require("./api/blogRoutes")


router.use('/api', apiRoutes);
router.use("/",frontEnd)


module.exports = router;