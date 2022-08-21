import React from 'react'
import { useState, useEffect, useContext } from 'react';
import BookCard from './BookCard';
import {useParams} from 'react-router-dom';
const Content = (props) => {
    let params = useParams();
    const search = params.search || props.search
    const context = useContext(modalContext)
    const { showModal } =context
    const [reload, setReload] = useState(false)
    const [Article, setArticle] = useState([])
    const [page, setPage] = useState(1)
    const [totalbooks, setTotalbooks] = useState(0)
    
    const fetchDataBooks = async (search) => {
        let  url = (`https://api.itbook.store/1.0/search/${search||""}/${page}`)
        const data = await fetch(url);
        let parsedData = await data.json()
        let newdata = Article.concat(parsedData.books)
        setTotalbooks(parsedData.total)
        setArticle(newdata)
    };
    useEffect(() => {
        setArticle([])
        setPage(1)
        setReload(true)
    }, [search])

    useEffect(() => {
        setReload(false)
        fetchDataBooks(search)
    }, [page,reload])
    
  return (
    <>
    <section className="text-gray-600 body-font">
            <div className="container my-container px-5 py-14 mx-auto">
                <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{search.toUpperCase()}</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{Article.length===0?"":"Here Is What We Found For You"}</p>
                </div>
                <div className="flex flex-wrap justify-center m-4">
                    {Article.map(element => {
                        return (
                            <div className="lg:w-1/4 mmm:w-1/3 p-4"  key={element.isbn13} onClick={()=>{
                                showModal(element.isbn13)
                            }}>
                            <BookCard element={element} category={search} />
                            </div>
                        )
                    })}
                </div>
                {(totalbooks==Article.length)?<p className="lg:w-1/2 m-auto w-full leading-relaxed  text-center">{Article.length===0?"Nothing to Show":"Thats ALL"}</p>:<button type="button" className="m-auto block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={() => {
                    setPage(page+1)
                }} id="viewMore">View more</button>}
            </div>
        </section>
    </>
  )
}

export default Content