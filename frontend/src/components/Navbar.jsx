import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-lg font-bold">Social Media Analytics</h1>
        <div className="space-x-4">
            <Link to="/">Top Users</Link>
            <Link to="/trending">Trending Posts</Link>
            <Link to="/feed">Feed</Link>
        </div>
    </nav>
);

export default Navbar;
