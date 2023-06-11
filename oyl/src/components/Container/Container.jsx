//Va a contener el ItemContaoner y el Favoritos Container
import React from 'react';
import  ItemListContainer  from '../ItemListContainer/ItemListContainer';
import FavoritosContainer from '../FavoritosContainer/FavoritosContainer';
import { Container, Row, Col } from 'react-bootstrap';
import '../Container/Container.css'


function CustomContainer() {
  return (
    <Container className="container">
      <Row>
        <Col>
          <div className="itemCont">
            <Row>
              <Col>
                <ItemListContainer />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="favoritosCont">
            <FavoritosContainer />
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default CustomContainer;
