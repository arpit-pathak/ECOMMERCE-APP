const app = require("./app");
const dotenv = require("dotenv");
const connectToDB = require("./config/database");
const PORT = process.env.PORT || 4000;

// Config

dotenv.config({ path: "backend/config/config.env" });

// Connecting to Database
connectToDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${4000}`);
});
