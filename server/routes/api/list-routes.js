const router = require("express").Router();
const {
    readWishes,
    updateGranted,
} = require("../../controllers/list-controller");

router.route("/:key").get(readWishes);
router.route("/:key").put(updateGranted);

module.exports = router;