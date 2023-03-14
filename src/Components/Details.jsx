import React, { createContext, useState,useEffect } from 'react'

export const store = createContext()

const Details = (props) => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/')
        .then(response=>response.json())
        .then((response)=>setDetails(response))
        .catch(error=>console.error(error))   
    }, [])
    console.log(details);
    return (
        <div>
            <store.Provider value={[details, setDetails]}>

                {props.children}


            </store.Provider>
        </div>
    )
}

export default Details;