import React from "react";
import Header from "./Header";
import currencyFormatter from "currency-formatter";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartPlusFill, BsFillCreditCard2FrontFill } from "react-icons/bs";
const Home = () => {
  // console.log(useSelector());
  //const state = useSelector(state =>state.ProductReducer);
  const { products } = useSelector((state) => state.ProductReducer);
  

  return (
    <>
      <Header />

      {products.map((MyData) => (
        <div
          class="max-w-sm rounded-lg  bg-amber-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  m-10 float-left justify-evenly w-90 g"
          key={MyData.id}
        >
          <Link to={`/detail/${MyData.id}`}>
          <img
            class="w-full h-52  object-cover"
            src={`./images/${MyData.image}`}
            alt="Sunset in the mountains"
          />
          </Link>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{MyData.name}</div>
            <p class="text-gray-700 text-base">{MyData.disc}</p>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-around">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              {/* {Price {MyData.price}  */}
              <del>
                {currencyFormatter.format(MyData.price, { code: "INR" })}
              </del>
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
              Discount {MyData.discount} %
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-900 font-bold mr-2 mb-2">
              {currencyFormatter.format(MyData.discountPrice, { code: "INR" })}
            </span>
          </div>
          {/* <div class="px-6 pt-4 pb-2 flex justify-around">
            <button class="inline-block bg-blue-300 hover:bg-blue-700 hover:text-white text-red font-bold py-2 px-4 w-30 rounded-lg"
            
            onClick={useDispatch({type: 'ADD_TO_CART', payload: {products} })}

            >
              Add Cart

             
              {/* <BsFillCartPlusFill /> */}
            {/* </button>{" "}
            <button class="inline-block bg-red-300 hover:bg-red-700 hover:text-white text-red font-bold py-2 px-4 w-30 rounded-lg">
              Buy Now
      </button>
          </div>  */}
        
        </div>
      ))}
    </>
  );
};

export default Home;
