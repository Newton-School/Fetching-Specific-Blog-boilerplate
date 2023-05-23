const router = require('express').Router();

router.use('/blog', require('./blogRoutes'));

module.exports = router;