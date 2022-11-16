import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { AdditemstoCart } from "../../../App/CartSlice";
const Items = ({
  ifExists,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  const dispatch = useDispatch();
  const onAddtoCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(AdditemstoCart(item));
  };
  const onCartToggle =()=>{
    dispatch(SetopenCart(
      {
        cartstate:true
      }
    ))
  }

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } 
       rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 `}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          } `}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28">
            <div className="flex items-center  bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-h md:h-5" />
              <h1 className="md:text-sm font-normal text-slate-100 text-sm">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-0.5 -z-0">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme
              shadow shadow-sky-200" onClick={()=>onAddtoCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme
              shadow shadow-sky-200  text-black py-0"
              onClick={()=>{onAddtoCart();onCartToggle();}}
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt="img/item"
            className={` transitions-theme hover:-rotate-12 
        ${
          ifExists ? "h-auto w-40 lg:w-36 md:w-32 -rotate-[35deg]" : "h-36 w-64"
        } `}
          />
        </div>
      </div>
    </>
  );
};

export default Items;
