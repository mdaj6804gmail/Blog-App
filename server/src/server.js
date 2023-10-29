const app = require("./app");
require("dotenv").config();
const db_comfig = require("./db/db.config");

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`server is rady http://localhost:${PORT}`);
  await db_comfig();
});
