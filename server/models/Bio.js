const { Schema, model } = require('mongoose');

const bioSchema = new Schema({
  userKey: {
    type: String,
    required: true,
    unique: true,
    immutable: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Bio = model('Bio', bioSchema);

module.exports = Bio;