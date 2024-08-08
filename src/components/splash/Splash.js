import logo from './../../assets/logo/brand_logo.png';
import './Splash.css'

function Splash() {
    return (
        <div className='splash-container'>
            <img className='splash-logo' src={logo} alt='logo'/>
        </div>
    );
}

export default Splash;