import React from "react";
import ReactDOM from "react-dom";
import frontImg1 from './img/top/highwaist_black_front_2_1024x1024.jpg'
import './styles/index.css'

function App() {
  return (
    <main>
      <Description />
      <Images />
      <Form />
    </main>
  );
}

const Description = () => {
  return (
    <article>
      <h2>HI-WAIST</h2>
      <p>Heavy days. Holds up to 2 tampon's worth.</p>
      <p>The phrase "treat yo'self" reaches new belly-button brushing heights with the Hi-Wasit, and it's here just in time for cuffing season.</p>
    </article>
  )
}

const Images = () => {
  return (
    <img src={frontImg1} alt="hi-waist"/>
  )
}

const Form = () => {
  return (
    <section>
      <p>$35.00</p>
      <form>
        <div>Color Choice</div>
        <div>Counter</div>
        <div>Size Select</div>
        <div><a href="/">what's my size?</a></div>
        <button>add to cart</button>
      </form>
      <a href="/">build a cycle set and save up to 20%</a>
    </section>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));