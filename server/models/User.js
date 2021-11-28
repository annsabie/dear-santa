const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
const max = 1679615;
const min = 46656;
const randomKey = function () {
  // min and max values are for 4 digit base 36 numbers
  let n = Math.random() * (max - min) + min;
  let k = "";
  while(n > 0) {
    k += digits[n%36];
    n /= 36;
  }
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
    description: String,
    granted: Boolean,
  }],
  shares: {
    type: [String],
  },
});

/* Mongoose hooks come in "pre" and "post" flavors. Pre hooks are before the database 
action occurs, Post hooks are after the database action occurs. Here we have a "pre" 
hook for the "save" action, and we can check whether the record being addressed at the 
time is a new record, or a modified one. If either is true, then we need to hash
the password. */
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
