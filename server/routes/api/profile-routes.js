const router = require("express").Router();
const {
    share,
    readWishes,
    createWish,
    updateWish,
    deleteWish,
    saveBio,
    getBio,
} = require("../../controllers/profile-controller");

router.route("/:key/share").post(share);
router.route("/wishes").get(readWishes);
router.route("/wishes").post(createWish);
router.route("/wishes").put(updateWish);
router.route("/wishes").delete(deleteWish);
router.route("/bio").post(saveBio);
router.route("/bio").get(getBio);

module.exports = router;