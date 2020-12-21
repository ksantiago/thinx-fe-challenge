import React, { Component } from 'react'
import './styles/form.css'
import './styles/color-radio.css'
import './styles/quantity-input.css'
import './styles/size-select.css'
import SelectSize from './SelectSize'
import ColorRadio from './ColorRadio'
import QuantityInput from './QuantityInput'

function Form () {
  const [color, setColor] = React.useState('black')
  const [quantity, setQuantity] = React.useState(1)
  const qty = `quantity (${quantity})`
  const [showSizes, setShowSizes] = React.useState(false)
  const [size, setSize] = React.useState({})
  const [btnText, setBtnText] = React.useState("add to cart")
  const [cartInfoText, setCartInfoText] = React.useState("")

  const selectSize = (size) => {
    setSize(size)
    setShowSizes(prevShowSizes => !prevShowSizes)
    setBtnText("add to cart")
    setCartInfoText("")
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }
  const dropDown = () => {
    setShowSizes(prevShowSizes => !prevShowSizes)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (size.value) {
      console.log('sending color, quantity, size to cart')
      setBtnText("proceed to checkout")
      setCartInfoText(`size ${size.value} added to bag`)
    }
    else {
      setCartInfoText("please select a size")
    }
  }


  return (
    <React.Fragment>
        <p className="price">$35.00</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ColorRadio 
            setColor={setColor}
            color={color}
          />

          <QuantityInput 
            qty={qty}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          />

          <div className="size-box">
             <SelectSize 
               sizes={[{id: 1, value: 'XS'}, {id: 2, value: 'SM'}, {id: 3, value: 'M'}, {id: 4, value: 'L'}, {id: 5, value: 'XL'}, {id: 6, value: 'XXL'}]}
               showSizes={showSizes} 
               selectedSize={size}
              dropDown={dropDown}
              selectSize={selectSize}

             />
           </div>
           <div className="size-error">{cartInfoText}</div>

          <div className="size-chart"><a href="/">what's my size?</a></div>
          <button type="submit" className="add-to-cart-btn">{btnText}</button>
          
        </form>
        <p className="build-set-link"><a href="/">build a cycle set and save up to 20%</a></p>
        
      </React.Fragment>
  )
}

export default Form;