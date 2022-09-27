import React from 'react'
import Item from './Item';

function ItemList(props) {
  return (
    <div>
        {props.data.map((item) => {
          return (
            <Item
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}
              stock={item.stock}
            />
          );
        })}
    </div>
  )
}

export default ItemList