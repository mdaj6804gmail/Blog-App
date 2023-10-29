const router = require("express").Router();
const { root, blogCreate } = require("../controllers/blog.controller");
const isuser = require("../middleware/isauth.jwt");

router.get("/", isuser, root);
router.post("/create", blogCreate);

module.exports = router;
