const router = require("express").Router();
const {
    readWishes,
    updateGranted,
} = require("../../controllers/list-controller");

router.route("/").get(readWishes);
router.route("/").put(updateGranted);

module.exports = router;