const app = require("./app");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

// Config

dotenv.config({ path: "backend/config/config.env" });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${4000}`);
});
