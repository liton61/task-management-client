import { useContext } from "react";
import { AuthContext } from "../authentication/Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="navbar bg-success text-white p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>About</a></li>
                            <li><a>Appointment</a></li>
                            <li><a>Reviews</a></li>
                            <li><a>Contact Us </a></li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className="w-16" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mx-3 font-medium'><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <li className='mx-3 font-medium'><NavLink
                            to="/developer"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Developer
                        </NavLink></li>
                        <li className='mx-3 font-medium'><NavLink
                            to="/corporate"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Corporate
                        </NavLink></li>
                        <li className='mx-3 font-medium'><NavLink
                            to="/banker"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Banker
                        </NavLink></li>
                        {
                            user &&
                            <li className='mx-3 font-medium'><NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Dashboard
                            </NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between text-black">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li><a className='text-black'>{user?.email}</a></li>
                                    <li className='text-red-600'><NavLink onClick={handleSingOut}
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-right-from-bracket"></i> Sing Out
                                    </NavLink></li>
                                </ul>
                            </div>
                            :
                            <Link to="/login">
                                <button className='btn btn-neutral'>Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;