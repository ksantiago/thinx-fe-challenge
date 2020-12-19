import React, { Component } from 'react'
import './styles/radio.css'
import './styles/counter.css'
import './styles/size.css'

class Form extends Component {
 constructor() {
  super()
  this.state = {
   color: "black",
   quantity: 1
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.subtractOne = this.subtractOne.bind(this)
  this.addOne = this.addOne.bind(this)
 }

 handleChange(e) {
  this.setState({
   [e.target.name]: e.target.value
  })
 }

 subtractOne(e) {
  if (this.state.quantity > 1) {
   this.setState({
    quantity: this.state.quantity - 1
   })
  }
 }

 addOne() {
  this.setState({
   quantity: this.state.quantity + 1
  })
 }

 handleSubmit(e) {
  e.preventDefault()
  console.log('add to cart')
  this.setState({
   color: "black"
  })
 }

 render() {

  const qty = `quantity ( ${this.state.quantity} )`
  console.log(qty)
  return (
    <React.Fragment>
      <p>$35.00</p>
      <form onSubmit={this.handleSubmit}>

        <div className="radio">
          <div className="text-label">
           color
          </div>
          <div className="each-radio blk">
           <label className="radio__label" htmlFor="black_radio">black 
             <input 
              onChange={this.handleChange}
              type="radio" 
              value="black" 
              name="color" 
              className="radio__input" 
              id="black_radio" 
              checked={this.state.color === "black"}
             />
            <div className="radio_inner">
            </div>
           </label>
          </div>
           
          <div className="each-radio beige">
          
           <label className="radio__label" htmlFor="beige_radio">beige 
             <input 
               onChange={this.handleChange}
               type="radio" 
               value="beige" 
               name="color" 
               className="radio__input" 
               id="beige_radio"
               checked={this.state.color === "beige"}
              />
             <div className="radio_inner">
             </div>             
             </label>
          </div>

        </div>

       <div className="quantity">
          <button className="btn minus-btn disabled" type="button" onClick={this.subtractOne}>&minus;</button>
          <input type="text" id="qty-input" name="quantity" value={qty} readOnly="readonly" />
          <button className="btn plus-btn disabled" type="button" onClick={this.addOne}>&#x002B;</button>
       </div>

        <select name="size" className="select">
         <option disabled selected>size</option>
         <option value="honda">honda</option>
         <option value="toyota">toyota</option>
         <option value="mazda">mazda</option>

        </select>

        {/* <div className="size">
         <select name="size" className="size-select">
          <option disabled selected>size</option>
          <option value="xxs">xx-small</option>
          <option value="xs">x-small</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
          <option value="xl">x-large</option>
         </select>
        </div> */}
        <div><a href="/">what's my size?</a></div>
        <button>add to cart</button>
      </form>
      <p><a href="/">build a cycle set and save up to 20%</a></p>
      <div className="footer"></div>
    </React.Fragment>
  )
 }
}

export default Form;