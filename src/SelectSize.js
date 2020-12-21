import React from 'react'
import './styles/size-select.css'

const SelectSize = (props) => {
  const {selectedSize, sizes, showSizes, dropDown, selectSize, sizeMenuRef} = props
  

  return (
    <div>
      <div 
        ref={sizeMenuRef}
        className="select-box--box">

        {/* label and arrow for selecting size */}
        <div
          className="select-box--container">
          <div 
            onClick={dropDown}    
            className="select-box--selected-item">
            {selectedSize.value || "size"}
          </div>
          <div 
            className="select-box--arrow"
            onClick={dropDown}    
          >
            <span 
              className={`${showSizes ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}>
            </span>
          </div>

          {/* options for size */}
          <div 
            className="select-box--items"
            style={{display: showSizes ? 'block' : 'none'}}>
            {
              sizes.map(size => <div 
                key={size.id}
                onClick={() => selectSize(size)}
                className={selectedSize.value === size.value ? 'selected' : ''}
              >
                {size.value}
              </div>)
            }
          </div>

        </div>
      </div>

      {/* hidden input to keep track of changes to state */}
      <input 
        type="hidden" 
        value={selectedSize}
        name="size"
        onChange={() => selectSize(selectedSize)}
      />
    </div>
  )
}

export default SelectSize