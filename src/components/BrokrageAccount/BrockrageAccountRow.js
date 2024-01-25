import React from 'react'
import Avatar from "../../assests/Avatar.png"
const BrockrageAccountRow = ({title,desc}) => {
  return (
    <div className="col-11 brokrage-page-search-row-main-wrapper flex p-3">
    <div className="brokrage-page-search-row-image pr-3"><img src={Avatar}  alt="..."/></div>
    <div>
        <div className="brokrage-page-search-row-heading"><h3>{title}</h3></div>
        <div className="brokrage-page-search-row-desc"><p>{desc}</p></div>
    </div>
</div>
  )
}

export default BrockrageAccountRow