import React from "react";
import Searchbar from "./Searchbar";

function Sidebar() {
  return (
    <div>
      <button
        className=" btn-primary my-3 mx-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <span class="material-symbols-outlined ">menu</span>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header justify-content-end">
          <button
            type="button"
            className="btn-close "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav class="nav flex-column">
            <a class="nav-link" aria-current="page" href="#">
              Mathematics
            </a>
            <a class="nav-link" href="#">
              Computer
            </a>
            <a class="nav-link" href="#">
              Physics
            </a>
            <a class="nav-link" href="#">
              Sports
            </a>
            <a class="nav-link" href="#">
              Classic
            </a>
            <a class="nav-link">Chemistry</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
