import { useSignOut } from 'react-auth-kit';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsLogged } from './store/authSlice';

export default function NavBar(){
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isLogged);
    const signOut = useSignOut();
    const navigate = useNavigate();

    const logOut = () => {
        signOut();
        dispatch(setIsLogged({isLogged: false}));
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
            isAuthenticated 
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