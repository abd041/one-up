import React from 'react'

const StrategyInsightRow = ({title , desc}) => {
  return (
    <div className="col-12 insight-card-row flex justify-between items-center">
    <div className="insight-card-col-heading"><h1>{title}</h1></div>
    <div className="insight-card-col-desc"><h1>{desc}</h1></div>
  </div>
  )
}

export default StrategyInsightRow