import React from 'react'

function Badge({...props}) {
  return (
    <div>
        <span className="position-relative top-0 start-0 badge rounded-pill bg-danger">{props.percentage} %</span>
    </div>
  )
}

export default Badge;