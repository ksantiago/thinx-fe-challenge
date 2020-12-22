import React from "react";
import ReactDOM from "react-dom";
import './styles/reset.css'
import './styles/otherproducts.css'
import Description from './Description'
import Carousel from './Carousel'
import Form from './Form'
import hiphugger from './img/bottom/thinx_productpage_-04.jpg'
import cheeky from './img/bottom/thinx_productpage_-03.jpg'
import thong from './img/bottom/thinx_productpage_-05.jpg'
import sport from './img/bottom/thinx_productpage_-07.jpg'
import boyshort from './img/bottom/thinx_productpage_-08.jpg'
import ProductImage from './ProductImage'
import './styles/index.css'

const products = [
  {name: "Hiphugger", description: "heavy days", src: hiphugger},
  {name: "Cheeky", description: "light days", src: cheeky},
  {name: "Thong", description: "lightest days", src: thong},
  {name: "Sport", description: "medium days", src: sport},
  {name: "Boyshort", description: "light days", src: boyshort},
]

function App() {
  return (
    <main>
      <section className="main-content">
        <Description />
        <Carousel />
        <Form />
      </section>

      <section className="other-products-container">
        {products.map(prod => <div
          className="product-box"
          key={prod.name}>
            <ProductImage 
              name={prod.name} 
              description={prod.description}
              src={prod.src}
            />
          </div> 
        )}
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));