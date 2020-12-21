import React from 'react'

function ColorRadio(props) {
  return (
    <div className="radio">
      <div className="text-label">
        color
      </div>
      <div className="each-radio blk">

      <label className="radio__label" htmlFor="black_radio">black 
        <input 
          onChange={() => props.setColor("black")}
          type="radio" 
          value="black" 
          name="color" 
          className="radio__input" 
          id="black_radio" 
          checked={props.color === "black"}
        />
        <div className="radio_inner">
        </div>
      </label>
      </div>
    
      <div className="each-radio beige">
      <label className="radio__label" htmlFor="beige_radio">beige 
        <input 
          onChange={() => props.setColor("beige")}
          type="radio" 
          value="beige" 
          name="color" 
          className="radio__input" 
          id="beige_radio"
          checked={props.color === "beige"}
          />
        <div className="radio_inner">
        </div>             
        </label>
      </div>
    </div>
  )
}

export default ColorRadio