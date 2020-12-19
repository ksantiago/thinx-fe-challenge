import React from "react";
import ReactDOM from "react-dom";
import './styles/reset.css'
import './styles/index.css'
import Description from './Description'
import {Images} from './Images'
import Form from './Form'

function App() {
  return (
    <main>
      <Description />
      <Images />
      <Form />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));