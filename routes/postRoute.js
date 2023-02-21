import express from 'express';
import * as postController from '../controllers/postController.js'

const router = express.Router();


router.route('/edit/:id')
    .get(postController.uploadPost);

router.route('/:id')
    .get(postController.showPost)
    .delete(postController.deletePost)
    .put(postController.updatePost);


export default router;