import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";

const Form = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };

    const handleClose = () => {
        setShowAlert(false);
    };
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-secondary py-5 px-5">
                <div className="container">
                    <div className="card bg-white flex-card shadow-xl px-10 py-5 mb-5">
                        <h1 className="text-center text-2xl font-bold mb-5">
                            <i className="icon-user"></i>Identitas Pengirim
                        </h1>
                        <div className="flex flex-wrap mb-5">
                            <div className="self-start form-control w-full px-1 lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Nama</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nama"
                                    className="input input-sm input-bordered max-w-full bg-slate-100"
                                />
                            </div>
                            <div className="form-control w-full px-1 lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Nomor Identitas</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nomor Identitas"
                                    className="input input-sm input-bordered max-w-full bg-slate-100"
                                />
                            </div>
                            <div className="form-control w-full px-1 lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Fakultas</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Fakultas"
                                    className="input input-sm input-bordered max-w-full bg-slate-100"
                                />
                            </div>
                            <div className="form-control w-full px-1 lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Nomor HP</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nomor HP"
                                    className="input input-sm input-bordered max-w-full bg-slate-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-col card shadow-xl bg-white rounded-md px-10 py-5">
                        <div className="form-control w-full px-1 mb-5">
                            <label className="label">
                                <span className="label-text font-bold">Judul</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Isikan Judul Kamu di Sini"
                                className="input input-md input-bordered w-full"
                            />
                        </div>
                        <div className="form-control px-1 mb-5">
                            <label className="label">
                                <span className="label-text font-bold">Isi</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Tulis di sini"
                                style={{ height: "300px" }}
                            ></textarea>
                        </div>

                        {/* Component CustomButton Start */}
                        <div className="flex">
                            <div className="container">
                                <button
                                    className="btn btn-outline btn-error mx-1 text-end"
                                    onClick={() => navigate("/dashboard")}
                                >
                                    Kembali
                                </button>
                            </div>
                            <div className="container text-end">
                                <div className="flex" style={{ justifyContent: "flex-end" }}>
                                    <div className="flex">
                                        <button className="btn btn-warning mx-1" style={{ color: "white" }}>
                                            Simpan
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <button
                                            className="btn btn-success mx-1"
                                            style={{ color: "white" }}
                                            onClick={handleClick}
                                        >
                                            Kirim
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={showAlert}
                onRequestClose={handleClose}
                style={{
                    content: {
                        width: "700px",
                        height: "125px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    },
                }}
            >
                <div className="alert alert-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Tulisan Anda sudah terkirim, Terima Kasih!</span>
                    <button className="btn btn-neutral" onClick={handleClose}>
                        Tutup
                    </button>
                </div>
            </Modal>
            {/* Component Custom Button End */}
        </>
    );
};

export default Form;
