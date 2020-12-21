import React from 'react'
import './styles/quantity-input.css'

function QuantityInput (props) {



  return (
    <div className="quantity">

        <button className="btn minus-btn" type="button" onClick={() => props.decrement()}>
            &minus;
        </button>
      
        <input type="text" id="qty-input" name="quantity" value={props.qty} readOnly="readonly" />
      
        <button className="btn plus-btn disabled" type="button" onClick={() => props.increment()}>&#x002B;</button>
    </div>
  )
}

export default QuantityInput