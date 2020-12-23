import React from 'react'

const Images = ({
  img,
  refs,
  images,
  openModalHandler,
  getOrCreateImgRef,
  isModalOpen,
}) => {
  // this checks if we have a reference and a target image in state(img) and scrolls to that element
  // React.useEffect(() => {
  // if (refs !== undefined) {
  //   // if (img !== undefined || img !== {}) {
  //   //   let imgName = `main_${img.name}`
  //   //   refs[imgName].current.scrollIntoView()
  //   // }
  //   console.log(refs)

  //   }
  // }, [])

  console.log(refs)
  return (
    <div className='images'>
      {images.map((img, i) => (
        <div className='main__imgBx' key={i}>
          <img
            ref={getOrCreateImgRef(`main_${img.name}`)}
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

export default Images
