import React from 'react'
import Images from './Images'
import './styles/imagecontainer.css'

class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='img-carousel'>
        <Images
          img={this.props.img}
          ref={this.props.imgRefs}
          images={this.props.images}
          isModalOpen={this.props.isModalOpen}
          openModalHandler={this.props.openModalHandler}
          getOrCreateImgRef={this.props.getOrCreateImgRef}
        />
      </div>
    )
  }
}

export default ImageContainer
