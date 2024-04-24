
import React from "react";
import about from "../assets/images/about.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={about} alt="" className="w-full max-w-[400px]" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
               Discover the perfect template {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                to showcase your brand's unique identity
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              At SaaS e-commerce, we understand the dynamic landscape of online retail and offer a curated selection of cutting-edge tools and platforms designed to optimize your operations and drive growth
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;





// import React from "react";
// import BooksStack from "../../assets/website/books-stack.png";
// import BooksStack from "../../assets/website/library.jpg";
// import Vector from "../../assets/vector3.png";
//  import about from "../assets/images/about.png";

// import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";

// const Banner = () => {
//   const bgImage = {
//     // backgroundImage: `url(${Vector})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };
//   return (
//     <>
//       <div className="min-h-[550px]">
//         <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
//           <div data-aos="slide-up" className="container">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
//               {/* Image section */}
//               <div>
//                 <img
//                   src={about}
//                   alt="biryani img"
//                   className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
//                 />
//               </div>
//               {/* text content section */}
//               <div className="flex flex-col justify-center gap-6 sm:pt-0">
//                 <h1 className="text-3xl sm:text-4xl font-bold">
//                   Library at your fingertips
//                 </h1>
//                 <p className="text-sm text-gray-500 tracking-wide leading-5">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Eaque reiciendis inventore iste ratione ex alias quis magni at
//                   optio
//                   <br />
//                 </p>
//                 <div className="flex flex-col gap-4">
//                   <div className="flex items-center gap-4">
//                     <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
//                     <p>Quality Books</p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
//                     <p>Fast Delivery</p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
//                     <p>Easy Payment method</p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
//                     <p>Get Offers on Books</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;

