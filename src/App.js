import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import GenreDistribution from "./components/GenreDistribution";
import { useState } from "react";
import NoteState from "./context/NoteState";
import AddToCart from "./components/AddToCart";
// import { useContext } from "react";
// import noteContext from "./context/NoteContext";
function App() {
  const [genre, setGenre] = useState("");
  const [cart, addToCart] = useState([]);
  const changeCart = (value) => {
    const isPresent = cart.find((item) => item.isbn13 === value.isbn13);
    if (isPresent) {
      addToCart(
        cart.map((item) =>
          item.isbn13 === value.isbn13
            ? { ...isPresent, quantity: isPresent.quantity + 1 }
            : item
        ));
    } else {
      addToCart([...cart, { ...value, quantity: 1 }]);
    }
  };
  //  { ...isPresent, quantity: isPresent.quantity + 1 }
  const removeFromCart = (value) => {
    const isPresent = cart.find((item) => item.isbn13 === value.isbn13);
    if (isPresent.quantity === 1) {
      addToCart(cart.filter((item) => item.isbn13 !== value.isbn13));
    } else {
      addToCart(
        cart.map((item) =>
          item.isbn13 === value.isbn13
            ? { ...isPresent, quantity: isPresent.quantity - 1 }
            : item
        )
      );
    }
  };
  const changeGenre = (value) => {
    setGenre(value);
  };
  return (
    <>
      <NoteState>
        <Routes>
          <Route path="/" element={<Home changeGenre={changeGenre} />} />
          <Route
            path="genres"
            element={
              <GenreDistribution
                genre={genre}
                addToCart={changeCart}
                cart={cart}
              />
            }
          />
          <Route
            path="addToCart"
            element={
              <AddToCart
                cart={cart}
                addToCart={changeCart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
