import React from 'react'
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import "./item.css";


function Item(props) {
  let { price, title, img, detail, stock } = props;
    
  return (
    <div className='card'>
        <div className='card-img'>
           <img src={img} alt="card img" />
        </div>
        <div className='card-detail'>
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
        </div>
        <Button text="Ver más"/>
          
          
       <ItemCount initial={1} stock={stock}/>
    
    </div>
  )
}

export default Item