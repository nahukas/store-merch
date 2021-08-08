import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  handleCheckboxChange: (label: string) => void;
  classes: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  handleCheckboxChange,
  classes,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleCheckboxChange(label);
  };

  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
