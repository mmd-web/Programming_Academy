import React from 'react'

function Close({target , id}) {
  return (
    <div>
      <button className="navbar-toggler bg-danger ms-4" type="button" data-bs-toggle={target} data-bs-target={'#'+id}>
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  )
}

export default Close;