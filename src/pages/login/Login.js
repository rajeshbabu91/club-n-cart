import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from './../../assets/logo/logo.png';
import './Login.css';

function Login() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: HANDLE THE POST CALL
    };

    return (
        <div className='login-container'>
            <img className='logo m-4' src={logo} alt='logo'/>
            <h2 className='mb-4 cnc-text-col-primary'>Grab Beyond Limits</h2>
            <Form className="mb-4 form-container" noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="mobileCtrl">
                    <Form.Control size="lg" type="number" placeholder="Enter mobile number"
                    value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="emailCtrl">
                    <Form.Control size="lg" type="email" placeholder="Enter email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Button className="w-100 cnc-bg-col-yellow cnc-text-col-primary" size="lg" type="submit">Get OTP</Button>
            </Form>

            <p className='mt-4 agreement-text'>
                By Continuing, you agree to our <a className="cnc-text-col-rose text-decoration-none" href='/terms-of-use'>Terms of Use</a> & <a className="cnc-text-col-rose text-decoration-none" href='/privacy-policy'>Privacy Policy</a>
            </p>
        </div>
    );
}

export default Login;