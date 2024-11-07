import React from 'react'
import Badge from './Badge/Badge';

export let StorageAddres = `https://oaumvonsnkirsxzuaabl.supabase.co/storage/v1/object/public/files/`;

class CardCourse extends React.Component {
  // console.log(props);
  constructor(props) {
    super(props);

    this.state = {
      saveImg: null
    }
    this.GetImg.bind(this);
    this.GetImg();
  }

  async GetImg() {
    if (await this.props.src) {
      let imgSrc = await this.props.src;
      this.setState({ saveImg: imgSrc });
    }
  }

  render() {
    const { saveImg } = this.state;

    return (
      <a href='#' className='text-decoration-none mt-4'>
        <div className="card w-100 bg_main_two">
          <div className='w_img_box'>
            {saveImg &&
              <img src={`${StorageAddres}${saveImg.name}`} className="card-img-top w-100 h-100 object-fit-cover" alt="..." />
            }
          </div>
          <div className="card-body py-4 w-100 d-flex row-gap-4 flex-column">
            <div className='w-100 d-flex justify-content-end align-items-center'>
              <h5 className="card-title fs-6 fw-bold color_white_100">{this.props.title}</h5>
            </div>
            <div className='w-100 d-flex justify-content-start align-items-center'>
              <span className='color_white_100 fs-6 d-flex justify-content-center align-items-center column-gap-1'>
                {/* <img src={GetImg(IconStar)} className='w_icon_star' alt="" /> */}
                {this.props.stars}
              </span>
            </div>
            <div className='d-flex flex-column'>
              <div className='h-100 d-flex justify-content-between align-items-center flex-row w-100'>
                <div>
                  <span className='color_white_100 fs-4' dir='rtl'>{this.props.firstPrice} <span className='fs-6'>تومان</span></span>
                </div>
                <div>
                  <Badge percentage={this.props.discount}></Badge>
                </div>
              </div>
              <div>
                <span className='str_price_main fs-6'>{this.props.lastPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default CardCourse;