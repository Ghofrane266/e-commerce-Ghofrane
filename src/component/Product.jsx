import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Modl from './Modl';

export default function Product(props) {
  const [state, setState] = useState({
    data: [],
    isLoading: false
  });
  const [show, setshow] = useState(false);
  const[selectedP,setSelectedP]=useState(null)
  const handleClose = () => {
    setshow(false);
    setSelectedP(null)
  }
  const handleShow = (product) => {
    setshow(true);
    setSelectedP(product)
  };
  const onhandleClose = useCallback(() => { handleClose() }, [])
  const addProductToCart = (product) => {
    props.addcart(product); 
  }
  
  const getData = async () => {
    try {
      await setState({ ...state, isLoading: true });
      let response = await axios.get("http://localhost:4000/products");
      setState({ data: response.data, isLoading: false });

    }
    catch {
      <p>you have an error</p>
    }
  }
  useEffect(()=>{
    if(props.searchValue.length) searchData();
    else getData();
  },[props.searchValue])

  const searchData = async()=>{
    try{
      await setState({...state,isLoading:true});
      let response=await axios.post("http://localhost:4000/search",{text:props.searchValue});
      setState({data:response.data,isLoading:false});
    }
    catch{
      <p>you have an error</p>
    }
  }
  console.log(props.searchValue,"search value")
  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center mx-2 '>
      {state.isLoading === true ? (
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </>
      ) :
        (state.data.map((product, i) => (

          <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={product.url} />
            <Card.Body>
              <Card.Title> <i>{product.name}</i> </Card.Title>
              <Card.Text>
                <strong>$ {product.price}</strong>
              </Card.Text>
             <div className='d-flex  flex-column gap-2 mx-2 '>
             <Button variant="primary" onClick={()=>addProductToCart(product)}>add to cart</Button>
              <Button variant="primary" onClick={()=>handleShow(product)}>View details</Button>
             </div>

            </Card.Body>
            <Modl show={show} onHide={onhandleClose} selected={selectedP} />
          </Card>

        )))}

    </div>
  );
}


