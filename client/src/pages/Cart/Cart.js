
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import emptyCart1 from "../../assets/images/emptyCart1.png";
import ItemCard from "./ItemCard";
import Navb from "../../components/Navb";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    emptyCart,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const initialValue = 0;
const sumWithInitial = items.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue,
);
    return (
        <div className=" overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">

            <Navb />
            <div className="max-w-container mx-auto px-4">
                {/* <Breadcrumbs title="Cart" /> */}
                {items.length > 0 ? (
                    <div className="pb-20">
                        <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
                            <h2 className="col-span-2">Product</h2>
                            <h2>Price</h2>
                            <h2>Quantity</h2>
                            <h2>Sub Total</h2>
                        </div>
                        <div className="mt-5">
                            {items.map((item) => (
                                <div key={item.id}>
                                    <ItemCard item={item} />
                                </div>
                            ))}
                        </div>

                        <button
                        onClick={()=>emptyCart()}
                            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
                        >
                            Reset cart
                        </button>

                        <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
                            <div className="flex items-center gap-4">
                                <input
                                    className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                                    type="text"
                                    placeholder="Coupon Number"
                                />
                                <p className="text-sm mdl:text-base font-semibold">
                                    Apply Coupon
                                </p>
                            </div>
                            <p className="text-lg font-semibold">Update Cart</p>
                        </div>
                        <div className="max-w-7xl gap-4 flex justify-end mt-4">
                            <div className="w-96 flex flex-col gap-4">
                                <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
                                <div>
                                    <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                        Subtotal
                                        <span className="font-semibold tracking-wide font-titleFont">
                                            $0
                                        </span>
                                    </p>
                                    {/* <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                        Shipping Charge
                                        <span className="font-semibold tracking-wide font-titleFont">
                                            
                                        </span>
                                    </p> */}
                                    <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                                        Total
                                        <span className="font-bold tracking-wide text-lg font-titleFont">
                                            ${sumWithInitial}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <Link to="/paymentgateway">
                                        <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                                            Proceed to Checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
                    >
                        <div>
                            <img
                                className="w-80 rounded-lg p-4 mx-auto"
                                src={emptyCart1}
                                alt="emptyCart"
                            />
                        </div>
                        <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                            <h1 className="font-titleFont text-xl font-bold uppercase">
                                Your Cart feels lonely.
                            </h1>
                            <p className="text-sm text-center px-10 -mt-2">
                                Your Shopping cart lives to serve. Give it purpose - fill it with
                                templates, etc. and make it happy.
                            </p>
                            <Link to="/products">
                                <button className="bg-black rounded-md cursor-pointer   px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Cart;
// import React from 'react'
// import { useCart } from 'react-use-cart';

// export default function Cart() {

    
//       if (isEmpty) return <p>Your cart is empty</p>;
//   return (
//     <>
//       <h1>Cart ({totalUniqueItems})</h1>

//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.name} &mdash;
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//             >
//               -
//             </button>
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//             >
//               +
//             </button>
//             <button onClick={() => removeItem(item.id)}>&times;</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }
