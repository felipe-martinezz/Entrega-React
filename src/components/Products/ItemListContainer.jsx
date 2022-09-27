import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

import getItems from "../../services/mockAPI";

function ItemListContainer() {
   let [data, setData] = useState([])

   useEffect(() => {
    getItems().then((respuestaDatos) => setData(respuestaDatos));
   }, []);

  return (
    <div>
      <div className="main-container">
        <ItemList data={data}/>
      </div>
    </div>
  )
}

export default ItemListContainer