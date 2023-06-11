import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState} from 'react';
import { gFetch } from '../../utils/gFetch';

const ItemContainer= () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
   gFetch()
.then(resp => setProducts(resp))
.catch (err => console.log(err)) 
.finally ( () => console.log('at the end'))

  },[]);
console.log(products)
  return (
    
    <div>
      <ItemList Products ={products}/>
    </div>
  );
}

export  default ItemContainer ;