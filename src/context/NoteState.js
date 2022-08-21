import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const [bookData,setBookData]=useState([]);
    
    return(
        <NoteContext.Provider value={{bookData,setBookData}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;