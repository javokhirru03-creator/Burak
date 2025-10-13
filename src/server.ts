// console.log("Hello World");

// import moment from "moment";

// const correctTime = moment().format("YYYY-MM-DD HH:mm:ss");
// const person: string = "Nick";
// const age: number = 22;
// console.log(`At ${correctTime}, ${person} is ${age} years old.`);

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
