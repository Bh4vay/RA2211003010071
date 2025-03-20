const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
