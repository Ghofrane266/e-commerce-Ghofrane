import { Card } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';



export default function Offcanv(props) {
  const removeI = (item) => {
        props.removeItem(item); 
    } 

  return (
    <>
      <Offcanvas show={props.show} onHide={props.onHide} items={props.items}  removeitem={props.removeitem} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>List of products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul >
            {props.items.map((item, index) => (
              <li key={index} className=' my-4'>
                {<Card style={{ width: '12rem' }} key={index} className='p-3'>
                  <Card.Img variant="top" src={item.url} />
                  <Card.Body>
                    <Card.Title> <i>{item.name}</i> </Card.Title>
                    <Card.Text>
                      <strong>$ {item.price}</strong>
                    </Card.Text>
                    <div className='d-flex gap-1' style={{marginLeft:'-12%'}}
                  >
                      <Button variant="danger" onClick={()=>removeI(item)} > remove </Button>
                      <Button variant="danger"  > + </Button>
                      <Button variant="danger"> - </Button>


                    </div>

                  </Card.Body>

                </Card>}
              </li>))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )

}
