import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { useNavigate } from "react-router-dom";

import { BsFillCartXFill, BsFillCollectionFill } from "react-icons/bs";

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();

  const IsProduct = products.length;

  // useEffect(() => {
  //   dispatch({ type: "PRODUCT", id: id });
  // }, [id]);

  const history = useNavigate();
  function editPage(id) {
    console.dir(id);
    history(`/detail/${id}`);
  }
  const [quantity, setQuantity] = useState(1);

  
  let quantitySet = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    
   
  };

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <span className="text-3xl flex align-center justify-center">
              Your Cart
            </span>
            <hr />
            <br />
            <div className="grid grid-cols-2 divide-x">
              {IsProduct > 0 ? (
                <>
                  <div>
                    <table class="min-w-full text-center ml-4">
                      <thead class="border-b bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4"
                          >
                            Total Quantities
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4"
                          >
                            Total Price
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-white px-6 py-4"
                          >
                            Action
                            {/* <button className='bg-red-500'>Remove</button> */}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => {
                          //    console.log(product);

                          return (
                            <>
                              <tr class="bg-white border-b" key={product.id}>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  <img
                                    src={`/images/${product.image}`}
                                    alt=""
                                    className="rounded-lg"
                                  />
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <span>{product.name}</span>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                  <del>
                                    {currencyFormatter.format(product.price, {
                                      code: "INR",
                                    })}
                                  </del>
                                  <br />

                                  <span class="font-bold">
                                    {product.discountPrice}
                                  </span>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-bold">
                                  <div className="flex item-center justify-center hover:outline-dotted rounded-lg outline-2 outline-offset-2">
                                    <button
                                      class="text-white bg-indigo-500 rounded-l-lg px-2 hover:bg-indigo-900 w-12 m-5"
                                      onClick={() =>
                                        dispatch({
                                          type: "DEC",
                                          payload: product.id,
                                        })
                                      }
                                    >
                                      <span className="font-extrabold text-lg">
                                        -
                                      </span>
                                    </button>
                                    <span
                                      className="font-extrabold text-lg m-5"
                                      x-text="count"
                                    >
                                      {product.quantity}
                                    </span>
                                    <button
                                      class="text-white bg-indigo-500 rounded-r-lg px-2 hover:bg-indigo-900 w-12 m-5"
                                      onClick={() =>
                                        dispatch({
                                          type: "INC",
                                          payload: product.id,
                                        })
                                      }
                                    >
                                      <span className="font-extrabold text-lg">
                                        +
                                      </span>
                                    </button>
                                  </div>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-bold">
                                  <span class="font-bold">
                                    {currencyFormatter.format(
                                      product.discountPrice * product.quantity,
                                      { code: "INR" }
                                    )}
                                  </span>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <div class="flex items-center justify-center">
                                    <div
                                      class="inline-flex  hover:shadow-lg"
                                      role="group"
                                    >
                                      {/* <button
                                        type="button"
                                        class="rounded-lg inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                        onClick={() => editPage(product.id)}
                                      >
                                        <BsFillCollectionFill />
                                      </button>{" "}
                                      &nbsp; &nbsp;{" "} */}
                                      <button
                                        type="button"
                                        class="rounded-lg inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
                                        onClick={() =>
                                          dispatch({
                                            type: "REMOVE",
                                            payload: product.id,
                                          })
                                        }
                                      >
                                        <BsFillCartXFill />
                                      </button>
                                    </div>
                                  </div>
                                  {/* <button className='bg-red-500'>Remove</button> */}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                        {/* <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Mark
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Otto
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Jacob
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Thornton
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @fat
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                  Larry the Bird
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @twitter
                </td>
              </tr> */}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-3xl flex align-center justify-center">Cart Is Empty</span>
                </>
              )}

              <div className="ml-52 bg-red-300/75 rounded w-25 mr-52 ">
                <h1 className="flex align-center justify-center text-blue-600 font-bold ">
                  {" "}
                  Payment
                </h1>
                <hr />
                <br />{" "}
                <div class="flex justify-center align-center leading-10">
                  Total Price:{" "}
                  <span className="font-bold ">{totalPrice.toFixed(2)}</span>
                  <br />{" "}
                </div>
               
                
                  

                <div class="flex justify-center align-center leading-10" id="conditonalDiv">
                  {" "}
                 Tax: <span className="font-bold">12 %</span>
                </div>
                <div class="flex justify-center align-center leading-10">
                  {" "}
                  Final Pay:{" "}
                  <span className="font-bold">
                    {(totalPrice + Math.round((totalPrice / 100) * 12)).toFixed(
                      2
                    )}
                  </span>
                </div>
                  


                <div class="flex justify-center align-center">
                  <br/>
                  <br/>
                        <button className="cursor-pointer inline-block bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 w-full rounded-lg flex justify-center items-center whitespace-normal ">Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
