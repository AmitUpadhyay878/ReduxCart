import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";

import { BsFillCartPlusFill, BsFillCreditCard2FrontFill } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);

  // console.log(product);

  useEffect(() => {

    setTimeout(async() => {
    await  dispatch({ type: "PRODUCT", id: id });
    }, [id])
    }, 5000);

 

  let quantitySet = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    
   
  };

  return (
    <div class="grid grid-cols-6 gap-3 mt-5 ">
      <div class="bg-blue-100  col-span-3 flex rounded-lg shadow-xl">
        <img src={`../images/${product.image}`} className="object-cover" />
      </div>
      <div class="bg-red-100 grid justify-items-center rounded-lg shadow-xl">
        <span className="mt-3">
          {" "}
          <u>
            <span className="font-extrabold text-lg">{product.name}</span>
          </u>
        </span>
        <br />
        <span className="mt-3 font-extrabold text-lg">
          {" "}
          Price{" "}
          <del>{currencyFormatter.format(product.price, { code: "INR" })}</del>
        </span>
        <br />
        Discount{" "}
        <span className="font-extrabold text-lg"> {product.discount}%</span>
        <br />
        Discounted Price{" "}
        <span className="font-extrabold text-lg">
          {currencyFormatter.format(product.discountPrice, { code: "INR" })}
        </span>
        <br />
        <div className="flex item-center justify-center hover:outline-dotted rounded-lg outline-2 outline-offset-2">
          <button
            class="text-white bg-indigo-500 rounded-l-lg px-2 hover:bg-indigo-900 w-12 m-5"
            onClick={quantitySet}
          >
            <span className="font-extrabold text-lg">-</span>
          </button>
          <span className="font-extrabold text-lg m-5" x-text="count">
            {quantity}
          </span>
          <button
            class="text-white bg-indigo-500 rounded-r-lg px-2 hover:bg-indigo-900 w-12 m-5"
            onClick={() => setQuantity(quantity + 1)}
          >
            <span className="font-extrabold text-lg">+</span>
          </button>
        </div>
        <br />
        <span className="font-extrabold text-lg p-5">{product.disc}</span>
        <div class="h-56 grid grid-cols-2 gap-4 content-around">
          <button
            class="cursor-pointer inline-block bg-blue-300 hover:bg-blue-700 hover:text-white text-red font-bold py-2 px-4 w-30 rounded-lg flex justify-center items-center whitespace-normal "
            onClick={() => {
              dispatch({ type: "ADD_TO_CART",
                payload: {product, quantity }
               });
            }}
          >
            <BsFillCartPlusFill /> Add To Cart
          </button>{" "}
          <button class="cursor-pointer inline-block bg-red-300 hover:bg-red-700 hover:text-white text-red font-bold py-2 px-4 w-30 rounded-lg flex justify-center items-center  whitespace-normal ">
            <BsFillCreditCard2FrontFill />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
