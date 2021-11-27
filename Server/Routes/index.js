import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost, createTeacher, getTeachers, getAdmin, createAdmin, queryAdmin } from '../controllers/index.js';

const router = express.Router();

router.post('/addImage', createPost);
router.get('/getImage', getPosts);
router.post('/addTeacher', createTeacher);
router.get('/getTeachers', getTeachers);
router.post('/makeAdmin', createAdmin);
router.get('/getAdmin', getAdmin);
router.post('/isAdmin', queryAdmin);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;