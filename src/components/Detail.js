import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);

  console.log(product);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id: id });
  }, [id]);

  return (
    <div class="grid grid-cols-6 gap-3 mt-5">
      <div class="bg-blue-100  col-span-3 flex ">
        <img src={`../images/${product.image}`} className="h-90" />
      </div>
      <div class="bg-red-100 grid justify-items-center ">
      Name: <span>{product.name}</span>
        <br />
        Price: <span>{product.price}</span>
        <br />
      Discount  <span>{product.discount}%</span> 
        <br />
     Discounted Price   <span>{product.discountPrice}</span>
        <br/>
        <br/>
        <br/>
        <div class="flex justify-around">
       <buton class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Add To Cart</buton>{" "}
        <buton class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Buy Now</buton>
        </div>
      </div>
    </div>
  );
};

export default Detail;
