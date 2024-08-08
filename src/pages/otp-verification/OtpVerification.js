function OtpVerification({mobileNumber}) {
    return (
        <div className='verification-container'>
            <h2><span>OTP</span><span>Verification</span></h2>
            <p className="otp-sent">OTP has been sent to +91 {mobileNumber}</p>
            <div className='timer'>00:25</div>
            <p className='resend-text'>Didn't get it? Resend OTP</p>
        </div>
    );
}

export default OtpVerification;