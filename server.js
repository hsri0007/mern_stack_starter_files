import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Posts from "./Routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json());

// get post
app.use("/posts", Posts);

mongoose
  .connect(
    "mongodb+srv://hari:1234@cluster0.2jvnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((der) => app.listen(3000, console.log(der.connection.host)))
  .catch((err) => console.log("sd"));

mongoose.set("useFindAndModify", false);
