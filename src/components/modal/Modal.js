import React from 'react'
import './modal.css'

const Modal = ({ showModal, closeModalHandler, images, getOrCreateImgRef }) => {
  return (
    <div
      className='modal-wrapper'
      style={{
        opacity: showModal ? '1' : '0',
        display: showModal ? 'block' : 'none',
      }}
      onClick={closeModalHandler}
    >
      <button type='button' className='close-modal-btn'>
        x
      </button>

      <div className='modal-content'>
        {images.map((img) => (
          <div
            ref={getOrCreateImgRef(img.name)}
            name={img.name}
            className='imgBox'
            key={img.name}
          >
            <img id={img.name} src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modal
