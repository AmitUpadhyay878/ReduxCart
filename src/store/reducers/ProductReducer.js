import { uid } from "../../static/uid";

const initState = {
  products: [
    {
      id: 1,
      name: "womens jacket winter season",
      image: "images4.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "women Pant",
      image: "womenpant.jpg",
      price: 28,
      discount: 3,
      discountPrice: 28 - (3 / 100) * 28,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      name: "mans Pant",
      image: "menspant.jpg",
      price: 35,
      discount: 4,
      discountPrice: 35 - (4 / 100) * 35,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      name: "mans shoes for all season",
      image: "images6.jpg",
      price: 22,
      discount: 2,
      discountPrice: 22 - (2 / 100) * 22,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      name: "mans full slave t-shirt",
      image: "images7.jpg",
      price: 30,
      discount: 4,
      discountPrice: 30 - (4 / 100) * 30,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      name: "womens Purse",
      image: "images8.jpg",
      price: 32,
      discount: 2,
      discountPrice: 32 - (2 / 100) * 32,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 7,
      name: "mens shirt",
      image: "images9.jpg",
      price: 40,
      discount: 4,
      discountPrice: 40 - (4 / 100) * 40,
      quantity: 1,
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProductReducer;
