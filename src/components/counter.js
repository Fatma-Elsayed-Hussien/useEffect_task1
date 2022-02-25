import { useEffect, useState } from "react";
import React from 'react'
export default function Counter(){
    const [num, setNum] = useState(0);
    const [res, setRes] = useState(-1);
    useEffect(()=>{
        setRes(res+1);
    }, [num]);
    return(
        <>
            <div className="container">
                <button onClick={()=> setNum(num-1)}>-</button>
                <p> {num}</p>
                <button onClick={()=> setNum(num+1)}>+</button>
            </div>
            <p className="count-para">No.of click times <span> {res} </span> </p>   
        </>
    )
}