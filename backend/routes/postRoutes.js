const express = require('express');
const { getUserPosts } = require('../controllers/postController');
const router = express.Router();

router.get('/:userId/posts', getUserPosts);

module.exports = router;
