import React from 'react'

const LoginLeftDeatil = ({ OneUpLogo, mainTitle, title, desc }) => {
    return (
        <div className='lg:col-6 lg:block hidden'>
            <div className='login-one-up-logo-wrapper'>
                <img src={OneUpLogo} alt='...' />
            </div>
            <div className='login-one-up-heading'>
                <h1>{mainTitle}
                    <br />
                    {title}</h1>
            </div>
            <div className='login-one-up-para'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default LoginLeftDeatil