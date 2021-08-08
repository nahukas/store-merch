import React from 'react';
import SelectBox from '../../SelectBox/SelectBox';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestPrice', label: 'Lowest to highest' },
  { value: 'highestPrice', label: 'Highest to lowest' },
];

const updateSort = (value: string) => {
  console.log(value);
};

const Sort: React.FC = () => (
  <div className="sort">
    Order by
    <SelectBox options={sortBy} handleOnChange={(value) => updateSort(value)} />
  </div>
);

export default Sort;
