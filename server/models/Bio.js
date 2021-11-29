const { Schema, model } = require('mongoose');

const bioSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const Bio = model('Bio', bioSchema);

module.exports = Bio;