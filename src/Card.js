import React from 'react'

const Card = (
  { img, openModalHandler, isModalOpen, images, getOrCreateImgRef },
  refs
) => (
  <div className='card'>
    <img
      onClick={() => openModalHandler(img)}
      src={img.src}
      alt={img.name}
    ></img>
  </div>
)

export default React.forwardRef(Card)
