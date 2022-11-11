import { Link } from 'react-router-dom';

export default function NavBar(){
    return <nav className="nav">
        <Link to="/" className="site-title">KinoLog</Link>
        <ul>
            <li>
                <Link to="/login">Log In</Link>
            </li>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
        </ul>
    </nav>
};