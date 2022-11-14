import '../LogInHelpers/login.css';
import LoginForm from '../LogInHelpers/LoginForm';

export default function LogIn() {
    return <div className='login-container'>
        <img src={require('../imgs/plug-logo.jpg')} width='200px' alt='Site logo'></img>
        <div className='login-title'>
            Log in to KinoLog
        </div>
        <LoginForm />
    </div>
}