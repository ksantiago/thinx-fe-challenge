import React from "react";
import ReactDOM from "react-dom";
import './styles/reset.css'
import Description from './Description'
import Carousel from './Carousel'
import Form from './Form'

function App() {
  return (
    <main>
      <Description />
      <Carousel />
      <Form />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));