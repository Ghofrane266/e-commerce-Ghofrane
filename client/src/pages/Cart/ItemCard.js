import React from "react";
import { ImCross } from "react-icons/im";
import { useCart } from "react-use-cart";



const ItemCard = ({ item }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2 mt-10" >
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-10 ml-4 mt-10">
        <ImCross
          onClick={() => removeItem(item.id)}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-82 h-52" src={item.Images[0].url} alt="productImage" />
        <h1 className="text-lg font-bold">{item.title}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.price}
        </div>
        
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${1* item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;