const mongoose = require("mongoose");

const Schema = mongoose.Schema;
/**
 *
 * ```js
 * const user_auth = (requ_type:Boolean) => {
 * }
 * ```
 */

const user_schema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  username: {
    type: String,
    required: true,
    unique: [true, "email alrady exist try new email address"],
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Array,
  },
  posts: [],
});

const user_auth = mongoose.model("user", user_schema);

module.exports = user_auth;
