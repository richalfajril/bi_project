import React from "react";
import ketikImage from "../assets/images/ketik.jpg";
import savingsImage from "../assets/images/savings.png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Second() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fectData();
    }, []);

    const fectData = async () => {
        const response = await axios.get("https://pink-impossible-panther.cyclic.app/users");
        const data = await response.data.data;

        setUsers(data);
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-secondary">
                <Navbar />
                <div className="flex flex-col items-center justify-center lg:flex-row lg:pt-32">
                    <div className="card w-100 bg-base-100 shadow-xl mx-10 my-10">
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
                                    onClick={() => navigate("/dashboard/formpage")}
                                >
                                    Tulis Sekarang!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 bg-base-100 shadow-xl mx-10 my-10">
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
                                <button className="btn btn-neutral mt-5">Lihat Tabungan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Second;
