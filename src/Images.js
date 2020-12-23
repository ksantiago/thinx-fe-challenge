import React, { createRef } from 'react'

const Images = (props) => {
  const { images, currImage, setCurrImage, openModalHandler } = props

  // const imgRefs = React.useRef([])
  // // imgRefs.current = []

  // const addToRefs = (el) => {
  //   if (el && !imgRefs.current.includes(el)) {
  //     imgRefs.current.push(el)
  //   }
  // }

  // const imgRefs = React.useRef(images.map(() => React.createRef())

  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {

  //     if (event.target.attributes.class === "image") {
  //       console.log('yep')
  //     } else {
  //       console.log('nah')
  //     }

  //     console.log('this is yoru event target: ', event.target, event.target.attributes.class)
  //     // event.target.attributes.name
  //     openModalHandler()
  //   })
  // })

  return (
    <div className='images'>
      {images.map((img, i) => (
        <div className='imgBx' key={i}>
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

export default Images
