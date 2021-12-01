const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const min = 46656;
const range = 1679615 - min;
const randomKey = function () {
  // min and max values are for 4 digit base 36 numbers
  let n = parseInt(Math.random() * range) + min;
  let k = n.toString(36);
  console.info("randomKey", n, k);
  return k;
};

const userSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    immutable: true,
    default: randomKey,
  },
  username: {
    type: String,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: false,
  },
  wishes: [{
    content: String,
    done: Boolean,
  }],
  shares: {
    type: [String],
  },
});


userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;
