"use client"
import React, { useState } from "react";

interface InputBoxProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const InputBox = ({ placeholder, onChange }: InputBoxProps) => {
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
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
        className="text-black bg-[#EEEEEE] w-full h-12"
      />
    </div>
  );
};

export default InputBox;
