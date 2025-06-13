import { useState } from "react";

export default function Form() {
    let [formData,setFormData] = useState({
        fullname:"",
        username:"",
        password:"",
    });


    // let handleChange = (event)=>{
    //     setFullname(event.target.value);
    // }

    let handleinputchange =(event)=>{
      setFormData((curData)=>{
        return{...curData,[event.target.name]:event.target.value};
      })
    }

    let handleSubmit=(event)=>{
         event.preventDefault();
         console.log(formData);
         setFormData({
            fullname:"",
            username:"",
            password:""
         })
    }


    return(
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname</label>&nbsp;&nbsp;
        <input placeholder="Enter your fullname" 
        type="text" value={formData.fullname} 
        onChange={handleinputchange}
        id="fullname"
        name="fullname"
        ></input>
        <br></br>
        <br></br>

        <label htmlFor="username">username</label>&nbsp;&nbsp;
        <input placeholder="Enter your username" 
        type="text" value={formData.username} 
        onChange={handleinputchange}
        id="username"
        name="username"
        ></input>
        <br></br>
         <br></br>
         
        <label htmlFor="password">password</label>&nbsp;&nbsp;
        <input placeholder="Enter your password" 
        type="password" value={formData.password} 
        onChange={handleinputchange}
        id="password"
        name="password"
        ></input>
         &nbsp;&nbsp;
        <button>Submit</button>
      </form>
    )
}