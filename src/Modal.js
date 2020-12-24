import React from 'react'
import './styles/modal.css'

const Modal = ({
  isModalOpen,
  closeModalHandler,
  images,
  getOrCreateImgRef,
  img,
  refs,
}) => {
  // this checks if we have a reference and a target image in state(img) and scrolls to that element
  React.useEffect(() => {
    if (refs !== undefined) {
      if (img !== undefined || img !== {}) {
        let imgName = `mod_${img.name}`
        refs[imgName].current.scrollIntoView()
      }
    }
  }, [img])

  return (
    <div
      className='modal-wrapper'
      onClick={closeModalHandler}
      style={{
        height: isModalOpen ? '100%' : '0',
      }}
    >
      <button
        style={{
          display: isModalOpen ? '' : 'none',
        }}
        type='button'
        className='close-modal-btn'
      >
        x
      </button>

      <div className='modal-content'>
        {images.map((img) => (
          <div
            id={img.name}
            name={img.name}
            className='modal-imgBx'
            key={img.name}
          >
            <img
              style={{
                height: isModalOpen ? '100%' : '0',
              }}
              ref={getOrCreateImgRef(`mod_${img.name}`)}
              src={img.src}
              alt={img.alt}
              className='modal-image'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modal
