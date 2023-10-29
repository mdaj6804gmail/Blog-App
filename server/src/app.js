const express = require("express");
const app_middleware = require("./middleware/app.middleware");

//! App Creates
const app = express();

// !Import dependencies

require("dotenv").config();

app_middleware(app);

module.exports = app;
