import React, { useContext } from 'react';
import './App.css';
import SepertigaMalam from './components/SepertigaMalam';
import TableJadwalSholat from './components/TableJadwalSholat'
import Search from './components/Search';
import { JadwalContext } from './utils/JadwalContext';

function App() {
  const { error, isPending, jadwal } = useContext(JadwalContext);

  return (
    <div className="container">
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      { jadwal &&
        <>
          <div style={{ marginBottom: '5px' }}>
            <Search />
            <TableJadwalSholat jadwal={jadwal.data} />
          </div>
          <SepertigaMalam jadwal={jadwal.data} />
        </>
      }
    </div>

  );
}

export default App;
