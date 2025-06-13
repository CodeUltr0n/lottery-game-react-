import { useState } from "react"
// import './lotter.css'
import { genticket , sum} from "./helper";
import Ticket from "./ticket";
import Button from "./button";


export default function Lottery({n=3,winCondition}){

    let [ticket,setTicket] = useState(genticket(n));
    let iswinning = winCondition(ticket);


    let buyticket=()=>{
        setTicket(genticket(n));
    }

    return(
        <div>
            <h1>Lottery-Game!</h1>
            < Ticket ticket={ticket}/>
            <Button action={buyticket}/>
            <h3>{iswinning && "Congratualions,You Won!!"}</h3>

        </div>
    )
}