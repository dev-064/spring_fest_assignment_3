import React from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/NoteContext";
function GenreDistribution(props) {
  // const genre = "physics";
  const variable = useContext(noteContext);
  useEffect(() => {
    getBooksData();
  }, []);
  const getBooksData = () => {
    axios
      .get(`https://api.itbook.store/1.0/search/${props.genre}`)
      .then((response) => {
        const data = response.data;
        variable.setBookData(data.books);
      });
  };
  return (
    <>
      <Link to="/addToCart">
        <button class="btn btn-light custom-button">Go To Cart</button>
      </Link>
      <h1 style={{ color: "white" }}>{props.genre.toUpperCase()}</h1>
      <div className=" d-flex flex-row flex-gap-2 justify-content-center align-items-center flex-wrap">
        {variable.bookData.map((item) => {
          return (
            <div class="genre-distributed-card m-3 p-3">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>price : {item.price}</p>
              <button
                class="btn btn-light"
                onClick={() => {
                  props.addToCart(item);
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GenreDistribution;
