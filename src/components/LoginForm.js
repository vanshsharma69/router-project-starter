import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const Navigate= useNavigate();

    const[formData, setFormData]=useState({
        email : "",
        password :"",
    })

    const[showPassword, setShowPassword]=useState(false);

    function changeHandler(event){
       setFormData((prevData)=>(
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
       ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        Navigate("/dashboard");


    }
  return (
    <form onSubmit={submitHandler}>

        <label>
            <p>
                Email Address <sup>*</sup> 
            </p>
            <input 

        type='email'
        required
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter your Email'
        name="email"
         ></input>
        </label>

        <label>
            <p>
                Passowrd <sup>*</sup> 
            </p>
            <input 

        type={showPassword ? ("text") : ("password")}
        required
        value={formData.passowrd}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
         ></input>
          <span onClick={() => setShowPassword((prev)=> !prev)}>
            {showPassword? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}
        </span>
        <Link to="#">
        <p>
            Forgot Password
        </p>
        </Link>
        </label>

        <button>
            Sign In
        </button>
       
    </form>
  )
}

export default LoginForm
