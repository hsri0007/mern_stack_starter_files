import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  getPostsById,
} from "../Controllers/getPost.js";

const Router = express.Router();

Router.get("/", getPosts);
Router.post("/", createPosts);
Router.patch("/:id", updatePosts);
Router.delete("/:id", deletePosts);
Router.get("/:id", getPostsById);

export default Router;
