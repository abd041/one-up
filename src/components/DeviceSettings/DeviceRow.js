import React from 'react'

const DeviceRow = ({icon , heading , desc , imageMain ,color}) => {
  return (
    <div className="col-12 p-4 flex justify-between items-center devic-setting-bottom-line">
    <div className="flex items-center">
      <div className="device-setting-img">{icon}</div>
      <div className="device-setting-heading-desc-wrap">
        <div className="device-setting-heading">
          <h3 className={color}>{heading}</h3>
        </div>
        {desc &&
        <div className="device-setting-desc">
          <p>{desc}</p>
        </div> }
      </div>
    </div>
    {imageMain &&  <div>
      <img src={imageMain} alt="..." />
    </div>}
   
  </div>
  )
}

export default DeviceRow