import { useState } from "react";
import CommentsForm from "./commentsform";
import './comments.css'

export default function Comment() {
    let [comments, setComments] = useState([
        {
            username: "@sk",
            remarks: "great job",
            rating: 4
        }
    ]);

    let addnewcomment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added new comment");
    };

    return (
        <>
            <div>
                <h3>All comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>&nbsp;
                        <span>(rating = {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>
            <br />
            <hr />
            <CommentsForm addnewcomment={addnewcomment} />
        </>
    );
}
