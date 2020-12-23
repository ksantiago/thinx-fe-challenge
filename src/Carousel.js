import React from 'react'
import Images from './Images'
import './styles/carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='img-carousel'>
        <Images
          currImage={this.props.currImage}
          setcurrImage={this.props.setCurrImage}
          images={this.props.images}
          showModal={this.props.showModal}
          openModalHandler={this.props.openModalHandler}
        />
      </div>
    )
  }
}

export default Carousel
