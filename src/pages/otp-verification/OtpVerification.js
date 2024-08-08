import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Countdown, { zeroPad } from 'react-countdown';
import './OtpVerification.css';

function OtpVerification({mobileNumber}) {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(Date.now() + 60000);
    const [disableResendLink, setDisableResendLink] = useState(true);
    
    const handlePaste = (event) => {
        const otp = event.clipboardData.getData('text');
        // TODO: SUBMIT OTP ON PASTE
    };

    const countDownRenderer = ({ minutes, seconds }) => {
        return <div className='text-center mb-4 timer'>{zeroPad(minutes)}:{zeroPad(seconds)}</div>;
    };

    const onTimerComplete = () => {
        setDisableResendLink(false);
    }

    const resendOtp = () => {
        // TODO: RESEND OTP
        setDisableResendLink(true);
        setTimer(Date.now() + 60000);
    };

    return (
        <div className='p-4 verification-container'>
            <h2>OTP<br />Verification</h2>
            <p className="otp-sent mt-4 mb-4">OTP has been sent to +91 {mobileNumber}</p>
            <OtpInput numInputs={6} inputType={'number'}
                renderInput={(props) => <input {...props} />}
                value={otp} onChange={(value) => {
                    setOtp(value);
                    // TODO: SUBMIT OTP IF LENGTH = 6
                }} onPaste={handlePaste}
                containerStyle="otp-container mb-4" inputStyle="otp-box" >
            </OtpInput>
            <Countdown date={timer} key={timer} renderer={countDownRenderer} onComplete={onTimerComplete} />
            <p className='text-center'>Didn't get it? <button className='btn btn-link p-0 text-decoration-none cnc-text-col-rose' disabled={disableResendLink} onClick={resendOtp}>Resend OTP</button></p>
        </div>
    );
}

export default OtpVerification;