/* const { User } = require("../models");




module.exports = { 
    async getUsers(req, res) {
        const user = await User.find({});

        if (!user) {
            return res.status(400).json({ message: 'Unable to get User' });
        } else {
            res.status(200).json(user);
        }
    }
}; */