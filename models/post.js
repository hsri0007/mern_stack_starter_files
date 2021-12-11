import Mongoose from "mongoose";

const postSchema = Mongoose.Schema({
  name: String,
  age: Number,
});

const PostModel = Mongoose.model("PostModel", postSchema);
export default PostModel;
