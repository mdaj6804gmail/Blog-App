const passport = require("passport");
const user_auth = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const LocalAuth = () => {
  passport.serializeUser((user, cb) => {
    return cb(null, user.id);
  });

  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await user_auth.findById(id);
      if (user) {
        return cb(null, user);
      } else {
        return cb(null, { message: "User not found" });
      }
    } catch (error) {
      return cb(null, { message: "User not found", error: error.message });
    }
  });

  passport.use(
    new LocalStrategy("local", async (username, password, done) => {
      const getuser = await user_auth.findOne({ username: username });

      if (!getuser) {
        try {
          const hashPass = await bcrypt.hash(password, 10);
          const user = await user_auth.create({
            username,
            password: hashPass,
          });
          done(null, user);
        } catch (error) {
          console.log("LocalStrategy :", error);
          return done(null, false);
        }
      } else {
        const pass_compare = await bcrypt.compare(password, getuser.password);
        if (pass_compare) {
          return done(null, getuser);
        } else {
          return done(null, false);
        }
      }
    })
  );
};

module.exports = LocalAuth;
