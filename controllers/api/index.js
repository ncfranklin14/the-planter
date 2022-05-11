const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);



module.exports = router;