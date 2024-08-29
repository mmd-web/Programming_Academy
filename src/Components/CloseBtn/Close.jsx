import React from 'react'
import GetImg from '../GetImg/GetImg';

import Icon1 from '../../assets/images/icon/icons8-menu-50 (1).png';

function Close({target , id}) {
  return (
    <div>
      <button className="navbar-toggler border-0 ms-4" type="button" data-bs-toggle={target} data-bs-target={'#'+id}>
        {/* <span className="navbar-toggler-icon"></span> */}
        <img src={GetImg(Icon1)} style={{width:'30px'}} alt="" />
      </button>
    </div>
  )
}

export default Close;