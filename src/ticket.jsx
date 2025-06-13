import Ticketnum from "./ticketnum"
import './ticket.css'

export default function Ticket({ ticket }) {
    return (
        <div className="ticket">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <Ticketnum key={idx} num={num} />
            ))}
        </div>
    )
}