const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blog_schema = new Schema({
  author: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    // required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Array,
  },
});

const Blog = mongoose.model("blog", blog_schema);

module.exports = Blog;
