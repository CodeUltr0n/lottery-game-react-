import { useState } from "react"

export default function ludoboard(){


    let [moves,setMoves] = useState({blue:0 ,red:0 , yellow:0,green:0})

    // let [arr,setArr] = useState(["no moves"])

   let updateBlue = ()=>{
    console.log(`moves.blue = ${moves.blue}`);
    setMoves((prevmoves)=>{
        return{
           ...prevmoves,blue:prevmoves.blue +1
        }    /// callback for value depends on previous one 
    })
   }

    let updateYellow = ()=>{
    setMoves((prevmoves)=>{
        return{
           ...prevmoves,yellow:prevmoves.yellow +1
        }    /// callback for value depends on previous one 
    })
   }
    

   // arr.push("blue moves") -- > zaroorat nahi hai 
   // setArr((prevArr) => {return [...prevArr,"blue moves"]})
   //console.log(arr)


    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                 <p>Blue moves = {moves.blue}</p>
                    <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                 <p>Yellow moves = {moves.yellow}</p>
                 <button style={{backgroundColor:" yellow",color:"black"}} onClick={updateYellow}>+1</button>
                 <p>Green moves = {moves.green}</p>
                 <button style={{backgroundColor:"green"}}>+1</button>
                 <p>Red moves = {moves.red}</p>
                 <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}