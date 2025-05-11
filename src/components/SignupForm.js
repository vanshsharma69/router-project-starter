import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const SignupForm = ({setIsLoggedIn}) => {


    const navigate = useNavigate();

    const[formData, setFormData]=useState({
        firstname: "",
        lastname: "",
        email: "",
        password:"",
        confirmPassword:"",

    })

     function changeHandler(event){
       setFormData((prevData)=>(
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
       ))
    }

    const[showPassword, setShowPassword]=useState(false);

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Invaild Password");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }


  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
           <div>
            <label>
                <p>First Name<sup>*</sup></p> 
                <input
                required
                type='text'
                name="firstname"
                value={formData.firstname}
                placeholder='Enter First Name'
                onChange={changeHandler}
                >
                </input>
            </label>

            <label>
                <p>Last Name<sup>*</sup></p> 
                <input
                required
                type='text'
                name="lastname"
                value={formData.lastname}
                placeholder='Enter Last Name'
                onChange={changeHandler}
                >
                </input>
            </label>
           </div>

            <label>
                <p>Email Address<sup>*</sup></p> 
                <input
                required
                type='email'
                name="email"
                value={formData.email}
                placeholder='Enter Email Address'
                onChange={changeHandler}
                >
                </input>
            </label>

            <div>
                
            <label>
            <p>
                 Create Passowrd <sup>*</sup> 
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
        </label>

             <label>
            <p>
                Confirm Passowrd <sup>*</sup> 
            </p>
            <input 

        type={showPassword ? ("text") : ("password")}
        required
        value={formData.confirmPassword}
        onChange={changeHandler}
        placeholder='Confirm Password'
        name='confirmPassword'
         ></input>
          <span onClick={() => setShowPassword((prev)=> !prev)}>
            {showPassword? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) : (<AiOutlineEye></AiOutlineEye>)}
        </span>
        </label>

            </div>

            <button>Create Account </button>

        </form>
    </div>
  )
}

export default SignupForm
