const jwt = require("jsonwebtoken");
const user_auth = require("../models/user.model");

const isuser = async (req, res, next) => {
  try {
    const cooki = req.headers.authorization.split(" ")[1];
    const { username, id, iat, exp } = await jwt.verify(
      cooki,
      process.env.JWT_SECRET
    );
    const date = Date.now(); //. > new Date().getTime();
    console.log({ date: date, exp });
    if ((cooki && username) || req.isAuthenticated()) {
      const user = await user_auth.findById(id);
      if (user) {
        req.user = user;
        return next();
      }
      return res.status(404).send({ message: "user not found" });
    } else {
      res.send(401, "Unauthorized");
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
};

module.exports = isuser;
