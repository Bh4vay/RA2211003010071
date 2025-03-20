import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

const getRandomImage = () => {
    const width = 600;
    const height = 400;
    return `https://placehold.co/${width}x${height}?text=Post+Image&random=${Math.random()}`;
};

const getRandomComment = () => {
    const comments = [
        "This is amazing!",
        "Great work! Keep it up!",
        "Very insightful, I love it!",
        "Awesome post! Looking forward to more.",
        "Nice content, well written!",
        "I totally agree with this!",
        "Fantastic explanation!",
    ];
    const randomIndex = Math.floor(Math.random() * comments.length);
    return comments[randomIndex];
};


export const getUsers = async () => {
    const { data } = await axios.get(`${API_URL}/users`);
    return data;
};

export const getPosts = async () => {
    const { data } = await axios.get(`${API_URL}/posts`);
    return data.map((post) => ({
        ...post,
        image: getRandomImage(),
        comment: getRandomComment(), 
    }));
};

// Fetch comments
export const getComments = async () => {
    const { data } = await axios.get(`${API_URL}/comments`);
    return data;
};
