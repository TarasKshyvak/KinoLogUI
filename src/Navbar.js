import { useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar(){
    const isAuth = useIsAuthenticated();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const logOut = () => {
        signOut();
        navigate('/');
    }

    return <nav className="nav">
        <Link to="/" className="site-title">
            <img src={require('./imgs/logo.png')} width='70px' alt='Site logo'></img>
            <div>
                KinoLog
            </div>
        </Link>
        {
            isAuth()
            ?
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <div className='signout' onClick={logOut}>Sign Out</div>
                </li>
            </ul>
            :
            <ul>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        }        
    </nav>
};