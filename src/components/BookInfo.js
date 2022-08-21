import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
function BookInfo() {
  const index=0;
  const genre="computer";
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    getBooksData();
  }, []);
  const getBooksData = () => {
    axios
      .get(`https://api.itbook.store/1.0/search/${genre}`)
      .then((response) => {
        const data = response.data;
        setBookData(data.books);
        console.log(data.books);
      });
  };
  return (
    <div>
      <div class="container d-flex flex-row">
          <div class="container d-flex flex-column">
            <p>{bookData[index].title}</p>
          </div>
      </div>
    </div>
  )
}

export default BookInfo
