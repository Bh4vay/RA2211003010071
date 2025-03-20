const PostCard = ({ post }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg">
            <img
                src={post.image}
                alt="Post"
                className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.body}</p>
            <p className="text-sm italic text-blue-500">💬 "{post.comment}"</p>
        </div>
    );
};

export default PostCard;
