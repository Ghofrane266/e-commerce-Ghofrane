
import React from "react";
import pr2 from "../assets/images/pr2.png";
import pr from "../assets/images/pr.png";
import pr3 from "../assets/images/pr3.png";


;

const Products = () => {
  return (
    <div className=" bg-white dark:bg-black text-black dark:text-white duration-300">
      <section className="mt-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={pr2}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4  ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary uppercase"
              >
                product 1
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Coffee shop
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
               .
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className=" bg-gradient-to-r from-primary to-secondary text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-20 mt-10">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4  ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary uppercase"
              >
                product 2
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Restaurant template
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
              
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View details
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={pr}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" pb-12 mt-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={pr3}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4  ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary uppercase"
              >
                product 3
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Xbeat template
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
