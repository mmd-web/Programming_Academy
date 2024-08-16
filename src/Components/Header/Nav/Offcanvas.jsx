import React from 'react'

function Offcanvas() {
  return (
    <div className='d-lg-none d-flex'>
      <div className="offcanvas offcanvas-start bg-dark text-light" tabindex="-1" id="offcanvasExample">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offcanvas;