const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const listRoutes = require('./list-routes');

router.use('/', userRoutes);
router.use('/profile', profileRoutes);
router.use('/list', listRoutes);

module.exports = router;