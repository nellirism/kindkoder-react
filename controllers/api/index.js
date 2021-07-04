const router = require('express').Router();

const supportRoutes = require('./support-routes');


router.use('/support', supportRoutes);

module.exports = router;