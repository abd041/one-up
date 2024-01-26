import React from 'react'
import { BlueAdd } from '../../assests/svgs/password'

const DashVarWelName = () => {
  return (
    <div className="row">
    <div className="col-6 Dashboard-page-greetings-main-wrapper">
        <div className="dashboard-page-greeting-heading">
            <h4>Good Morning</h4>
        </div>
        <div className="dashboard-page-name-heading">
            <h3>Mr Ciprian Lopata</h3>
        </div>
    </div>
    {/* <div className='col-6 md:flex justify-end hidden'>
    <div className='col-7 new-wel-name-bal-wrap flex justify-between items-center'>
        <div>
            <div className='new-wel-name-bal-heading'><h3>Balance available for stocks</h3></div>
            <div className='new-wel-name-bal-desc'><h4>$ 14,700.00</h4></div>
        </div>
        <div>
            <button className='new-wel-name-add-btn-fund'>{BlueAdd()} ADD FUNDS</button>
        </div>
    </div>
    </div> */}
  
</div>
  )
}

export default DashVarWelName