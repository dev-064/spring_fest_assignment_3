import React,{useState} from 'react';
import Cards from "./Cards"
function Bestsellers() {
  let name="The Jungle Book"
  return (
    <>
    <h1>Our Best Sellers</h1>
      <div class="parent-card-container">
        <Cards imageUrl="https://s26162.pcdn.co/wp-content/uploads/2018/12/unnamed.png" name={name}/>
        <Cards imageUrl="https://s26162.pcdn.co/wp-content/uploads/2018/12/unnamed.png" name={name}/>
        <Cards imageUrl="https://s26162.pcdn.co/wp-content/uploads/2018/12/unnamed.png" name={name}/>
        <Cards imageUrl="https://s26162.pcdn.co/wp-content/uploads/2018/12/unnamed.png" name={name}/>
        <Cards imageUrl="https://s26162.pcdn.co/wp-content/uploads/2018/12/unnamed.png" name={name}/>
        <Cards imageUrl="https://s26162.pcdn.co/wp-content/uploads/2018/12/unnamed.png" name={name}/>
      </div>
    </>
  )
}
export default Bestsellers
