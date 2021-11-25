const router = require('express').Router();

const { authUser, loginUser } = require('../../controllers/AuthController');

router.route('/profile').post(authUser);
router.route('/login').post(loginUser);
// router.route('/:id').get(getProduct);
// router.route('/:id').put(updateProduct);

module.exports = router;