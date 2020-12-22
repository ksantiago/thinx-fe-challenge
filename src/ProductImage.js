import React from 'react'

function ProductImage(props) {
  return (
    <div className="product">
      <img src={props.src} alt={props.name} />
      <div>
        <div><a href="/">Shop {props.name}</a></div>
        <div>{props.description}</div>
      </div>

    </div>
  )
}

export default ProductImage