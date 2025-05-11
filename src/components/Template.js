import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title, desc1 , desc2, image , formtype , setIsLoggedIn}) => {
  return (
    <div>

        <div>
            <h1> {title} </h1>

            <p>
                <span>
                    {desc1}
                </span>

                <span>
                    {desc2}
                </span>
            </p>

            {
                formtype==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}
                ></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
          }

          <div>
            <div></div>
            <p>
                OR
            </p>
            <div></div>

          </div>

          <button>
            <p> Sign Up with Google  </p>
          </button>
        </div>

        <div>
                <img src={frameImage} height={504} width={558} loading='lazy'>
                </img>
                <img src={image} height={490} width={558} loading='lazy'>
                </img>
        </div>
      
    </div>
  )
}

export default Template
