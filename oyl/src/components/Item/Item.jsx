import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../Item/Item.css';

const Item = ({ prod }) => {
  const { id, img } = prod;
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    // Exclude the product with ID 8 from opening the WhatsApp link
    if (id !== 8) {
      const message = encodeURIComponent("hola lu te consulto por este producto");

      // Generate the WhatsApp URL with the pre-filled message and contact email
      const whatsappUrl = `https://wa.me/+541136806292?text=${message}`;

      // Open the WhatsApp URL in a new window or tab
      window.open(whatsappUrl, '_blank');
    }
    if(id===8){
  setShowModal(true);
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card className="cardhover">
        <Card.Img
          className="img"
          variant="top"
          src={img}
          onClick={handleImageClick}
        />
      </Card>
      {id === 8 && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Gift Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          ¡Novedad en nuestra tienda! Ahora ofrecemos giftcards para regalar libertad de elección. Elegí el monto, realiza la compra y envíasela a esa persona especial. Válidas para todos los productos.
          ¡Regala la libertad de elegir! Para adquirir o más información, contáctanos.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>  
  );
};




export default Item;