import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Option/Option.css';

const Item = ({ opt }) => {
  const { img, title, description, foot } = opt;

  return (
    <div>
      <Card className="cardhoverP">
        <section>
          <div className="containerP">
            <div className="imgColumn">
              <img src={img} alt="" className="imgCard" />
            </div>
            <div className="contentColumn" id="quienes-somos">
              <h1>{title}</h1>
              <p className="prueba" dangerouslySetInnerHTML={{ __html: description }}></p>
              <div className="centered-text" dangerouslySetInnerHTML={{ __html: foot }}></div>
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default Item;
