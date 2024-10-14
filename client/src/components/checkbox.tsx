import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({
  label,
  checked = false,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="p-2">
      <input type="checkbox" checked={isChecked} onChange={handleChange}/>
      <span className="ps-1">{label}</span>
    </label>
  );
};

export default Checkbox;
