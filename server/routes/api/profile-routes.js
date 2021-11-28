const router = require("express").Router();
const {
    share,
    readWishes,
    createWish,
    updateWish,
    deleteWish,
} = require("../../controllers/profile-controller");

router.route("/share").post(share);
router.route("/").get(readWishes);
router.route("/").post(createWish);
router.route("/").put(updateWish);
router.route("/").delete(deleteWish);

module.exports = router;