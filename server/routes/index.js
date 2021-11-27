<<<<<<< HEAD
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
=======
const router = require("express").Router();
const userRoutes = require("./api/user-routes");

router.use("/api/users", userRoutes);

module.exports = router;
>>>>>>> main
