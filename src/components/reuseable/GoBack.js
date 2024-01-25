import React from 'react'
import { Link } from 'react-router-dom'
import goBack from "../../assests/back.svg"
export const GoBack = ({title ,to}) => {
  return (
    <div className='otp-go-back-wrapper'>
    <Link to={to} className='flex items-center otp-go-back-link-wrapper'>
        <div className='otp-go-back-wrapper-image'>
            <img src={goBack} alt='...' />
        </div>
        <div className='otp-go-back-wrapper-heading'>
            <h4>{title}</h4>
        </div>
    </Link>

</div>
  )
}
