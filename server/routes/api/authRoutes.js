const router = require('express').Router();

const { newUser, loginUser } = require('../../controllers/AuthController');

router.route('/signup').post(newUser);
router.route('/login').post(loginUser);
// router.route('/:id').get(getProduct);
// router.route('/:id').put(updateProduct);

module.exports = router;