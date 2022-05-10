const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./frontEndRoutes');
// const galleryRoutes = require("./api/blogRoutes")

router.use('/',homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;