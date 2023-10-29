const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post(
  "/login/local",
  passport.authenticate("local", {
    successRedirect: "/api/v1/auth/login/success",
    failureRedirect: "/api/v1/auth/login",
  })
);

router.get("/login/success", async (req, res) => {

  try {
    const token = await jwt.sign(
      { username: req.user.username, id: req.user.id },
      process.env.JWT_SECRET,
      { expiresIn: "7h" }
    );
    if (req.isAuthenticated()) {
      return res.status(200).send({ token, success: true });
    }
    return res
      .status(404)
      .send({ success: false, message: "Authentication failed" });
  } catch (error) {
    return res.status(404).send({ error: error, success: false });
  }
});
router.get("/login", async (req, res) => {
  res.status(404).send(`<h1>Login Page failureRedirect</h1>`);
});

module.exports = router;
