import { uid } from "../../static/uid";

const initState = {
  products: [
    {
      id: 1,
      name: "womens jacket winter season",
      image: "womenjacketforwinter7.jpg",
      price: 2000,
      discount:25,
      discountPrice: 2000 - (25 / 100) * 2000,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "women Pant",
      image: "womenpant4.jpg",
      price: 870,
      discount: 12,
      discountPrice: 870 - (12 / 100) * 870,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      name: "mans Pant",
      image: "menspant2.jpg",
      price: 630,
      discount: 30,
      discountPrice: 630 - (30 / 100) * 630,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      name: "mans shoes for all season",
      image: "images6.jpg",
      price: 3500,
      discount: 20,
      discountPrice: 3500 - (20 / 100) * 3500,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      name: "mans full slave t-shirt",
      image: "images7.jpg",
      price: 600,
      discount: 24,
      discountPrice: 600 - (24 / 100) * 600,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      name: "womens Purse",
      image: "images8.jpg",
      price: 1700,
      discount: 14,
      discountPrice: 1700 - (14 / 100) * 1700,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 7,
      name: "mens shirt",
      image: "images9.jpg",
      price: 440,
      discount: 18,
      discountPrice: 440 - (18 / 100) * 440,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],


  product:{}

};

const ProductReducer = (state = initState, action) => {

// console.log(typeof action.id)
  switch (action.type) {
    case "PRODUCT":
      return{...state,product:  state.products.find(product=>product.id === parseInt(action.id))}
    default:
      return state;
  }
};

export default ProductReducer;
