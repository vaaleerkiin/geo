const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

app.listen(3000, async () => {
  try {
    await mongoose.connect(process.env.MONG);
    console.log("good");
  } catch (error) {
    console.log(error);
  }
});
