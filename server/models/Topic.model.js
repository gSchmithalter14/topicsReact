const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopicSchema = new Schema({
  content: String,
  date: Date,
  votes: {
    type: Number,
    default: 0
  }
});

const Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;