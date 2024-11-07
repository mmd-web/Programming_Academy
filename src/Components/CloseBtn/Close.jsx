import React from 'react'

function Close({target , id}) {
  return (
    <div>
      <button className="navbar-toggler border-0 ms-4" type="button" data-bs-toggle={target} data-bs-target={'#'+id}>
        {/* <span className="navbar-toggler-icon"></span> */}
        <img style={{width:'30px'}} alt="" />
      </button>
    </div>
  )
}

export default Close;