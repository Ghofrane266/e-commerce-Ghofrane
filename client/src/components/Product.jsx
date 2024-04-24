// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Placeholder from 'react-bootstrap/Placeholder';
// import { Link } from 'react-router-dom';

// export default function Product(props) {
//   const [state, setState] = useState({
//     data: [],
//     isLoading: false
//   });

//   const getData = async () => {
//     try {
//       await setState({ ...state, isLoading: true });
//       let response = await axios.get("http://localhost:4000/api/v1/products");
//       setState({ data: response.data, isLoading: false });

//     }
//     catch {
//       <p>you have an error</p>
//     }
//   }
//   useEffect(()=>{
//     if(props.searchValue.length) searchData();
//     else getData();
//   },[props.searchValue])

//   const searchData = async()=>{
//     try{
//       await setState({...state,isLoading:true});
//       let response=await axios.post("http://localhost:4000/api/v1/products/search",{text:props.searchValue});
//       setState({data:response.data,isLoading:false});
//     }
//     catch{
//       <p>you have an error</p>
//     }
//   }
//   console.log(props.searchValue,"search value")
//   return (
//     <div className='d-flex flex-wrap gap-3 justify-content-center mx-2 '>
//       {state.isLoading === true ? (
//         <>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Placeholder as={Card.Title} animation="glow">
//                 <Placeholder xs={6} />
//               </Placeholder>
//               <Placeholder as={Card.Text} animation="glow">
//                 <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
//                 <Placeholder xs={6} /> <Placeholder xs={8} />
//               </Placeholder>
//               <Placeholder.Button variant="primary" xs={6} />
//             </Card.Body>
//           </Card>
//         </>
//       ) :
//         (state.data.map((product, i) => (

//           <Card style={{ width: '18rem' }} key={i}>
//             <Card.Img variant="top" src={product.url} />
//             <Card.Body>
//               <Card.Title> <i>{product.name}</i> </Card.Title>
//               <Card.Text>
//                 <strong>$ {product.price}</strong>
//               </Card.Text>
//              <div className='d-flex  flex-column gap-2 mx-2 '>
//              <Button variant="primary" onClick={()=>props.addToCart(product)}>add to cart</Button>
//               <Link to={`/OneProduct/${product.id}`} className='btn btn-primary'>View details</Link>
//              </div>
//             </Card.Body>
//           </Card>

//         )))}

//     </div>
//   );
// }

import React from 'react'
import '../style/product.css'
import img1 from '../assets/images/img1.jpg'
import img2  from '../assets/images/img2.webp'
import img3  from '../assets/images/img3.avif'

function Product() {
    return (
        <>
            <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
                

            <h1
            data-aos="fade-up"
            className="text-3xl  text-center sm:text-4xl mb-12 font-normal"
          >
            Top Product{" "}
          </h1>
                    <div className='flex flex-wrap justify-evenly ' >
                        <div className='box order-1 sm:order-2' data-aos="fade-up"
                            data-aos-offset="0">
                            <img src={img1} alt="" />
                            <div className='content grid place-items-center'>
                                <h2 className="text-2xl font-semibold">project 1</h2>
                                <p><a href="" className="text-xl font-serif">view more</a> </p>
                            </div>
                        </div>
                        <div className='box order-1 sm:order-2' data-aos="fade-up"
                            data-aos-offset="0">
                            <img src={img2} alt="" />
                            <div className='content grid place-items-center'>
                                <h2 className="text-2xl font-semibold">project 2</h2>
                                <p><a href="" className="text-xl font-serif">view more</a> </p>
                            </div>
                        </div>
                        <div className='box order-1 sm:order-2' data-aos="fade-up"
                            data-aos-offset="0"
                        >
                            <img src={img3} alt="" />
                            <div className='content grid place-items-center'>
                                <h2 className="text-2xl font-semibold">project 3</h2>
                                <p><a href="" className="text-xl font-serif">view more</a> </p>
                            </div>
                        </div>

                    </div>


                   
            </div>
        </>
    )
}

export default Product
