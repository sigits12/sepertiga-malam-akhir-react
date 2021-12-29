import React, { useContext } from 'react';
import './App.css';
import SepertigaMalam from './SepertigaMalam';
import TableJadwalSholat from './TableJadwalSholat'
import { JadwalContext } from './JadwalContext';

function App() {
  const { error, isPending, jadwal } = useContext(JadwalContext);

  return (
    <div className="container">
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      { jadwal &&
        <>
          <div style={{ marginBottom: '5px' }}>
            <TableJadwalSholat jadwal={jadwal} />
          </div>
          <SepertigaMalam jadwal={jadwal} />
        </>
      }
    </div>

  );
}

export default App;
