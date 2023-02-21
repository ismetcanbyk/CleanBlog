import Post from "../models/Posts.js";

const gelAllPost = async (req, res) => {
    const post = await Post.find({});
    res.render('index', {
        post,
    });
};

const getAbout = (req, res) => {
    res.render('about');
};

const getAddPost = (req, res) => {
    res.render('add_post');
};

const getPost = (req, res) => {
    res.render('post');
};

const createPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
};

export { gelAllPost, getAbout, getAddPost, getPost, createPost };