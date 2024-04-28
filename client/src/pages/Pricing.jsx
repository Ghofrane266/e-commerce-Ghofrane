import React from 'react'


import Footer from '../components/Footer';
import Navb from '../components/Navb';



export default function Pricing( 
  
 ) {
  
  const ServicesData = [
    {
      id: 1,
     
      title: "Free Plan",
      description:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
        price:"£0",
        link:"#"
    },
    {
      id: 2,
     
      title: "Premium Plan",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price:"£100",
        link:"#"
    },
    {
      id: 3,
     
      title: "Advanced Plan",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price:"£200",
        link:"#"
    },
  ];
  return (
    <>
    <div className=" overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300"  >
      <Navb/>
    <span id="services"></span>
      <div className="py-10">
        <div className="container">
           <div className="text-center mb-20 max-w-[400px] mx-auto ">
           <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Pay only for what you need</h1>
           </div>
          {/* <div className="text-center mb-20 max-w-[400px] mx-auto"> 
             <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Products
            </p>
            
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl  bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:text-white relative shadow-xl duration-high group max-w-[280px] h-[300px]"
              >
                
                <div className="py-5 text-center">
                  
                  <h1 className="text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:text-white">{service.title}</h1>
                  <h2 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:text-white" >{service.price}</h2>
                  <p className="mb-3 text-white group-hover:text-white duration-high text-sm line-clamp-2 font-semibold px-3">
                    {service.description}
                     
                  </p>
                  {/* <a
                  href={service.link}
                  className="inline-block  font-semibold mb-1 text-primary group-hover:text-white duration-300"
                >
                  Learn More
                </a> */}
                 
                  <button
                    className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-10 group-hover:bg-white group-hover:text-white"
                   
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>

      </div>
      <Footer/>
     </div>
       
    </>
  )
}
