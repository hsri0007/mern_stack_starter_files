import postModel from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const post = await postModel.find();
    res.send(post);
  } catch (error) {
    res.send("error");
  }
};
export const getPostsById = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await postModel.findById(_id);
    console.log(post);
    res.send(post);
  } catch (error) {
    res.send("error");
  }
};
export const createPosts = async (req, res) => {
  const data = req.body;
  const newPostMessage = new postModel(data);
  try {
    const post = await newPostMessage.save();
    res.json(post);
  } catch (error) {
    res.send("error");
  }
};
export const updatePosts = async (req, res) => {
  const post = req.body;
  const { id: _id } = req.params;
  const posts = await postModel.findByIdAndUpdate(_id, post, {
    new: true,
    runValidators: true,
  });
  res.json(posts);
};
export const deletePosts = async (req, res) => {
  const { id: _id } = req.params;
  const posts = await postModel.findByIdAndDelete(_id);
  res.json(posts);
};
