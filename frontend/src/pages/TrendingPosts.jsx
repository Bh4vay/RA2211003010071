import { useEffect, useState } from "react";
import { getPosts } from "../api";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            const sortedPosts = posts
                .sort((a, b) => b.id - a.id)
                .slice(0, 5);

            setTrendingPosts(sortedPosts);
        };

        fetchData();
    }, []);

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default TrendingPosts;
