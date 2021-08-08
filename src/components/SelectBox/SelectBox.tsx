import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectboxProps {
  options: Option[];
  classes?: string;
  handleOnChange: (e: any) => void;
}

const SelectBox: React.FC<SelectboxProps> = ({
  options,
  classes,
  handleOnChange,
}) => {
  const createOptions = (options: Option[]) =>
    options.map((o) => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

  return (
    <select
      onChange={(e) => handleOnChange(e.target.value)}
      className={classes}
    >
      {createOptions(options)}
    </select>
  );
};

export default SelectBox;
