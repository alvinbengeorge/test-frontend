"use client"
import React, { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown = ({ label, options, onSelect }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };  

  return (
    <div className="p-2">
      <select value={selectedOption} onChange={handleChange} className="text-black bg-[#EEEEEE] w-64 h-12">
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
