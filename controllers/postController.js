import Post from '../models/Posts.js';


const showPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post,
    });
};


const updatePost = async (req, res) => {

    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.description = req.body.description;
    post.save();
    res.redirect(`/post/${req.params.id}`);

    //findByIdAndUpdate() version

    // let pageId = req.params.id;
    // let photoData = req.body;
    // console.log(pageId);
    // console.log(photoData);
    // Post.findByIdAndUpdate(pageId, { ...photoData }).then(() => res.redirect(`/post/${req.params.id}`))
};

const deletePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.delete();
    res.redirect('/');
};

const uploadPost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit', {
        post
    });
};


export { uploadPost, updatePost, deletePost, showPost }