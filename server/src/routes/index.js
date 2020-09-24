const express = require('express');
const { user, post } = require('../controllers');

const router = express.Router();

router.post('/user/login', user.userLogin);
router.post('/user/logout', user.userLogout);
router.post('/user/register', user.userRegister);
router.get('/user/current', user.currentUser);

router.get('/posts', post.getAllPosts);
router.get('/posts/:id', post.getSinglePost);

router.post('/posts', post.addPost);
router.put('/posts/:id', post.updatePost);
router.delete('/posts/:id', post.deletePost);

module.exports = router;
