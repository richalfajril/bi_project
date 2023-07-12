import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextArea from "./components/textArea";
import InputForm from "./components/InputForm";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleTextAreaChange = (event) => {
        setText(event.target.value);
    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login sekarang!</h1>
                        <p className="py-6">Ini adalah protoype uji coba project Bank Informasi</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <button className="btn btn-secondary">Masuk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
