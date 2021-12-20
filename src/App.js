import React from 'react';
import './App.css';
import SepertigaMalam from './SepertigaMalam';
import TableJadwalSholat from './TableJadwalSholat'
import JadwalContextProvider from './JadwalContext';

function App() {

  return (
    <div className="container">
      <JadwalContextProvider>
        <div style={{ marginBottom: '5px' }}>
          <TableJadwalSholat />
        </div>
        <SepertigaMalam />
      </JadwalContextProvider>
    </div>

  );
}

export default App;
