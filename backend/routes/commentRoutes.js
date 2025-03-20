const express = require('express');
const { getPostComments } = require('../controllers/commentController');
const router = express.Router();

router.get('/:postId/comments', getPostComments);

module.exports = router;
