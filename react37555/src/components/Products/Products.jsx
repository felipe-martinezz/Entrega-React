import React from 'react';
import Card from "./Card";

function Products(props) {
  return (
    <div>
       <h1>{props.greeting}</h1> 
       <div /* className='main container' */>
          <Card title="Producto 1" price={500} img="https://http2.mlstatic.com/D_Q_NP_860167-MLU50983125760_082022-AB.webp"/>
          <Card title="Producto 2" price={1000} img="https://http2.mlstatic.com/D_Q_NP_761039-MLU48108474185_112021-AB.webp"/>
          <Card title="Producto 3" price={1500} img="https://http2.mlstatic.com/D_Q_NP_932740-MLU47791664259_102021-AB.webp"/>
       </div>
    </div>
  )
}

export default Products