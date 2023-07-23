import React from "react";
import Navbar from "./Navbar";
import classnames from "classnames";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faTiktok,
    faWordpress,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Table() {
    const getSocialMediaBar = () => {
        return (
            <div className="flex justify-center items-center gap-1">
                <div className="rounded-lg p-2 bg-slate-300 hover:bg-blue-500 hover:text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="rounded-lg p-2 bg-slate-300 hover:bg-blue-700 hover:text-white">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="rounded-lg p-2 bg-slate-300 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="rounded-lg p-2 bg-slate-300 hover:bg-black hover:text-white">
                    <FontAwesomeIcon icon={faTiktok} />
                </div>
                <div className="rounded-lg p-2 bg-slate-300 hover:bg-red-600 hover:text-white">
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="rounded-lg p-2 bg-slate-300 hover:bg-blue-300 hover:text-white">
                    <FontAwesomeIcon icon={faWordpress} />
                </div>
            </div>
        );
    };
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-secondary py-5 px-5">
                <div className="container">
                    <div className="card bg-white flex-card shadow-xl px-10 py-5 mb-5">
                        <div className="overflow-x-auto max-h-screen">
                            <table className="table table-xs table-pin-rows ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nama</th>
                                        <th>Nomor Identitas</th>
                                        <th>Judul</th>
                                        <th>Fakultas</th>
                                        <th>Waktu</th>
                                        <th className="text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={classnames("tr-hover")}>
                                        <th>1</th>
                                        <td>Evan</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Littel, Schaden and Vandervort</td>
                                        <td>Canada</td>
                                        <td>12/16/2020</td>
                                        <td>{getSocialMediaBar()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
