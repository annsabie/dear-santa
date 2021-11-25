const User = require("../models/User");

module.exports = {
    async authUser (req, res) {
        try {
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            
            if (!newUser) {
                return res.status(400).json({ message: 'Unable to create User' });
            } else {
                const user = await newUser.save();
                res.status(200).json(user);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async loginUser (req, res) {
        try {
            const user = await User.findOne({
                where: { email: req.body.email }
            })
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }
            
            const isCorrectPassword = await user.isCorrectPassword(req.body.password);
            if (!isCorrectPassword) {
                res.status(400).json({ message: 'User not found' });
            }
            res.status(200).json({ user,  message: "You are now logged in!" });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};