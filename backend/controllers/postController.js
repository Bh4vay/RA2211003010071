const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test';

const getUserPosts = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
};

module.exports = { getUserPosts };

