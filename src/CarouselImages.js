import React from 'react'
import Carousel from './Carousel'
import highwaistfront1 from './img/top/highwaist_black_front_2_1024x1024.jpg'
import highwaistfront2 from './img/top/highwaist_black_front_3_1024x1024.jpg'
import highwaistfront3 from './img/top/highwaist_black_front_4_1024x1024.jpg'
import highwaistfront4 from './img/top/highwaist_black_front_1024x1024 (1).jpg'
import highwaistback from './img/top/highwaist_black_back_1024x1024.jpg'
import highwaistside from './img/top/highwaist_black_side_1024x1024.jpg'

const images = [
  {src: highwaistfront1, alt: 'high waist front', name: 'highwaistfront1'},
  {src: highwaistfront2, alt: 'high waist front', name: 'highwaistfront2'},
  {src: highwaistfront3, alt: 'high waist front', name: 'highwaistfront3'},
  {src: highwaistfront4, alt: 'high waist front', name: 'highwaistfront4'},
  {src: highwaistback, alt: 'high waist back', name: 'highwaistback'},
  {src: highwaistside, alt: 'high waist side', name: 'highwaistside'}
]

const CarouselImages = (props) => {
  return (
    <div className="images">
      {
        images.map(img => <div
          className="imgBx"
          key={img.name}>
            <img src={img.src} alt={img.alt} />
          </div>
        )
      }
    </div>
    
    // <div><img src={highwaistfront4} alt=""/></div>
  )
}

export default CarouselImages