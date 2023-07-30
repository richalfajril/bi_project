import React, { useState, useEffect } from "react";
import avatar from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
    const [name, setName] = useState([]);

    //define method
    const fetchDataPosts = async () => {
        //fetch data from API with Axios
        await axios.get("https://mauve-katydid-toga.cyclic.app/api/v1/users/24040119120017").then((response) => {
            //assign response data to state "posts"
            setName(response.data[0].name);
            // setName(response.data[0].name);
        });
    };
    //run hook useEffect
    useEffect(() => {
        //call method "fetchDataPosts"
        fetchDataPosts();
    }, []);
    return (
        <>
            <div className="navbar bg-primary px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a onClick={() => navigate("/dashboard-user")}>Dashboard</a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/dashboard-user/tableview")}>Tabungan</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl text-white">
                        <img src={logo} alt="" width={25} height={30} />
                        <h2 className="text-sm lg:text-lg">Universitas Diponegoro</h2>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:block text-white font-bold px-3">
                        <h2>{name}</h2>
                    </div>
                    <div className="dropdown dropdown-end flex">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={avatar} />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a onClick={() => navigate("/")}>Kembali ke SSO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
