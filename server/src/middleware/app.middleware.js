const morgan = require("morgan");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const blogRouter = require("../routes/blog.route");
const session = require("express-session");
const passport = require("passport");
const LocalAuth = require("../auth/local.auth");
const authRouter = require("../routes/local.auth.route");

const app_middleware = (app) => {
  app.use(morgan("dev"));
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  app.use(cookieparser());
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "PUT", "POST", "DELETE"],
      credentials: true,
    })
  );
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  // app.use()
  LocalAuth();

  //!  APP routes setup

  app.use("/api/v1/blog", blogRouter);
  app.use("/api/v1/auth", authRouter);

  app.use((err, req, res, next) => {
    res.status(400).send(err.message);
  });

};

module.exports = app_middleware;
