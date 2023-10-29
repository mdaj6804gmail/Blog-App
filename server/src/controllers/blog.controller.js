const is_schema_valid = require("../middleware/requestValid/request.valid");
const Blog = require("../models/blog.model");

const root = async (req, res) => {
  try {
  console.log("root :",req.user);
    res.send(`<h1>${new Date()}</h1>`);
  } catch (error) {
    res.send(`<h1>${error.message}</h1>`);
  }
};

const blogCreate = async (req, res) => {
  try {
    const { author, title, description } = req.body;
    const isvalid = is_schema_valid({ title: title, description: description });
    // !isvalid.error
    if (true) {
      const blog = new Blog({ title, description });
      const result = await blog.save();
      return res.status(201).json(result);
    }
    return res
      .status(400)
      .json({ error: "blog not created", data: { title, description } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  root,
  blogCreate,
};
