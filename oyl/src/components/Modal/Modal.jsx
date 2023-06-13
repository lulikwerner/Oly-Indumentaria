import Modal from 'react-bootstrap/Modal';
import { RxCrossCircled } from 'react-icons/rx';
import '../Modal/Modal.css';
import GiftCardImage from '../../../public/assets/img/GiftCard.jpeg'; // Update the path and file extension based on your image file

const ModalP = ({ showModal, handleCloseModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
        <Modal.Header className="modal-header">
          <RxCrossCircled className="close-icon" onClick={handleCloseModal} />
        </Modal.Header>
        <Modal.Body>
          <img src={GiftCardImage} alt="Modal Image" className="modal-image" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalP;
