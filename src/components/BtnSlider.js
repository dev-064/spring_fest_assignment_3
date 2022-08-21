import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? "https://p.kindpng.com/picc/s/377-3772459_arrow-right-comments-arrow-mark-symbol-png-transparent.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSDHfG5yBsGzXtwmB5cRgR8ZUceLkJtXfag&usqp=CAU"} alt="error" />
    </button>
  );
}