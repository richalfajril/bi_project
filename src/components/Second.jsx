/* eslint-disable no-unused-vars */
import ketikImage from "../assets/images/ketik.jpg";
import savingsImage from "../assets/images/savings.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Second = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  const fectData = async () => {
    //fetching
    const response = await axios.get(
      "https://pink-impossible-panther.cyclic.app/users"
    );
    //get response data
    const data = await response.data.data;

    //assign response data to state "posts"
    setUsers(data);
  };

  return (
    <>
      {users.map((user, index) => (
        <h2 key={index}> {user.name}</h2>
      ))}
      <div className="container">
        <div className="flex flex-col items-center justify-center pt-36 sm:flex-row">
          <div className="card w-100 bg-base-100 shadow-xl px-4">
            <figure className="px-10 pt-10">
              <img
                src={ketikImage}
                alt="Shoes"
                className="rounded-xl"
                style={{ height: "300px", width: "500px", objectFit: "cover" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Menabung Artikel</h2>
              <p>Ayo tulis dan kirimkan artikelmu melalui form ini!</p>
              <div className="card-actions">
                <button className="btn btn-accent mt-5">Tulis Sekarang!</button>
              </div>
            </div>
          </div>
          <div className="card w-100 bg-base-100 shadow-xl px-4">
            <figure className="px-10 pt-10">
              <img
                src={savingsImage}
                alt="Shoes"
                className="rounded-xl"
                style={{ height: "300px", width: "500px", objectFit: "cover" }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tabungan Artikel</h2>
              <p>
                Kamu juga dapat melihat hasil tabungan artikel kamu di sini!
              </p>
              <div className="card-actions">
                <button className="btn btn-accent mt-5">Lihat Tabungan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Keluar
        </button>
      </div>
    </>
  );
};

export default Second;
