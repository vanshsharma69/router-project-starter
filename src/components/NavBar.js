import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const NavBar=(props) =>{

    let isLoggedIn= props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="flex justify-evenly ">
           <Link to="/" ></Link>
           <img src={logo} height={32} width={160} loading="lazy" ></img>

           <nav>

            
            <ul className="flex gap-3  ">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>


            </ul>
           </nav>


           <div className="flex ml-5 mr-3 gap-3">

            {
                !isLoggedIn &&
                <Link to="/login">
            <button>
                Login
            </button>
            </Link>
            }

             {  !isLoggedIn &&
                <Link to="/signup">
            <button>
                Sign Up
            </button>
            </Link>
            }

             { isLoggedIn &&
                <Link to="/" onClick={()=>{ setIsLoggedIn(false); 
                    toast.success("Logged Out");
                
                }}>
            <button>
                Logout
            </button>
            </Link>
            }

             {  isLoggedIn &&
                <Link to="/Dashboard">
            <button>
                Dashboard
            </button>
            </Link>
            }

           </div>


        </div>
    )
}
export default NavBar