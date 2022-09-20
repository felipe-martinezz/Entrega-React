import React from 'react'

function ItemCount(props) {
  const [count, setCount] = React.useState(props.initial)
  console.log("stock", props.stock)

  function handleAdd() {
    if(count < props.stock)
     setCount(count+1)
  }
  function handleSubstract() {
    if(count > 0)
    setCount(count-1)
  }

  function onAddToCart() {

  }

    return (
    <div>
        <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-</button>
        </div>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount