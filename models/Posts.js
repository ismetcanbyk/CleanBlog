import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);

//Creat Schema

const PostSchema = new Schema({
  title: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Posts', PostSchema);

//module.exports = Post;
export default Post;
