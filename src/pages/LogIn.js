import '../AuthHelpers/auth.css';
import LoginForm from '../AuthHelpers/LoginForm';

export default function LogIn() {
    return <div className='auth-container'>
        <img src={require('../imgs/logo.png')} width='200px' alt='Site logo'></img>
        <div className='auth-title'>
            Log in to KinoLog
        </div>
        <LoginForm />
    </div>
}