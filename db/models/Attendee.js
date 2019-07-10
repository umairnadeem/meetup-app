const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email is required',
  },
  shirt: {
    type: String,
    enum: [`XS`, `S`, `M`, `L`, `XL`, `XXL`]
  },
  skillLevel: {
    type: String,
    enum: [`beginner`, `intermediate`, `expert`]
  }
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;