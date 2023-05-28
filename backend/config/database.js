const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("MongoDB connected with server");
      console.log(`connected to DB : ${data.connection.host}`);
    })
    .catch((error) => {
      console.log("DB connection failed!!");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
