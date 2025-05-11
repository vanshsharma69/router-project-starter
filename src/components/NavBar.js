import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const NavBar=(props) =>{

    let isLoggedIn= props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="flex justify-between w-9/12 max-w-[1160] py-4 mx-auto ">
           <Link to="/" >
           <img src={logo} height={32} width={160} loading="lazy" ></img>
           </Link>

           <nav>
            
            <ul className="text-slate-300 flex gap-x-6 py-1  ">
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


           <div className="flex items-center gap-x-4 ">

            {
                !isLoggedIn &&
                <Link to="/login">
            <button className="text-slate-300 bg-slate-900 px-[10px] py-[6px] rounded-[8px] border border-slate-800">
                Log in
            </button>
            </Link>
            }

             {  !isLoggedIn &&
                <Link to="/signup">
            <button className="text-slate-300 bg-slate-900 px-[12px] py-[6px] rounded-[8px] border border-slate-800">
                Sign up
            </button>
            </Link>
            }

             { isLoggedIn &&
                <Link to="/" onClick={()=>{ setIsLoggedIn(false); 
                    toast.success("Logged Out");
                
                }}>
            <button className="text-slate-300 bg-slate-900 px-[12px] py-[6px] rounded-[8px] border border-slate-800">
                Logout
            </button>
            </Link>
            }

             {  isLoggedIn &&
                <Link to="/Dashboard">
            <button className="text-slate-300 bg-slate-900 px-[12px] py-[6px] rounded-[8px] border border-slate-800">
                Dashboard
            </button>
            </Link>
            }

           </div>


        </div>
    )
}
export default NavBar