import React from "react";

function Cards(props) {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          </div>
        </div>
    </div>
  );
}

export default Cards;
