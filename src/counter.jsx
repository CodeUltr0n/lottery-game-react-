import { useEffect, useState } from "react"

export default function Counter(){
    let[countx,setCountx] = useState(0);
    let[county,setCounty] = useState(0);


    const inccountX =()=>{
        setCountx((currCount) => currCount+1)
    };

    const inccountY =()=>{
        setCounty((currCount) => currCount+1)
    };

    useEffect(function sideEffect(){
        console.log("this is a side effect");
    },[countx,county]) //---> koi ek bhi le  skate hai countx or  county -->[countx]

    return(
       <div>
        <h2>
            Countx = {countx}
        </h2>
        <button onClick={inccountX}>+1</button>

        <h2>
            County = {county}
        </h2>
        <button onClick={inccountY}>+1</button>
       </div>
    )
}