import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Genre(props) 
{
  const genres = [
    "mathematics",
    "chemistry",
    "physics",
    "computer",
    "sports",
    "classic",
  ];
  return (
    <>
      <h2 className="text-center mb-2" style={{ color: "white" }}>
        Explore Our Famous Genres
      </h2>
      <Link to="genres" style={{textDecoration:"none"}}>
        <div
          class="container d-flex flex-row flex-gap-2 justify-content-center align-items-center flex-wrap"
        >

        {genres.map((genre) => (
            <div class="genre-card m-3" >
              <p>{genre}</p>
            </div>
        ))}
        </div>
      </Link>
    </>
  );
}

export default Genre;
