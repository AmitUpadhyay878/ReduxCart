const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      //console.log(quantity);
      const check = state.products.find((pr) => pr.id === product.id);

      if (check) {
        console.log("check", check)
        const totQuant = product.quantity + quantity;
        console.log("totQuant", totQuant)
        const Quantity = quantity;
        const totalPrice = state.totalPrice + product.discountPrice * quantity
        // console.log(Quantity);
        state.products.map((item) => {
          if (item.id === product.id) {
            console.log(item)
            item.quantity += quantity;
            console.log(item)
          }
          return item;



          // return {
          //   ...state,
          //   totalQuantities: totQuant,
          // };
        });
        return {
          ...state,
          totalQuantities: totQuant,
        };
      } else {
        const totPrice = state.totalPrice + product.discountPrice * quantity;
        const totQuantity = state.totalQuantities + quantity;
        product.quantity = quantity;

        return {
          ...state,
          products: [...state.products, product],
          totalPrice: totPrice,
          totalQuantities: totQuantity,
        };
      }

    case 'INC':
      try {
        findPro = state.products.find(product => product.id === action.payload);
        index = state.products.findIndex(product => product.id === action.payload);

        findPro.quantity += 1;
        state.products[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice + findPro.discountPrice, totalQuantities: state.totalQuantities + 1
        }
      }
      catch (err) {
        return err
      }
      findPro = state.products.find(product => product.id === action.payload);
      index = state.products.findIndex(product => product.id === action.payload);

      findPro.quantity += 1;
      state.products[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.discountPrice, totalQuantities: state.totalQuantities + 1
      }
    case "DEC":
      findPro = state.products.find(product => product.id === action.payload);
      index = state.products.findIndex(product => product.id === action.payload);
      if (findPro.quantity >= 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.discountPrice, totalQuantities: state.totalQuantities - 1
        }
      } else {
        return state;
      }


    case "REMOVE":
      findPro = state.products.find(
        (product) => product.id === action.payload
      );
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );

      // console.log(filtered);

      return {
        ...state,
        products: filtered,
        totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity,
      };
    default:
      return state;
  }
};
export default CartReducer;
