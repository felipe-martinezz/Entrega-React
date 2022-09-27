import React from 'react'
import Button from '../Button/Button';
import "./item.css";
import { Link } from "react-router-dom";


function Item(props) {
  let { price, title, img, detail, id } = props;

  const urlDetalle = `/laptops/${id}`;
    
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
        
        <Link to={urlDetalle}>
        <Button text="Ver más"/>
        </Link>
    
    </div>
  )
}

export default Item