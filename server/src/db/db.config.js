const mongoose = require("mongoose");

const db_comfig = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Connected DB ${process.env.DB_URL}`);
  } catch (error) {
    console.log(`Failed DB`);
  }
};

module.exports = db_comfig;
