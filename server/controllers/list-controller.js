const { User } = require("../models");

module.exports = {
  async readWishes(req, res) {
    // pull from model, get current list of all wishes for linked user
    try {
      const filter = { key: req.params.key };
      const user = await User.findOne(filter);

      if (!user) {
        return res.status(400).json({ message: "No wishes found" });
      }

      res.json(user.wishes);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async updateGranted(req, res) {
    // replace granted for linked user
    try {
      const filter = { key: req.params.key };
      const user = await User.findOne(filter);
      const wishes = user.wishes;
      const i = wishes.indexOf(req.body.description);

      if (i > -1) {
        wishes[i] = { description: req.body.description, granted: req.body.granted };
        user.update({ wishes: wishes }).exec();
      } else {
        return res.status(400).json({ message: "Did not find wish" });
      }

      res.json({ wishes: user.wishes });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
};
