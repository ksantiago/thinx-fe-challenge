import React from "react";
import ReactDOM from "react-dom";
import './styles/reset.css'
import './styles/index.css'
import Description from './Description'
import Carousel from './Carousel'
import Form from './Form'
// import HipHugger from './img/bottom/thinx_productpage_04.jpg'

function App() {
  return (
    <main>
      <section className="main-content flex">
        <Description />
        <Carousel />
        <Form />
      </section>

      <section className="other-products">
        {/* <img src={HipHugger} alt="hip hugger"/> */}
      </section>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));