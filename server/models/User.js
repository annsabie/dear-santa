const bcrypt = require('bcrypt')
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
     type: String,
     required: true,
     min: 4,
     max: 20,
     trim: true,
     unique: false,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
    max: 30,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default: "",
  },
});

// hash user password
 UserSchema.pre('save', async function (next) {
     if (this.isNew || this.isModified('password')) {
       const saltRounds = 10;
       this.password = await bcrypt.hash(this.password, saltRounds);
     }
  
     next();
   });
  
  // custom method to compare and validate password for logging in
   UserSchema.methods.isCorrectPassword = async function (password) {
     return bcrypt.compareSync(password, this.password);
   };

module.exports = model('User', UserSchema);