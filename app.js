import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import pageRoute from './routes/pageRoute.js';
import postRoute from './routes/postRoute.js';

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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);


//Routes

app.use('/', pageRoute);
app.use('/post', postRoute);


app.listen(port, () => {
  console.log(`Sunucu ${port} de başlatıldı.`);
});
