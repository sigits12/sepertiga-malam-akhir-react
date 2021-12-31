import React, { useContext } from 'react';
import './App.css';
import SepertigaMalam from './components/SepertigaMalam';
import TableJadwalSholat from './components/TableJadwalSholat'
import Search from './components/Search';
import NextSholat from './components/NextSholat';
import { JadwalContext } from './utils/JadwalContext';

function App() {
  const { error, isPending, jadwal } = useContext(JadwalContext);

  return (
    <div className="bg-gray-900">
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {jadwal &&
          <>
            <div className="flex flex-col justify-center items-center h-screen ">
              <div className="mx-auto max-w-3xl p-4 shadow-lg rounded bg-gray-50">
                <div className="text-center">
                  <div style={{ marginBottom: '5px' }}>
                    <Search />
                    <TableJadwalSholat jadwal={jadwal.data} />
                  </div>
                  <SepertigaMalam jadwal={jadwal.data} />
                  <NextSholat jadwal={jadwal.data} />
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>

  );
}

export default App;
