import { useState } from "react"
 import { useFormik } from 'formik';

export default function CommentsForm({addnewcomment}){

    // let[FormData ,SetFormData] = useState({
    //     username:'',
    //     remarks:"",
    //     rating:5
    // })
 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cannot be empty!!';
   } 
   return errors;
 };

     const formik = useFormik({
     initialValues: {
       username:"",
       remarks:"",
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

   


    // let handleinputchange=(event)=>{
    //     SetFormData((currData)=>{
    //         return{...currData,[event.target.name]:event.target.value}
    //     })
    // }

    // let handlesubmit=(event)=>{
    //      console.log(FormData);
    //      addnewcomment(FormData);
    //      event.preventDefault();
    //      SetFormData({
    //         username:'',
    //         remarks:"",
    //         rating:5
    //      })
    // }


    return(
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>&nbsp;&nbsp;
                <input placeholder="username" type="text" 
                value={formik.values.username} 
                onChange={formik.handleChange} 
                id="username"
                name="username"
                />

                {formik.errors.username ? 
                <p style={{color:"red"}}>{formik.errors.username}</p> : null} 
                <br></br><br></br>

                                
                <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;
                <textarea value={formik.values.remarks} 
                placeholder="add remarks" 
                onChange={formik.handleChange}
                id="remarks"
                name="remarks"
                ></textarea>
                <br></br><br></br>

                               
                <label htmlFor="rating">Rating</label> &nbsp;
                <input type="number" 
                value={formik.values.rating} 
                min={1} max={5} 
                onChange={formik.handleChange}
                id="rating"
                name="rating"
                />
                <br></br><br></br>

                <button>Add Comment</button>
            </form>
        </div>
    )
}