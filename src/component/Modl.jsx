
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export default function Modl(props) {

  return (
    <Modal show={props.show} onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <strong><i> {props.selected ? props.selected.name : ''}</i></strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{fontSize:"20px"}}>
          <i>   {props.selected ? props.selected.description : ''}</i>
        </p>
        <h4><strong>$ {props.selected ? props.selected.price : ''}</strong></h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )

}
