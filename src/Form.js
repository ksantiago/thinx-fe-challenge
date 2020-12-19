import React, { Component } from 'react'
import './styles/radio.css'
import './styles/counter.css'

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
  this.setState({
   quantity: this.state.quantity - 1
  })
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
         <div className="minus" onClick={this.subtractOne}> &minus; </div>
         <div className="count">quantity (&nbsp;{this.state.quantity}&nbsp;)</div>
         <div className="plus" onClick={this.addOne}> &#x002B; </div>
        </div>


        <div className="size">
         Size Select
        </div>
        <div><a href="/">what's my size?</a></div>
        <button>add to cart</button>
      </form>
      <p><a href="/">build a cycle set and save up to 20%</a></p>
    </React.Fragment>
  )
 }
}

export default Form;