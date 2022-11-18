import '../AuthHelpers/auth.css';
import SignUpForm from '../AuthHelpers/SignUpForm';

export default function SignUp() {
    return <div className='auth-container'>
        <img src={require('../imgs/logo.png')} width='200px' alt='Site logo'></img>
        <div className='auth-title'>
            Create account
        </div>
        <SignUpForm />
</div>
}