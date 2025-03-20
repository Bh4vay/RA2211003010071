const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test';

const getPostComments = async (req, res) => {
    try {
        const postId = req.params.postId;
        const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching comments' });
    }
};

module.exports = { getPostComments };
