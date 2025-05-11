import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title, desc1 , desc2, image , formtype , setIsLoggedIn}) => {
  return (
    <div className='flex justify-between mx-auto py-5  max-w-[1160] w-9/12 gap-x-12 gap-y-0'>

        <div className='w-11/12  max-w-[450px]'>
            <h1
            className='text-slate-50 font-semibold text-[1.5rem] leading-[1.75rem]'
            > {title} </h1>

            <p className='text-[0.851rem] leading-[1.225rem] '>
                <span className='text-slate-300'>
                    {desc1}
                </span>
                <br></br>
                <span className='text-slate-400 italic'>
                    {desc2}
                </span>
            </p>

            {
                formtype==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}
                ></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
          }

          <div className='flex w-full items-center my-2 gap-x-2'>
            <div className='w-full h-[1px] bg-slate-700'
            ></div>
            <p className='text-slate-700 font-medium leading-[3rem]'>
                OR
            </p>
            <div className='w-full h-[1px] bg-slate-700'
            ></div>

          </div>

          <button className='flex w-full justify-center items-center  rounded-[10px] font-medium text-slate-200
          border border-slate-700 px-[10px] py-[8px] gap-x-2 bg-slate-950 mt-2'>
            <FcGoogle className=''></FcGoogle>
            <p className='text-slate-200'> Sign Up with Google  </p>
          </button>
        </div>

        <div className='relative w-11/12 max-w-[350px] '>
                <img src={frameImage} height={504} width={558} loading='lazy'>
                </img>
                <img 
                className='absolute -top-4 right-4'
                src={image} height={490} width={558} loading='lazy'>
                </img>
        </div>
      
    </div>
  )
}

export default Template
