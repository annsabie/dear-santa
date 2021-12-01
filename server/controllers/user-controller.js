// import user model
const { User } = require("../models");

module.exports = {
  async signup(req, res) {
    try {
      const user = await User.create(req.body);

      if (!user) {
        return res.status(400).json({ message: "User-controller: signup: Could not create user" });
      }
      // const token = signToken(user);
      await saveUserLoginSession(req.session, user);

      res.json({ key: user.key, username: user.username, email: user.email });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async login(req, res) {
    const { body } = req;
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });

    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const validPassword = await user.isCorrectPassword(body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    await saveUserLoginSession(req.session, user);

    res.json({
      user: { key: user.key, email: user.email, username: user.username },
      message: "You are now logged in!",
    });
  },

  async me(req, res) {
    try {
      const filter = { key: req.session.key };
      const user = await User.findOne(filter);

      if (user) {
        const { key, username, email } = user;
        res.json({ key, username, email });
      } else {
        return res
          .status(404)
          .json({ message: "User not logged in." });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async logout(req, res) {
    req.session.destroy();
    res.clearCookie('connect.sid');

    res.send();
  }
};

function saveUserLoginSession(session, user) {
  session.key = user.key;
  session.username = user.username;
  session.email = user.email;
  session.logged_in = true;
}
