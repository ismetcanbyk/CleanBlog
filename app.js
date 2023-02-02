import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
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

app.listen(port, () => {
  console.log(`Sunucu ${port} de başlatıldı.`);
});
