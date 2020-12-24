import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
import './styles/otherproducts.css'
import Description from './Description'
import ImageContainer from './ImageContainer'
import Modal from './Modal'
import Form from './Form'
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import hiphugger from './img/bottom/thinx_productpage_-04.jpg'
import cheeky from './img/bottom/thinx_productpage_-03.jpg'
import thong from './img/bottom/thinx_productpage_-05.jpg'
import sport from './img/bottom/thinx_productpage_-07.jpg'
import boyshort from './img/bottom/thinx_productpage_-08.jpg'
import ProductImage from './ProductImage'
import './styles/index.css'
import highwaistfront1 from './img/top/highwaist_black_front_2_1024x1024.jpg'
import highwaistfront2 from './img/top/highwaist_black_front_3_1024x1024.jpg'
import highwaistfront3 from './img/top/highwaist_black_front_4_1024x1024.jpg'
import highwaistfront4 from './img/top/highwaist_black_front_1024x1024 (1).jpg'
import highwaistback from './img/top/highwaist_black_back_1024x1024.jpg'
import highwaistside from './img/top/highwaist_black_side_1024x1024.jpg'
import './styles/card.css'

const products = [
  { name: 'Hiphugger', description: 'heavy days', src: hiphugger },
  { name: 'Cheeky', description: 'light days', src: cheeky },
  { name: 'Thong', description: 'lightest days', src: thong },
  { name: 'Sport', description: 'medium days', src: sport },
  { name: 'Boyshort', description: 'light days', src: boyshort },
]

const images = [
  { src: highwaistfront1, alt: 'high waist front', name: 'highwaistfront1' },
  { src: highwaistfront2, alt: 'high waist front', name: 'highwaistfront2' },
  { src: highwaistfront3, alt: 'high waist front', name: 'highwaistfront3' },
  { src: highwaistfront4, alt: 'high waist front', name: 'highwaistfront4' },
  { src: highwaistback, alt: 'high waist back', name: 'highwaistback' },
  { src: highwaistside, alt: 'high waist side', name: 'highwaistside' },
]

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [img, setImg] = React.useState({})
  const closeModalHandler = () => {
    setIsModalOpen(false)
    console.log(imgRefs)
    setImg({})
    window.scrollTo(0, 0)
  }

  const openModalHandler = (image) => {
    setImg(image)
    setIsModalOpen(true)
  }

  const imgRefs = {}
  const getOrCreateImgRef = (name) => {
    if (!imgRefs.hasOwnProperty(name)) {
      imgRefs[name] = React.createRef()
    }
    return imgRefs[name]
  }

  if (isModalOpen) {
    return (
      <main>
        <Modal
          img={img}
          refs={imgRefs}
          isModalOpen={isModalOpen}
          images={images}
          closeModalHandler={closeModalHandler}
          getOrCreateImgRef={getOrCreateImgRef}
        />
      </main>
    )
  } else {
    return (
      <main>
        <section
          style={{
            display: isModalOpen ? 'none' : '',
            opacity: isModalOpen ? '0' : '1',
          }}
          className='main-content'
        >
          <Description />
          <div className='mobile-carousel'>
            <Carousel>
              {images.map((img, i) => (
                <Card
                  img={img}
                  refs={imgRefs}
                  isModalOpen={isModalOpen}
                  images={images}
                  closeModalHandler={closeModalHandler}
                  getOrCreateImgRef={getOrCreateImgRef}
                  openModalHandler={openModalHandler}
                  key={i}
                />
              ))}
            </Carousel>
          </div>

          <div className='desktop-carousel'>
            <ImageContainer
              img={img}
              imgRefs={imgRefs}
              images={images}
              isModalOpen={isModalOpen}
              openModalHandler={openModalHandler}
              getOrCreateImgRef={getOrCreateImgRef}
            />
          </div>
          <Form />
        </section>

        <section
          style={{
            display: isModalOpen ? 'none' : '',
            opacity: isModalOpen ? '0' : '1',
            height: 0,
          }}
          className='other-products-container'
        >
          {products.map((prod) => (
            <div className='product-box' key={prod.name}>
              <ProductImage
                name={prod.name}
                description={prod.description}
                src={prod.src}
              />
            </div>
          ))}
        </section>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
