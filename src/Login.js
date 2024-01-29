import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

export default function Login(){

const[data,setData]= useState({
    email:"",
    password:"",
});

useEffect(() => {

    return () => {
        alert("This is unload where clean up activity.")
    }
},[])

    const myNav = useNavigate();

    const changeInput =(e)=>{

        setData({...data,[e.target.name] : e.target.value});
    }

    const myStyle = {
    //     color: "#fff",
	// background: "#4c535d",
	// fontfamily: "Roboto, sans-serif"
    }

    const mySubmit=(e)=>{

        e.preventDefault();

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",
        data)
        .then(y=>{
            console.log(y);

            localStorage.setItem("userInfo",JSON.stringify(y.data));
            
            myNav("/productlist");
        })


        
    }

    return( <div className="signup-form" style={myStyle}>
    <form  onSubmit={mySubmit}>
		<h2 className='text-center'>Login</h2>
		{/* <p>It's free and only takes a minute.</p> */}
	
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={changeInput} />
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={changeInput}/>
        </div>
		<div className="form-group">
            <input type="submit" className="btn btn-primary btn-block btn-lg" />
        </div>
		
    </form>
	<div className="text-center">Don't have an account? <Link to="/signup" style={{color: "red"}}><b>Signup here</b></Link></div>
</div>
    )
}