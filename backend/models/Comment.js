const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
    {
        postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
        content: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
