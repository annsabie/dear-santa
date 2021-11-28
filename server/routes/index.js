const router = require("express").Router();
const index = require("./api/index");

router.use("/api", index);

module.exports = router;