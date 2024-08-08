import logo from './../../assets/logo/logo.png';
import './Login.css';
function Login() {
    return (
        <div className='login-container'>
            <img className='logo' src={logo} alt='logo'/>
            <h2>Grab Beyond Limits</h2>
            <form>
                <label>+91 <input type="phone" /></label>
            </form>
            <p className='agreement-text'>
                By Continuing, you agree to our <a href='/terms-of-use'>Terms of Use</a> & <a href='/privacy-policy'>Privacy Policy</a>
            </p>
        </div>
    );
}

export default Login;