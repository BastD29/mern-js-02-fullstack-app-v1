import express from "express";
import routes from "./routes/tea.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use("/", routes);

const uri =
  "mongodb+srv://project-test-user-1:project-test-user-1@project-test-database.kdhsst6.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connect successful");
  } catch (error) {
    console.log(error);
  }
}

connect();

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
