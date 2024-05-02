const express = require('express');
const postsRouter = express.Router();
const postscontroller = require('../controllers/posts.controller');

postsRouter.get('/', postscontroller.getPost);

module.exports = postsRouter;
