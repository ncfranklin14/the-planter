const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/user",userRoutes)









module.exports = router;