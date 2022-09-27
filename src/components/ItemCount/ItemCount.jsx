import React, { useState, useEffect } from 'react';

function ItemCount(props) {
  const count = "usamos-el-hook-de-state"

  function handleAdd() {
    if(count < props.stock)
    //setCount 
    (count+1)
  }
  function handleSubstract() {
    if(count > 0)
    //setCount
    (count-1)
  }

  function onAddToCart() {

  }

    return (
    <div>
        <div>
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
        </div>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount