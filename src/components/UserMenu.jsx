import React from "react";
import ketikImage from "../assets/images/ketik.jpg";
import savingsImage from "../assets/images/savings.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function UserMenu() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-secondary">
                <Navbar />
                <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row">
                    <div className="card w-100 bg-base-100 shadow-xl mx-5 my-5 hover:-translate-y-1 hover:scale-105 transition duration-300">
                        <figure className="">
                            <img
                                src={ketikImage}
                                alt="Shoes"
                                className=""
                                style={{ height: "300px", width: "500px", objectFit: "cover" }}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Kirim Artikel</h2>
                            <p>Ayo tulis dan kirimkan artikelmu melalui form ini!</p>
                            <div className="card-actions">
                                <button
                                    className="btn btn-primary mt-5"
                                    onClick={() => navigate("/dashboard-user/formpage")}
                                >
                                    Tulis Sekarang!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 bg-base-100 shadow-xl mx-5 my-5 hover:-translate-y-1 hover:scale-105 transition duration-300">
                        <figure className="">
                            <img
                                src={savingsImage}
                                alt="Shoes"
                                className=""
                                style={{ height: "300px", width: "500px", objectFit: "cover" }}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tabungan Artikel</h2>
                            <p>Kamu juga dapat melihat hasil tabungan artikel kamu di sini!</p>
                            <div className="card-actions">
                                <button
                                    className="btn btn-neutral mt-5"
                                    onClick={() => navigate("/dashboard-user/tableview")}
                                >
                                    Lihat Tabungan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserMenu;
