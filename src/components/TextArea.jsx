import React from "react";

const TextArea = ({ value, onChange }) => {
    return <textarea className="border-collapse border-gray-300 p-2" value={value} onChange={onChange} />;
};

export default TextArea;
