import React, { useState } from "react";
import TextArea from "./textArea";

const InputForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Lakukan sesuatu dengan data yang telah diisi, seperti mengirimkannya ke server
        console.log("Name:", name);
        console.log("Email:", email);

        // Reset nilai input setelah submit
        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-full p-2"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-full p-2"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="mb-4"></div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>
    );
};

export default InputForm;
