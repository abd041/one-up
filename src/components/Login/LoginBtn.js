import React from 'react'

const LoginBtn = ({ title }) => {
    return (
        <button type="submit" className='login-submit-btn hover:bg-blue-500 mb-5' >{title}</button>
    )
}

export default LoginBtn