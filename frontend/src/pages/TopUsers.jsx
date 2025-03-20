import { useEffect, useState } from "react";
import { getUsers, getPosts } from "../api";

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            const posts = await getPosts();

            const userPostCounts = users.map(user => ({
                ...user,
                postCount: posts.filter(post => post.userId === user.id).length
            }));

            const sortedUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
            setTopUsers(sortedUsers);
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Top 5 Users</h2>
            {topUsers.map(user => (
                <div key={user.id} className="p-2 border rounded mt-2">
                    <p><strong>{user.name}</strong> - {user.postCount} Posts</p>
                </div>
            ))}
        </div>
    );
};

export default TopUsers;
