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
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'
    >

        <label className='w-full'>
            <p className='text-[0.85rem] text-slate-300 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-red-700'>*</sup> 
            </p>
            <input 
            className='bg-slate-900 rounded-[0.5rem] text-slate-300 w-full p-[12px]'

        type='email'
        required
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter your Email'
        name="email"
         ></input>
        </label>

        <label className='w-full relative' >
            <p className='text-[0.85rem] text-slate-300 mb-1 leading-[1.375rem]'>
                Passowrd <sup className='text-red-700'>*</sup> 
            </p>
            <input 
            className='bg-slate-900 rounded-[0.5rem] text-slate-300 w-full p-[12px]'

        type={showPassword ? ("text") : ("password")}
        required
        value={formData.passowrd}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
         ></input>
          <span className='absolute right-3 top-[38px] cursor-pointer'
          onClick={() => setShowPassword((prev)=> !prev)}>
            {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'>

            </AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
        </span>
        <Link to="#">
        <p className='text-slate-400 text-xs mt-1 max-w-max ml-auto'>
            Forgot Password
        </p>
        </Link>
        </label>
        <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-3' >
            Sign In
        </button>
       
    </form>
  )
}

export default LoginForm
