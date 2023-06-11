import React from 'react';
import Item from '../Item/Item';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ Products }) => {
  return (
    <div>
      <Row>
        {Products.map((prod, index) => (
          <Col key={prod.id} sm={6} md={6} lg={6}>
            <Item prod={prod} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;

