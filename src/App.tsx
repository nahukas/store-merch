import React from 'react';
import Shelf from './components/Shelf/Shelf';

const App: React.FC = () => (
  <>
    <main>
      <>
        <p>Filter</p>
        <Shelf filters={[]} />
      </>
    </main>
    <p>Cart</p>
  </>
);

export default App;
