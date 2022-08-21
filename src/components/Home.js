import SideBar from "./Sidebar";
import LandingPageCarousel from "./Landing_page_carousel";
import Genre from "./Genre";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function home(props) {
  const genres = [
    "mathematics",
    "chemistry",
    "physics",
    "computer",
    "sports",
    "classic",
  ];
  return (
    <div>
      <div>
        <div id="home">
          <SideBar />
          <LandingPageCarousel />
          <h2 className="text-center mb-2" style={{ color: "white" }}>
            Explore Our Famous Genres
          </h2>
          <Link to="genres">
            <div class="container d-flex flex-row flex-gap-2 justify-content-center align-items-center flex-wrap">
              {genres.map((genre) => (
                <div class="genre-card m-3" onClick={()=>{props.changeGenre(genre)}}>
                  <p>{genre}</p>
                </div>
              ))}
            </div>
          </Link>
          <Link to="addToCart">
          <button class="btn btn-light custom-button" >Go To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default home;
