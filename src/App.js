import "./App.css";
// import User from "./User";
import { Provider } from "react-redux";
import store from "./store/reducers/index";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Detail from "./components/Detail";

function App() {
  // console.log(store);
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/detail/:id" exact element={<Detail />} />
      </Routes>
    </Provider>
  );
}

export default App;
