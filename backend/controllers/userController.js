const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test';

const getUsers = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching users' });
    }
};

module.exports = { getUsers };
