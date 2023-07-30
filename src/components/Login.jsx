import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/wp1.jpg";

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="hero-overlay flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.63)", backdropFilter: "blur(5px)" }}
                >
                    <div className="hero-content flex-col w-full">
                        <div className="text-center lg:text-left">
                            <img
                                src={logo}
                                alt=""
                                style={{ maxWidth: "150px", maxHeight: "100px" }}
                                className="text-center mx-auto"
                            />
                            <h1 className="text-4xl font-bold text-center">Dummy Project</h1>
                            <p className="py-3 text-center">Ini adalah protoype uji coba project fitur baru di SSO</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Kata Sandi</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Lupa Kata Sandi?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" onClick={() => navigate("/dashboard-user")}>
                                        Masuk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
