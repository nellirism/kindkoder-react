const router = require('express').Router();

const homeRoutes = require('./home-routes');
const supportRoutes = require('./support-routes');

router.use('/', homeRoutes);
router.use('/support', supportRoutes);


module.exports = router;