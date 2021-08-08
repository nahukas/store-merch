import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

import './filter.styles.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

interface FilterProps {
  updateFilters: (selectedCheckboxes: unknown[]) => void;
}

const Filter: React.FC<FilterProps> = ({ updateFilters }) => {
  const selectedCheckboxes = new Set();

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    updateFilters(Array.from(selectedCheckboxes));
  };

  const createCheckbox = (label: string) => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {createCheckboxes()}
    </div>
  );
};

export default Filter;
