import React from 'react'

const Price = () => {
  return (
    <div className='price__section'>
      <div className="price">
        <span>MRP:</span>
        <span>&#8377;4500</span>
        <span>&#8377;3600</span>
        <div className="s__divider"></div>
        <span className='discount'>20% Off</span>
      </div>

      <span style={{color: "#939191", fontWeight: "300", fontSize: "1.1rem"}}>inclusive of all taxes</span>
    </div>
  )
}

export default Price
