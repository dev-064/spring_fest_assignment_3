import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
function Searchbar(props) {
  let navigate = useNavigate();
  const searchFor = (event) => {
    event.preventDefault()
    const search = document.getElementById('search-dropdown')
    navigate(`/content/${search.value}`)
    search.value = ""
}
  return (
    <>
<input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search ..." required="" />
                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async (event) => {
                                    searchFor(event)
                                }}></button>
    </>
  );
}

export default Searchbar;
