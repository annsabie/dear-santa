const router = require("express").Router();
const {
    share,
    readWishes,
    createWish,
    updateWish,
    deleteWish,
} = require("../../controllers/profile-controller");

router.route("/:key/share").post(share);
router.route("/:key").get(readWishes);
router.route("/:key").post(createWish);
router.route("/:key").put(updateWish);
router.route("/:key").delete(deleteWish);

module.exports = router;