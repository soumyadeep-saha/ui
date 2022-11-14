const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  meta: {
    likes: Number,
    favs: Number,
  },
  comments: [{ body: String, date: Date }],
});

const user = mongoose.model("user", UserSchema);
// user.createIndexes(); //it is adding an additional index along with uniqueness
module.exports = user;
