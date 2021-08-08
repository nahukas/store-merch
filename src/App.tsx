import React from 'react';
import Filter from './components/Filter/Filter';
import Shelf from './components/Shelf/Shelf';

const App: React.FC = () => {
  const updateFilters = (selectedCheckboxes: unknown[]) => {
    return Array.from(selectedCheckboxes);
  };

  return (
    <>
      <main>
        <Filter updateFilters={updateFilters} />
        <Shelf filters={[]} />
      </main>
      <p>Cart</p>
    </>
  );
};

export default App;
