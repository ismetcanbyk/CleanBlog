import express from 'express';
import ejs from 'ejs';
import Posts from './models/Posts.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

//Connect DB

mongoose.connect('mongodb://localhost/cleanBlog-db');

//Template Engine

app.set('view engine', 'ejs');

//Midleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Posts.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/addPost', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/addPost', async (req, res) => {
  await Posts.create(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} de başlatıldı.`);
});
