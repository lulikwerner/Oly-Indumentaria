import React from 'react';
import Pfrecuentes from '../../../public/assets/img/Pfrecuentes.png'
import FAQSListContainer from '../FAQSListContainer/FAQSListContainer'
import '../FAQS/FAQS.css';

const FAQS = () => {
  return (
<>
 <div className="imf" id="section5">
 <img id="retrato" src={Pfrecuentes} alt="Your Image" className="responsive-image" />
 <FAQSListContainer/>
</div>
    </>
  );
};

export default FAQS;