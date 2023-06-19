import React from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../Option/Option.css';

const Option = ({ opt }) => {
  const { id, img, title, description, foot } = opt;
  useEffect(() => {
    const section = document.getElementById(id);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div>
      <Card className="cardhoverP">
        <section>
          <div className="containerP" id={id}>
            <div className="imgColumn">
              <img src={img} alt="" className="imgCard" />
            </div>
            <div className="contentColumn" >
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

export default Option;
