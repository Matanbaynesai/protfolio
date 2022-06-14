import React from 'react';
import './product.css';

export const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
          <img className='p-img' src={img}/>
    </div>
  )
}