const express =require('express');
const router = require('express').Router();

const frontEnd = require("./frontEndRoutes");
router.use("/",frontEnd)

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// const galleryRoutes = require("./api/blogRoutes")

const sessionRoutes = require("./sessionRoutes");
router.use("/sessions",sessionRoutes);

module.exports = router;