import React from "react";
import { useState } from "react";
function AddToCart(props) {
  const [cartItemQty, setCartItemQty] = useState([]);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          border: "1px solid white",
        }}
      >
        Cart
      </h1>
      {props.cart.length == 0 ? (
        <h1 className="text-center" style={{ color: "white" }}>
          Cart Is Empty{" "}
        </h1>
      ) : (
        <div className=" d-flex flex-row flex-gap-2 justify-content-center align-items-center flex-wrap">
          {props.cart.map((item) => {
            return (
              <div class="genre-distributed-card m-3 p-3">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <p>price : {item.price}</p>
                <div class="cart-items-functions">
                  <button
                    class="btn btn-light m-1"
                    onClick={() => props.addToCart(item)}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    class="btn btn-light"
                    onClick={() => props.removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AddToCart;
