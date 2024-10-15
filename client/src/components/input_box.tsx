"use client";
import React, { useState } from "react";
import { InputBoxProps } from "../types";

const InputBox = ({ placeholder, onChange, type = "text" }: InputBoxProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="p-2 w-full">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
        className="text-black bg-white w-full h-12 shadow-md hover:shadow-2xl duration-500"
      />
    </div>
  );
};

export default InputBox;
