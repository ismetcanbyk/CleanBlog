import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.route('/')
    .get(pageController.gelAllPost);

router.route('/about')
    .get(pageController.getAbout);

router.route('/addPost')
    .get(pageController.getAddPost)
    .post(pageController.createPost);

router.route('/post')
    .get(pageController.getPost);


export default router;