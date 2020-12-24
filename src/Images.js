import React from 'react'

const Images = (
  { img, images, openModalHandler, getOrCreateImgRef, isModalOpen },
  refs
) => {
  return (
    <div className='images'>
      {images.map((img, i) => (
        <div className='main__imgBx' key={i}>
          <img
            className='image'
            name={img.name}
            onClick={() => openModalHandler(img)}
            src={img.src}
            alt={img.alt}
          />
        </div>
      ))}
    </div>
  )
}

export default React.forwardRef(Images)
