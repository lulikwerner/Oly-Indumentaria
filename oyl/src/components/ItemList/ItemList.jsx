import React from 'react';
import { Card } from 'react-bootstrap';
import '../ItemList/ItemList.css';

const ItemList = ({ Products }) => {
  return (
    <div className="product-con">
      {Products.map((prod) => (
        <Card key={prod.id} className="product">
          <Card.Img variant="top" src={prod.img} alt="Product" className="custom-img" />
        </Card>
      ))}
    </div>
  );
};

export default ItemList;






