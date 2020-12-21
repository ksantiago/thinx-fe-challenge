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

  const selectSize = (size) => {
    setSize(size)
    setShowSizes(prevShowSizes => !prevShowSizes)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }
  const dropDown = (e) => {
    setShowSizes(prevShowSizes => !prevShowSizes)
  }


  return (
    <React.Fragment>
        <p className="price">$35.00</p>
        <form>
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
              //  handleChange={this.handleChange}
              dropDown={dropDown}
              selectSize={selectSize}

             />   
           </div>

          <div className="size-chart"><a href="/">what's my size?</a></div>
          <button type="button" className="add-to-cart-btn">add to cart</button>
        </form>
        <p className="build-set-link"><a href="/">build a cycle set and save up to 20%</a></p>
        
      </React.Fragment>
  )
}

// class Form extends Component {
//   constructor() {
//     super()

//     this.state = {
//       color: "black",
//       quantity: 1,
//       selectedSize: {},
//       showSizes: false,
//     }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.subtractOne = this.subtractOne.bind(this)
//     this.addOne = this.addOne.bind(this)
//     this.dropDown = this.dropDown.bind(this)
//     this.selectSize = this.selectSize.bind(this)
    

//     this.sizeBoxRef = React.createRef()
//   }

//   handleChange(e) {
//     console.log(e.target)
//     this.setState({
//     [e.target.name]: e.target.value
//     })
//   }

//   subtractOne(e) {
//     if (this.state.quantity > 1) {
//     this.setState({
//       quantity: this.state.quantity - 1
//     })
//     }
//   }

//   addOne() {
//     this.setState({
//     quantity: this.state.quantity + 1
//     })
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     console.log('send this.state to cart component')
//     console.log('will need to reset state here')
//   }

//   dropDown = (e) => {
//     this.setState(prevState => ({
//       showSizes: !prevState.showSizes
//     }))
//   }

//   closeDropdown = (e) => {

//   }

//   selectSize = (size) => {
//     this.setState({
//       selectedSize: size,
//       showSizes: false
//     })
//   }

//   render() {

//     const qty = `quantity (${this.state.quantity})`

//     console.log('state inside form: ', this.state)
//     return (
//       <React.Fragment>
//         <p className="price">$35.00</p>
//         <form onSubmit={this.handleSubmit}>

//           <div className="radio">
//             <div className="text-label">
//             color
//             </div>
//             <div className="each-radio blk">
//             <label className="radio__label" htmlFor="black_radio">black 
//               <input 
//                 onChange={this.handleChange}
//                 type="radio" 
//                 value="black" 
//                 name="color" 
//                 className="radio__input" 
//                 id="black_radio" 
//                 checked={this.state.color === "black"}
//               />
//               <div className="radio_inner">
//               </div>
//             </label>
//             </div>
            
//             <div className="each-radio beige">
            
//             <label className="radio__label" htmlFor="beige_radio">beige 
//               <input 
//                 onChange={this.handleChange}
//                 type="radio" 
//                 value="beige" 
//                 name="color" 
//                 className="radio__input" 
//                 id="beige_radio"
//                 checked={this.state.color === "beige"}
//                 />
//               <div className="radio_inner">
//               </div>             
//               </label>
//             </div>

//           </div>

//         <div className="quantity">
//             <button className="btn minus-btn disabled" type="button" onClick={this.subtractOne}>&minus;</button>
//             <input type="text" id="qty-input" name="quantity" value={qty} readOnly="readonly" />
//             <button className="btn plus-btn disabled" type="button" onClick={this.addOne}>&#x002B;</button>
//         </div>

//         <div className="size-box" ref={this.sizeBoxRef}>
//             <SelectSize 
//               sizes={[{id: 1, value: 'XS'}, {id: 2, value: 'SM'}, {id: 3, value: 'M'}, {id: 4, value: 'L'}, {id: 5, value: 'XL'}, {id: 6, value: 'XXL'}]}
//               showSizes={this.state.showSizes} 
//               selectedSize={this.state.selectedSize}
//               handleChange={this.handleChange}
//               dropDown={this.dropDown}
//               selectSize={this.selectSize}
              
//             />   
//           </div>

//           <div className="size-chart"><a href="/">what's my size?</a></div>
//           <button type="button" className="add-to-cart-btn">add to cart</button>
//         </form>
//         <p className="build-set-link"><a href="/">build a cycle set and save up to 20%</a></p>
        
//       </React.Fragment>
//     )
//   }
// }

export default Form;